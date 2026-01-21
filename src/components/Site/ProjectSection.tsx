"use client";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import project_img1 from "../../../public/images/project_img1.png";
import project_img2 from "../../../public/images/project_img2.png";
import project_img3 from "../../../public/images/project_img3.png";
import project_img4 from "../../../public/images/project_img4.png";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

// Animation configuration
const ANIMATION_CONFIG = {
    transformPerspective: 1200,
    finalState: {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        zIndex: 0,
    },
    ease: "power2.out" as const,
    timelineStart: 0,
};

// ScrollTrigger configuration
const SCROLL_TRIGGER_CONFIG = {
    start: "top 98%",
    end: "top 15%",
    scrub: 1,
    markers: false,
};

// Project data
const PROJECTS = [
    {
        id: 1,
        img: project_img1,
        title: "Axiom",
        subtitle: "Ecommerce Site",
        link: "#",
        initialAnimation: {
            x: 530,
            y: -726,
            scale: 0.7,
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
            y: -736,
            scale: 0.7,
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
            y: -1180,
            scale: 0.7,
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
            y: -1137,
            scale: 0.7,
            rotation: 5,
        },
    },
];

function ProjectSection() {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!card1Ref.current || !card2Ref.current || !card3Ref.current || !card4Ref.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            // Create a timeline to animate all cards together
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    ...SCROLL_TRIGGER_CONFIG,
                },
            });

            // Set initial positions
            const cardRefs: (HTMLDivElement | null)[] = [
                card1Ref.current,
                card2Ref.current,
                card3Ref.current,
                card4Ref.current,
            ];
            gsap.set(cardRefs.filter(Boolean), {
                transformPerspective: ANIMATION_CONFIG.transformPerspective,
            });

            // Set card_content opacity to 0 by default
            const cardContents = containerRef.current?.querySelectorAll('.card_content');
            if (cardContents) {
                gsap.set(cardContents, {
                    opacity: 0,
                });
            }

            // Animate all cards together in the timeline
            PROJECTS.forEach((project, index) => {
                const cardRef = cardRefs[index];
                if (cardRef) {
                    tl.fromTo(
                        cardRef,
                        project.initialAnimation,
                        {
                            ...ANIMATION_CONFIG.finalState,
                            ease: ANIMATION_CONFIG.ease,
                        },
                        ANIMATION_CONFIG.timelineStart // All start at the same time
                    );

                    // Animate card_content opacity
                    const cardContent = cardRef.querySelector('.card_content') as HTMLElement | null;
                    if (cardContent) {
                        tl.to(
                            cardContent,
                            {
                                opacity: 1,
                                ease: ANIMATION_CONFIG.ease,
                            },
                            ANIMATION_CONFIG.timelineStart // Start at the same time
                        );
                    }
                }
            });
        }, containerRef);

        // ✅ Refresh ScrollTrigger after all images load
        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);

        return () => {
            ctx.revert();
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <section className="border-b border-[#dedede]">
            <div className="wrapper">
                <div className="py-[128px] px-[44px]">
                    <div ref={containerRef} className="grid grid-cols-2 gap-[24px] relative z-10">
                        {PROJECTS.map((project, index) => {
                            const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
                            const cardRef = cardRefs[index];

                            return (
                                <div key={project.id} ref={cardRef} className="relative group">
                                    <Link href={project.link}>
                                        <figure className="rounded-[16px] h-[363px] overflow-hidden mb-[12px] ">
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
                                            />
                                        </figure>
                                        <div className="flex items-center justify-between card_content transition-all duration-500 ease-in-out group-hover:!opacity-0">
                                            <div>
                                                <h6 className="text-black text-[18px] leading-[18px] mb-[2px] font-medium">
                                                    {project.title}
                                                </h6>
                                                <span className="text-[12px] leading-[12px] text-[#545454] font-bold">
                                                    {project.subtitle}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="flex text-[12px] leading-[12px] font-medium text-[#545454] items-center">
                                                    <ArrowUpRight size={16} /> View Project
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;