import React from 'react';
import Header from "@/components/Site/Header";
import Footer from "@/components/Site/Footer";
import Image from "next/image";
import blog_img1 from "../../../public/images/blog_img1.png";
import Blog from "@/components/Site/Blog";

const Page = () => {
    return (
        <>
            <Header/>
            <section className="border-b border-[#dedede] 2xl:px-0 px-[15px] ">
                <div
                    className="wrapper md:pt-[144px] pt-[128px] 2xl:px-[44px] md:px-[15px] px-[10px] ">
                    <div className="lg:w-[70%] md:w-[80%] w-full mx-auto text-center">
                        <h1 className=" lg:text-[48px] lg:leading-[52px] md:text-[38px] md:leading-[41px] text-[32px] leading-[35px]
                                 font-medium mb-[32px]">My design insights & <br className="md:block hidden"/> creative resources</h1>
                        <p className="lg:text-[18px] lg:leading-[24px] text-[14px] leading-[21px] font-medium text-black mb-[48px]">A collection of
                            articles sharing professional design expertise, creative processes, and strategic thinking.
                            Browse these resources to elevate your brand and understand the impact thoughtful design can
                            have on your business.</p>
                    </div>
                    <div
                        className="border border-[#dedede] bg-white rounded-tl-[16px] rounded-tr-[16px] group overflow-hidden col-span-full">
                        <a className="md:flex" data-cursor-text="Article" href="#">
                            <figure
                                className="md:h-[500px] sm:h-[275px] h-[186px] lg:w-[488px] md:w-[340px] w-full shrink-0 overflow-hidden">
                                <Image alt="How designers and developers can actually collaborate" src={blog_img1} className="w-full h-full
                                 group-hover:scale-[1.1] transition-all duration-500 ease-in-out rounded-tl-[16px] "/>
                            </figure>
                            <div className="sm:p-[32px] p-[20px] flex justify-center flex-col"><h4
                                className="2xl:text-[32px] 2xl:leading-[36px] lg:text-[30px]
                                lg:leading-[34px] md:text-[28px] md:leading-[32px] text-[20px] leading-[26px] font-medium text-black mb-[20px]">How
                                designers and developers can actually collaborate.</h4>
                                <div className="flex gap-[12px] text-[12px] leading-[12px] font-semibold mb-[24px]">
                                    <div className="text-[#545454]">Apr 22, 2025</div>
                                    <div className="text-black">By Joseph Alexander</div>
                                </div>
                                <p className="text-[14px] leading-[22px] font-medium text-[#545454]">Discover proven
                                    strategies to bridge the designer-developer gap. Learn how top teams eliminate
                                    handoff friction and ship better products faster through true collaboration.</p>
                            </div>
                        </a></div>
                </div>
            </section>
            <Blog/>
           <Footer/>

        </>
    );
};

export default Page;