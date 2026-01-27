import React from 'react';
import Header from "@/components/Site/Header";
import Footer from "@/components/Site/Footer";
import TrustedSlider from "@/components/Site/TrustedSlider";
import CallAction from "@/components/Site/CallAction";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Testimonial from "@/components/Site/Testimonial";
import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

function Page() {
    return (
        <>
            <Header/>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede]">
                <div className="wrapper md:pb-[64px] pb-[48px] md:pt-[144px] pt-[128px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="lg:w-[56%] md:w-[82%] w-full mx-auto flex flex-col gap-[32px]">
                        <h1 className="2xl:text-[48px] 2xl:leading-[52px] lg:text-[42px] lg:leading-[46px] md:text-[38px] md:leading-[41px] text-[32px] leading-[35px] text-black font-medium">Crafting a Revolutionary E-Commerce Presence for Architectural Menswear</h1>
                        <ul className="flex gap-[32px]">
                            <li className="flex gap-[8px] text-[14px] leading-[14px] font-semibold"><span className="text-[#545454]">Client</span> <span className="text-black">Axiom</span></li>
                            <li className="flex gap-[8px] text-[14px] leading-[14px] font-semibold"><span className="text-[#545454]">Year</span> <span className="text-black">2025</span></li>
                        </ul>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] font-medium text-black">Axiom approached me to create a distinctive e-commerce experience that would set them apart in the crowded streetwear market. They needed a platform that would showcase their architectural-inspired menswear while providing a seamless shopping experience that reflected their brand philosophy of "structured minimalism."</p>
                        <div>
                            <span className="text-[#545454] text-[14px] leading-[14px] mb-[16px] inline-block font-semibold"> Scope of Work</span>
                            <div className="flex flex-wrap gap-[8px]">
                                <Badge variant="secondary" className="bg-white text-[12px] leading-[12px] text-black border border-[#dedede] font-semibold py-[8px] px-[12px]">Shopify/Framer Development</Badge>
                                <Badge variant="secondary" className="bg-white text-[12px] leading-[12px] text-black border border-[#dedede] font-semibold py-[8px] px-[12px]">Branding</Badge>
                                <Badge variant="secondary" className="bg-white text-[12px] leading-[12px] text-black border border-[#dedede] font-semibold py-[8px] px-[12px]">Web Design</Badge>
                                <Badge variant="secondary" className="bg-white text-[12px] leading-[12px] text-black border border-[#dedede] font-semibold py-[8px] px-[12px]">Photography</Badge>
                            </div>
                        </div>
                        <div className="">
                            <Link href="#" className="lg:text-[18px] lg:leading-[18px] text-[16px] leading-[16px] text-black font-medium flex items-center w-fit gap-1">View Live Site <ArrowUpRight size={18} /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede">
                <div className="wrapper md:py-[64px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="md:py-[48px] py-[32px] lg:w-[56%] md:w-[82%] w-full mx-auto">
                        <h3 className="2xl:text-[32px] lg:text-[30px] md:text-[28px] md:leading-[32px] text-[24px] leading-[27px] lg:leading-[34px] 2xl:leading-[36px] font-medium text-black mb-[24px] md:w-[80%]">Project images are handled through multi-reference.</h3>
                        <p className="lg:text-[16px] text-[14px] leading-[21px] text-black font-medium lg:leading-[24px]">This flexible image system allows you to showcase your work in its best light on project pages. Multi-reference lets you upload images to your CMS and select the ideal ratio for each specific context, add custom descriptions, and create side-by-side image comparisons - all while maintaining visual consistency throughout your portfolio.</p>
                    </div>
                </div>
            </section>
            <Testimonial/>
            <TrustedSlider/>
            <CallAction/>
            <Footer/>
        </>
    );
}

export default Page;