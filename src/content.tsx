import { Figma, Framer, PaintBucket, Laptop, PanelTop, WandSparkles, Earth, AppWindow, Trello } from 'lucide-react';
import CONSTANTS from '@/constant';
import { Instagram,Linkedin ,Facebook ,Youtube, ChevronDown } from 'lucide-react';
const techStack = [
    { icon: <Figma />, name: 'Figma' },
    { icon: <Framer />, name: 'Framer' },
    { icon: <Figma />, name: 'Webflow' },
    { icon: <Framer />, name: 'Rive' },
    { icon: <Figma />, name: 'Blender' },
    { icon: <Trello />, name: 'Trello' },
    { icon: <Figma />, name: 'Chatgpt' },
    { icon: <Framer />, name: 'Claude' },
];

// Services data
const servicesList = [
    { icon: <Framer />, title: 'Framer Development' },
    { icon: <PaintBucket />, title: 'Brand Design' },
    { icon: <Laptop />, title: 'Web Apps' },
    { icon: <PanelTop />, title: 'Landing Pages' },
    { icon: <WandSparkles />, title: 'Motion Graphics' },
    { icon: <Earth />, title: '3D Design' },
    { icon: <AppWindow />, title: 'UX / UI Consultation' },
];
// Clients data (from real Upwork reviews)
const clientsList = [
    {
      name: "Upwork Client",
      role: "AI Project (Gmail PDF Search)",
      testimonial: "Excellent job with our AI project. Highly recommend!",
      image: CONSTANTS.profile,
    },
    {
      name: "Upwork Client",
      role: "Django Web App Project",
      testimonial: "They did an excellent job. Communication was nearly flawless, with quick responses and actions that ensured the work progressed smoothly and efficiently. The code quality was very good.",
      image: CONSTANTS.profile,
    },
    {
      name: "Upwork Client",
      role: "YouTube Automation Tool",
      testimonial: "He completed the tasks as outlined and demonstrated a solid understanding of the requirements. Very professional and reliable.",
      image: CONSTANTS.profile,
    },
    {
      name: "Upwork Client",
      role: "Data Extraction Project",
      testimonial: "Fantastic job! Impressed by the result he delivered. Very capable of doing the job and exceeding all expectations. Would definitely recommend him!",
      image: CONSTANTS.profile,
    },
    {
        name: "Upwork Client",
        role: "Youcalendy Web Project",
        testimonial: "Very attentive to everything and easy communication.",
        image: CONSTANTS.profile,
      },
      {
        name: "Upwork Client",
        role: "Automation & Data Scraping Project",
        testimonial: "Good talent, completed the task in time and very quickly.",
        image: CONSTANTS.profile,
      },
      {
        name: "Upwork Client",
        role: "Internal ChatGPT Tool",
        testimonial: "Adnan was very timely and detailed in delivering his work and goes above and beyond in making sure the deliverable is of good quality. He is also able to break down requests from a non-technical person into technical features. Highly recommend.",
        image: CONSTANTS.profile,
      },
      {
        name: "Upwork Client",
        role: "Quality-Focused Development Project",
        testimonial: "This freelancer takes care to deliver high quality work that meets expectations.",
        image: CONSTANTS.profile,
      },
  ];
 // About content data


// Work history data
const workHistory = [
    {
        company: "Nexus Technology",
        role: "Full-Stack Designer",
        period: "2012-2024"
    },
    {
        company: "Nexus Technology",
        role: "Full-Stack Designer",
        period: "2012-2024"
    },
    {
        company: "Nexus Technology",
        role: "Full-Stack Designer",
        period: "2012-2024"
    }
];
const CONTENT = {
   
     TESTIMONIAL: [
       {
        quote: {
            text: "They did an excellent job. Communication was nearly flawless, with quick responses and actions",
            highlight: "that ensured the work progressed smoothly and efficiently.",
            ending: "The code quality was very good, and they successfully delivered the requirements. I'm happy to have had the chance to work with such professionals.",
        },
        author: {
            name: "Client Name",
            role: "Role / Company",
            imageAlt: "Client Name",
        },
       },
       {
        quote: {
            text: "Fantastic job!",
            highlight: "Impressed by the result he delivered.",
            ending: "Very capable of doing the job and exceeding all expectations. Would definitely recommend him!",
        },
        author: {
            name: "Client Name",
            role: "Role / Company",
            imageAlt: "Client Name",
        },
       },
       {
        quote: {
            text: "Great work from Mohammad,",
            highlight: "really went above and beyond to deliver the project.",
            ending: "Great communication throughout and very professional.",
        },
        author: {
            name: "Client Name",
            role: "Role / Company",
            imageAlt: "Client Name",
        },
       },
       {
        quote: {
            text: "Adnan was very timely and detailed in delivering his work",
            highlight: "and he goes above and beyond in making sure the deliverable is of good quality.",
            ending: "He is also able to breakdown requests from a non technical person into technical features. Highly recommend!",
        },
        author: {
            name: "Client Name",
            role: "Role / Company",
            imageAlt: "Client Name",
        },
       }
     ],
     SERVICES: {
        heading: {
            part1: "Services that",
            part2: "supercharge your business.",
        },
        techStackLabel: "My tech stack",
        servicesList: servicesList,
        techStack: techStack,
     },
     CLIENTS: {
        heading: {
            part1: "Hear from what my,",
            part2: "clients have to say.",
        },
        clientsList: clientsList,
     },
     ABOUT: {
        heading: {
            part1: "Designing experiences",
            part2: "that solve real problems.",
        },
        person: {
            name: "Joseph Alexander",
            role: "Full-stack Designer",
            imageAlt: "Joseph Alexander",
        },
        workHistoryLabel: "My work history",
        workHistoryButton: {
            show: "Show",
            hide: "Hide",
        },
        workHistory: workHistory,
        paragraphs: [
            {
                highlight: "I love turning ideas into something real through design.",
                text: "What started as a hobby turned into a career when I discovered how design can make things both look great and work better.",
            },
            {
                highlight: "I focus on creating user interfaces that serve a real purpose",
                text: "– making sure they're not just pretty, but actually solve problems. Whether I'm working on a mobile app or a website, my goal is to make something that feels natural and easy to use.",
            },
            {
                highlight: "I'm a bit of a perfectionist when it comes to the small stuff,",
                text: "but I think that's what makes good design great. This attention to detail helps me build strong relationships with clients, as they know I'll put the same care into their project that they would.",
            },
        ],
        socialLinks: [
            { icon: Instagram, href: "#", name: "Instagram" },
            { icon: Linkedin, href: "#", name: "LinkedIn" },
            { icon: Facebook, href: "#", name: "Facebook" },
            { icon: Youtube, href: "#", name: "YouTube" },
        ],
    }
}

export default CONTENT;