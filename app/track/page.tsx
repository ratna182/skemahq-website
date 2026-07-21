import type { Metadata } from "next";
import ProjectTrackerView from "@/components/tracker/project-tracker-view";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Client Project Status Tracker",
  description:
    "Lacak progres pengerjaan exhibition booth, event activation, dan pabrikasi workshop Skema HQ secara realtime melalui portal khusus klien.",
  alternates: {
    canonical: "/track",
  },
  openGraph: {
    title: "Client Project Status & Milestone Tracker | Skema HQ",
    description:
      "Pantau tahapan pengerjaan proyek dari desain 3D, pabrikasi workshop, hingga loading-in venue secara transparan.",
    url: `${siteConfig.url}/track`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function TrackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Client Project Status Tracker",
    url: `${siteConfig.url}/track`,
    description: "Portal pelacakan progres pengerjaan proyek produksi Skema HQ secara realtime.",
    publisher: {
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
      <ProjectTrackerView />
    </>
  );
}
