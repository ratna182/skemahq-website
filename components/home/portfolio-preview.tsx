import Image from "next/image";
import Link from "next/link";

import Container from "../ui/container";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
    const featuredProjects = portfolioItems.slice(0, 3);

    return (
        <section className="border-t border-neutral-200 py-32">
            <Container>
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Selected Works
                        </p>

                        <h2 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
                            Brands We've
                            <br />
                            Helped Grow.
                        </h2>
                    </div>

                    <Link
                        href="/portfolio"
                        className="text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-neutral-500"
                    >
                        View All Projects →
                    </Link>
                </div>

                <div className="mt-20 grid gap-12 md:grid-cols-3">
                    {featuredProjects.map((project) => (
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

                                <h3 className="mt-2 text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 leading-7 text-neutral-600">
                                    {project.shortDescription}
                                </p>

                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-sm text-neutral-500">
                                        {project.category}
                                    </span>

                                    <span className="text-sm text-neutral-500">
                                        {project.year}
                                    </span>
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
        </section>
    );
}