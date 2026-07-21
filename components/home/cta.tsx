"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../ui/container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-32 md:py-44 text-white">
      {/* Background Animated Gradient Mesh Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-300 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Ready to Collaborate?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl leading-[1.05]"
          >
            Let&apos;s Build Something Extraordinary.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl"
          >
            Whether you&apos;re planning an exhibition booth, event activation, retail display, or brand campaign, Skema HQ is ready to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-9 py-4.5 font-bold text-neutral-950 shadow-xl transition-all duration-300 hover:bg-neutral-200 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-9 py-4.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-neutral-900 active:scale-95"
            >
              <span>View Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}