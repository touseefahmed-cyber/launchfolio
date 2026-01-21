"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import user_img from "../../../public/images/user_img.avif";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Parent variant for stagger
    const dotsContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Single dot animation
    const singleDot = {
        animate: {
            y: [0, -4, 0],
            backgroundColor: ["#828282", "black", "#828282"],
            transition: {
                duration: 0.9,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    return (
        <motion.header
            animate={{ width: scrolled ? "234px" : "min-content" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="glass-effect border border-[#dedede] p-3 rounded-[32px] top-6 fixed left-1/2 transform -translate-x-1/2 overflow-hidden z-50"
        >
            <nav className="flex justify-between items-center gap-16 relative">
                <div>
                    <Link href="/" className="flex gap-2 items-center">
                        <figure className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={user_img} alt="User" width={32} height={32} />
                        </figure>
                        <span className="text-sm font-bold text-black whitespace-nowrap">
              Joseph Alexander
            </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-sm font-bold text-black items-center">
                        <li>
                            <Link href="/work">Work</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
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
                <motion.div
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1"
                    variants={dotsContainer}
                    animate={scrolled ? "animate" : "none"}
                    style={{ opacity: scrolled ? 1 : 0 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#828282]"
                            variants={singleDot}
                        />
                    ))}
                </motion.div>
            </nav>
        </motion.header>
    );
}

export default Header;
