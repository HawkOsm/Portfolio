export const hud = [
    { label: 'Status', value: 'Open · Jan 2027' },
    { label: 'Location', value: 'Izmir, TR / remote' },
    { label: 'Focus', value: 'Backend · MLOps' },
];

// Single source of truth for tech-name -> logo (slug of the file under public/assets/icons/<slug>.svg,
// plus its brand color). Any project `stack` or `logos` entry whose name matches a key here gets
// rendered with its logo everywhere via <TechBadge>; names with no entry just render as plain text.
// Colors are each brand's official mark per Simple Icons, except Express/Anthropic/SQLite, whose
// official hex is near-black or too dark to read on this site's dark background — lightened for legibility —
// and Rust, whose official mark is black: it uses the Rust orange GitHub shows for the language.
export const techIcons = {
    Python: { slug: 'python', color: '#3776AB' },
    OpenCV: { slug: 'opencv', color: '#5C3EE8' },
    'NVIDIA Jetson': { slug: 'nvidia', color: '#76B900' },
    Docker: { slug: 'docker', color: '#2496ED' },
    Linux: { slug: 'linux', color: '#FCC624' },
    Qt: { slug: 'qt', color: '#41CD52' },
    JavaScript: { slug: 'javascript', color: '#F7DF1E' },
    SQLite: { slug: 'sqlite', color: '#4A9FD9' },
    Android: { slug: 'android', color: '#34A853' },
    Bash: { slug: 'gnubash', color: '#4EAA25' },
    Git: { slug: 'git', color: '#F05032' },
    'Node.js': { slug: 'nodedotjs', color: '#5FA04E' },
    Express: { slug: 'express', color: '#FFFFFF' },
    'PostgreSQL (Supabase)': { slug: 'postgresql', color: '#4169E1' },
    React: { slug: 'react', color: '#61DAFB' },
    'Anthropic Claude API': { slug: 'anthropic', color: '#D97757' },
    Rust: { slug: 'rust', color: '#DEA584' },
};

