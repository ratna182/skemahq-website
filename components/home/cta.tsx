"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FluidRibbonCanvas from "../ui/fluid-ribbon-canvas";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-36 md:py-48 text-white min-h-[450px] sm:min-h-[550px] flex items-center justify-center">
      {/* Dynamic 3D Fluid Ribbon Animation Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FluidRibbonCanvas />
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-radial from-transparent via-black/40 to-black" />

      {/* Centered Cuberto Style CTA Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-tight"
        >
          Have <br className="sm:hidden" />
          an idea?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-full border border-white/80 px-8 py-3.5 sm:px-12 sm:py-4 text-sm sm:text-base font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span>TELL US</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}