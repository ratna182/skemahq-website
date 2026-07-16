import Hero from "@/components/home/hero";
import TrustedBrands from "@/components/home/trusted-brands";
import CompanyStats from "@/components/home/company-stats";
import Services from "@/components/home/services";
import PortfolioPreview from "@/components/home/portfolio-preview";
import WhySkema from "@/components/home/why-skema";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";
import Footer from "@/components/layout/footer";

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustedBrands />
            <CompanyStats />
            <Services />
            <PortfolioPreview />
            <WhySkema />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}