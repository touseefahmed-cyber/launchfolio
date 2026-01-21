import React from "react";
import {RefreshCw, MessageSquare, HandCoins, Check, CalendarCheck} from 'lucide-react';
import Link from "next/link";
import FadeUp from "@/components/Site/FadeUp";
function Testimonial() {
    return (
        <section className="border-b border-[#dedede]">
            <div className="wrapper">
                <div className="py-[64px] px-[44px] ">
                    <div className="flex justify-between items-end mb-[64px]">
                        <FadeUp>
                            <div className="text-[64px] leading-[64px] text-black font-medium text-left">
                                <h2 className="text-[#828282]">From my blog,</h2>
                                <span>design insights.</span>
                            </div>
                        </FadeUp>

                        <div className="w-[38%] text-left">
                            <p className="text-[22px] leading-[30px] font-medium"><strong>Clear costs, no hidden fees.</strong> Select from monthly subscriptions or individual project rates.</p>
                        </div>
                    </div>
                    <div className="grid-cols-3 grid justify-between mb-[96px]">
                        <div className="">
                            <h5 className="text-[16px] leading-[16px] font-semibold text-black mb-[8px] flex items-center gap-[8px]"><RefreshCw size={16}/> Subscribe</h5>
                            <p className="tetx-[#545454] text-[16px] leading-[24px] font-medium text-[#545454] w-[82%]">Subscribe via stripe & start requesting through my trello board.</p>
                        </div>
                        <div className="">
                            <h5 className="text-[16px] leading-[16px] font-semibold text-black mb-[8px] flex items-center gap-[8px]"><MessageSquare size={16}/> Request</h5>
                            <p className="tetx-[#545454] text-[16px] leading-[24px] font-medium text-[#545454] w-[82%]">Request whatever service I offer, from branding to web design.</p>
                        </div>
                        <div className="">
                            <h5 className="text-[16px] leading-[16px] font-semibold text-black mb-[8px] flex items-center gap-[8px]"><HandCoins size={16}/> Receive</h5>
                            <p className="tetx-[#545454] text-[16px] leading-[24px] font-medium text-[#545454] w-[82%]">Receive your design within 48 hours on average.</p>
                        </div>
                    </div>
                    <div className="bg-[#f0f0f0] rounded-[6px] p-[6px]">
                        <div className="grid grid-cols-[41.2%_58%] gap-[6px] mb-[6px]">
                            <div className="bg-white p-[32px] rounded-[12px] shadow">
                                <div className="bg-color p-[24px] rounded-[24px] w-[400px] h-[264px] shadow flex flex-col justify-between mb-[32px] mt-[-52px] ml-[-52px]">
                                    <label className="bg-white rounded-full text-[12px] leading-[12px] font-semibold px-[12px] py-[8px] text-black w-fit">Pause or cancel anytime</label>
                                    <h5 className="text-[22px] font-medium leading-[30px] text-[#b8b8b8]">Subscription design services <span className="block text-white">for brands who move fast. </span></h5>
                                </div>
                                <div className="shadow inline-block rounded-[24px] text-[12px] leading-[12px] py-[9px] mb-[20px] pl-[16px] pr-[8px] font-bold">
                                    <span className="animate-heartbeat w-2 h-2 bg-green-500 rounded-full inline-block mr-[5px]"></span> Slots available</div>
                                <h3 className="text-[32px] leading-[32px] text-black mb-[16px] font-medium">Hire me today</h3>
                                <p className="text-[14px] leading-[22px] text-black font-medium">Skip the agency markup and work directly with an experienced designer.</p>
                            </div>
                            <div className="bg-white p-[32px] rounded-[12px] shadow">
                                <div className="border-b border-[#d1d5db] mb-[24px]">
                                    <h3 className="text-[32px] leading-[32px] text-black mb-[16px] font-medium">Unlimited
                                        Design</h3>
                                    <p className="text-[14px] leading-[22px] text-black font-medium w-[64%]  pb-[24px] ">One
                                        flat monthly rate for unlimited design requests. Ideal for ongoing design
                                        requirements.</p>
                                </div>
                                <div
                                    className="text-[40px] leading-[40px] font-semibold text-black flex items-center gap-[8px] mb-[24px]">$8,000 <small
                                    className="text-[12px] leading-[12px]
                                 font-semibold text-[#b8b8b8] inline-block">/ month</small></div>
                                <ul className="grid [grid-template-columns:repeat(2,minmax(50px,1fr))] gap-[16px] text-[14px] leading-[16px] font-semibold mb-[32px]">
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        No contracts or commitments
                                    </li>
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        Pause or cancel anytime
                                    </li>
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        Multiple Brands
                                    </li>
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        Unlimited requests
                                    </li>
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        Avg 48 hour turnaround
                                    </li>
                                    <li className="flex gap-[5px]">
                                        <Check size={16}/>
                                        Framer development
                                    </li>
                                </ul>
                                <div className="">
                                    <Link href="#" className="schedule_btn">
                                        <CalendarCheck size={18}/> Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow bg-color p-[32px] rounded-[12px]">
                            <h4 className="font-medium text-[32px] leading-[32px] mb-[16px]">Single Project</h4>
                            <div className="flex gap-[24px] justify-between">
                                <div className="w-[41%]">
                                    <p className="text-white text-[14px] font-medium leading-[22px]">Comprehensive
                                        design services for any project scope. <span className="text-[#b8b8b8]">Ideal for one-time design needs or individual tasks.</span>
                                    </p>
                                </div>
                                <div>
                                    <ul className="grid [grid-template-columns:repeat(2,minmax(50px,1fr))] gap-[16px] text-[14px] leading-[16px] font-semibold">
                                        <li className="flex gap-[5px]"><Check size={16}/> Clearly defined scope</li>
                                        <li className="flex gap-[5px]"><Check size={16}/> Clearly defined scope</li>
                                        <li className="flex gap-[5px]"><Check size={16}/> Clearly defined scope</li>
                                        <li className="flex gap-[5px]"><Check size={16}/> Clearly defined scope</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <Link href="#" className="white_btn">
                                        <CalendarCheck size={18}/> Get quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
