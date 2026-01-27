import React from 'react';
import Header from "@/components/Site/Header";
import ProjectSection from "@/components/Site/ProjectSection";
import Footer from "@/components/Site/Footer";
import TrustedSlider from "@/components/Site/TrustedSlider";
import Image from "next/image";
import user_img from "../../../public/images/user_img.avif";
import Link from "next/link";
import {CalendarCheck} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import CallAction from "@/components/Site/CallAction";

const Page = () => {
    return (
        <>
            <Header/>
            <section className="border-b border-[#dedede] 2xl:px-0 px-[15px] text-center">
                <div className="wrapper md:pt-[144px] pt-[128px] 2xl:px-[44px] md:px-[15px] px-[10px] md:pb-[96px] pb-[48px]">
                    <h1 className="2xl:text-[72px] 2xl:leading-[68px] lg:text-[64px] lg:leading-[60px] md:text-[48px] md:leading-[45px] text-[42px] leading-[39px]
                                 font-medium mb-[32px]">My most <br/> recent work</h1>
                    <p className="md:text-[18px] md:leading-[18px] text-[16px] leading-[16px] font-medium text-black">No fluff, just hard-hitting design projects.</p>
                </div>
            </section>
           <ProjectSection disableAnimations={true}/>
            <TrustedSlider/>
            <CallAction/>
           <Footer/>

        </>
    );
};

export default Page;