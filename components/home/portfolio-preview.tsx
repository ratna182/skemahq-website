import Link from "next/link";

import Container from "../ui/container";
import { featuredProjects } from "@/data/featured-projects";

export default function PortfolioPreview() {
    return (
        <section className="py-32">
            <Container>
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Selected Works
                        </p>

                        <h2 className="mt-4 text-5xl font-bold leading-tight">
                            Brands We've
                            <br />
                            Helped Come
                            <br />
                            To Life.
                        </h2>
                    </div>

                    <Link
                        href="/portfolio"
                        className="hidden md:block text-sm font-semibold uppercase tracking-widest"
                    >
                        View All →
                    </Link>
                </div>

                <div className="mt-20 space-y-24">
                    {featuredProjects.map((project) => (
                        <article key={project.id}>
                            <div className="overflow-hidden rounded-[32px]">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
                                />

                            </div>

                            <div className="mt-8 flex items-center justify-between">

                                <div>

                                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold">
                                        {project.title}
                                    </h3>

                                </div>

                                <div className="text-right">

                                    <p className="text-neutral-500">
                                        {project.year}
                                    </p>

                                    <Link
                                        href="/portfolio"
                                        className="mt-2 block font-semibold"
                                    >
                                        View Project →
                                    </Link>

                                </div>

                            </div>

                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}