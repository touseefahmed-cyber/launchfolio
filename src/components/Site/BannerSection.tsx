"use client"

import FadeIn from "@/components/Site/FadeIn";
import FadeUp from "@/components/Site/FadeUp";
import CONSTANTS from "@/constant";
import Image from "next/image";
import Link from "next/link";

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
        image: CONSTANTS.profile,
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
            <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
                <div className="wrapper md:pt-[144px] sm:pt-[128px] pt-[100px]">
                    <div className=" 2xl:px-[44px] md:px-[15px] px-[10px] md:pb-[96px] pb-[48px] grid md:grid-cols-[59%_41%] sm:grid-cols-[70%_30%] grid-cols-[100%] justify-between">
                        <div>
                            <FadeIn delay={ANIMATION_DELAYS.badge}>
                                <div className="shadow inline-block rounded-[24px] text-[12px] leading-[12px] py-[9px] 2xl:mb-[24px] mb-[16px] pl-[16px] pr-[8px] font-semibold">
                                    <span className="animate-heartbeat w-2 h-2 bg-green-500 rounded-full inline-block mr-[5px]"></span>
                                    {BANNER_DATA.badge.text}
                                </div>
                            </FadeIn>
                            <FadeUp delay={ANIMATION_DELAYS.heading}>
                                <h1 className="2xl:text-[72px] 2xl:leading-[68px] lg:text-[64px] lg:leading-[60px] md:text-[48px] md:leading-[45px] text-[42px] leading-[39px]
                                 font-medium mb-[24px]">
                                    <span className="block text-[#828282]">{BANNER_DATA.heading.part1}</span>
                                    {BANNER_DATA.heading.part2}
                                </h1>
                            </FadeUp>
                            <FadeUp delay={ANIMATION_DELAYS.description}>
                                <p className="lg:text-[18px] lg:leading-[25px] text-[16px] leading-[22px] font-semibold lg:w-[72%] sm:w-[90%] w-full mb-[32px]">
                                    {BANNER_DATA.description.main}{" "}
                                    <span className="text-[#545454]">{BANNER_DATA.description.secondary}</span>
                                </p>
                            </FadeUp>
                            <FadeUp delay={ANIMATION_DELAYS.cta}>
                                <div className="">
                                    <Link href={BANNER_DATA.cta.href} className="book_btn">
                                        <figure className="w-[32px] h-[32px] rounded-full overflow-hidden flex-shrink-0">
                                            <Image src={CONSTANTS.profile} alt={BANNER_DATA.cta.imageAlt} width={32} height={32} />
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