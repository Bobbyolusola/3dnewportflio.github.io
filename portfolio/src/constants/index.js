import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    smatched,
    triplea,
    Freelancer,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",

    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UX | UI Designer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Developer (React.js)",
        company_name: "Smatched",
        icon: smatched,
        iconBg: "#383E56",
        date: "Sept 2023 - Nov 2023",
        points: [
            "Developed visually appealing and user-friendly responsive website pages for desktop, iOS, and Android using React.js and other related technologies..",
            "Collaborated with web developers and UX|UI designers to ensure seamless project integration.",
            "Outline, design, modify, integrate, and test website code.",
            "Efficiently handled complex projects and tasks, with a fast approach.",
            "Presented completed projects to team members in an easy-to-understand manner.",
            "Strong problem-solving and analytical skills with excellent English communication and teamwork abilities.",
        ],
    },
    {
        title: "Website Designer (HTML5, CSS3 & SASS)",
        company_name: "Triple-A Global Tech",
        icon: triplea,
        iconBg: "#E6DEDD",
        date: "August 2021 - July 2023",
        points: [
            "Created websites and offered both internal and external support to clients throughout website construction and launch phases.",
            "Constructed codes for website layouts, structures, and meeting project deadlines.",
            "Efficiently handled complex projects and tasks, with a fast approach.",
            "Organized and structured the content to guide visitors through the various sections of websites.",
        ],
    },
    {
        title: "UX | UI Designer",
        company_name: "Freelancer",
        icon: Freelancer,
        iconBg: "#383E56",
        date: "June 2020 - March 2023",
        points: [
            "Conducted competitive analysis, user interviews, surveys, and A/B and preference testing to gather invaluable research data and develop personas, user flows, and sitemaps.",
            "Applied the Design-Thinking process to brainstorm and create solutions for apps.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Designed a feature to address users' specific needs and improve the overall user experience.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "Olusola is a problem solver, he has a particular aptitude for a fast moving team culture that relies on getting projects done through collaboration. ",
        name: "Brad",
        designation: "CMO",
        company: "Smatched",
        image: "https://media.licdn.com/dms/image/C4D03AQGwAfYdrivPdw/profile-displayphoto-shrink_800_800/0/1549899819078?e=1710374400&v=beta&t=6dxUIlvaNMsUvlbBSE9Mqm9ImwW2Ns8bF2lHEkwelwg",
    },
    {
        testimonial:
            "I am impressed by Olusola's professionalism and ability to work fast and efficiently on websites. He handled all his tasks with excellence.",
        name: "Davi",
        designation: "Development TL",
        company: "Smatched",
        image: "https://media.licdn.com/dms/image/C5603AQEiZSx2V6l1Lg/profile-displayphoto-shrink_800_800/0/1516956227719?e=1710374400&v=beta&t=GIS_T3vltfoNHUGFDKpRuX-6z5AX7NEyKaWNOiPxso0",
    },
    {
        testimonial:
            "Olusola is relentlessly eager to learn new technologies to enhance successful projects and tasks with a swift approach. ",
        name: "Ayobami",
        designation: "MGR",
        company: "Triple-A Global Tech",
        image: "https://media.licdn.com/dms/image/D4E03AQGUMDqsIN5_PQ/profile-displayphoto-shrink_800_800/0/1703040470586?e=1710374400&v=beta&t=uVC8Es1rI8f7bQ1xQhSAQH_ycy3DNMvWhR4vePejesE",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "AI Voice Assistance News",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Intuitive Game",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },

    {
        name: "Admin Backend",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Chat Messenger",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "UI Design",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };