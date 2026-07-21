"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  ShieldCheck,
  Zap,
  Users,
  Target,
  Compass,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Container from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const stats = [
  { value: "120+", label: "Projects Delivered", description: "Across major exhibition centers in Indonesia" },
  { value: "12+", label: "Years Experience", description: "Specialized in spatial & retail activation" },
  { value: "8+", label: "KAO Group Brands", description: "Biore, Attack, Merries, Laurier & more" },
  { value: "100%", label: "On-Time Handover", description: "Zero delay record at major launch events" },
];

const pillars = [
  {
    icon: Award,
    title: "Precision Craftsmanship",
    description:
      "From high-grade booth fabrication to premium finishing, every detail is engineered for perfection in our 1,000+ sqm workshop.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "Strict structural safety standards, venue regulation compliance, and reliable safety protocols at all exhibition venues.",
  },
  {
    icon: Zap,
    title: "Agile Turnaround",
    description:
      "Fast production pipelines and responsive field logistics ensuring zero delays for major launch events.",
  },
  {
    icon: Users,
    title: "Dedicated Project Team",
    description:
      "A single point of contact overseeing design, engineering, venue permits, and on-site setup.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Briefing & Concept Analysis",
    description: "We analyze brand objectives, venue specifications, target audience flow, and budget scope.",
  },
  {
    step: "02",
    title: "3D Design & Spatial Engineering",
    description: "Photorealistic 3D renders, structural engineering checks, and material selections for approval.",
  },
  {
    step: "03",
    title: "In-House Fabrication",
    description: "Precision carpentry, metalworking, electrical setup, and large-format printing in our production facility.",
  },
  {
    step: "04",
    title: "On-Site Build & QC",
    description: "Overnight installation, lighting calibration, safety verification, and venue handover.",
  },
  {
    step: "05",
    title: "Dismantling & Logistics",
    description: "Post-event dismantling, asset management, and venue clearance executed with zero footprint.",
  },
];

const brandPortfolio = [
  "Biore",
  "Attack",
  "Merries",
  "Laurier",
  "Men's Biore",
  "Samsung",
  "Liese",
  "MegRhythm",
];

export default function AboutView() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <main className="pt-32 pb-32 bg-white min-h-screen">
      <Container>
        {/* Header / Hero */}
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 mb-6">
              <Building2 className="h-3.5 w-3.5 text-neutral-900" />
              About Skema HQ
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-7xl leading-[1.08]">
              Crafting High-Impact Spatial & Event Experiences.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-8 text-xl leading-relaxed text-neutral-600 font-normal">
              Skema HQ is a premier creative production house based in Jakarta, Indonesia.
              We turn ambitious brand visions into physical reality through custom exhibition booths,
              immersive retail activations, and nationwide promotional events.
            </p>
          </FadeIn>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 border-y border-neutral-200/80 py-12">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="border-l-2 border-neutral-950 pl-5">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    {stat.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Story & Interactive Vision/Mission Section */}
        <div className="mt-28 grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
                Our Heritage & Mission
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                Trusted Execution for World-Class Brands in Indonesia.
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base pt-2">
                Founded with a passion for architectural aesthetics and brand storytelling, Skema HQ has grown to become the trusted production partner for industry giants including KAO Group brands (Biore, Biore Guard, Men&apos;s Biore, Merries, Attack, Laurier, Jergens, Liese, MegRhythm) and global tech leaders like Samsung.
              </p>
              <p className="text-neutral-600 leading-relaxed text-base">
                We control the entire lifecycle of spatial production — from initial 3D spatial design and structural engineering to in-house workshop fabrication, field installation, and venue logistics across Indonesia.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn direction="left">
              <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-10 shadow-sm">
                <div className="flex gap-4 border-b border-neutral-200 pb-4 mb-6">
                  <button
                    onClick={() => setActiveTab("vision")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition ${
                      activeTab === "vision"
                        ? "bg-neutral-950 text-white shadow-sm"
                        : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    <Compass className="h-4 w-4" />
                    <span>Our Vision</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("mission")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition ${
                      activeTab === "mission"
                        ? "bg-neutral-950 text-white shadow-sm"
                        : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    <Target className="h-4 w-4" />
                    <span>Our Mission</span>
                  </button>
                </div>

                {activeTab === "vision" ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-extrabold text-neutral-950 tracking-tight">
                      To be Indonesia&apos;s most trusted creative production house.
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      We set the standard for custom spatial fabrication, transforming trade show floors and retail environments into captivating visual touchpoints that drive lasting consumer connection.
                    </p>
                    <div className="pt-4 border-t border-neutral-200/60 space-y-2">
                      <div className="flex items-center gap-3 text-xs font-semibold text-neutral-800">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Innovating spatial architecture for trade shows</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-semibold text-neutral-800">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Zero-compromise fabrication quality control</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-extrabold text-neutral-950 tracking-tight">
                      Flawless execution through engineered precision.
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Our mission is to empower brands with stress-free production execution. We bridge the gap between creative architectural design and robust physical construction, delivering turnkey results on schedule every single time.
                    </p>
                    <div className="pt-4 border-t border-neutral-200/60 space-y-2">
                      <div className="flex items-center gap-3 text-xs font-semibold text-neutral-800">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>100% in-house workshop control</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-semibold text-neutral-800">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Full venue compliance & safety management</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Brand Trust Section */}
        <div className="mt-28 border-t border-neutral-200/80 pt-20">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 text-center">
              Trusted Industry Partners
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 text-center">
              Brands That Depend On Skema HQ
            </h2>
          </FadeIn>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {brandPortfolio.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 text-base font-bold text-neutral-800 shadow-2xs hover:border-neutral-950 hover:bg-white transition"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Pillars of Excellence */}
        <div className="mt-32">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
              Why Brands Trust Us
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              Our Core Pillars of Excellence
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="group h-full rounded-3xl border border-neutral-200/80 bg-neutral-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-neutral-200 shadow-2xs group-hover:bg-neutral-950 group-hover:text-white transition">
                      <Icon className="h-5 w-5 text-neutral-800 group-hover:text-white transition" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-neutral-950 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Workflow */}
        <div className="mt-32 rounded-3xl bg-neutral-950 p-10 sm:p-16 text-white">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                End-to-End Execution
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                How We Deliver Perfection
              </h2>
            </FadeIn>
          </div>

          <div className="mt-16 divide-y divide-neutral-800">
            {workflow.map((step) => (
              <FadeIn key={step.step} direction="up" className="py-8 first:pt-0 last:pb-0">
                <div className="grid md:grid-cols-12 items-start gap-6">
                  <div className="md:col-span-2 text-3xl font-black text-neutral-600 font-mono">
                    {step.step}
                  </div>
                  <div className="md:col-span-4 text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </div>
                  <div className="md:col-span-6 text-neutral-400 text-sm leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
              Ready to bring your brand space to life?
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Consult with our production specialists to discuss your upcoming exhibition or event activation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 shadow-md"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
