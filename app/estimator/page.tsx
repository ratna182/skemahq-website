import type { Metadata } from "next";
import EstimatorView from "@/components/estimator/estimator-view";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Booth & Event Activation",
  description:
    "Hitung perkiraan estimasi anggaran pengerjaan exhibition booth, event activation, retail POSM, dan creative fabrication Skema HQ Jakarta secara transparan.",
  alternates: {
    canonical: "/estimator",
  },
  openGraph: {
    title: "Kalkulator Estimasi Biaya Booth & Event Activation | Skema HQ",
    description:
      "Simulasikan budget pengerjaan booth pameran dan event activation Anda secara realistis dengan kalkulator interaktif Skema HQ.",
    url: `${siteConfig.url}/estimator`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function EstimatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Skema HQ Project Cost Estimator",
    url: `${siteConfig.url}/estimator`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
    provider: {
      "@type": "Organization",
      name: "Skema HQ",
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EstimatorView />
    </>
  );
}
