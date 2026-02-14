'use client'
import React from 'react';
import Header from "@/components/Site/Header";
import Footer from "@/components/Site/Footer";
import TrustedSlider from "@/components/Site/TrustedSlider";
import CallAction from "@/components/Site/CallAction";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Testimonial from "@/components/Site/Testimonial";
import { Badge } from "@/components/ui/badge" 
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";

function Page() {
    const projectDetails = {
        title: "Call Donna",
        subtitle: "AI Calling Agent",
        client: "Ultimate AI",
        year: "2025",
        description: "Call Donna is an AI-powered voice agent mimicking Donna D'Errico's tone and personality. Built using OpenAI via OpenRouter, Supabase, and Stripe, it enables real-time AI voice calls with duration tracking and subscription-based billing. Users can subscribe, log in, and experience interactive voice sessions powered by AI with secure payment, authentication, and call management.",
        scopeOfWork: "Development, Branding, Web Design, AI Development, Payment Integration, Authentication, Call Management, Duration Tracking, Subscription-based Billing",
        liveSite: "https://www.calldonnad.com",
        sections: [
            {
                title: "Project Overview",
                description: "Call Donna is an AI-powered voice agent mimicking Donna D'Errico's tone and personality. Built using OpenAI via OpenRouter, Supabase, and Stripe, it enables real-time AI voice calls with duration tracking and subscription-based billing. Users can subscribe, log in, and experience interactive voice sessions powered by AI with secure payment, authentication, and call management.",
                images: [
                    "https://images.iimg.live/images/supreme-creation-8632.webp",
                    "https://images.iimg.live/images/incredible-snapshot-7941.webp"
                ]
            },
            {
                title: "Homepage",
                description: "The homepage introduces Call Donna and guides visitors to subscribe and start their first AI voice call. The layout highlights the value of the experience and uses clear calls-to-action so users can choose a plan, sign up, and begin their session with minimal friction.",
                images: [
                    "https://images.iimg.live/images/epic-vision-5688.webp"
                ]
            },
            {
                title: "Sign In & Sign Up",
                description: "The authentication flow lets users sign in to their existing account or create a new one. The sign-in and sign-up pages share a consistent visual language with the rest of Call Donna, keeping the experience focused on getting users into their AI voice sessions quickly and securely via Supabase authentication.",
                images: [
                    "https://images.iimg.live/images/epic-masterpiece-4329.webp",
                    "https://images.iimg.live/images/prime-moment-7833.webp"
                ]
            },
            {
                title: "Terms & Conditions",
                description: "The terms and conditions page outlines the legal agreement between Call Donna and its users. It covers acceptable use, subscription terms, billing policies, and user responsibilities, ensuring transparency and compliance before users access the AI voice service.",
                images: [
                    "https://images.iimg.live/images/stellar-capture-3599.webp"
                ]
            },
            {
                title: "Subscription Plans",
                description: "Users can choose between the standard plan and the VIP plan. Both tiers are powered by Stripe for secure payment and subscription management, with the VIP plan offering enhanced access or benefits for the AI voice call experience.",
                images: [
                    "https://images.iimg.live/images/spectacular-scene-1829.webp",
                    "https://images.iimg.live/images/ultimate-scene-8492.webp"
                ]
            }
        ]
    }
    return (
        <>
            <Header/>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede]">
                <div className="wrapper md:pb-[64px] pb-[48px] md:pt-[144px] pt-[128px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="lg:w-[56%] md:w-[82%] w-full mx-auto flex flex-col gap-[32px]">
                        <h1 className="2xl:text-[48px] 2xl:leading-[52px] lg:text-[42px] lg:leading-[46px] md:text-[38px] md:leading-[41px] text-[32px] leading-[35px] text-black font-medium">{projectDetails.title}</h1>
                        <ul className="flex gap-[32px]">
                            <li className="flex gap-[8px] text-[14px] leading-[14px] font-semibold"><span className="text-[#545454]">Client</span> <span className="text-black">{projectDetails.client}</span></li>
                            <li className="flex gap-[8px] text-[14px] leading-[14px] font-semibold"><span className="text-[#545454]">Year</span> <span className="text-black">{projectDetails.year}</span></li>
                        </ul>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] font-medium text-black">{projectDetails.description}</p>
                        <div>
                            <span className="text-[#545454] text-[14px] leading-[14px] mb-[16px] inline-block font-semibold"> Scope of Work</span>
                            <div className="flex flex-wrap gap-[8px]">
                                {projectDetails.scopeOfWork.split(',').map((item, index) => (
                                    <Badge variant="secondary" className="bg-white text-[12px] leading-[12px] text-black border border-[#dedede] font-semibold py-[8px] px-[12px]" key={index}>{item}</Badge>
                                ))}
                            </div>
                        </div>
                        <div className="hover_effect btn_hover">
                            <Link href={projectDetails.liveSite} target='_blank' className="lg:text-[18px] lg:leading-[18px] text-[16px] leading-[16px] text-black font-medium flex items-center w-fit gap-1">View Live Site
                                <div className="line_arrow"><ArrowUpRight size={18} /> <ArrowUpRight size={18} /></div></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede">
                <div className="wrapper md:py-[64px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    {projectDetails.sections.map((section, sectionIndex) => (
                        <React.Fragment key={sectionIndex}>
                            {section.images.length === 2 ? (
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-[12px]">
                                    {section.images.map((imgSrc, imgIndex) => (
                                        <PhotoProvider key={imgIndex}>
                                            <PhotoView src={imgSrc}>
                                                <div className="cursor-pointer w-full">
                                                    <Image src={imgSrc} alt={`${section.title} - ${imgIndex + 1}`} width={800} height={600} className="w-full h-auto rounded-[12px]" />
                                                </div>
                                            </PhotoView>
                                        </PhotoProvider>
                                    ))}
                                </div>
                            ) : (
                                <div className="">
                                    <PhotoProvider>
                                        <PhotoView src={section.images[0]}>
                                            <div className="cursor-pointer w-full">
                                                <Image src={section.images[0]} alt={section.title} width={1200} height={800} className="w-full h-auto rounded-[12px]" />
                                            </div>
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>
                            )}
                            <div className="md:py-[48px] py-[32px] lg:w-[56%] md:w-[82%] w-full mx-auto">
                                <h3 className="2xl:text-[32px] lg:text-[30px] md:text-[28px] md:leading-[32px] text-[24px] leading-[27px] lg:leading-[34px] 2xl:leading-[36px] font-medium text-black mb-[24px] md:w-[80%]">{section.title}</h3>
                                <p className="lg:text-[16px] text-[14px] leading-[21px] text-black font-medium lg:leading-[24px]">{section.description}</p>
                            </div>
                        </React.Fragment>
                    ))}
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