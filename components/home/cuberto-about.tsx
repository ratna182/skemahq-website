"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../ui/container";

export default function CubertoAbout() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-white overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Abstract 3D Floating Spheres Visual */}
          <div className="relative lg:col-span-5 flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              
              {/* Central Metallic 3D Sphere */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-8 top-6 h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-800 shadow-[20px_25px_50px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                {/* Surface highlight reflection */}
                <div className="absolute top-4 left-6 h-12 w-20 rounded-full bg-gradient-to-b from-white/80 to-transparent blur-[2px] transform -rotate-45" />
              </motion.div>

              {/* Smaller Translucent Glass Sphere */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute left-0 bottom-4 h-24 w-24 sm:h-32 sm:w-32 rounded-full border border-white/60 bg-gradient-to-tr from-neutral-900/80 via-neutral-600/40 to-white/40 shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute top-2 left-3 h-6 w-10 rounded-full bg-white/70 blur-[1px] transform -rotate-30" />
              </motion.div>

              {/* Dark Drop Shadow Base Shape */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-2 bottom-2 h-28 w-28 sm:h-36 sm:w-36 rounded-[40px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-black shadow-2xl transform rotate-12"
              />

              {/* Small Floating Micro Accent Orb */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 top-12 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-300 shadow-lg border border-neutral-100/50"
              />

            </div>
          </div>

          {/* Right Column: Editorial Text & Pill CTA */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-neutral-900"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-neutral-900">
                Since 2018, we have been helping our clients find exceptional creative solutions for their businesses, creating memorable exhibition booths, event activations, and high-impact physical-digital products.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
                Skema HQ doesn&apos;t do cookie-cutter solutions and we build products exactly as they were during the design phase, with zero short cuts or simplifications.
              </p>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-950 px-8 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white active:scale-95 shadow-xs"
                >
                  What we do
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
