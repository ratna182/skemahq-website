import type { Metadata } from "next";
import AboutView from "@/components/about/about-view";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About Us | Skema HQ Creative Production House Jakarta",
  description:
    "Kenali Skema HQ, creative production house di Jakarta yang spesialis dalam booth exhibition custom, event activation, dan retail display untuk KAO Group, Samsung, dan brand-brand global di Indonesia.",
  alternates: {
    canonical: "https://skemahq.com/about",
  },
  openGraph: {
    title: "About Us | Skema HQ Creative Production House Jakarta",
    description:
      "Creative production house di Jakarta, spesialis booth exhibition custom, event activation, dan retail display untuk brand-brand global.",
    url: "https://skemahq.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" },
        ]}
      />
      <AboutView />
    </>
  );
}
