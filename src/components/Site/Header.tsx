"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import user_img from "../../../public/images/user_img.avif";
import { X } from 'lucide-react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Set initial window width
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 20) {
                // Scrolling down
                setScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [lastScrollY]);

    // Parent variant for stagger
    const dotsContainer: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Single dot animation
    const singleDot: Variants = {
        animate: {
            y: [0, -4, 0],
            backgroundColor: ["#828282", "black", "#828282"],
            transition: {
                duration: 0.9,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatType: "loop" as const,
            },
        },
    };

    // Check if mobile (max-width 769px)
    // Use window.innerWidth directly if windowWidth is 0 (initial state)
    const currentWidth = windowWidth || (typeof window !== 'undefined' ? window.innerWidth : 0);
    const isMobile = currentWidth <= 769;

    return (
        <motion.header
            animate={{ 
                width: isMobile 
                    ? "234px"  // Fixed width on mobile, no hover effect
                    : isHovered 
                        ? "min-content"  // Desktop: expand on hover
                        : scrolled 
                            ? "234px"  // Desktop: shrink when scrolled
                            : "min-content"  // Desktop: default full width
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="glass-effect border border-[#dedede] p-3 rounded-[32px] top-6 fixed left-1/2 transform -translate-x-1/2 overflow-hidden z-50"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <nav className="flex justify-between items-center gap-16 relative">
                <div>
                    <Link href="/" className="flex gap-2 items-center">
                        <figure className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={user_img} alt="User" width={32} height={32} />
                        </figure>
                        <span className="text-sm font-bold text-black whitespace-nowrap">Joseph Alexander</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-sm font-bold text-black items-center">
                        <li>
                            <Link href="/work">Work</Link>
                        </li>
                        <li>
                            <Link href="#services">Services</Link>
                        </li>
                        <li>
                            <Link href="#pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="/contact" className="contact_btn">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Bouncing dots */}
                {(!isMobile || !showButton) && (
                    <motion.div
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 cursor-pointer"
                        variants={dotsContainer}
                        animate={
                            isMobile 
                                ? (!isHovered && !showButton ? "animate" : "none")
                                : (scrolled && !isHovered ? "animate" : "none")
                        }
                        style={{ 
                            opacity: isMobile 
                                ? (!isHovered && !showButton ? 1 : 0)
                                : (scrolled && !isHovered ? 1 : 0)
                        }}
                        onClick={() => isMobile && setShowButton(true)}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#828282]"
                                variants={singleDot}
                            />
                        ))}
                    </motion.div>
                )}
                {/* Button - only visible on mobile when dots are clicked */}
                {isMobile && (
                    <button 
                        className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={() => setShowButton(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                )}
            </nav>
            {isMobile && (
                <div className={`flex flex-col gap-4 transition-all duration-300 mt-[16px] ${showButton ? 'block' : 'hidden'}`}>
                    <ul className="flex gap-[16px] text-sm flex-col font-bold text-black">
                        <li>
                            <Link href="/work" className="text-[18px] font-medium">Work</Link>
                        </li>
                        <li>
                            <Link href="#services" className="text-[18px] font-medium">Services</Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-[18px] font-medium">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="text-[18px] font-medium">Blog</Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="/contact" className="contact_btn w-[100%] text-center" onClick={() => setShowButton(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </motion.header>
    );
}

export default Header;
