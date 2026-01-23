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
            <section className="2xl:px-0 px-[15px]">
                <div className="wrapper md:py-[64px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="border border-[#dedede] bg-white rounded-[16px] shadow sm:p-[64px] p-[32px]  text-center">
                        <div className="flex sm:flex-row flex-col justify-center  items-center sm:text-left text-center mb-[24px] gap-2">
                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2  *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                <Avatar className='border-2 border-white'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar className='border-2 border-white'>
                                    <AvatarImage
                                        src="https://github.com/maxleiter.png"
                                        alt="@maxleiter"
                                    />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar className='border-2 border-white'>
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly sx={{ color: '#000', fontSize: '16px' }} className="sm:!m-0 !mx-auto"/>
                                </Stack>
                                <span className='text-[14px] text-[#545454] font-semibold'>99+ Happy clients</span>
                            </div>

                        </div>
                            <h3 className="2xl:text-[30px] md:leading-[30px] md:text-[28px] sm:text-[26px] sm:leading-[26px] text-[24px] leading-[24px] font-medium mb-[32px]">
                                <span className="block text-[#828282]">Like what you see?</span>
                                Book a free discovery call.
                            </h3>
                            <div className="">
                                <Link href="#" className="schedule_btn  mx-auto">
                                    <CalendarCheck size={18} /> Schedule Now
                                </Link>
                            </div>
                    </div>
                </div>
            </section>
           <Footer/>

        </>
    );
};

export default Page;