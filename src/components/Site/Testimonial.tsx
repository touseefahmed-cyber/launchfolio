import React from 'react';
import Image from "next/image";
import user_img from "../../../public/images/user_img.avif";
import FadeUp from "@/components/Site/FadeUp";

// Testimonial data
const TESTIMONIAL_DATA = {
    quote: {
        text: "Working with Joseph felt like having a seasoned design partner",
        highlight: "who truly understood our vision for Zazzle",
        ending: "and brought it to life in ways we hadn't even imagined.",
    },
    author: {
        name: "Thomas Weber",
        role: "Co-founder of Zazzle",
        imageAlt: "Thomas Weber",
    },
};

// Animation delays
const ANIMATION_DELAYS = {
    quote: 0,
    author: 0.4,
};

function Testimonial() {
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[64px] py-[32px] 2xl:px-[44px] md:px-[15px] px-[10px] text-center">
                    <FadeUp delay={ANIMATION_DELAYS.quote}>
                        <p className="2xl:text-[28px] 2xl:leading-[39px] lg:text-[26px] lg:leading-[36px] md:text-[24px] md:leading-[33px] text-[22px] leading-[30px]
                         font-medium mb-[24px] lg:w-[70%] md:w-[90%] w-full mx-auto">
                            "{TESTIMONIAL_DATA.quote.text}{" "}
                            <strong>{TESTIMONIAL_DATA.quote.highlight}</strong>{" "}
                            {TESTIMONIAL_DATA.quote.ending}"
                        </p>
                    </FadeUp>
                    <FadeUp delay={ANIMATION_DELAYS.author}>
                        <div className="flex gap-[10px] mt-auto text-left justify-center">
                            <figure className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0">
                                <Image src={user_img} alt={TESTIMONIAL_DATA.author.imageAlt} />
                            </figure>
                            <div className="font-semibold">
                                <h6 className="text-black text-[14px] leading-[14px]">
                                    {TESTIMONIAL_DATA.author.name}
                                </h6>
                                <span className="text-[12px] leading-[12px] text-[#545454]">
                                    {TESTIMONIAL_DATA.author.role}
                                </span>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
