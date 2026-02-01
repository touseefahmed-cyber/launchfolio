"use client";

import { useState, useEffect, useCallback } from "react";
import FadeUp from "@/components/Site/FadeUp";
import CONSTANTS from "@/constant";
import CONTENT from "@/content";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonial() {
    const testimonials = CONTENT.TESTIMONIAL;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);

    const goToPrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [goToNext]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]">
            <div className="wrapper">
                <div className="md:py-[64px] py-[32px] 2xl:px-[44px] md:px-[15px] px-[10px] text-center relative">
                    {/* Navigation Arrows */}
                    {testimonials.length > 1 && (
                        <>
                            <button
                                onClick={goToPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </>
                    )}

                    {/* Testimonial Content */}
                    <div className="md:px-[50px] px-[30px]">
                        <FadeUp key={currentIndex}>
                            <p className={`2xl:text-[28px] 2xl:leading-[39px] lg:text-[26px] lg:leading-[36px] md:text-[24px] md:leading-[33px] text-[22px] leading-[30px]
                                font-medium mb-[24px] lg:w-[70%] md:w-[90%] w-full mx-auto transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                "{currentTestimonial.quote.text}{" "}
                                <strong>{currentTestimonial.quote.highlight}</strong>{" "}
                                {currentTestimonial.quote.ending}"
                            </p>
                        </FadeUp>
                        <div className={`flex gap-[10px] mt-auto text-left justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            <figure className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0">
                                <Image src={CONSTANTS.profile} alt={currentTestimonial.author.imageAlt} width={38} height={38} />
                            </figure>
                            <div className="font-semibold">
                                <h6 className="text-black text-[14px] leading-[14px]">
                                    {currentTestimonial.author.name}
                                </h6>
                                <span className="text-[12px] leading-[12px] text-[#545454]">
                                    {currentTestimonial.author.role}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    {testimonials.length > 1 && (
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-black w-6'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
