"use client";
import CONTENT from "@/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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


interface ProjectSectionProps {
    disableAnimations?: boolean;
}

function ProjectSection({ disableAnimations = false }: ProjectSectionProps) {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const ctxRef = useRef<gsap.Context | null>(null);
    const PROJECTS =  CONTENT.PROJECTS;
    // Track window width for responsive animations
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useLayoutEffect(() => {
        if (!card1Ref.current || !card2Ref.current || !card3Ref.current || !card4Ref.current || !containerRef.current) return;

        // Cleanup previous context
        if (ctxRef.current) {
            ctxRef.current.revert();
            ctxRef.current = null;
        }

        // Skip GSAP animations if disabled via prop
        if (disableAnimations) {
            // Set card_content opacity to 1 (no animation)
            const cardContents = containerRef.current?.querySelectorAll('.card_content');
            if (cardContents) {
                cardContents.forEach((content) => {
                    (content as HTMLElement).style.opacity = '1';
                });
            }
            return;
        }

        // Skip GSAP animations for screens <= 769px
        const isSmallScreen = windowWidth <= 769;
        if (isSmallScreen) {
            // Reset all transforms and set card_content opacity to 1 for small screens (no animation)
            const cardRefs: (HTMLDivElement | null)[] = [
                card1Ref.current,
                card2Ref.current,
                card3Ref.current,
                card4Ref.current,
            ];
            
            cardRefs.forEach((cardRef) => {
                if (cardRef) {
                    gsap.set(cardRef, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        opacity: 1,
                        zIndex: 0,
                    });
                }
            });

            const cardContents = containerRef.current?.querySelectorAll('.card_content');
            if (cardContents) {
                cardContents.forEach((content) => {
                    (content as HTMLElement).style.opacity = '1';
                });
            }
            return;
        }

        const ctx = gsap.context(() => {
            // Check if screen width is <= 1025px for responsive animation
            const isMobile = windowWidth <= 1025;

            // Kill any existing ScrollTriggers on this container
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === containerRef.current) {
                    trigger.kill();
                }
            });

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
                    // Use mobile animation if screen width <= 1025px, otherwise use default
                    const animationConfig = isMobile && project.initialAnimationMobile 
                        ? project.initialAnimationMobile 
                        : project.initialAnimation;

                    tl.fromTo(
                        cardRef,
                        animationConfig,
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

        ctxRef.current = ctx;

        // ✅ Refresh ScrollTrigger after all images load
        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);

        return () => {
            if (ctxRef.current) {
                ctxRef.current.revert();
                ctxRef.current = null;
            }
            window.removeEventListener("load", handleLoad);
        };
    }, [disableAnimations, windowWidth]);

    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                        <div className="relative z-20 bg-black mix-blend-exclusion">
                            <h2 className="xl:text-[64px] 2xl:leading-[64px] lg:text-[54px]
                            lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px] font-medium text-white md:mb-[60px] mb-[48px]">Leatest Projects</h2>
                        </div>
                    <div ref={containerRef} className="grid md:grid-cols-2 grid-cols-1 gap-[24px] relative z-10">
                        {PROJECTS.map((project, index) => {
                            const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
                            const cardRef = cardRefs[index];

                            return (
                                <div key={project.id} ref={cardRef} className="relative group hover_effect">
                                    <Link href={project.link} data-cursor-text="Project">
                                        <figure className="rounded-[16px] lg:h-[363px] md:h-[246px] sm:h-[440px] h-[248px] overflow-hidden mb-[12px] ">
                                            <Image
                                                src={project.img} 
                                                alt={project.title}
                                                width={500}
                                                height={500}
                                                unoptimized={typeof project.img === "string"}
                                                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
                                            />
                                        </figure>
                                        <div className="flex items-center justify-between card_content transition-all duration-500 ease-in-out group-hover:!opacity-0">
                                            <div>
                                                <h6 className="text-black sm:text-[18px] sm:leading-[18px] text-[16px] leading-[16px] mb-[2px] font-medium">
                                                    {project.title}
                                                </h6>
                                                <span className="text-[12px] leading-[12px] text-[#545454] font-bold">
                                                    {project.subtitle}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="flex text-[12px] leading-[12px] font-medium text-[#545454] items-center">
                                                    <div className="line_arrow"><ArrowUpRight size={18} /> <ArrowUpRight size={18} /></div> View Project
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-[64px] mx-auto hover_effect btn_hover">
                        <Link href="#" className="md:text-[18px] md:leading-[18px] text-[16px] leading-[16px]
                        text-black font-medium flex items-center w-fit mx-auto gap-1">View all my projects <div className="line_arrow"><ArrowUpRight size={18} /> <ArrowUpRight size={18} /></div></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;