"use client"

import React, { useState } from 'react';
import {Autoplay, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import slider_img1 from "../../../public/images/slider-img7.png";
import slider_img2 from "../../../public/images/slider-img7.png";
import slider_img3 from "../../../public/images/slider-img7.png";
import slider_img4 from "../../../public/images/slider-img7.png";
import slider_img5 from "../../../public/images/slider-img7.png";
import slider_img6 from "../../../public/images/slider-img7.png";
import slider_img7 from "../../../public/images/slider-img7.png";
import 'swiper/css';
function TrustedSlider() {
    const sliderImages = [
        slider_img1,
        slider_img2,
        slider_img3,
        slider_img4,
        slider_img5,
        slider_img6,
        slider_img7,
        slider_img1,
        slider_img2,
        slider_img3,
        slider_img4,
        slider_img5,
        slider_img6,
        slider_img7,
    ];
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="py-[32px] 2xl:pl-[44px] md:pl-[15px] pl-[10px]">
                    <div className="flex items-center md:flex-row flex-col gap-[32px] justify-between">
                        <div className=" text-[22px] leading-[12px] font-medium text-[#545454]">Trusted by
                              <span className="text-black"> many</span></div>
                        <Swiper
                            className="md:w-[70%] w-full mask client_slider mr-0"
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            freeMode={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                                stopOnLastSlide: false,
                            }}
                            speed={3000}
                            allowTouchMove={false}
                            breakpoints={{
                                360: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >


                            {sliderImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <figure className="w-full h-full">
                                        <Image
                                            src={img}
                                            alt={`Slider image ${index + 1}`}
                                            className="md:w-full w-[200px] h-auto object-contain"
                                        />
                                    </figure>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustedSlider;
