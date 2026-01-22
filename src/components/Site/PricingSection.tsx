import React from "react";
import {RefreshCw, MessageSquare, HandCoins, Check, CalendarCheck} from 'lucide-react';
import Link from "next/link";
import FadeUp from "@/components/Site/FadeUp";

// Pricing section content data
const PRICING_DATA = {
    heading: {
        part1: "From my blog,",
        part2: "design insights.",
    },
    description: {
        strong: "Clear costs, no hidden fees.",
        text: "Select from monthly subscriptions or individual project rates.",
    },
    features: [
        {
            icon: RefreshCw,
            title: "Subscribe",
            description: "Subscribe via stripe & start requesting through my trello board.",
        },
        {
            icon: MessageSquare,
            title: "Request",
            description: "Request whatever service I offer, from branding to web design.",
        },
        {
            icon: HandCoins,
            title: "Receive",
            description: "Receive your design within 48 hours on average.",
        },
    ],
    subscription: {
        card: {
            badge: "Pause or cancel anytime",
            title: {
                part1: "Subscription design services",
                part2: "for brands who move fast.",
            },
            status: "Slots available",
            heading: "Hire me today",
            description: "Skip the agency markup and work directly with an experienced designer.",
        },
        unlimited: {
            title: "Unlimited Design",
            description: "One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.",
            price: "$8,000",
            period: "/ month",
            features: [
                "No contracts or commitments",
                "Pause or cancel anytime",
                "Multiple Brands",
                "Unlimited requests",
                "Avg 48 hour turnaround",
                "Framer development",
            ],
            cta: {
                text: "Get Started",
                href: "#",
            },
        },
    },
    singleProject: {
        title: "Single Project",
        description: {
            main: "Comprehensive design services for any project scope.",
            secondary: "Ideal for one-time design needs or individual tasks.",
        },
        features: [
            "Clearly defined scope",
            "Fixed timeline",
            "3 revision rounds",
            "Milestone updates",
        ],
        cta: {
            text: "Get quote",
            href: "#",
        },
    },
};

