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
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <FadeUp delay={ANIMATION_DELAYS.heading}>
                        <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px]
                         text-black font-medium md:mb-[60px] mb-[48px]">
                            <h2 className="text-[#828282]">{ABOUT_DATA.heading.part1}</h2>
                            {ABOUT_DATA.heading.part2}
                        </div>
                    </FadeUp>
                    <div className="grid lg:grid-cols-[37.4%_53.2%] md:grid-cols-[44.4%_48.2%] grid-cols-[100%] 2xl:gap-[64px] gap-[48px]">
                        {/* Left side */}
                        <div className="md:order-0 order-2">
                            <div className="mb-[64px]">
                                <div className="mb-[16px] relative">
                                    <figure className="overflow-hidden rounded-[16px] md:h-[410px] sm:h-[660px] h-[360px]">
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
                                    <h4 className="2xl:text-[22px] 2xl:leading-[22px] sm:text-[20px] sm:leading-[20px] text-[18px] leading-[18px]
                                     text-black font-medium">
                                        {ABOUT_DATA.person.name}
                                    </h4>
                                    <span className="text-[14px] leading-[14px] font-bold text-[#545454]">
                                        {ABOUT_DATA.person.role}
                                    </span>
                                </div>
                            </div>
                            <span className="block lg:text-[18px] lg:leading-[18px] text-[16px] leading-[16px] font-medium mb-[16px]">
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
                                                className="border border-[#dedede] bg-white shadow rounded-[16px] lg:p-[20px] p-[18px] transition-all duration-600"
                                                style={{
                                                    transitionTimingFunction: showAll ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-in-out',
                                                }}
                                            >
                                                <CardContent className="p-0">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="flex-1">
                                                            <h5 className="2xl:text-[18px] 2xl:leading-[18px] lg:text-[16px] lg:leading-[16px] text-[14px] leading-[14px]
                                                            text-black font-medium mb-[8px]">{work.company}</h5>
                                                            <div className="flex items-center justify-between">
                                                                <span className="2xl:text-[14px] 2xl:leading-[14px] text-[12px] leading-[12px] text-[#545454] font-medium">{work.role}</span>
                                                                <span className="2xl:text-[14px] 2xl:leading-[14px] text-[12px] leading-[12px] text-[#545454] font-medium">{work.period}</span>
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
                                        <p className="text-[#545454] 2xl:text-[20px] 2xl:leading-[30px] text-[18px] leading-[25px] font-medium">
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
