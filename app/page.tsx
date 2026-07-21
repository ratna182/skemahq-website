import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import TrustedBrands from "@/components/home/trusted-brands";
import CompanyStats from "@/components/home/company-stats";
import Services from "@/components/home/services";
import PortfolioPreview from "@/components/home/portfolio-preview";
import WhySkema from "@/components/home/why-skema";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";
import { ServiceJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Skema HQ | Creative Production House & Event Activation Specialist Jakarta",
  description:
    "Skema HQ adalah creative production house terpercaya di Jakarta Timur. Spesialis booth exhibition, event activation, sales promotion, dan creative fabrication untuk KAO Group, Samsung, dan brand-brand terkemuka di Indonesia.",
  alternates: {
    canonical: "https://skemahq.com",
  },
  openGraph: {
    title: "Skema HQ | Creative Production House & Event Activation Specialist Jakarta",
    description:
      "Creative production house terpercaya di Jakarta. Booth exhibition, event activation, sales promotion, dan creative fabrication untuk brand-brand terkemuka.",
    url: "https://skemahq.com",
  },
};

export default function HomePage() {
  const homeServices = [
    {
      name: "Exhibition Booth",
      description: "Premium booth design and fabrication that attracts visitors and strengthens brand presence at major events.",
      url: "/services#exhibition-booth",
    },
    {
      name: "Event Activation",
      description: "Creative event experiences designed to increase engagement, drive social reach, and create memorable customer interactions.",
      url: "/services#event-activation",
    },
    {
      name: "Sales Promotion",
      description: "End-to-end promotional campaigns supported by experienced field execution, booth staffing, and high-impact displays.",
      url: "/services#sales-promotion",
    },
    {
      name: "Creative Production",
      description: "Design, precision fabrication, large-format printing, and installation with premium quality control.",
      url: "/services#creative-production",
    },
  ];

  return (
    <>
      <ServiceJsonLd services={homeServices} />
      <Hero />
      <TrustedBrands />
      <CompanyStats />
      <Services />
      <PortfolioPreview />
      <WhySkema />
      <Testimonials />
      <CTA />
    </>
  );
}