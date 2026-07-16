import Image from "next/image";

import Container from "../ui/container";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioGallery() {
    return (
        <section className="border-t border-neutral-200 py-24">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                        Selected Works
                    </p>

                    <h2 className="text-4xl font-bold md:text-6xl">
                        Projects that
                        <br />
                        create memorable
                        <br />
                        brand experiences.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-neutral-600">
                        From nationwide product launches to premium exhibition
                        booths, we deliver experiences that strengthen brands
                        and connect with consumers.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">
                    {portfolioItems.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <div className="mb-3 flex items-center justify-between text-sm uppercase tracking-widest text-neutral-500">
                                    <span>{project.category}</span>
                                    <span>{project.year}</span>
                                </div>

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 leading-7 text-neutral-600">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}