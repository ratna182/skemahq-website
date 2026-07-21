"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
      <Container>
        {/* Centered Cuberto-Style Headline Section */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08]"
          >
            Creative production & <br className="hidden sm:inline" />
            event activation agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl"
          >
            We help leading companies build scalable exhibition booths, immersive event activations, and carefully crafted creative production.
          </motion.p>
        </div>

        {/* Cuberto Hero Showcase Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <div className="group relative mx-auto overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] bg-[#0c0d12] p-4 sm:p-8 md:p-12 shadow-2xl border border-neutral-800/80">
            {/* Background Glowing Fluid Mesh */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 40, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-transparent blur-[120px]"
              />
              <motion.div
                animate={{
                  x: [0, -30, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-sky-800/30 via-slate-900/40 to-transparent blur-[140px]"
              />
              {/* Subtle wave line pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
            </div>

            {/* Showcase 3D Composition */}
            <div className="relative min-h-[380px] sm:min-h-[480px] md:min-h-[560px] w-full flex items-center justify-center py-6">
              
              {/* Floating Mobile Device Mockup (Top-Left Perspective) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -20, rotate: -12 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -14 }}
                whileHover={{ rotate: -8, scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute left-4 sm:left-12 md:left-24 top-6 sm:top-10 z-20 w-[120px] sm:w-[170px] md:w-[220px] rounded-[24px] sm:rounded-[32px] border-4 border-neutral-800 bg-neutral-950 p-1.5 shadow-2xl shadow-black/80"
              >
                <div className="relative h-[220px] sm:h-[320px] md:h-[400px] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] bg-neutral-900">
                  <Image
                    src="/portfolio/biore-uv/cover.webp"
                    alt="Biore UV Event Activation Mobile View"
                    fill
                    sizes="(max-width: 768px) 150px, 220px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Central Laptop perspective mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="relative z-10 w-full max-w-3xl transform sm:translate-x-10 md:translate-x-16"
              >
                <div className="relative rounded-2xl border border-neutral-700/60 bg-neutral-900 p-2 shadow-2xl shadow-black/90 backdrop-blur-md">
                  {/* Laptop Top Bar */}
                  <div className="flex h-6 items-center gap-1.5 px-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-4 h-3 w-48 rounded-full bg-neutral-800/80" />
                  </div>

                  {/* Laptop Screen Content */}
                  <div className="relative h-[240px] sm:h-[360px] md:h-[440px] w-full overflow-hidden rounded-xl bg-neutral-950">
                    <Image
                      src="/portfolio/samsung/cover.webp"
                      alt="Samsung Launch Event Activation by Skema HQ"
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Lens / Badge Pill */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link
                        href="/portfolio"
                        className="group/btn inline-flex items-center gap-3 rounded-full bg-white/20 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur-md border border-white/30 transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:scale-110 shadow-2xl"
                      >
                        <span>VIEW CASE STUDY</span>
                      </Link>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/90">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Samsung Activation</p>
                        <p className="text-sm font-semibold text-white sm:text-base">Immersive Booth & Experience Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}