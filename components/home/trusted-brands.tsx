"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import { clients } from "@/data/clients";
import { StaggerContainer, StaggerItem } from "../ui/motion-wrapper";

export default function TrustedBrands() {
  // Double clients array for smooth marquee looping
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="relative border-y border-neutral-200 bg-neutral-50/50 py-16 overflow-hidden">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          Trusted by KAO Group Brands & Industry Leaders
        </motion.p>

        {/* Desktop Grid with Stagger & Hover */}
        <StaggerContainer className="hidden md:grid grid-cols-4 gap-4 text-center">
          {clients.map((client) => (
            <StaggerItem key={client}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-neutral-200/80 bg-white py-5 px-6 font-bold text-neutral-800 shadow-xs transition-shadow duration-300 hover:border-neutral-900 hover:shadow-lg hover:text-black"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 text-sm tracking-wide">{client}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile Smooth Infinite Marquee */}
        <div className="relative w-full overflow-hidden md:hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-neutral-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-neutral-50 to-transparent" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
              },
            }}
            className="flex gap-4 w-max"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="rounded-xl border border-neutral-200 bg-white py-3.5 px-6 text-xs font-bold text-neutral-800 shadow-xs"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}