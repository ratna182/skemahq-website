import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
    return (
        <main className="pt-32 pb-24">
            <Container>
                {/* Header */}
                <div className="max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                        Portfolio
                    </p>

                    <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                        Selected Works
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                        Explore selected projects delivered by Skema HQ across exhibition
                        booths, product launches, retail activations, and brand
                        experiences.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((project) => (
                        <article
                            key={project.id}
                            className="group"
                        >
                            <Link href={`/portfolio/${project.slug}`}>
                                <div className="overflow-hidden rounded-3xl bg-neutral-100">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        width={900}
                                        height={700}
                                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </Link>

                            <div className="mt-6">
                                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                                    {project.client}
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    {project.title}
                                </h2>

                                <p className="mt-3 leading-7 text-neutral-600">
                                    {project.shortDescription}
                                </p>

                                <div className="mt-6 flex items-center justify-between text-sm text-neutral-500">
                                    <span>{project.category}</span>
                                    <span>{project.year}</span>
                                </div>

                                <Link
                                    href={`/portfolio/${project.slug}`}
                                    className="mt-6 inline-flex items-center font-semibold transition hover:translate-x-1"
                                >
                                    View Case Study →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </main>
    );
}