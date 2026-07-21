"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container";
import { portfolioItems } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

export default function PortfolioView() {
  return (
    <main className="pt-32 pb-32 min-h-screen bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
              Portfolio & Showcase
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-7xl leading-[1.08]">
              Selected Works
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Explore custom exhibition booths, product launches, retail activations, and brand
              experiences crafted by Skema HQ across Indonesia.
            </p>
          </FadeIn>
        </div>

        {/* Portfolio Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group h-full flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl shadow-2xs">
                <div>
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="h-72 w-full overflow-hidden"
                      >
                        <Image
                          src={project.coverImage}
                          alt={`${project.client} - ${project.title} by Skema HQ`}
                          width={900}
                          height={700}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="h-full w-full object-cover"
                        />
                      </motion.div>

                      <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-800 shadow-2xs">
                        {project.year}
                      </div>
                    </div>
                  </Link>

                  <div className="mt-6 px-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600">
                      {project.client}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 px-1 flex items-center justify-between border-t border-neutral-100">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {project.category}
                  </span>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </main>
  );
}
