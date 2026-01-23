"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const rafRef = useRef<number | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        // Check if screen is desktop (width >= 1280px and has pointer device)
        const checkDesktop = () => {
            const hasPointerDevice = window.matchMedia("(pointer: fine)").matches;
            const isDesktopWidth = window.innerWidth >= 1280;
            return hasPointerDevice && isDesktopWidth;
        };

        const setupCursor = () => {
            // Cleanup previous setup if exists
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }

            if (!checkDesktop()) {
                setIsDesktop(false);
                return;
            }

            setIsDesktop(true);

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

            cleanupRef.current = () => {
                window.removeEventListener("mousemove", updateCursor);
                document.removeEventListener("mouseover", handleMouseOver, true);
                document.removeEventListener("mouseout", handleMouseOut, true);
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
            };
        };

        // Initial setup
        setupCursor();

        // Handle resize
        const handleResize = () => {
            setupCursor();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        };
    }, []);

    // Don't render on mobile/tablet
    if (!isDesktop) {
        return null;
    }

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
                <span className="text-black text-xs font-medium whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-md">
                    {text}
                </span>
            </div>
            {/* Simple cursor pointer - always visible */}
            <div
                className="fixed pointer-events-none z-[9998] transition-opacity duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 0 : 1,
                }}
            >
                <div className="bg-black rounded-full w-5 h-5 border border-white"></div>
            </div>
        </>
    );
}
