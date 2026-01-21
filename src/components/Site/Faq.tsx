import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import user_img from "../../../public/images/user_img.avif";
import Image from "next/image";
import Link from "next/link";
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
            href: "#",
        },
        imageAlt: "User avatar",
    },
};

function Faq() {
    return (
        <section className="border-b border-[#dedede]">
            <div className="wrapper">
                <div className="py-[128px] px-[44px] grid grid-cols-[54.3%_42.5%] gap-[32px] items-start">
                    <div>
                        <FadeUp>
                            <div className="text-[64px] leading-[64px] text-black font-medium mb-[64px]">
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
                                    <div className="text-[16px] leading-[16px] text-black text-bold flex gap-[20px]">
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
                        <div className="border border-[#dedede] bg-white rounded-[16px] shadow p-[32px]">
                            <figure className="w-[64px] h-[64px] rounded-full overflow-hidden mb-[20px]">
                                <Image src={user_img} alt={FAQ_DATA.callCard.imageAlt} />
                            </figure>
                            <div>
                                <h3 className="text-[30px] leading-[30px] font-medium mb-[16px]">
                                    <span className="block text-[#828282]">{FAQ_DATA.callCard.heading.part1}</span>
                                    {FAQ_DATA.callCard.heading.part2}
                                </h3>
                                <p className="text-[14px] leading-[22px] text-black mb-[30px] font-medium">
                                    {FAQ_DATA.callCard.description}
                                </p>
                                <div className="">
                                    <Link href={FAQ_DATA.callCard.button.href} className="schedule_btn">
                                        <CalendarCheck size={18} /> {FAQ_DATA.callCard.button.text}
                                    </Link>
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