export const projects = [
    {
        id: 'kamikaze',
        num: '01',
        title: 'Autonomous Kamikaze UAV',
        tag: 'Autonomous Systems',
        role: 'Autonomous systems & software developer',
        link: 'https://github.com/HawkOsm/Savasan-IHA-Kamikaze',
        short: 'Vision-guided terminal dive on ArduPilot + Jetson.',
        body: 'Flight software, built by a 15-person team, for a competition drone that autonomously dives on a ground target. A dual-model YOLO11 pipeline on the onboard Jetson locks onto the target, then a QR reader confirms the hit mid-dive. Finished 17th of 42 finalists — out of 1,032 applicant teams — at TEKNOFEST 2026 Savaşan İHA.',
        problem: 'In the Savaşan İHA competition the aircraft has to find, lock and dive onto a fixed 2 × 2 m QR target on the ground without a pilot in the loop — under a shaky downlink, with a few seconds of usable approach time and no second attempt.',
        built: [
            'Mission state machine over ArduPilot and MAVLink: takeoff, search pattern, target lock, terminal dive, abort-and-climb.',
            'Two-stage YOLO11 detection on the onboard Jetson — a wide model to acquire, a tight model to track through the dive. I wrote the first version; a teammate later improved it.',
            'QR confirmation step that verifies the correct target mid-dive before the run is scored.',
            'Low-latency video over GStreamer on Raspberry Pi, with a Dockerised ground station for telemetry and replay.',
            'Tested the mission logic in Gazebo + ArduPilot SITL (Mini Talon model, a world with the QR target) before real flights, then documented where simulation diverges from the real H-tail plane — 902 of 1,585 parameters differ.',
            'Met the competition\'s hit-check rule on a real dive: the whole QR inside the frame and decoded during the dive.',
            'Measured 19 real QR dives on 2026-07-27 (ArduPlane 4.6.3): median 8.5 s, 90 m of height lost, 10.9 m/s mean sink, steepest pitch −42.6°. Tuning TECS_SPDWEIGHT to 0 roughly doubled sink rate versus 1.',
        ],
        video: { src: '/assets/projects/kamikaze-dive.mp4', poster: '/assets/projects/kamikaze-dive-poster.webp', label: 'Ground-station screen recording of a real autonomous QR dive.' },
        todo: [],
        stack: ['ArduPilot', 'MAVLink', 'Gazebo · SITL', 'NVIDIA Jetson', 'YOLO11', 'Python', 'OpenCV', 'GStreamer', 'Raspberry Pi', 'Docker', 'Linux'],
        logos: ['Python', 'OpenCV', 'NVIDIA Jetson', 'Docker', 'Linux'],
    },
    {
        id: 'skysat',
        num: '02',
        title: 'SkySat — MLOps for a small LLM',
        tag: 'MLOps · Team Project',
        role: 'Built most of it, in a team of two',
        link: 'https://github.com/deensza/skysat-mlops',
        short: 'A model that retrains itself when its answers start to drift.',
        body: 'Term project for SE4458 at Yaşar University, built with one teammate. SkySat is a complaint box for airline reviews: a small language model (Qwen2.5-1.5B, LoRA-tuned) reads a review and answers with a score out of 10, whether the reviewer would recommend the airline, and the main complaint. The model is the small part; the project is everything around it, from the moment a review arrives to the moment a better model replaces the one that is serving.',
        problem: 'A model that scores well on the day it ships gets worse as the reviews it sees change, and nobody notices until someone checks. We wanted the system to notice by itself, retrain on the new reviews, and replace the serving model only if the new one is measurably better.',
        built: [
            'Reviews arrive over an API and wait in a PostgreSQL queue; each live review is also scored by the serving model and logged with its true labels.',
            'A drift check compares the serving model\'s live error with fixed limits on at least 100 labelled requests, and opens an alarm when it is past them.',
            'The alarm starts a GitHub Actions workflow that rents a RunPod GPU, LoRA-trains on the queued reviews, and deletes the GPU afterwards. One run on 18 Nov 2026 took 8 min 43 s on an RTX 3080 Ti, about 3 cents.',
            'A quality gate registers a new version in MLflow only if it passes fixed limits and beats the current champion on the same held-back reviews; the server then loads it by itself.',
            'On "harsh" reviews the first model\'s score error (MAE) rose from 0.95 to 1.15 and the drift check fired; the retrained version scored 0.55 on new harsh reviews.',
            'FastAPI behind Nginx for serving, Grafana for monitoring, Docker for packaging, a k6 load test, and 166 automated tests that run in CI.',
        ],
        todo: [],
        stack: ['Python', 'Qwen2.5 · LoRA', 'MLflow', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'Grafana', 'RunPod', 'k6', 'GitHub Actions'],
        logos: ['Python', 'Docker'],
    },
    {
        id: 'senior-app',
        num: '03',
        title: 'Senior Project Management Platform',
        tag: 'Web App · Team Project',
        role: 'Captain of one of the two scrum teams',
        link: 'https://github.com/SE3318-Spring-2025-2026/senior-app-1',
        short: 'Coordinating a capstone team on the tool the whole course runs on.',
        body: 'Built for SE3318 at Yaşar University with a 13-person team split into two scrum teams; I captained one of them, seven people including me. I broke every feature into Backend/Frontend/QA sub-tasks, opened 138 of the repo\'s 229 issues and merged 27 of my 28 pull requests. After patching model mismatches and missing modules one by one in the first weeks, I realized the auth and role architecture needed a ground-up rewrite — so I redesigned and reimplemented it, then wrote most of the project\'s data-flow diagrams and API docs. I also built the AI orchestration layer: a provider-agnostic service that defaults to a local Ollama model at zero cloud cost and switches to Anthropic\'s Claude API via a single env var.',
        problem: 'University capstone courses track dozens of teams across JIRA, GitHub, and document submissions by spreadsheet. We needed a single platform where coordinators set grading rubrics once, advisors see live sprint progress, and AI flags whether a pull request was actually reviewed or just rubber-stamped.',
        built: [
            'Broke every feature into Backend/Frontend/QA sub-tasks across 138 issues and 28 pull requests as captain of a seven-person scrum team.',
            'Rebuilt the authentication and role-based UI architecture from scratch after the initial patchwork proved unsustainable.',
            'Built a provider-agnostic AI service — local Ollama by default, Anthropic Claude via an env-var toggle — for AI-assisted code-review verification.',
            'Wrote the project\'s data-flow diagrams and most of its API documentation.',
        ],
        todo: [],
        stack: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'Sequelize', 'React', 'GitHub REST API', 'JIRA API', 'Ollama', 'Anthropic Claude API'],
        logos: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'React', 'Anthropic Claude API'],
    },
    {
        id: 'blackbox',
        num: '04',
        title: 'Blackbox — an error logger for Linux',
        tag: 'Systems · Linux',
        role: 'Solo — design and build',
        link: 'https://github.com/HawkOsm/BlackBox',
        short: 'An always-on error logger that keeps the evidence of what broke on my machine, and when.',
        body: 'A small Rust service that runs all the time on a Linux desktop and records what I need after something goes wrong: crashes, error logs, failed logins, package upgrades, freezes, system load, power draw and temperatures. A native GTK app shows any of those moments together with everything else that was happening at the time. It works on any Linux distribution that uses systemd, which covers nearly all of them, and costs 0.14% of one CPU core and about 6 MB of memory, so I never notice it running.',
        sections: [
            {
                title: 'The problem',
                text: 'When a desktop freezes or a program crashes, the evidence is spread across the systemd journal, the audit log, coredumps and the package manager\'s log. By the time I go looking, some of it has rotated away, and nothing lines the rest up in time. "What happened at 14:02, and what else was going on?" took an hour of grep. I wanted it to take one click.',
            },
            {
                title: 'How it works',
                items: [
                    ['Six sources, one writer.', 'Process exits from the kernel, system load, power and temperatures from /proc, sysfs and nvidia-smi, journald, auditd, the package manager\'s history (pacman, apt, dnf or zypper) and the previous boot\'s last journal entry. Each runs on its own thread under a supervisor that restarts it if it crashes, and hands what it finds to one writer thread that commits everything queued in a single transaction, so a burst costs one disk sync instead of one per row.'],
                    ['A timeline index.', 'Every notable event gets a row in one time-indexed table that points at its full record, so "everything within ±2 minutes" across all six sources is a range scan on one index, not a join over six tables.'],
                    ['A read-only viewer.', 'A GTK4/libadwaita app that runs only while its window is open. It shows any event with a CPU/memory/GPU chart around it, the crash\'s stack trace, the package upgrades from the week before, and every other event in that window.'],
                ],
            },
            {
                title: 'Engineering decisions',
                items: [
                    ['Filter in the kernel, not in Rust.', 'Recording every process exit would mean about 100 events a second of noise. A classic BPF program on the netlink socket drops forks, thread exits and clean exits before the kernel even queues them. A unit test runs the filter through a small BPF interpreter for all 65,536 possible exit statuses and checks it agrees with the Rust rule. Together with 100 ms batching, wakeups fell from 98–136 a second to 8.5.'],
                    ['Durable over fast.', 'SQLite runs with synchronous=FULL. With the default, the last ~30 seconds sit in the page cache and die with a frozen machine, and those are exactly the seconds a flight recorder exists for. At one write every ~10 seconds, the extra fsync costs nothing noticeable.'],
                    ['Record a freeze after it happens.', 'Nothing can write while the machine is frozen. So at every boot Blackbox reads the previous boot\'s last journal entry: a clean shutdown always ends with "Journal stopped", and anything else is stored as an unclean end at the moment the log stopped. 2 of the 90 boots it has recorded on my machine ended that way.'],
                    ['A size cap that never blocks recording.', 'The database is a 50 GB ring buffer. Deleting the oldest data in one statement stalled writers for 1.2 seconds, so the trim deletes in chunks of 1,000 rows and releases the lock in between: the worst write during a trim fell to 7.4 ms. The test for it also caught a real bug: one row stamped in the far future made the trim delete every real row.'],
                    ['Names for processes that are already gone.', 'An exit event carries no name, and the process is usually gone from /proc when it arrives. The collector keeps a pid-to-name table fed by exec events, and names crashes afterwards from systemd-coredump, which also gives the executable path and stack trace.'],
                    ['Not tied to one distribution.', 'The package histories of pacman, apt, dnf and zypper each sit behind one small trait, and everything that differs between distributions lives in one file. CI builds and tests the recorder inside Arch, Debian, Ubuntu, Fedora, Rocky Linux and openSUSE containers, installs a package in each and checks that the recorder finds it in that distribution\'s real history.'],
                ],
            },
            {
                title: 'Measured',
                items: [
                    ['0.14%', 'of one CPU core for the whole service, including its journalctl and tail helpers.'],
                    ['~6 MB', 'of private memory, and under 10 wakeups a second.'],
                    ['~1 MB', 'of database growth a day at the current event rate.'],
                    ['82 tests', 'covering the parsers for every log format, the exit rule, the kernel filter, crash naming, boot endings, audit-log resume, the write path and the ring-buffer trim, plus end-to-end tests of the real binary and a stress test for trimming under concurrent writes.'],
                ],
            },
        ],
        image: { src: '/assets/projects/blackbox-viewer.webp', alt: 'The Blackbox viewer: recorded problems on the left, each with a 24-hour sparkline; on the right the day at a glance, with events, usage, temperature and power on one time axis, and the running processes with pause, end task and force kill.' },
        todo: [],
        stack: ['Rust', 'SQLite', 'Linux', 'Python', 'GTK4 · libadwaita', 'systemd', 'netlink · BPF', 'auditd', 'GitHub Actions'],
        logos: ['Rust', 'SQLite', 'Linux', 'Python'],
    },
    {
        id: 'rsvp-reader',
        num: '05',
        title: 'RSVP Reader',
        tag: 'Web, Desktop & Android App',
        role: 'Solo — design and build',
        link: 'https://github.com/HawkOsm/rsvp-reader',
        short: 'Flash-paced speed reading, one word at a time.',
        body: 'A speed-reading app that flashes text one word at a time at a set pace, so you can read faster without moving your eyes across the page. It began as three separate apps — PyQt6 on desktop, a JavaScript web app and a Kotlin Android app — and v0.2 rewrote them as one TypeScript codebase that ships to all of them.',
        problem: 'Most reading time is spent moving your eyes and re-reading lines, not understanding. Rapid Serial Visual Presentation removes the eye movement entirely — but the existing tools are browser toys that lose your place and your library.',
        built: [
            'An RSVP engine at 50–1,500 WPM that keeps long words and words before punctuation on screen longer, and lines every word up on its focus letter using real font measurements, so the eye never moves.',
            'Opens TXT, Markdown, PDF and EPUB, parsed in a background worker so the reader never freezes on a large book.',
            'A book mode that shows the real PDF page with the current word highlighted and selectable text, or reflows text and EPUB files into pages; click any word to continue from there.',
            'An IndexedDB library that remembers your place in every book and offers to resume it — fully local, with no account, and your books never leave the device.',
            'One React codebase shipped as an installable offline web app, desktop installers via Tauri and an Android app via Capacitor. Downloads shrank from 55.5 MB to 2.7 MB on Windows, 49.8 MB to 7.3 MB on macOS and 17.1 MB to 5 MB on Android.',
            'v0.3 adds two experimental, off-by-default features: syncing your reading position, shelves and notes through a hidden folder of your own Google Drive, and notes on a passage.',
            'Pushing a version tag builds one download each for Linux, Windows, macOS and Android in GitHub Actions; 184 tests run on every push.',
        ],
        todo: [],
        stack: ['TypeScript', 'React', 'Tauri', 'Rust', 'Capacitor', 'Android', 'IndexedDB', 'MuPDF', 'Vite'],
        logos: ['React', 'Rust', 'Android'],
    },
    {
        id: 'clevo-linux-fixes',
        num: '06',
        title: 'Clevo Linux Fixes',
        tag: 'Open Source',
        role: 'Author and maintainer',
        link: 'https://github.com/HawkOsm/clevo-linux-fixes',
        short: 'Field guides for Clevo/TONGFANG laptops on Linux.',
        body: 'Unofficial field guides for running Linux on Clevo/TONGFANG-based notebooks — Monster, TUXEDO and XMG are all built on the same shells. Every fix was hit, diagnosed and verified on real hardware: random hard freezes, Bluetooth firmware crashes, NVIDIA after a kernel upgrade, a dead keyboard backlight and touchpad, thermal throttling. Started as Monster Notebook Linux Fixes and renamed once it outgrew one brand.',
        problem: 'Monster notebooks ship rebadged Clevo hardware that Linux handles poorly out of the box: the keyboard backlight and touchpad stay dead until a driver patch, the machine hard-freezes at random with no logs, Bluetooth firmware crashes, the discrete GPU never idles. The fixes are scattered across dead forum threads.',
        built: [
            'Step-by-step how-to guides per symptom, written from the actual diagnosis rather than copy-pasted advice.',
            'Explanations of why things break — a DRAM-less NVMe that freezes the machine through PCIe ASPM, and the tuxedo-drivers DMI check that rejects Monster hardware.',
            'Reference tables — a Windows-to-Linux driver map, hardware tables, EC register maps and tccd profile definitions.',
            'Verified on a Monster TULPAR T6 V2.1 AI Creator (Ubuntu 26.04, and Arch with Hyprland) and an ABRA A5 V20.2 (Ubuntu 22.04); the fixes carry over to TUXEDO, XMG/Schenker and System76 machines on the same shells.',
        ],
        todo: [],
        stack: ['Linux', 'Bash', 'Git'],
        logos: ['Linux', 'Bash', 'Git'],
    },
    {
        id: 'trend-detective',
        num: '07',
        title: 'Trend Detective',
        tag: 'Hackathon · Earth Science',
        role: 'Solo — design, data pipeline and verification',
        link: 'https://github.com/HawkOsm/NASA-Earth-System-Trend-Detective',
        short: 'A 3D globe of how the Earth changed, 1981–2025 — and how far to trust each trend.',
        body: 'My entry for the NASA Space Apps Challenge 2026, challenge "Be An Earth System Trend Detective", built over the hackathon weekend. A 3D globe is coloured by how fast one of ten NASA POWER / MERRA-2 variables — air temperature, rainfall, soil moisture, snow cover, sea ice, ozone and more — changed between 1981 and 2025. Click any place, country or sea and a panel shows its yearly series, the trend, a p-value, a 95% confidence range and a one-sentence verdict, together with a grade saying how far that trend can be trusted.',
        problem: 'A trend on a map can be statistically significant and still be wrong: a jump when a satellite instrument changed, one bad year, or a reanalysis model drifting away from what was actually measured. Most trend viewers show the number and stop there. I wanted every trend to come with the evidence for and against believing it.',
        built: [
            'An offline Python pipeline that computes a Theil–Sen slope, Sen\'s confidence interval and a Mann–Kendall test (with a lag-1 autocorrelation correction) for each of 207,936 grid cells, with Benjamini–Hochberg false-discovery control across the map.',
            'The same statistics written again in TypeScript, so the browser recomputes the map for any chosen period in Web Workers; both versions are tested against shared fixtures and agree to 1e-12.',
            'A grade on every trend — Robust, Use with caution or Doubtful — from fixed checks for a jump, one unusual year, a reversal and sensitivity to the end years, calibrated on 2,000 synthetic series per scenario.',
            'An independent-record check against NASA GISTEMP and GHCN-CAMS for temperature and four gauge and satellite records for rainfall. It confirms 89.9% of the significant temperature trends by area, but only 20.1% of the rainfall ones — so the site says so.',
            'A satellite check against MODIS, OMI, AIRS, GPM and the GLDAS model over the years they share with MERRA-2.',
            'Country, sea and ocean views that lift an area out of the globe with its own grid cells, provinces and cities, a guided first-visit tour, and a "Detective" that ranks what is changing at a typed place — Gemini only reads the question; every number comes from the precomputed trends.',
        ],
        image: { src: '/assets/projects/trend-detective-globe.webp', alt: 'The Trend Detective globe coloured by the trend in air temperature over Europe and Africa, 1981–2025, with the data, period, scale, click and layers menu on the left.' },
        todo: [],
        stack: ['Python', 'NumPy · SciPy · xarray', 'TypeScript', 'React', 'react-globe.gl · three.js', 'uPlot', 'Web Workers', 'Vite', 'Gemini API', 'GitHub Actions'],
        logos: ['Python', 'React'],
    },
];

