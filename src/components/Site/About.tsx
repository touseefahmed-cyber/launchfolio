"use client"

import React, { useState } from 'react';
import Image from "next/image";
import person_img from "../../../public/images/person_img.png";
import Link from "next/link";
import { Instagram,Linkedin ,Facebook ,Youtube, ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import FadeUp from "@/components/Site/FadeUp";
import FadeIn from "@/components/Site/FadeIn";

// About content data
const ABOUT_DATA = {
    heading: {
        part1: "Designing experiences",
        part2: "that solve real problems.",
    },
    person: {
        name: "Joseph Alexander",
        role: "Full-stack Designer",
        imageAlt: "Joseph Alexander",
    },
    workHistory: {
        label: "My work history",
        button: {
            show: "Show",
            hide: "Hide",
        },
    },
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
};

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

// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
    paragraph1: 0.12,
    paragraph2: 0.8,
    paragraph3: 0.4,
};

function About() {
    const [showAll, setShowAll] = useState(false);
    return (
        <section className="border-b border-[#dedede]">
            <div className="wrapper">
                <div className="py-[128px] px-[44px]">
                    <FadeUp delay={ANIMATION_DELAYS.heading}>
                        <div className="text-[64px] leading-[64px] text-black font-medium mb-[60px]">
                            <h2 className="text-[#828282]">{ABOUT_DATA.heading.part1}</h2>
                            {ABOUT_DATA.heading.part2}
                        </div>
                    </FadeUp>
                    <div className="grid grid-cols-[37.4%_53.2%] gap-[64px]">
                        {/* Left side */}
                        <div>
                            <div className="mb-[64px]">
                                <div className="mb-[16px] relative">
                                    <figure className="overflow-hidden rounded-[16px] h-[410px]">
                                        <Image src={person_img} alt={ABOUT_DATA.person.imageAlt} />
                                    </figure>
                                    <ul className="flex items-center gap-[6px] absolute bottom-[10px] right-[10px]">
                                        {ABOUT_DATA.socialLinks.map((social, index) => {
                                            const IconComponent = social.icon;
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        href={social.href}
                                                        className="w-[30px] h-[30px] flex items-center justify-center bg-[#00000080] text-white rounded-full"
                                                        aria-label={social.name}
                                                    >
                                                        <IconComponent size={16} />
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="space-y-[4px]">
                                    <h4 className="text-[22px] leading-[22px] text-black font-medium">
                                        {ABOUT_DATA.person.name}
                                    </h4>
                                    <span className="text-[14px] leading-[14px] font-bold text-[#545454]">
                                        {ABOUT_DATA.person.role}
                                    </span>
                                </div>
                            </div>
                            <span className="block text-[18px] leading-[18px] font-medium mb-[16px]">
                                {ABOUT_DATA.workHistory.label}
                            </span>
                            <div className="relative">
                                {workHistory.map((work, index) => {
                                    const offsetY = showAll ? index * 16 : index * 8;
                                    const offsetX = showAll ? index * 8 : index * 8;
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={`${
                                                showAll ? 'relative mb-[16px]' : 'absolute top-0 left-0 w-full'
                                            }`}
                                            style={{
                                                zIndex: showAll ? 'auto' : workHistory.length - index,
                                                transform: showAll ? 'none' : `translateY(${offsetY}px) translateX(${offsetX}px)`,
                                                opacity: showAll ? 1 : index === 0 ? 1 : index === 1 ? 0.3 : 0.15,
                                                transition: showAll 
                                                    ? `opacity 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s, transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s, margin-bottom 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`
                                                    : 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, margin-bottom 0.5s ease-in-out',
                                            }}
                                        >
                                            <Card 
                                                className="border border-[#dedede] bg-white shadow rounded-[16px] p-[20px] transition-all duration-600"
                                                style={{
                                                    transitionTimingFunction: showAll ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-in-out',
                                                }}
                                            >
                                                <CardContent className="p-0">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="flex-1">
                                                            <h5 className="text-[18px] leading-[18px] text-black font-medium mb-[8px]">{work.company}</h5>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[14px] leading-[14px] text-[#545454] font-medium">{work.role}</span>
                                                                <span className="text-[14px] leading-[14px] text-[#545454] font-medium">{work.period}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    );
                                })}
                                <div className={`text-center transition-all duration-500 ${showAll ? 'pt-[16px]' : 'pt-[100px]'}`}>
                                    <button 
                                        onClick={() => setShowAll(!showAll)}
                                        className="flex items-center gap-[8px] text-[14px] leading-[14px] font-medium text-black hover:opacity-70 transition-all duration-300 cursor-pointer mx-auto"
                                    >
                                        {showAll ? ABOUT_DATA.workHistory.button.hide : ABOUT_DATA.workHistory.button.show}
                                        <ChevronDown 
                                            size={16} 
                                            className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="space-y-[30px]">
                            {ABOUT_DATA.paragraphs.map((paragraph, index) => {
                                const delays = [
                                    ANIMATION_DELAYS.paragraph1,
                                    ANIMATION_DELAYS.paragraph2,
                                    ANIMATION_DELAYS.paragraph3,
                                ];
                                return (
                                    <FadeIn key={index} delay={delays[index]}>
                                        <p className="text-[#545454] text-[20px] leading-[30px] font-medium">
                                            <span className="text-black font-semibold">{paragraph.highlight}</span>{" "}
                                            {paragraph.text}
                                        </p>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
