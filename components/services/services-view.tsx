"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  Megaphone,
  Wrench,
  CheckCircle,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { serviceFaqs } from "@/data/faqs";

const detailedServices = [
  {
    id: "exhibition-booth",
    icon: Layers,
    title: "Exhibition Booth Design & Fabrication",
    subtitle: "Custom spatial design that commands attention in major exhibition halls.",
    description:
      "We build custom exhibition booths engineered for maximum brand impact, optimal visitor flow, and complete structural safety. From single-story modular setups to double-decker island booths at ICE BSD, JCC Senayan, and JIExpo Kemayoran.",
    deliverables: [
      "Custom 3D Spatial Renders & Floor Plans",
      "Structural Engineering & Lighting Layout",
      "Workshop Woodworking, Metal, & Acrylic Fabrication",
      "Overnight On-Site Installation & Dismantling",
      "AV Equipment, LED Screen, & Sound Setup",
      "Official Venue Technical Documentation & Permits",
    ],
    tags: ["Custom Booths", "Double-Decker", "ICE BSD", "JCC Senayan", "JIExpo"],
  },
  {
    id: "event-activation",
    icon: Sparkles,
    title: "Event & Retail Brand Activation",
    subtitle: "Experiential activations that turn visitors into loyal brand advocates.",
    description:
      "Engage your target audience through interactive brand experiences, pop-up stores, photobooth installations, and experiential marketing activations designed for high social media sharing.",
    deliverables: [
      "Experiential Mall & Retail Pop-Up Booths",
      "Interactive Game & AR/VR Touchpoint Integration",
      "Custom Branded Photobooths & Wall Installations",
      "Crowd Flow & Queue Management Layouts",
      "Product Demonstration Counter Setup",
      "On-Site Technical Event Supervision",
    ],
    tags: ["Mall Pop-Ups", "Interactive Tech", "Photobooths", "Roadshows"],
  },
  {
    id: "sales-promotion",
    icon: Megaphone,
    title: "Sales Promotion & Field Execution",
    subtitle: "Turnkey promotional execution for retail stores, supermarkets, and expos.",
    description:
      "Boost retail velocity and campaign conversions with custom POSM (Point of Sale Materials), promotional counters, endcap displays, and trained brand ambassador management.",
    deliverables: [
      "Custom POSM & Endcap Display Production",
      "Promotional Counters & Sampling Stations",
      "SPG / SPB Outfit & Wardrobe Production",
      "Nationwide Logistics & Store Delivery",
      "Merchandising Display Maintenance",
      "Campaign Performance Photo & Video Logs",
    ],
    tags: ["POSM Production", "Promotional Counters", "Retail Endcaps", "SPG Management"],
  },
  {
    id: "creative-production",
    icon: Wrench,
    title: "Creative Fabrication & Printing",
    subtitle: "Precision carpentry, metalwork, acrylics, and large-format printing.",
    description:
      "Our 1,000+ sqm in-house workshop produces premium quality physical assets with fast turnaround times and strict quality control before shipping.",
    deliverables: [
      "Custom Carpentry & CNC Wood Cutting",
      "Metal Welding & Framework Engineering",
      "UV & Eco-Solvent Large Format Printing",
      "Acrylic Molding, Laser Cutting, & LED Signs",
      "Backlit Stretch Fabric & Backdrop Systems",
      "Secure Warehousing & Asset Storage",
    ],
    tags: ["CNC Woodworking", "Large Format UV Print", "Acrylic & Neon Signs", "Backdrops"],
  },
];

export default function ServicesView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredServices =
    selectedFilter === "all"
      ? detailedServices
      : detailedServices.filter((s) => s.id === selectedFilter);

  return (
    <main className="pt-32 pb-32 bg-white min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
              Services & Capabilities
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-7xl leading-[1.08]">
              End-to-End Creative Production Services.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-8 text-xl leading-relaxed text-neutral-600 font-normal">
              Skema HQ delivers comprehensive solutions from initial architectural 3D rendering
              and workshop fabrication to field deployment and logistics across Indonesia.
            </p>
          </FadeIn>
        </div>

        {/* Filter Bar */}
        <div className="mt-16 border-b border-neutral-200 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                selectedFilter === "all"
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              All Capabilities
            </button>
            {detailedServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedFilter(service.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                  selectedFilter === service.id
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {service.title.split(" ")[0]} {service.title.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Services Section */}
        <div className="mt-16 space-y-16">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/6287889527901?text=Halo%20Skema%20HQ,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(
              service.title
            )}`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-3xl border border-neutral-200/80 bg-neutral-50/40 p-8 sm:p-14 transition duration-300 hover:border-neutral-400 hover:shadow-xl"
              >
                <FadeIn direction="up">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-2xl">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-md mb-6">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
                          Service 0{index + 1}
                        </span>
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-neutral-200/60 px-2 py-0.5 text-[10px] font-bold text-neutral-600 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-base font-semibold text-neutral-700">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-neutral-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:w-80 space-y-3">
                      <Link
                        href="/contact"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 shadow-sm"
                      >
                        <span>Request Official Quote</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-600 bg-emerald-50 px-6 py-3 text-xs font-bold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Quick WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-10 pt-8 border-t border-neutral-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
                      Scope & Deliverables
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-neutral-900 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-neutral-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>

        {/* Service FAQ Accordion */}
        <div className="mt-32 border-t border-neutral-200/80 pt-20 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 text-center">
              Technical Capabilities FAQ
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 text-center">
              Service Delivery & Execution Questions
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                <div
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="cursor-pointer rounded-2xl border border-neutral-200/80 bg-neutral-50/40 p-6 transition duration-200 hover:border-neutral-400"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-bold text-neutral-950">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180 text-neutral-950" : ""
                      }`}
                    />
                  </div>
                  {openFaq === idx && (
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 pt-4 border-t border-neutral-200/60">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center max-w-3xl mx-auto rounded-3xl bg-neutral-950 p-12 text-white shadow-xl">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Have a custom project specification?
            </h2>
            <p className="mt-4 text-neutral-400 text-base">
              Send us your floorplan or design brief and our technical production team will provide a comprehensive estimate within 24 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
              >
                <span>Consult Our Production Team</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
