import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import CONSTANTS from "@/constant";

const BOOKING_URL = CONSTANTS.calComBookingUrl;
import Image from "next/image";
import Link from "next/link";
import BookingLink from "@/components/Site/BookingLink";
import { CalendarCheck } from 'lucide-react';
import FadeUp from "@/components/Site/FadeUp";

// FAQ content data
const FAQ_DATA = {
    heading: {
        part1: "Your questions",
        part2: "answered.",
    },
    accordion: {
        defaultValue: "item-1",
    },
    items: [
        {
            id: "item-1",
            number: "01",
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
        },
        {
            id: "item-2",
            number: "02",
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
        },
        {
            id: "item-3",
            number: "03",
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
        },
        {
            id: "item-4",
            number: "04",
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
        },
        {
            id: "item-5",
            number: "05",
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
        },
    ],
    callCard: {
        heading: {
            part1: "Still not sure?",
            part2: "Book a free discovery call.",
        },
        description: "Learn more about how I work and how I can help you and your business take the next step.",
        button: {
            text: "Schedule Now",
            href: BOOKING_URL,
        },
        imageAlt: "User avatar",
    },
};

function Faq() {
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px] grid lg:grid-cols-[54.3%_42.5%] grid-cols-[100%] gap-[32px] items-start">
                    <div>
                        <FadeUp>
                            <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px] text-black font-medium md:mb-[64px] mb-[48px]">
                                <div>{FAQ_DATA.heading.part1}</div>
                                <h2 className="text-[#828282]">{FAQ_DATA.heading.part2}</h2>
                            </div>
                        </FadeUp>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full flex gap-[16px] flex-col"
                        defaultValue={FAQ_DATA.accordion.defaultValue}
                    >
                        {FAQ_DATA.items.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border border-[#dedede] pt-[17px] rounded-[16px] bg-white shadow"
                            >
                                <AccordionTrigger className="py-0 px-[16px] pb-[17px] overflow-hidden">
                                    <div className="2xl:text-[16px] 2xl:leading-[16px] text-[14px] leading-[14px] text-black text-bold flex gap-[20px]">
                                        <span className="text-[#545454] transition-all duration-300 group-data-[state=open]:-translate-x-[40px]">
                                            {item.number}
                                        </span>
                                        <span className="transition-all duration-300 group-data-[state=open]:-translate-x-[40px]">
                                            {item.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 p-[16px] border-t border-[#dedede] text-[14px] leading-[22px] font-medium text-black">
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    </div>
                    <div className="sticky top-[128px] self-start">
                        <div className="border border-[#dedede] bg-white rounded-[16px] shadow sm:p-[32px] p-[22px] lg:text-left text-center">
                            <figure className="w-[64px] h-[64px] rounded-full overflow-hidden mb-[20px] lg:mx-0 mx-auto">
                                <Image src={CONSTANTS.profile} alt={FAQ_DATA.callCard.imageAlt} width={64} height={64} />
                            </figure>
                            <div>
                                <h3 className="2xl:text-[30px] md:leading-[30px] md:text-[28px] sm:text-[26px] sm:leading-[26px] text-[24px] leading-[24px] font-medium mb-[16px]">
                                    <span className="block text-[#828282]">{FAQ_DATA.callCard.heading.part1}</span>
                                    {FAQ_DATA.callCard.heading.part2}
                                </h3>
                                <p className="text-[14px] leading-[22px] text-black mb-[30px] font-medium lg:w-auto md:w-[50%] sm:w-[70%] lg:mx-0 mx-auto">
                                    {FAQ_DATA.callCard.description}
                                </p>
                                <div className="">
                                    <BookingLink className="schedule_btn lg:mx-0 mx-auto">
                                        <CalendarCheck size={18} /> {FAQ_DATA.callCard.button.text}
                                    </BookingLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
