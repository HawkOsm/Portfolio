export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Yolo object detection',
        desc: 'This project is an object detection system designed to identify and localize objects in images and video streams. Using computer vision and deep learning techniques, it focuses on accurate, real-time detection for practical use cases.',
        subdesc:
            'Built using modern machine learning tools and frameworks, the system is optimized for performance and scalability, with a strong emphasis on learning through hands-on experimentation and real-world data.'
        ,
        texture: '/textures/project/project1.mp4',
        logo: '/assets/opencv.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'ReactLogo.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        laptopScale: isSmall ? 0.3 : isMobile ? 1 : 1.2,
        laptopPosition: isMobile ? [0, -8, 0] : [0, -8, 0],
        cubePosition: isSmall ? [4, -7.25, 0] : isMobile ? [5, -7.25, 0] : isTablet ? [5, -7.25, 0] : [9.5, -7.25, 0],
        cubeScale: isSmall ? 0 : isMobile ? 0 : 30,
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [9, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-9.3, 3, 0],
        ringScale: isSmall ? 0 : isMobile ? 0 : 0.05,
        githubPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-10, -13, -10],
        githubScale: isSmall ? 0 : isMobile ? 0 : 1.5,
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'CLB Automation',
        pos: 'Software Engineering Intern',
        duration: '2024 - 2025',
        title: "I am working as a Software Engineering Intern at CLB Automation, where I contribute to automation and software-based solutions. My responsibilities include developing, testing, and improving software components used in industrial automation systems.",
        icon: '/public/assets/figma.svg',
        animation: 'stretching',
    },
    {
        id: 2,
        name: 'Yaşar Savaşan İHA (TÜBİTAK Team)',
        pos: 'Software Team Member',
        duration: '2025 - Present',
        title: "I am a software team member in the Savaşan İHA TÜBİTAK team, where I work on autonomous systems and UAV-related software. My focus includes algorithm development, system integration, and improving performance for competition-ready unmanned aerial vehicles.",
        icon: '/public/assets/notion.svg',
        animation: 'surprised',
    },
];