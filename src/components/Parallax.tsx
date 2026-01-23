"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
    children: ReactNode;
    speed?: number;
    direction?: "up" | "down";
    className?: string;
    start?: string;
    end?: string;
}

export default function Parallax({
    children,
    speed = 0.5,
    direction = "up",
    className = "",
    start = "top bottom",
    end = "bottom top",
}: ParallaxProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const multiplier = direction === "up" ? -1 : 1;
        const yValue = 100 * speed * multiplier;

        const animation = gsap.fromTo(
            element,
            {
                y: 0,
            },
            {
                y: yValue,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: start,
                    end: end,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            }
        );

        // Store ScrollTrigger reference for cleanup
        scrollTriggerRef.current = animation.scrollTrigger || null;

        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
            animation.kill();
        };
    }, [speed, direction, start, end]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}
