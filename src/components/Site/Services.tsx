"use client";
import React from 'react';
import { Figma, Framer, PaintBucket, Laptop, PanelTop, WandSparkles, Earth, AppWindow, Trello } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import FadeUp from "@/components/Site/FadeUp";
import FadeIn from "@/components/Site/FadeIn";

// Services content data
const SERVICES_DATA = {
    heading: {
        part1: "Services that",
        part2: "supercharge your business.",
    },
    techStackLabel: "My tech stack",
};

// Tech stack data
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

// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
    techStackLabel: 0.4,
    techStackBase: 0.4,
    techStackIncrement: 0.1,
};

function Services() {
    return (
        <section className="border-b border-[#dedede]">
            <div className="wrapper">
                <div className="py-[128px] px-[44px]">
                    <div className="grid grid-cols-[56.2%_37.4%] justify-between ">
                        {/* Left side */}
                        <div>
                            <FadeUp delay={ANIMATION_DELAYS.heading}>
                                <div className="text-[64px] leading-[64px] text-black font-medium mb-[60px]">
                                    <h2 className="text-[#828282]">{SERVICES_DATA.heading.part1}</h2>
                                    {SERVICES_DATA.heading.part2}
                                </div>
                            </FadeUp>

                            <div>
                                <FadeUp delay={ANIMATION_DELAYS.techStackLabel}>
                                    <span className="block text-[18px] leading-[18px] font-medium mb-[16px]">
                                        {SERVICES_DATA.techStackLabel}
                                    </span>
                                </FadeUp>
                                <TooltipProvider>
                                    <ul className="flex gap-[8px]">
                                        {techStack.map((tech, index) => (
                                            <li key={index}>
                                                <FadeIn delay={ANIMATION_DELAYS.techStackBase + index * ANIMATION_DELAYS.techStackIncrement}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className="border border-[#dedede] shadow w-[56px] h-[56px] rounded-[12px] flex items-center justify-center">
                                                                {tech.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-black text-white rounded-full text-[12px] leading-[12px]">
                                                            <p>{tech.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </FadeIn>
                                            </li>
                                        ))}
                                    </ul>
                                </TooltipProvider>
                            </div>
                        </div>

                        {/* Right side */}
                        <div>
                            <ul className="space-y-[38px]">
                                {servicesList.map((service, index) => (
                                    <li key={index} className="flex items-center text-[22px] leading-[22px] font-medium gap-[12px]">
                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-color rounded-full">
                                            {service.icon}
                                        </div>
                                        {service.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
