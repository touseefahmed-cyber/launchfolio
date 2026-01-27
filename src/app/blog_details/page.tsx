import React from 'react';
import Header from "@/components/Site/Header";
import Footer from "@/components/Site/Footer";
import blog_img1 from "../../../public/images/blog_img1.png";
import Image from "next/image";
import Link from "next/link";
import {Facebook, Instagram, Globe, ArrowUpRight} from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function Page() {
    return (
        <>
            <Header/>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede]">
                <div className="wrapper md:pt-[144px] pt-[128px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="lg:w-[58.6%] md:w-[82%] w-full mx-auto flex flex-col gap-[32px]">
                       <div className="">
                           <Breadcrumb className="mb-[24px] gap-[2px]">
                               <BreadcrumbList className="!gap-[6px]">
                                   <BreadcrumbItem>
                                       <BreadcrumbLink href="/" className="text-[12px] leading-[12px] font-semibold text-black">Blog /</BreadcrumbLink>
                                   </BreadcrumbItem>
                                   <BreadcrumbItem>
                                       <BreadcrumbLink href="/components" className="text-[12px] leading-[12px] font-semibold text-[#545454]">Process /</BreadcrumbLink>
                                   </BreadcrumbItem>
                                   <BreadcrumbItem>
                                       <BreadcrumbPage className="text-[12px] leading-[12px] font-semibold text-[#545454]">How designers and developers can actually collaborate.</BreadcrumbPage>
                                   </BreadcrumbItem>
                               </BreadcrumbList>
                           </Breadcrumb>
                           <h1 className="mb-[18px] 2xl:text-[48px] 2xl:leading-[52px]
                            lg:text-[42px] lg:leading-[46px] md:text-[38px] md:leading-[41px] text-[32px] leading-[35px] text-black font-medium">How designers and developers can actually collaborate.</h1>
                           <ul className="flex gap-[12px]">
                               <li className="text-[12px] leading-[12px] font-semibold text-[#545454]">Mar 6, 2025</li>
                               <li className="text-[12px] leading-[12px] font-semibold text-black">By Joseph Alexander</li>
                           </ul>
                       </div>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] font-medium text-black mb-[48px]">Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster through true collaboration.</p>
                    </div>
                    <figure className="md:h-[500px] h-[300px]">
                        <Image src={blog_img1} alt="blog_img1" className="w-full h-full object-cover rounded-tl-[16px] rounded-tr-[16px]"/>
                    </figure>
                </div>
            </section>
            <section className="2xl:px-0 px-[15px] border-b border-[#dedede]">
                <div className="wrapper md:py-[64px] py-[32px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="lg:w-[58.6%] md:w-[82%] w-full mx-auto">
                        <h2 className="text-black 2xl:text-[32px] lg:text-[30px] md:text-[28px] text-[24px] 2xl:leading-[36px] lg:leading-[34px] md:leading-[32px] leading-[27px] font-medium">The handoff from hell</h2>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] text-black font-medium mt-[24px]">Sarah spent three weeks perfecting the micro-interactions. Every animation curve, every state change, every pixel pushed to create the perfect user experience. She annotated everything, wrote detailed specs, and delivered a pristine Figma file. Two weeks later, she saw the implementation. It looked like her design's distant cousin who'd been in a bar fight.</p>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] text-black font-medium mt-[24px]">"That's not technically feasible," the developer explained. "These animations would tank performance. This layout breaks on mobile. That component doesn't exist in our system."</p>
                        <p className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] text-black font-medium mt-[24px]">Sarah's story repeats daily across thousands of companies. The designer-developer gap remains one of tech's most persistent problems, surviving countless process improvements, tools, and methodologies. It's not about personalities or skill—it's about fundamentally different ways of seeing the world.</p>
                        <h3 className="lg:text-[24px] text-[22px] font-medium lg:leading-[31px] leading-[28px] mt-[40px] text-black ">The two cultures problem</h3>
                        <div className="border border-[#dedede] bg-white rounded-[16px] box-shadow p-[24px] md:w-[348px] mt-[64px]">
                            <h4 className="text-[18px] leading-[22px] mb-[6px] text-black font-medium">Follow me to keep in touch</h4>
                            <p className="text-[14px] text-[#545454] leading-[22px] mb-[18px]">Where I share my creative journey, design experiments, and industry thoughts.</p>
                            <ul className="flex items-center gap-[6px] ">
                                <li>
                                    <Link href="#" className="w-[46px] h-[30px] flex items-center justify-center bg-black text-white rounded-full text-[12px] leading-[12px]">
                                        1,214
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-black text-white rounded-full">
                                        <Facebook size={14}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-black text-white rounded-full">
                                        <Instagram size={14}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-black text-white rounded-full">
                                        <Globe size={14}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:px-0 px-[15px]">
                <div className="wrapper md:py-[64px] py-[32px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="lg:w-[58.6%] md:w-[82%] w-full mx-auto">
                        <div className="flex items-baseline justify-between mb-[48px]">
                            <h2 className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leaing-[36px] font-medium text-black">More insights</h2>
                            <div className="">
                                <Link href="#" className="lg:text-[18px] lg:leading-[18px] text-[16px] leading-[16px]
                                 text-black font-medium flex items-center w-fit gap-1">View All <ArrowUpRight size={18} /></Link>
                            </div>
                        </div>
                        <div className="flex gap-[20px] flex-col">
                            <div className="">
                                <Link href="" className="flex items-center justify-between bg-white border border-[#dedede] rounded-[16px] p-[12px] box-shadow">
                                    <div className="flex gap-[18px] items-center">
                                        <figure className="w-[64px] h-[64px] overflow-hidden rounded-[12px] shrink-0">
                                            <Image src={blog_img1} alt="blog_img1" className="w-full h-full object-cover"/>
                                        </figure>
                                        <div className="">
                                            <h5 className="lg:text-[16px] text-[14px] text-black lg:leading-[24px] leading-[18px]  font-medium">How designers and developers can actually collaborate.</h5>
                                            <span className="text-[12px] leading-[12px] text-[#545454]">Apr 22, 2025</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                            <div className="">
                                <Link href="" className="flex items-center justify-between bg-white border border-[#dedede] rounded-[16px] p-[12px] box-shadow">
                                    <div className="flex gap-[18px] items-center">
                                        <figure className="w-[64px] h-[64px] overflow-hidden rounded-[12px] shrink-0">
                                            <Image src={blog_img1} alt="blog_img1" className="w-full h-full object-cover"/>
                                        </figure>
                                        <div className="">
                                            <h5 className="lg:text-[16px] text-[14px] text-black lg:leading-[24px] leading-[18px]  font-medium">How designers and developers can actually collaborate.</h5>
                                            <span className="text-[12px] leading-[12px] text-[#545454]">Apr 22, 2025</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                            <div className="">
                                <Link href="" className="flex items-center justify-between bg-white border border-[#dedede] rounded-[16px] p-[12px] box-shadow">
                                    <div className="flex gap-[18px] items-center">
                                        <figure className="w-[64px] h-[64px] overflow-hidden rounded-[12px] shrink-0">
                                            <Image src={blog_img1} alt="blog_img1" className="w-full h-full object-cover"/>
                                        </figure>
                                        <div className="">
                                            <h5 className="lg:text-[16px] text-[14px] text-black lg:leading-[24px] leading-[18px]  font-medium">How designers and developers can actually collaborate.</h5>
                                            <span className="text-[12px] leading-[12px] text-[#545454]">Apr 22, 2025</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Page;