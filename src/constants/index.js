export const hud = [
    { label: 'Status', value: 'Open · Jan 2027' },
    { label: 'Location', value: 'Izmir, TR / remote' },
    { label: 'Focus', value: 'AI Technologies · MLOps' },
];

// Single source of truth for tech-name -> logo (slug of the file under public/assets/icons/<slug>.svg,
// plus its brand color). Any project `stack` or `logos` entry whose name matches a key here gets
// rendered with its logo everywhere via <TechBadge>; names with no entry just render as plain text.
// Colors are each brand's official mark per Simple Icons, except Express/Anthropic/SQLite, whose
// official hex is near-black or too dark to read on this site's dark background — lightened for legibility.
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
};

export const projects = [
    {
        id: 'kamikaze',
        num: '01',
        year: '2024 — 2026',
        title: 'Autonomous Kamikaze UAV',
        tag: 'Autonomous Systems',
        role: 'Autonomous systems & software developer',
        link: 'https://github.com/HawkOsm/Savasan-IHA-Kamikaze',
        short: 'Vision-guided terminal dive on ArduPilot + Jetson.',
        body: 'Flight software for a competition drone that autonomously dives on a ground target. A dual-model YOLO11 pipeline on the onboard Jetson locks onto the target, then a QR reader confirms the hit mid-dive. Finished 17th of 42 finalists — out of 1,032 applicant teams — at TEKNOFEST 2026 Savaşan İHA.',
        problem: 'In the Savaşan İHA competition the aircraft has to find, lock and dive onto a moving ground target without a pilot in the loop — under a shaky downlink, with a few seconds of usable approach time and no second attempt.',
        built: [
            'Mission state machine over ArduPilot and MAVLink: takeoff, search pattern, target lock, terminal dive, abort-and-climb.',
            'Two-stage YOLO11 detection on the onboard Jetson — a wide model to acquire, a tight model to track through the dive.',
            'QR confirmation step that verifies the correct target mid-dive before the run is scored.',
            'Low-latency video over GStreamer on Raspberry Pi, with a Dockerised ground station for telemetry and replay.',
            '50+ hours of Gazebo/SITL scenario testing — wind, dropout, false positives — before any real flight.',
        ],
        todo: ['Detection accuracy / hit rate numbers', 'A short clip of an autonomous dive', 'Exact team size (yours to confirm — do not use anything you find credited in CREDITS.md, that file lists external reference sources, not teammates)'],
        stack: ['ArduPilot', 'MAVLink', 'Gazebo · SITL', 'NVIDIA Jetson', 'YOLO11', 'Python', 'OpenCV', 'GStreamer', 'Raspberry Pi', 'Docker', 'Linux'],
        logos: ['Python', 'OpenCV', 'NVIDIA Jetson', 'Docker', 'Linux'],
    },
    {
        id: 'rsvp-reader',
        num: '02',
        year: '2025',
        title: 'RSVP Reader',
        tag: 'Web & Desktop App',
        role: 'Solo — design and build',
        link: 'https://github.com/HawkOsm/rsvp-reader',
        short: 'Flash-paced speed reading, one word at a time.',
        body: 'A speed-reading app that flashes text one word at a time at a set pace, so you can read faster without moving your eyes across the page.',
        problem: 'Most reading time is spent moving your eyes and re-reading lines, not understanding. Rapid Serial Visual Presentation removes the eye movement entirely — but the existing tools are browser toys that lose your place and your library.',
        built: [
            'A Qt desktop reader that streams any pasted text or file word-by-word at an adjustable WPM.',
            'SQLite-backed library so books, position and reading history survive between sessions.',
            'Pacing controls — speed ramping, pause on punctuation, and a focus point to keep the eye still.',
            'An Android build sharing the same core so the same library follows you off the desk.',
            'Packaged as a standalone download for Linux, macOS, Windows, and Android, plus a PWA web version — CI builds every asset on every push.',
        ],
        todo: ['Your own before/after WPM'],
        stack: ['Python', 'Qt', 'JavaScript', 'SQLite', 'Android'],
        logos: ['Python', 'Qt', 'JavaScript', 'SQLite', 'Android'],
    },
    {
        id: 'clevo-linux',
        num: '03',
        year: '2025',
        title: 'Monster Notebook Linux Fixes',
        tag: 'Open Source',
        role: 'Author and maintainer',
        link: 'https://github.com/HawkOsm/monster-notebook-linux',
        short: 'Field guides for Clevo laptops on Linux.',
        body: 'Field guides for getting Clevo-based Monster laptops running properly on Linux — drivers, graphics, and touchpad fixes I needed myself. Sitting at 3 stars, 1 fork, and 13 unique clones in the last two weeks — small but real traffic for a two-model niche repo.',
        problem: 'Clevo-based Monster laptops ship with hardware that Linux does not handle out of the box: hybrid graphics that will not switch, a touchpad that reports nothing, fan curves that never spin up. The fixes are scattered across dead forum threads.',
        built: [
            'Step-by-step guides per model, written from the actual repair path rather than copy-pasted advice.',
            'Scripts for the fixes that are the same every time — graphics switching, touchpad quirks, power tuning.',
            'Kept current as kernels move, so the instructions still apply on a fresh install.',
            'Covers the Monster TULPAR T6 V2.1 AI Creator (Ubuntu 26.04, Arch) and ABRA A5 V20.2 (Ubuntu 22.04) — both Clevo/TONGFANG chassis, so the fixes carry over to TUXEDO, XMG/Schenker, and System76 machines on the same shells.',
        ],
        todo: [],
        stack: ['Linux', 'Bash', 'Git'],
        logos: ['Linux', 'Bash', 'Git'],
    },
    {
        id: 'senior-app',
        num: '04',
        year: '2025 — 2026',
        title: 'Senior Project Management Platform',
        tag: 'Web App · Team Project',
        role: 'Team Captain',
        link: 'https://github.com/SE3318-Spring-2025-2026/senior-app-1',
        short: 'Coordinating a capstone team on the tool the whole course runs on.',
        body: 'Built for SE3318 at Yaşar University with a ~10-person team. As team captain I broke every feature into Backend/Frontend/QA sub-tasks, opened 138 of the repo\'s issues and wrote 148 of its 631 commits across 28 pull requests. After patching model mismatches and missing modules one by one in the first weeks, I realized the auth and role architecture needed a ground-up rewrite — so I redesigned and reimplemented it, then wrote most of the project\'s data-flow diagrams and API docs. I also built the AI orchestration layer: a provider-agnostic service that defaults to a local Ollama model at zero cloud cost and switches to Anthropic\'s Claude API via a single env var.',
        problem: 'University capstone courses track dozens of teams across JIRA, GitHub, and document submissions by spreadsheet. We needed a single platform where coordinators set grading rubrics once, advisors see live sprint progress, and AI flags whether a pull request was actually reviewed or just rubber-stamped.',
        built: [
            'Broke every feature into Backend/Frontend/QA sub-tasks across 138 issues and 28 pull requests as team captain.',
            'Rebuilt the authentication and role-based UI architecture from scratch after the initial patchwork proved unsustainable.',
            'Built a provider-agnostic AI service — local Ollama by default, Anthropic Claude via an env-var toggle — for AI-assisted code-review verification.',
            'Wrote the project\'s data-flow diagrams and most of its API documentation.',
        ],
        todo: [],
        stack: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'Sequelize', 'React', 'GitHub REST API', 'JIRA API', 'Ollama', 'Anthropic Claude API'],
        logos: ['Node.js', 'Express', 'PostgreSQL (Supabase)', 'React', 'Anthropic Claude API'],
    },
];

