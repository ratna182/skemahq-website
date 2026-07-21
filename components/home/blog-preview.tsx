"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/container";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  return (
    <section className="relative bg-black py-24 sm:py-32 md:py-40 text-white overflow-hidden">
      <Container>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-12 sm:mb-16"
        >
          Blog
        </motion.h2>

        {/* Blog Article List */}
        <div className="space-y-12 sm:space-y-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link
                href={`/blog#${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 md:gap-14 border-b border-neutral-900 pb-12 transition-all"
              >
                {/* Left Thumbnail Image */}
                <div className="relative w-full sm:w-[300px] md:w-[380px] lg:w-[420px] h-[200px] sm:h-[220px] md:h-[240px] shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center max-w-2xl">
                  {/* Category Pill Tag */}
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/40 px-3.5 py-1 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-white uppercase transition-colors group-hover:border-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h3>

                  {/* Date & Read Time */}
                  <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Visit Our Blog Pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black active:scale-95 shadow-xl"
          >
            Visit our blog
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
