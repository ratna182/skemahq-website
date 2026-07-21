import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/constants/site";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Skema HQ | Creative Production House & Event Activation Jakarta",
    template: "%s | Skema HQ",
  },
  description:
    "Skema HQ adalah creative production house terpercaya di Jakarta. Spesialis exhibition booth, event activation, sales promotion, dan creative fabrication untuk KAO Group, Samsung, dan brand-brand terkemuka.",
  keywords: [
    "Skema HQ",
    "Creative Production House",
    "Event Activation Specialist",
    "Exhibition Booth Jakarta",
    "Kontraktor Pameran Jakarta",
    "Sales Promotion Agency",
    "Creative Fabrication Indonesia",
    "Event Organizer Jakarta",
    "KAO Group Indonesia Vendor",
    "Booth Design Fabrication",
  ],
  authors: [{ name: "Skema HQ", url: siteConfig.url }],
  creator: "Skema HQ",
  publisher: "Skema HQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: "Skema HQ | Creative Production House & Event Activation Jakarta",
    description:
      "Spesialis exhibition booth, event activation, sales promotion, dan creative fabrication untuk brand-brand terkemuka di Indonesia.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Skema HQ - Creative Production House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skema HQ | Creative Production House & Event Activation Jakarta",
    description:
      "Spesialis exhibition booth, event activation, sales promotion, dan creative fabrication di Indonesia.",
    images: [siteConfig.ogImage],
    creator: "@skemahq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}