export const education = {
    period: 'SEP 2024 — CURRENT',
    org: 'Yaşar University, Izmir',
    role: 'B.Sc. Software Engineering — GPA 3.45 / 4.00',
    notes: 'Currently a 3rd-year undergraduate — expected graduation June 2028.',
};

export const certificates = [
    { id: 'nasa-space-apps-2026', title: 'Galactic Problem Solver — NASA Space Apps Challenge 2026', org: 'NASA Space Apps Challenge', date: 'NOV 2026', image: '/assets/certificates/nasa-space-apps-2026.webp' },
    { id: 'gdg-core-team', title: 'Core Team Member — GDG on Campus Yaşar University', org: 'Google Developer Group on Campus', date: 'OCT 2026', image: '/assets/certificates/gdg-core-team.webp' },
    { id: 'teknofest-2026-finalist', title: 'TEKNOFEST 2026 Savaşan İHA Competition — Finalist', org: 'TEKNOFEST · Ministry of Industry and Technology', date: '2026', image: '/assets/certificates/teknofest-2026-finalist.webp', verifyUrl: 'https://drdogrulama.sanayi.gov.tr/tr/verify/22746121644852/' },
    { id: 'teknofest-2026', title: 'TEKNOFEST 2026 Savaşan İHA Competition — Participation', org: 'T3 Foundation', date: 'SEP — OCT 2026', image: '/assets/certificates/Savasan IHA.jpeg' },
    { id: 'yasar-efes', title: 'EFES-2026 Defense Project Contest', org: 'Yaşar University — Rectorate letter', date: 'JUN 2026', image: '/assets/certificates/yasar-university-efes.jpg' },
    { id: 'ai4purpose', title: 'AI4Purpose Hackathon', org: 'Interreg NEXT MED · İzmir Katip Çelebi University', date: 'JAN — FEB 2026', image: '/assets/certificates/ai4purpose-hackathon.png' },
    { id: 'thm-ethical-hacking', title: 'Ethical Hacking Foundations', org: 'TryHackMe', date: 'JUL 2025', image: '/assets/certificates/thm-ethical-hacking.png' },
    { id: 'matlab-onramp', title: 'MATLAB Onramp', org: 'MathWorks', date: '2025', image: '/assets/certificates/matlab-onramp.png' },
    { id: 'matlab-vectors', title: 'Calculations with Vectors and Matrices', org: 'MathWorks', date: '2025', image: '/assets/certificates/matlab-vectors.png' },
];

