import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Insights | Skema HQ Creative Production House",
  description:
    "Wawasan terbaru seputar tren exhibition booth design, event activation, retail display, dan creative fabrication dari tim ahli Skema HQ Jakarta.",
  alternates: {
    canonical: "https://skemahq.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | Skema HQ Creative Production House",
    description:
      "Panduan dan artikel praktis seputar exhibition booth design, event activation, dan creative fabrication di Indonesia.",
    url: "https://skemahq.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-32">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
        ]}
      />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 mb-4">
            Insights & Knowledge
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
            Latest Articles & Agency Insights
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Discover strategies, fabrication secrets, and industry trends to elevate your brand activations and exhibition experiences.
          </p>
        </div>

        {/* Article Grid / List */}
        <div className="grid gap-12 sm:gap-16">
          {blogPosts.map((post) => (
            <article
              id={post.slug}
              key={post.id}
              className="group border-b border-neutral-900 pb-16 scroll-mt-28"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Thumbnail */}
                <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-3xl bg-neutral-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Article Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-white/50 px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-white uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{post.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-base text-neutral-400 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80 underline underline-offset-4"
                    >
                      Discuss this strategy with our team &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
