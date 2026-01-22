"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import Image from "next/image";
import user_img from "../../../public/images/user_img.avif";
import FadeUp from "@/components/Site/FadeUp";
import FadeIn from "@/components/Site/FadeIn";

// Clients section content data
const CLIENTS_DATA = {
    heading: {
        part1: "Hear from what my,",
        part2: "clients have to say.",
    },
};

// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
    clientBase: 0.4,
    clientIncrement: 0.1,
};

// Clients data
const clientsData = [
    {
        name: "Mark Martinez",
        role: "Customer Manager at SupportEase",
        testimonial: "The new UI design cut our customer support tickets in half. It's been a game-changer for us.",
        image: user_img,
    },
    {
        name: "Sarah Johnson",
        role: "Product Lead at InnovateX",
        testimonial: "Our workflow has improved dramatically thanks to the intuitive interface.",
        image: user_img,
    },
    {
        name: "James Smith",
        role: "CEO at TechSolutions",
        testimonial: "The UI redesign boosted our customer engagement by 40%. Highly recommend!",
        image: user_img,
    },
    {
        name: "Emily Davis",
        role: "Marketing Head at CreativeCo",
        testimonial: "It's rare to find a design that truly solves real user problems. Fantastic work!",
        image: user_img,
    },
    {
        name: "Robert Wilson",
        role: "Operations Manager at FlowCorp",
        testimonial: "The new UI has significantly reduced our training time for new employees.",
        image: user_img,
    },
    {
        name: "Linda Taylor",
        role: "Customer Success Lead at BrightStart",
        testimonial: "We’ve seen a noticeable drop in customer complaints. Excellent UI improvements!",
        image: user_img,
    },
];

function ClientsSection() {
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <FadeUp delay={ANIMATION_DELAYS.heading}>
                        <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px]
                         text-black font-medium md:mb-[60px] mb-[48px]">
                            <h2 className="text-[#828282]">{CLIENTS_DATA.heading.part1}</h2>
                            {CLIENTS_DATA.heading.part2}
                        </div>
                    </FadeUp>

                    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex gap-[16px] md:overflow-hidden overflow-x-scroll scrollbar-hide">
                        {clientsData.map((client, index) => (
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
                                            <Image src={client.image} alt={client.name} />
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