export const experience = [
    {
        id: 1,
        period: 'DEC 2025 — AUG 2026',
        org: 'Yaşar-Anafarta UAV Team',
        role: 'Autonomous Systems & Software Developer',
        notes: [
            'Autonomous kamikaze mission logic — takeoff, navigation, and vision-guided terminal dives onto ground targets — over ArduPilot and MAVLink.',
            'Object-detection pipelines supporting target acquisition in high-altitude aerial imagery — YOLO v8/v11, SAHI, pinhole camera models.',
            'Low-latency video and hardware acceleration on Raspberry Pi with GStreamer; Docker + Portainer for the ground station.',
            'Gazebo and ArduPilot SITL simulation of the mission before real flights — and a written account of where the simulated V-tail plane differs from the real H-tail one.',
        ],
    },
    {
        id: 2,
        period: 'JAN 2025 — OCT 2025',
        org: 'CLB Automation',
        role: 'Software Developer — Intern / Prototype',
        notes: [
            'Built a computer-vision prototype (OpenCV, YOLO) that flags defects in a press machine\'s camera footage and alerts the operator, trained on footage supplied by the company.',
        ],
    },
];

export const instruments = [
    {
        group: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript / React', 'Rust', 'C++', 'Bash', 'C', 'Java', 'SQL'],
    },
    {
        group: 'AI Stack',
        items: ['OpenCV', 'YOLO', 'NumPy', 'pandas', 'LoRA fine-tuning', 'MLflow'],
    },
    {
        group: 'Systems & Ops',
        items: ['Linux', 'Docker · Portainer', 'Raspberry Pi','Nvidia Jetson','Gazebo · Simulation', 'GStreamer', 'Git'],
    },
];

export const socials = [
    { name: 'GitHub', href: 'https://github.com/HawkOsm' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/osman-sahin-guler/' },
    { name: 'Email', href: 'mailto:osmansahinguler@gmail.com' },
];

export const CV_PATH = '/assets/Osman_Sahin_Guler_CV.pdf';
