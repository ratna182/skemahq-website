"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Award, Layers, CheckCircle2 } from "lucide-react";
import Container from "../ui/container";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-32 flex min-h-[90vh] items-center">
      {/* Background Ambient Glow & Patterns */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-transparent blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-neutral-300 via-neutral-100 to-transparent blur-[120px]"
        />

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Content Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-800 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-900 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900"></span>
              </span>
              Creative Production House
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-black tracking-tight text-neutral-950 md:text-7xl lg:text-8xl leading-[1.05]"
            >
              We Build{" "}
              <span className="relative inline-block bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                Extraordinary
              </span>{" "}
              Brand Experiences.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl"
            >
              Skema HQ specializes in exhibition booths, event activations, and sales promotion with premium execution and impactful visual experiences.
            </motion.p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl active:scale-95"
              >
                <span>View Portfolio</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-8 py-4 font-medium text-neutral-900 backdrop-blur-xs transition-all duration-300 hover:border-neutral-950 hover:bg-white hover:shadow-md active:scale-95"
              >
                <span>Let&apos;s Talk</span>
              </Link>
            </motion.div>

            {/* Quick Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-8 border-t border-neutral-200/80 pt-6 text-xs font-semibold tracking-wider uppercase text-neutral-500"
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-neutral-900" />
                <span>KAO Group Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-neutral-900" />
                <span>120+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-neutral-900" />
                <span>End-to-End Production</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Card Stack / Showcase */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card Decoration */}
              <motion.div
                animate={{
                  rotate: [-3, -1, -3],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-neutral-300 via-neutral-100 to-neutral-200 opacity-60 blur-xs"
              />

              {/* Main Feature Showcase Card */}
              <motion.div
                whileHover={{ y: -6, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-neutral-900 sm:h-[400px]">
                  <Image
                    src="/portfolio/samsung/cover.webp"
                    alt="Samsung Smartphone Launch by Skema HQ"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  
                  {/* Floating Tag in Image */}
                  <div className="absolute top-4 left-4 rounded-full bg-neutral-950/70 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                    Featured Project
                  </div>

                  {/* Card Bottom Details */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                      Samsung Launch Event
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      Immersive Brand Activation & Booth
                    </h3>
                  </div>
                </div>

                {/* Floating Micro Badge 1: Stats */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-sm">
                    100%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-950">On-Time Execution</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Zero Compromise</p>
                  </div>
                </motion.div>

                {/* Floating Micro Badge 2: Client */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -top-5 -right-5 rounded-2xl border border-neutral-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold text-neutral-950">Exhibition Specialist</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}