import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import PortfolioView from "@/components/portfolio/portfolio-view";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Skema HQ Exhibition & Event Activation",
  description:
    "Jelajahi portofolio proyek Skema HQ: booth pameran, event activation, dan retail displays untuk brand terkemuka seperti Biore, Attack, Laurier, Samsung, dan KAO Group.",
  alternates: {
    canonical: "https://skemahq.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Skema HQ Exhibition & Event Activation",
    description:
      "Portofolio proyek booth pameran, event activation, dan retail displays Skema HQ.",
    url: "https://skemahq.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Portfolio", item: "/portfolio" },
        ]}
      />
      <PortfolioView />
    </>
  );
}