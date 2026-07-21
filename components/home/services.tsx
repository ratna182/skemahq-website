"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Sparkles, Megaphone, Hammer } from "lucide-react";
import Container from "../ui/container";
import { StaggerContainer, StaggerItem } from "../ui/motion-wrapper";

const services = [
  {
    number: "01",
    title: "Exhibition Booth",
    slug: "exhibition-booth",
    icon: Box,
    description:
      "Premium booth design and fabrication that attracts visitors and strengthens your brand presence at major events.",
  },
  {
    number: "02",
    title: "Event Activation",
    slug: "event-activation",
    icon: Sparkles,
    description:
      "Creative event experiences designed to increase engagement, drive social reach, and create memorable customer interactions.",
  },
  {
    number: "03",
    title: "Sales Promotion",
    slug: "sales-promotion",
    icon: Megaphone,
    description:
      "End-to-end promotional campaigns supported by experienced field execution, booth staffing, and high-impact displays.",
  },
  {
    number: "04",
    title: "Creative Production",
    slug: "creative-production",
    icon: Hammer,
    description:
      "Design, precision fabrication, large-format printing, and installation with premium quality control and project management.",
  },
];

export default function Services() {
  return (
    <section className="relative py-28 md:py-36 bg-neutral-950 text-white overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-neutral-800/40 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-neutral-900/60 blur-[140px]" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400"
          >
            OUR SERVICES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight md:text-6xl leading-[1.1]"
          >
            Everything Your Brand Needs To Stand Out.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-neutral-400"
          >
            We combine strategy, creativity, precision fabrication, and flawless execution to deliver impactful brand experiences across Indonesia.
          </motion.p>
        </div>

        <StaggerContainer staggerDelay={0.15} className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={service.title}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex flex-col justify-between h-full rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/40 hover:bg-neutral-900 hover:shadow-2xl overflow-hidden"
                  aria-label={`Learn more about our ${service.title} service`}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:bg-white/10 group-hover:scale-150" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black tracking-widest text-neutral-500 font-mono">
                        {service.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950/80 text-white transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white group-hover:text-neutral-100 md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-neutral-400 text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <span>Explore Service</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}