"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import Image from "next/image";
import CONSTANTS from "@/constant";
import FadeUp from "@/components/Site/FadeUp";
import FadeIn from "@/components/Site/FadeIn";
import CONTENT from '@/content';

 
// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
    clientBase: 0.4,
    clientIncrement: 0.1,
};
    
function ClientsSection() {
    const CLIENTS = CONTENT.CLIENTS;
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <FadeUp delay={ANIMATION_DELAYS.heading}>
                        <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px]
                         text-black font-medium md:mb-[60px] mb-[48px]">
                            <h2 className="text-[#828282]">{CLIENTS.heading.part1}</h2>
                            {CLIENTS.heading.part2}
                        </div>
                    </FadeUp>

                    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex gap-[16px] md:overflow-hidden overflow-x-scroll scrollbar-hide">
                        {CLIENTS.clientsList.map((client, index) => (
                            <FadeIn
                                key={index}
                                delay={ANIMATION_DELAYS.clientBase + index * ANIMATION_DELAYS.clientIncrement}
                            >
                                <div className="border border-[#dedede] shadow h-[280px] p-[24px] rounded-[24px]
                                 flex flex-col md:w-auto sm:w-[315px] w-[290px] bg-white ">
                                    <Quote className="mb-[10px] rotate-180" size={12} />
                                    <p className="text-[14px] leading-[22px] font-semibold">{client.testimonial}</p>
                                    <div className="flex gap-[10px] mt-auto">
                                        <figure className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0">
                                            <Image src={client.image} alt={client.name} width={38} height={38} />
                                        </figure>
                                        <div className="text-[12px] leading-[12px] font-bold">
                                            <h6 className="text-black mb-[6px]">{client.name}</h6>
                                            <span>{client.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientsSection;
