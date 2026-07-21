"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Layers, Clock } from "lucide-react";
import Container from "../ui/container";
import { StaggerContainer, StaggerItem } from "../ui/motion-wrapper";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Premium Execution",
    description:
      "Every booth, activation, and campaign is executed with meticulous attention to detail and rigorous quality control.",
  },
  {
    number: "02",
    icon: Award,
    title: "Trusted by Leading Brands",
    description:
      "Supporting multiple KAO brands across Indonesia with consistent quality, reliability, and brand standards.",
  },
  {
    number: "03",
    icon: Layers,
    title: "End-to-End Production",
    description:
      "From 3D concept development, fabrication, transportation, installation, until dismantling — everything is handled seamlessly.",
  },
  {
    number: "04",
    icon: Clock,
    title: "Strict On-Time Delivery",
    description:
      "Reliable execution with strict timelines for exhibitions, retail activations, and nationwide marketing campaigns.",
  },
];

export default function WhySkema() {
  return (
    <section className="relative py-28 md:py-36 bg-neutral-50/70 border-t border-neutral-200 overflow-hidden">
      <Container>
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl leading-[1.1]"
          >
            Built for Brands That Demand Excellence.
          </motion.h2>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid gap-6 md:grid-cols-2">
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <StaggerItem key={item.number}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col justify-between h-full rounded-3xl border border-neutral-200 bg-white p-8 md:p-10 shadow-xs transition-shadow duration-300 hover:border-neutral-900 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-neutral-200 group-hover:text-neutral-950 transition-colors duration-300 font-mono">
                        {item.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:text-white">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 h-1 w-12 rounded-full bg-neutral-200 transition-all duration-300 group-hover:w-24 group-hover:bg-neutral-950" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}