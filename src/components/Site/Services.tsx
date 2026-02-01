import FadeIn from "@/components/Site/FadeIn";
import FadeUp from "@/components/Site/FadeUp";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import CONTENT from '@/content';
// Animation delays
const ANIMATION_DELAYS = {
    heading: 0,
    techStackLabel: 0.4,
    techStackBase: 0.4,
    techStackIncrement: 0.1,
};

function Services() {
    const SERVICES = CONTENT.SERVICES;
    return (
        <section className="border-b border-[#dedede] 2xl:px-0 px-[15px]" id="services">
            <div className="wrapper">
                <div className="md:py-[128px] py-[48px] 2xl:px-[44px] md:px-[15px] px-[10px]">
                    <div className="grid md:grid-cols-[56.2%_37.4%] sm:grid-cols-[54.2%_39.4%] grid-cols-[100%] justify-between gap-y-[48px]">
                        {/* Left side */}
                        <div>
                            <FadeUp delay={ANIMATION_DELAYS.heading}>
                                <div className="2xl:text-[64px] 2xl:leading-[64px] lg:text-[54px] lg:leading-[54px] md:text-[46px] md:leading-[46px] text-[36px] leading-[36px]
                                 text-black font-medium md:mb-[60px] mb-[48px]">
                                    <h2 className="text-[#828282]">{SERVICES.heading.part1}</h2>
                                    {SERVICES.heading.part2}
                                </div>
                            </FadeUp>

                            <div>
                                <FadeUp delay={ANIMATION_DELAYS.techStackLabel}>
                                    <span className="block lg:text-[18px] lg:leading-[18px] text-[16px] leading-[16px] font-medium mb-[16px]">
                                        {SERVICES.techStackLabel}
                                    </span>
                                </FadeUp>
                                <TooltipProvider>
                                    <ul className="flex gap-[8px] flex-wrap">
                                        {SERVICES.techStack.map((tech, index) => (
                                            <li key={index}>
                                                <FadeIn delay={ANIMATION_DELAYS.techStackBase + index * ANIMATION_DELAYS.techStackIncrement}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className="border border-[#dedede] shadow w-[56px] h-[56px] rounded-[12px] flex items-center justify-center">
                                                                {tech.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-black text-white rounded-full text-[12px] leading-[12px]">
                                                            <p>{tech.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </FadeIn>
                                            </li>
                                        ))}
                                    </ul>
                                </TooltipProvider>
                            </div>
                        </div>

                        {/* Right side */}
                        <div>
                            <ul className="md:space-y-[38px] space-y-[28px]">
                                {SERVICES.servicesList.map((service, index) => (
                                    <li key={index} className="flex items-center lg:text-[22px] lg:leading-[22px] text-[18px] leading-[18px] font-medium gap-[12px]">
                                        <div className="flex items-center justify-center w-[40px] h-[40px] bg-color rounded-full">
                                            {service.icon}
                                        </div>
                                        {service.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
