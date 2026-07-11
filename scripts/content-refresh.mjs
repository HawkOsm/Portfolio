// Monthly AI content refresh.
// Gathers recent public GitHub activity for the site owner, asks GitHub Models
// whether src/constants/index.js has meaningfully stale text, and if so writes
// a minimally-edited version of the file. The workflow turns that into a PR —
// this script never pushes anything itself.
//
// Exit contract: writes "changed=true|false" to $GITHUB_OUTPUT (or stdout locally).

import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const OWNER = 'HawkOsm';
const FILE = 'src/constants/index.js';
const TOKEN = process.env.GITHUB_TOKEN;
const MAX_CHANGED_LINES = 30;

if (!TOKEN) {
    console.error('GITHUB_TOKEN is required');
    process.exit(1);
}

const gh = async (path) => {
    const res = await fetch(`https://api.github.com${path}`, {
        headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub API ${path}: ${res.status}`);
    return res.json();
};

const setOutput = (changed) => {
    const line = `changed=${changed}\n`;
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, line);
    else process.stdout.write(line);
};

// ---- 1. gather recent public activity ----------------------------------
const since = new Date(Date.now() - 40 * 24 * 3600 * 1000);
const repos = await gh(`/users/${OWNER}/repos?per_page=100&sort=pushed`);
const activity = repos
    .filter((r) => new Date(r.pushed_at) > since)
    .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        pushed_at: r.pushed_at,
        created_at: r.created_at,
        archived: r.archived,
        is_new: new Date(r.created_at) > since,
    }));

const current = readFileSync(FILE, 'utf8');

// ---- 2. ask the model ----------------------------------------------------
const system = `You maintain the text content of a personal portfolio site. The file below is the ONLY source of site copy.

Decide whether recent GitHub activity makes any of the existing text factually stale (a project shipped, was renamed or archived, "in development" no longer true, a clearly notable new public project missing).

STRICT RULES:
- Default to NO CHANGES. Cosmetic rewording is never a reason to change.
- If changes are needed, edit the MINIMUM number of lines. Never restructure, never add or remove exported constants, never change code — text values only.
- Voice: relaxed and plain, light humor fine, no aphorisms, no motivational or "wise" phrasing, no hobby-to-engineering life lessons.
- The UAV work leads with the autonomous kamikaze mission; object detection is supporting detail.

OUTPUT FORMAT (exact):
- If nothing needs changing: reply with the single line NO_CHANGES
- Otherwise: reply with CHANGES on the first line, then the COMPLETE updated file content, nothing else.`;

const user = `Recent public GitHub activity for ${OWNER} (last 40 days):
${JSON.stringify(activity, null, 2)}

Current ${FILE}:
\`\`\`js
${current}
\`\`\``;

const res = await fetch('https://models.github.ai/inference/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
        model: 'openai/gpt-4o',
        temperature: 0.2,
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
    }),
});
if (!res.ok) {
    console.error(`GitHub Models: ${res.status} ${await res.text()}`);
    process.exit(1);
}
const reply = (await res.json()).choices[0].message.content.trim();

// ---- 3. validate & apply --------------------------------------------------
if (reply.startsWith('NO_CHANGES')) {
    console.log('Model: no changes needed.');
    setOutput(false);
    process.exit(0);
}
if (!reply.startsWith('CHANGES')) {
    console.error('Unexpected model output; refusing to act.');
    setOutput(false);
    process.exit(0);
}

let updated = reply.replace(/^CHANGES\s*/, '');
const fence = updated.match(/^```(?:js|javascript)?\n([\s\S]*?)\n```\s*$/);
if (fence) updated = fence[1] + '\n';
if (!updated.endsWith('\n')) updated += '\n';

// size guard: reject sweeping rewrites
const curLines = current.split('\n');
const updLines = updated.split('\n');
const diffLines =
    updLines.filter((l, i) => l !== curLines[i]).length +
    Math.max(0, curLines.length - updLines.length);
if (diffLines > MAX_CHANGED_LINES) {
    console.error(`Diff too large (${diffLines} lines > ${MAX_CHANGED_LINES}); refusing to act.`);
    setOutput(false);
    process.exit(0);
}

writeFileSync(FILE, updated);

// syntax guard: file must still parse
try {
    execSync(`node --check ${FILE}`, { stdio: 'pipe' });
} catch {
    console.error('Updated file fails syntax check; reverting.');
    execSync(`git checkout -- ${FILE}`);
    setOutput(false);
    process.exit(0);
}

console.log('Content updated.');
setOutput(true);
