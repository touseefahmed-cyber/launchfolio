"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import user_img from "../../../public/images/user_img.avif";
import FadeIn from "@/components/Site/FadeIn";
import FadeUp from "@/components/Site/FadeUp";

// Banner content data
const BANNER_DATA = {
    badge: {
        text: "Available for August'25",
    },
    heading: {
        part1: "Design that",
        part2: "delivers results.",
    },
    description: {
        main: "Strategic design that drives growth, not just looks good.",
        secondary: "I create everything your brand needs to attract customers and turn them into sales.",
    },
    cta: {
        href: "#",
        text: "Book a call with me",
        imageAlt: "User avatar",
    },
};

// Animation delays
const ANIMATION_DELAYS = {
    badge: 0,
    heading: 0,
    description: 0.2,
    cta: 0.4,
};

function BannerSection() {
    return (
        <>
            <section className="border-b border-[#dedede]">
                <div className="wrapper pt-[144px]">
                    <div className="px-[44px] pb-[96px] grid grid-cols-[59%_41%] justify-between">
                        <div>
                            <FadeIn delay={ANIMATION_DELAYS.badge}>
                                <div className="shadow inline-block rounded-[24px] text-[12px] leading-[12px] py-[9px] mb-[24px] pl-[16px] pr-[8px] font-semibold">
                                    <span className="animate-heartbeat w-2 h-2 bg-green-500 rounded-full inline-block mr-[5px]"></span>
                                    {BANNER_DATA.badge.text}
                                </div>
                            </FadeIn>
                            <FadeUp delay={ANIMATION_DELAYS.heading}>
                                <h1 className="text-[72px] leading-[68px] font-medium mb-[24px]">
                                    <span className="block text-[#828282]">{BANNER_DATA.heading.part1}</span>
                                    {BANNER_DATA.heading.part2}
                                </h1>
                            </FadeUp>
                            <FadeUp delay={ANIMATION_DELAYS.description}>
                                <p className="text-[18px] leading-[25px] font-semibold w-[72%] mb-[32px]">
                                    {BANNER_DATA.description.main}{" "}
                                    <span className="text-[#545454]">{BANNER_DATA.description.secondary}</span>
                                </p>
                            </FadeUp>
                            <FadeUp delay={ANIMATION_DELAYS.cta}>
                                <div className="">
                                    <Link href={BANNER_DATA.cta.href} className="book_btn">
                                        <figure className="w-[32px] h-[32px] rounded-full overflow-hidden flex-shrink-0">
                                            <Image src={user_img} alt={BANNER_DATA.cta.imageAlt} />
                                        </figure>
                                        {BANNER_DATA.cta.text}
                                    </Link>
                                </div>
                            </FadeUp>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default BannerSection;