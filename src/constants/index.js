export const navLinks = [
    { id: 1, name: 'Education', href: '#education' },
    { id: 2, name: 'Projects', href: '#work' },
    { id: 3, name: 'Experience', href: '#log' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Contact', href: '#contact' },
];

const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const simpleIcon = (name) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`;

export const projects = [
    {
        id: 'kamikaze',
        title: 'Autonomous Kamikaze UAV',
        body: 'Flight software for a competition drone that autonomously dives on a ground target. A dual-model YOLO11 pipeline on the onboard Jetson locks onto the target, then a QR reader confirms the hit mid-dive.',
        tag: 'Autonomous Systems',
        image: '/assets/projects/uav-cover.jpg',
        stack: [
            { name: 'ArduPilot', icon: null },
            { name: 'Gazebo', icon: devicon('gazebo') },
            { name: 'NVIDIA Jetson', icon: simpleIcon('nvidia'), invert: true },
            { name: 'YOLO11', icon: null },
            { name: 'Python', icon: devicon('python') },
            { name: 'OpenCV', icon: devicon('opencv') },
            { name: 'Raspberry Pi', icon: devicon('raspberrypi') },
            { name: 'Docker', icon: devicon('docker') },
            { name: 'Linux', icon: devicon('linux') },
        ],
        link: 'https://github.com/HawkOsm/Savasan-IHA-Kamikaze',
    },
    {
        id: 'rsvp-reader',
        title: 'RSVP Reader',
        body: 'A speed-reading app that flashes text one word at a time at a set pace, so you can read faster without moving your eyes across the page.',
        tag: 'Web App',
        image: 'https://raw.githubusercontent.com/HawkOsm/rsvp-reader/main/docs/reader.png',
        stack: [
            { name: 'Python', icon: devicon('python') },
            { name: 'Qt', icon: devicon('qt') },
            { name: 'JavaScript', icon: devicon('javascript') },
            { name: 'SQLite', icon: devicon('sqlite') },
            { name: 'Android', icon: devicon('android') },
        ],
        link: 'https://github.com/HawkOsm/rsvp-reader',
    },
    {
        id: 'clevo-linux',
        title: 'Monster Notebook Linux Fixes',
        body: 'Field guides for getting Clevo-based Monster laptops running properly on Linux — drivers, graphics, and touchpad fixes I needed myself.',
        tag: 'Open Source',
        image: '/assets/projects/linux-cover.jpg',
        stack: [
            { name: 'Linux', icon: devicon('linux') },
            { name: 'Bash', icon: devicon('bash') },
            { name: 'Git', icon: devicon('git') },
        ],
        link: 'https://github.com/HawkOsm/monster-notebook-linux',
    },
];

export const education = {
    period: 'SEP 2024 — JUN 2027',
    org: 'Yaşar University, Izmir',
    role: 'B.Sc. Software Engineering — GPA 3.45 / 4.00',
    notes: 'Currently a 3rd-year undergraduate.',
};

export const certificates = [
    { id: 'ai4purpose', title: 'AI4Purpose Hackathon', org: 'Interreg NEXT MED · İzmir Katip Çelebi University', date: 'JAN — FEB 2026', image: '/assets/certificates/ai4purpose-hackathon.png' },
    { id: 'yasar-efes', title: 'EFES-2026 Defense Project Contest', org: 'Yaşar University — Rectorate letter', date: 'JUN 2026', image: '/assets/certificates/yasar-university-efes.jpg' },
    { id: 'thm-ethical-hacking', title: 'Ethical Hacking Foundations', org: 'TryHackMe', date: 'JUL 2025', image: '/assets/certificates/thm-ethical-hacking.png' },
    { id: 'matlab-onramp', title: 'MATLAB Onramp', org: 'MathWorks', date: '2025', image: '/assets/certificates/matlab-onramp.png' },
    { id: 'matlab-vectors', title: 'Calculations with Vectors and Matrices', org: 'MathWorks', date: '2025', image: '/assets/certificates/matlab-vectors.png' },
];

export const missionLog = [
    {
        id: 1,
        period: 'SEP 2024 — NOW',
        org: 'Yaşar-Anafrata UAV Team',
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
        items: ['Python (primary)', 'C++', 'JavaScript / React', 'Dart', 'Bash'],
    },
    {
        group: 'Vision & AI',
        items: ['OpenCV', 'YOLO v5 – v11', 'SAHI', 'NumPy', 'dataset design & labeling'],
    },
    {
        group: 'Flight & robotics',
        items: ['ArduPilot', 'MAVLink', 'Gazebo', 'SITL', 'Mission Planner'],
    },
    {
        group: 'Systems & ops',
        items: ['Linux (daily driver)', 'Docker · Portainer', 'Raspberry Pi', 'GStreamer', 'Git'],
    },
];

export const offscreen = [
    {
        title: 'Sailing',
        detail:
            'Ten years as a licensed competitive sailor. Started as a kid and never really stopped — racing, crewing, and any excuse to be out on the water.',
    },
    {
        title: 'Martial arts',
        detail: 'Regular training. It clears my head after a day at the screen, and getting thrown around a bit is more fun than it sounds.',
    },
    {
        title: 'Japanese',
        detail: 'Learning 日本語 by pure exposure — real shows, real podcasts, no textbooks. Understanding grows one episode at a time.',
    },
];

export const socials = [
    { name: 'GitHub', href: 'https://github.com/HawkOsm' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/osman-sahin-guler/' },
    { name: 'Email', href: 'mailto:osmansahinguler@gmail.com' },
];

export const CV_PATH = '/assets/Osman_Sahin_Guler_CV.pdf';
