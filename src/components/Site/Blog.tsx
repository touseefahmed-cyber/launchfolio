import React from 'react';
import Link from "next/link";
import blog_img1 from "../../../public/images/blog_img1.png";
import blog_img2 from "../../../public/images/blog_img2.png";
import blog_img3 from "../../../public/images/blog_img3.png";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import FadeUp from "@/components/Site/FadeUp";

// Blog content data
const BLOG_DATA = {
    heading: {
        part1: "From my blog,",
        part2: "design insights.",
    },
    viewAll: {
        text: "View All",
        href: "#",
    },
    author: "Joseph Alexander",
    posts: [
        {
            id: 1,
            image: blog_img1,
            imageAlt: "How designers and developers can actually collaborate",
            title: "How designers and developers can actually collaborate.",
            date: "Apr 22, 2025",
            description: "Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster through true collaboration.",
            href: "#",
            isLarge: true,
        },
        {
            id: 2,
            image: blog_img2,
            imageAlt: "Why faster isn't always better",
            title: "Why faster isn't always better.",
            date: "Apr 22, 2025",
            description: "",
            href: "#",
            isLarge: false,
        },
        {
            id: 3,
            image: blog_img3,
            imageAlt: "Why faster isn't always better",
            title: "Why faster isn't always better.",
            date: "Apr 22, 2025",
            description: "",
            href: "#",
            isLarge: false,
        },
    ],
};

// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
};

function Blog() {
    return (
        <section className="2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="flex justify-between sm:items-end sm:flex-row flex-col gap-y-4 md:mb-[64px] mb-[40px]">
                        <FadeUp delay={ANIMATION_DELAYS.heading}>
                            <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px] text-black font-medium">
                                <h2 className="text-[#828282]">{BLOG_DATA.heading.part1}</h2>
                                {BLOG_DATA.heading.part2}
                            </div>
                        </FadeUp>
                        <div>
                            <Link href={BLOG_DATA.viewAll.href} className="flex sm:text-[18px] sm:leading-[18px] text-[16px] leading-[16px] font-medium justify-end">
                                {BLOG_DATA.viewAll.text} <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[12px]">
                        {BLOG_DATA.posts.map((post) => (
                            <div
                                key={post.id}
                                className={`border border-[#dedede] bg-white rounded-[16px] shadow group overflow-hidden ${
                                    post.isLarge ? "col-span-full" : ""
                                }`}
                            >
                                <Link href={post.href} className={post.isLarge ? "md:flex" : ""} data-cursor-text="Article">
                                    <figure
                                        className={`${
                                            post.isLarge
                                                ? "md:h-[500px] sm:h-[275px] h-[186px] lg:w-[488px] md:w-[340px] w-full shrink-0 overflow-hidden"
                                                : "sm:h-[275px] h-[186px] w-full transition-all duration-500 ease-in-out overflow-hidden "
                                        }`}
                                    >
                                        <Image
                                            src={post.image}
                                            alt={post.imageAlt}
                                            className={`w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out ${
                                                post.isLarge
                                                    ? "md:rounded-tl-[16px] md:rounded-bl-[16px]"
                                                    : "rounded-tl-[16px] rounded-tr-[16px]"
                                            }`}
                                        />
                                    </figure>
                                    <div className={`sm:p-[32px] p-[20px] ${post.isLarge ? "flex justify-center flex-col" : ""}`}>
                                        <h4
                                            className={`${
                                                post.isLarge
                                                    ? "2xl:text-[32px] 2xl:leading-[36px] lg:text-[30px] lg:leading-[34px] md:text-[28px] md:leading-[32px] text-[20px] leading-[26px]"
                                                    : "lg:text-[24px] lg:leading-[24px] md:text-[22px] md:leading-[28px] text-[22px] leading-[26px]"
                                            } font-medium text-black mb-[20px]`}
                                        >
                                            {post.title}
                                        </h4>
                                        <div
                                            className={`flex gap-[12px] text-[12px] leading-[12px] font-semibold ${
                                                post.isLarge ? "mb-[24px]" : ""
                                            }`}
                                        >
                                            <div className="text-[#545454]">{post.date}</div>
                                            <div className="text-black">By {BLOG_DATA.author}</div>
                                        </div>
                                        {post.description && (
                                            <p className="text-[14px] leading-[22px] font-medium text-[#545454]">
                                                {post.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;