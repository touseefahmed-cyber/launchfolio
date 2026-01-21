"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;

        // Initialize position
        setPosition({ x: currentX, y: currentY });

        const updateCursor = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            // Smooth interpolation for cursor movement
            currentX += (targetX - currentX) * 0.15;
            currentY += (targetY - currentY) * 0.15;
            setPosition({ x: currentX, y: currentY });
            rafRef.current = requestAnimationFrame(animate);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const linkElement = target.closest("[data-cursor-text]");
            if (linkElement) {
                const cursorText = linkElement.getAttribute("data-cursor-text");
                if (cursorText) {
                    setText(cursorText);
                    setIsVisible(true);
                }
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const linkElement = target.closest("[data-cursor-text]");
            if (linkElement && !linkElement.contains(e.relatedTarget as Node)) {
                setText("");
                setIsVisible(false);
            }
        };

        window.addEventListener("mousemove", updateCursor);
        document.addEventListener("mouseover", handleMouseOver, true);
        document.addEventListener("mouseout", handleMouseOut, true);
        
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            document.removeEventListener("mouseover", handleMouseOver, true);
            document.removeEventListener("mouseout", handleMouseOut, true);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Text cursor - visible when hovering over links */}
            <div
                className="fixed pointer-events-none z-[9999] transition-opacity duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: "none",
                }}
            >
                <div className="flex items-center gap-2">

                    <span className="text-black text-xs font-medium whitespace-nowrap glass-effect px-3 py-1.5 rounded-full ">
                        {text}
                    </span>
                </div>
            </div>
            {/* Default cursor dot - always visible */}
            <div
                className="fixed pointer-events-none z-[9998] transition-opacity duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 0 : 1,
                }}
            >
                <div className="glass-effect2 rounded-full w-[15px] h-[15px]  "></div>
            </div>
        </>
    );
}
