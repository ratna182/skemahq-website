"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "../ui/container";
import { portfolioItems } from "@/data/portfolio";
import { StaggerContainer, StaggerItem } from "../ui/motion-wrapper";

export default function PortfolioPreview() {
  const featuredProjects = portfolioItems.slice(0, 3);

  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden border-t border-neutral-200">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Selected Works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl leading-[1.1]">
              Brands We&apos;ve Helped Grow.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              aria-label="View all portfolio projects"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <StaggerContainer staggerDelay={0.15} className="mt-16 grid gap-10 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group flex flex-col justify-between h-full">
                <div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="block overflow-hidden rounded-3xl bg-neutral-100 relative group-hover:shadow-2xl transition-shadow duration-500"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={`${project.client} - ${project.title} by Skema HQ`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-neutral-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-950 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-100 pt-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                    {project.category}
                  </span>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-neutral-900 transition-all duration-300 group-hover:translate-x-1"
                    aria-label={`View Case Study for ${project.title}`}
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}