function PricingSection() {
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px] ">
                    <div className="flex justify-between md:flex-row flex-col md:items-end md:mb-[60px] mb-[48px] gap-y-[24px]">
                        <FadeUp>
                            <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px]
                             text-black font-medium text-left">
                                <h2 className="text-[#828282]">{PRICING_DATA.heading.part1}</h2>
                                <span>{PRICING_DATA.heading.part2}</span>
                            </div>
                        </FadeUp>

                        <div className="lg:w-[38%] md:w-[42%] sm:w-[67%] w-full text-left">
                            <p className="2xl:text-[22px] 2xl:leading-[30px] lg:text-[20px] lg:leading-[28px] text-[18px] leading-[25px] font-medium">
                                <strong>{PRICING_DATA.description.strong}</strong> {PRICING_DATA.description.text}
                            </p>
                        </div>
                    </div>
                    <div className="sm:grid-cols-3 gap-y-[38px] grid justify-between lg:mb-[96px] md:mb-[76px] mb-[48px]">
                        {PRICING_DATA.features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="">
                                    <h5 className="lg:text-[16px] lg:leading-[16px] text-[14px] leading-[14px] font-semibold text-black mb-[8px] flex items-center gap-[8px]">
                                        <IconComponent size={16}/> {feature.title}
                                    </h5>
                                    <p className="tetx-[#545454] lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] font-medium text-[#545454] w-[82%]">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-[#f0f0f0] rounded-[6px] p-[6px]">
                        <div className="grid md:grid-cols-[41.2%_58%] grid-cols-[100%] gap-[6px] mb-[6px]">
                            <div className="bg-white md:p-[32px] p-[24px] rounded-[12px] shadow">
                                <div className="bg-color p-[24px] rounded-[24px] lg:w-[400px] md:w-[272px] sm:w-[90%] w-full md:h-[264px] h-[200px] shadow flex flex-col justify-between mb-[32px]
                                 md:mt-[-52px] lg:ml-[-52px] md:ml-[-38px]">
                                    <label className="bg-white rounded-full text-[12px] leading-[12px] font-semibold px-[12px] py-[8px] text-black w-fit">
                                        {PRICING_DATA.subscription.card.badge}
                                    </label>
                                    <h5 className="lg:text-[22px] text-[18px] font-medium lg:leading-[30px] leading-[25px] text-[#b8b8b8]">
                                        {PRICING_DATA.subscription.card.title.part1} <span className="block text-white">{PRICING_DATA.subscription.card.title.part2}</span>
                                    </h5>
                                </div>
                                <div className="shadow inline-block rounded-[24px] text-[12px] leading-[12px] py-[9px] mb-[20px] pl-[16px] pr-[8px] font-bold">
                                    <span className="animate-heartbeat w-2 h-2 bg-green-500 rounded-full inline-block mr-[5px]"></span> {PRICING_DATA.subscription.card.status}
                                </div>
                                <h3 className="2xl:text-[32px] 2xl:leading-[32px] lg:text-[30px] lg:leading-[30px] md:text-[28px] md:leading-[28px] text-[26px] leading-[26px] text-black mb-[16px] font-medium">
                                    {PRICING_DATA.subscription.card.heading}
                                </h3>
                                <p className="text-[14px] leading-[22px] text-black font-medium">
                                    {PRICING_DATA.subscription.card.description}
                                </p>
                            </div>
                            <div className="bg-white md:p-[32px] p-[24px] rounded-[12px] shadow">
                                <div className="border-b border-[#d1d5db] mb-[24px]">
                                    <h3 className="2xl:text-[32px] 2xl:leading-[32px] lg:text-[30px] lg:leading-[30px] md:leading-[28px] text-[26px] leading-[26px] text-black mb-[16px] font-medium">
                                        {PRICING_DATA.subscription.unlimited.title}
                                    </h3>
                                    <p className="text-[14px] leading-[22px] text-black font-medium 2xl:w-[64%] lg:w-[69%] w-full pb-[24px]">
                                        {PRICING_DATA.subscription.unlimited.description}
                                    </p>
                                </div>
                                <div className="lg:text-[40px] lg:leading-[40px] md:text-[38px] md:leading-[38px] text-[36px] leading-[36px] font-semibold text-black flex items-center gap-[8px] mb-[24px]">
                                    {PRICING_DATA.subscription.unlimited.price} <small className="text-[12px] leading-[12px] font-semibold text-[#b8b8b8] inline-block">
                                        {PRICING_DATA.subscription.unlimited.period}
                                    </small>
                                </div>
                                <ul className="grid lg:[grid-template-columns:repeat(2,minmax(50px,1fr))] gap-[16px] text-[14px] leading-[16px] font-semibold mb-[32px]">
                                    {PRICING_DATA.subscription.unlimited.features.map((feature, index) => (
                                        <li key={index} className="flex gap-[5px]">
                                            <Check size={16}/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="">
                                    <Link href={PRICING_DATA.subscription.unlimited.cta.href} className="schedule_btn">
                                        <CalendarCheck size={18}/> {PRICING_DATA.subscription.unlimited.cta.text}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow bg-color md:p-[32px] p-[24px] rounded-[12px]">
                            <h4 className="font-medium 2xl:text-[32px] 2xl:leading-[32px] lg:text-[30px] lg:leading-[30px] md:leading-[28px] text-[26px] leading-[26px] mb-[16px]">
                                {PRICING_DATA.singleProject.title}
                            </h4>
                            <div className="flex gap-[24px] justify-between lg:flex-row flex-col">
                                <div className="w-[41%]">
                                    <p className="text-white text-[14px] font-medium leading-[22px]">
                                        {PRICING_DATA.singleProject.description.main} <span className="text-[#b8b8b8]">{PRICING_DATA.singleProject.description.secondary}</span>
                                    </p>
                                </div>
                                <div>
                                    <ul className="grid sm:[grid-template-columns:repeat(2,minmax(50px,1fr))] gap-[16px] text-[14px] leading-[16px] font-semibold">
                                        {PRICING_DATA.singleProject.features.map((feature, index) => (
                                            <li key={index} className="flex gap-[5px]">
                                                <Check size={16}/> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="">
                                    <Link href={PRICING_DATA.singleProject.cta.href} className="white_btn">
                                        <CalendarCheck size={18}/> {PRICING_DATA.singleProject.cta.text}
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

export default PricingSection;
