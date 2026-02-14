"use client"
import {Autoplay, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image"; 
import 'swiper/css';

type SliderItem = {
    src: string;
    label?: string;
};

function TrustedSlider() {
    const sliderItems: SliderItem[] = [
        { src: "https://www.amiinu.com/_next/static/media/logo.f89dceac.svg" },
        { src: "https://betainos-cms.s3.eu-north-1.amazonaws.com/LOGO_HEADER_FOOTER_BETAINOS_c360afd039_586930a408.svg" },
        { src: "https://www.arvai.app/_next/static/media/white-logo.4f70e01d.svg", label: "ArvAi" },
        // { src: "", label: ÷"Ultimate AI" },
        { src: "https://images.iimg.live/images/excellent-snapshot-5934.webp" },
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


                            {sliderItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <figure className="w-full h-full flex flex-row items-center justify-center gap-2">
                                        <Image
                                            src={item.src}
                                            alt={item.label ?? `Slider image ${index + 1}`}
                                            width={120}
                                            height={40}
                                            className="md:w-full w-[200px] h-auto object-contain"
                                        />
                                        {item.label && (
                                            <figcaption className="text-sm font-medium text-[#545454] whitespace-nowrap">
                                                {item.label}
                                            </figcaption>
                                        )}
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
