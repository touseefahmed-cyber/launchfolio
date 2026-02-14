import { Figma, Framer, PaintBucket, Laptop, PanelTop, WandSparkles, Earth, AppWindow, Trello } from 'lucide-react';
import CONSTANTS from '@/constant';
import { Instagram,Linkedin ,Facebook ,Youtube, ChevronDown } from 'lucide-react';
import project_img1 from "../public/images/project_img1.png";
import project_img2 from "../public/images/project_img2.png";
import project_img3 from "../public/images/project_img3.png";
import project_img4 from "../public/images/project_img4.png";

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
    },
     PROJECTS : [
        {
            id: 1,
            img: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/e9d011ad84b5874c5571ba4e2f97c973?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDcRrBe8IJ0RopbgWbuQyIPBmbQonrpXXFK9UB597LgbgIhAJh3d6iNBrUJy%2FxUU3ym7yZQWd8nk2Oq01J5%2FGK96tJgKpIFCA4QABoMNzM5OTM5MTczODE5IgzeX0h6tXJvWaEwzmgq7wQy6utFq%2FAEqQCpbmPxxUPrLHzf3JBS7UvaFYDdW24fqxA7kDKH5amPy4ds4%2BbzHzRc%2BifQspA2nJJ9yTKESioEkdiWangcpIxzLwrQ4VICWNCFVNFyhNMharkH0CjnOqt6YKI7YxqWJqHEkjZgY6Mo4aFdubWMinGAskEZIeD77qxx%2FgE1WolbACtA1ihJG%2BB0SRaKuXb2L5Z0DT05S5ATBRr2NtcSmlpQx7WHlYKRZJr4yr4qpR6oYKM24URkhGx4SIhifakWjDhCJ%2FH5r1tzVyv7m0qcDhe%2FY2jMAEFkp1rEZSwPgVo3Kk4gw911CNHgTVV7k67YllqWVGQIEN%2BggacVQMKnepb%2FefEnfnOqcMHMPzRlAzAJSZmgfPrqJo4Xv9efGPpl2uV%2FNAIy3Jz5TG75IzF9pXA6eVLr%2FLZ0UlmijF6b5w%2FwWSmdsvHnogI7mkFSHZC0S6KRelBPXNpXhGZS38S3fhBLyudypYSCHDBdoOLSapvf7L4fPa%2FIxPCQqy99k%2BnkT1MSWYVilVD65gtYp1xQQ9vgjZnjP8j1y4GqU6JL2wF5hcqC2uJq98VMPEECJrbAA0%2BqyqHvPkDRMGKmOhnUOSVl%2B6NnccM4FACXhPVtVuMyg3D%2BcMuQA6q6pQmxycf0Aztv0W2S3%2B%2BPPFt0ZxUPQP8%2FadxjPKIbPIQgB0LKUYhMBWQjykSF252JJYPmaHqNQhtNAXIuIzxOVPk7CflVoFSL0eNQmsV%2FPjMbHCW%2Fkt0jC081oyLGaCxh6zB0Cz%2Bg71mxPAGb5NbA557ZsaET%2BHuwQpyIYRlN7t95Z8V06adyRHCf3q%2FhJDC2vsPMBjqYAbgzge5NQQNjlZb2OaDcEnwHdcCIFxm8f38JZPS%2B%2FeJJ5mqkqHCzj84NymzDVAU3sCEfMWoJrB2fQXWnB2rCwo%2FSxX1zpYhcirK2K9%2FDhUKT5ubvSHCJFYcZ3lKyj6No9M5zd4acJdjXkPOCii1u6xyqtQ3eTpR8LJGLwsEgPZEs70B%2BC3L9TvwBiAIrtZPF%2BqI4W%2FX%2BTGS5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260214T204930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5UYRM7JD4%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=80c24e7115994f8e8fb85b344448f9f6ef47caeb5d338a571f1dd2aa4b131004",
            title: "Call Donna",
            subtitle: "AI Voice Agent",
            link: "/work/call-donna",
            initialAnimation: {
                x: 530,
                y: -850,
                scale: 0.7,
                rotation: 10,
                zIndex: 4,
            },
            // Responsive animation for max-width 1025px
            initialAnimationMobile: {
                x: 400,
                y: -760,
                scale: 0.6,
                rotation: 10,
                zIndex: 4,
            },
        },
        {
            id: 2,
            img: project_img2,
            title: "Essentia",
            subtitle: "Ecommerce Site",
            link: "#",
            initialAnimation: {
                x: 80,
                y: -850,
                scale: 0.7,
                rotation: 15,
            },
            // Responsive animation for max-width 1025px
            initialAnimationMobile: {
                x: 75,
                y: -762,
                scale: 0.6,
                rotation: 15,
            },
        },
        {
            id: 3,
            img: project_img3,
            title: "Mugen",
            subtitle: "Design studio",
            link: "#",
            initialAnimation: {
                x: 480,
                y: -1300,
                scale: 0.7,
                rotation: -5,
            },
            // Responsive animation for max-width 1025px
            initialAnimationMobile: {
                x: 380,
                y: -1090,
                scale: 0.6,
                rotation: -5,
            },
        },
        {
            id: 4,
            img: project_img4,
            title: "Launchfolio",
            subtitle: "Portfolio Site",
            link: "#",
            initialAnimation: {
                x: 30,
                y: -1250,
                scale: 0.7,
                rotation: 5,
            },
            // Responsive animation for max-width 1025px
            initialAnimationMobile: {
                x: 50,
                y: -1060,
                scale: 0.6,
                rotation: 5,
            },
        },
    ]
}

export default CONTENT;