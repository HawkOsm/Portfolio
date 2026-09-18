export const navLinks = [
    { id: 1, name: 'Education', href: '#education' },
    { id: 2, name: 'Projects', href: '#work' },
    { id: 3, name: 'Experience', href: '#log' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Contact', href: '#contact' },
];

export const projects = [
    {
        id: 'kamikaze',
        code: '01',
        title: 'Autonomous kamikaze dive system',
        body: 'Mission software for a fixed-wing competition UAV (Teknofest Savaşan İHA, Anafarta team). The aircraft transits to a server-issued GPS target at 80 m altitude, pitches into an autonomous 45° dive at 80 m horizontal stand-off, and scans the ground QR marker mid-dive — dual decoders with adaptive preprocessing, readable from 40 m out. If nothing reads by 30 m it firewalls the throttle, goes around, and re-attacks from a new bearing. Dive limits come from the wing’s tested G-force envelope; every change flies in Gazebo/SITL before it flies for real.',
        facts: ['45° dive · go-around at 30 m', 'ArduPilot · MAVLink · PID guidance', '50+ hrs SITL · flight-tested'],
        tag: 'UAV team project',
        link: null,
    },
    {
        id: 'clevo-linux',
        code: '02',
        title: 'Monster Notebook Linux fixes',
        body: 'Public field guides for Clevo-based Monster laptops on Linux: patching tuxedo-drivers DKMS modules that reject the vendor’s DMI strings, untangling epoch-pinned NVIDIA packages after kernel upgrades, re-enabling hardware-locked touchpads. Written because I hit every one of these problems myself.',
        facts: ['DKMS · systemd · apt pinning', 'Ubuntu 24.04 · kernel 6.17+'],
        tag: 'github.com/HawkOsm',
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