export const education = {
    period: 'SEP 2024 — CURRENT',
    org: 'Yaşar University, Izmir',
    role: 'B.Sc. Software Engineering — GPA 3.45 / 4.00',
    notes: 'Currently a 3rd-year undergraduate — expected graduation June 2028.',
};

export const certificates = [
    { id: 'ai4purpose', title: 'AI4Purpose Hackathon', org: 'Interreg NEXT MED · İzmir Katip Çelebi University', date: 'JAN — FEB 2026', image: '/assets/certificates/ai4purpose-hackathon.png' },
    { id: 'yasar-efes', title: 'EFES-2026 Defense Project Contest', org: 'Yaşar University — Rectorate letter', date: 'JUN 2026', image: '/assets/certificates/yasar-university-efes.jpg' },
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
            '50+ hours of scenario testing in Gazebo and SITL before anything touches a real airframe.',
            'Low-latency video and hardware acceleration on Raspberry Pi with GStreamer; Docker + Portainer for the ground station.',
        ],
    },
    {
        id: 2,
        period: 'JAN 2025 — OCT 2025',
        org: 'CLB Automation',
        role: 'Software Developer — Intern / Prototype',
        notes: [
            'Computer-vision prototypes for industrial object detection with OpenCV and YOLOv5.',
            'Model training and hyperparameter optimization on custom-labeled datasets.',
            'Performance profiling on real-time data processing pipelines.',
        ],
    },
];

export const instruments = [
    {
        group: 'Languages',
        items: ['Python', 'C++', 'JavaScript / React', 'Rust', 'Bash', 'C', 'Java', 'SQL'],
    },
    {
        group: 'AI Stack',
        items: ['OpenCV', 'YOLO', 'NumPy', 'PyTorch', 'TensorFlow', 'pandas'],
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
