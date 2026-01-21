"use client"

import React from 'react';
import Image from "next/image";
import slider_img1 from "../../../public/images/slider-img7.png";
import slider_img2 from "../../../public/images/slider-img7.png";
import slider_img3 from "../../../public/images/slider-img7.png";
import slider_img4 from "../../../public/images/slider-img7.png";
import slider_img5 from "../../../public/images/slider-img7.png";
import slider_img6 from "../../../public/images/slider-img7.png";
import slider_img7 from "../../../public/images/slider-img7.png";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";
import 'swiper/css';



function HappyClients() {
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
        <section className="border-b border-[#dedede]  overflow-hidden">
            <div className="wrapper pl-[44px] py-[32px]">
                <div className="flex items-center justify-between">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
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
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly sx={{ color: '#000', fontSize: '16px' }} />
                            </Stack>
                            <span className='text-[14px] text-[#545454] font-semibold'>99+ Happy clients</span>
                        </div>

                    </div>
                    <Swiper
                        className="w-[70%] mask client_slider"
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
                            640: { slidesPerView: 2 },
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
                                        className="w-full h-auto object-contain"
                                    />
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default HappyClients;
