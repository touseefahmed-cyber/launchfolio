import Header from "@/components/Site/Header";
import BannerSection from "@/components/Site/BannerSection";
import Footer from "@/components/Site/Footer";
import Blog from "@/components/Site/Blog";
import Faq from "@/components/Site/Faq";
import ClientsSection from "@/components/Site/ClientsSection";
import Services from "@/components/Site/Services";
import About from "@/components/Site/About";
import ProjectSection from "@/components/Site/ProjectSection";
import PricingSection from "@/components/Site/PricingSection";
import TrustedSlider from "@/components/Site/TrustedSlider";
import HappyClients from "@/components/Site/HappyClients";
import Testimonial from "@/components/Site/Testimonial"; // Commented out - not currently used

function Page() {
    return (
        <>
            <Header/>
            <BannerSection/>
            <HappyClients/>
            <ProjectSection/>
            <Testimonial/>
            <Services/>
            <About/>
            <PricingSection/>
            <TrustedSlider/>
            <ClientsSection/>
            <Faq/>
            <Blog/>
            <Footer/>
        </>
    );
}

export default Page;

