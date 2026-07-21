import type { Metadata } from "next";
import ContactView from "@/components/contact/contact-view";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { contactFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact Skema HQ | Konsultasi Booth & Event Activation Jakarta",
  description:
    "Hubungi Skema HQ untuk konsultasi booth exhibition, event activation, dan sales promotion di Jakarta. Tersedia via WhatsApp, email, dan formulir proyek. Respons cepat dalam 24 jam.",
  alternates: {
    canonical: "https://skemahq.com/contact",
  },
  openGraph: {
    title: "Contact Skema HQ | Konsultasi Booth & Event Activation Jakarta",
    description:
      "Hubungi Skema HQ untuk konsultasi booth exhibition dan event activation. Tersedia via WhatsApp, email, dan formulir proyek.",
    url: "https://skemahq.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contact" },
        ]}
      />
      <FaqJsonLd
        faqs={contactFaqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />
      <ContactView />
    </>
  );
}
