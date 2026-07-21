import type { Metadata } from "next";
import ServicesView from "@/components/services/services-view";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { serviceFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Services & Capabilities | Skema HQ Exhibition & Activation Jakarta",
  description:
    "Layanan lengkap Skema HQ: Desain dan Fabrikasi Booth Exhibition Custom, Event dan Retail Brand Activation, Sales Promotion dan POSM, serta In-House Creative Production di Jakarta.",
  alternates: {
    canonical: "https://skemahq.com/services",
  },
  openGraph: {
    title: "Services & Capabilities | Skema HQ Exhibition & Activation",
    description:
      "Booth exhibition custom, event activation, sales promotion, dan creative production — layanan lengkap dari Skema HQ Jakarta.",
    url: "https://skemahq.com/services",
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      name: "Exhibition Booth Fabrication",
      description: "Custom design and precision fabrication of premium exhibition booths for major events and trade shows in Indonesia.",
      url: "/services#exhibition-booth",
    },
    {
      name: "Brand & Event Activation",
      description: "Interactive brand activation, experiential marketing, roadshows, and launch events that leave a lasting impact.",
      url: "/services#event-activation",
    },
    {
      name: "Sales Promotion & POSM",
      description: "Retail point of sale materials, booth staffing management, field marketing, and promotional displays.",
      url: "/services#sales-promotion",
    },
    {
      name: "Creative Production & Printing",
      description: "Large format printing, CNC fabrication, metal and acrylic works, and professional on-site installation.",
      url: "/services#creative-production",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />
      <ServiceJsonLd services={serviceList} />
      <FaqJsonLd
        faqs={serviceFaqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />
      <ServicesView />
    </>
  );
}
