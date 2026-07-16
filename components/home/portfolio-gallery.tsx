import Image from "next/image";
import Link from "next/link";

import Container from "../ui/container";
import { featuredProjects } from "@/data/featured-projects";

export default function PortfolioGallery() {
    return (
        <section className="py-32">
            <Container>

                <div className="mb-20">

                    <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
                        Portfolio
                    </p>

                    <h1 className="mt-5 text-6xl font-bold">
                        Our Selected Works
                    </h1>

                    <p className="mt-6 max-w-2xl text-neutral-600 leading-8">
                        Every project is designed to elevate brand experience,
                        strengthen customer engagement, and create memorable
                        moments.
                    </p>

                </div>

                <div className="grid gap-12 md:grid-cols-2">

                    {featuredProjects.map((project) => (

                        <Link
                            key={project.id}
                            href={`/portfolio/${project.slug}`}
                            className="group"
                        >

                            <div className="overflow-hidden rounded-3xl">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={900}
                                    height={700}
                                    className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                            </div>

                            <div className="mt-6">

                                <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
                                    {project.client}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {project.title}
                                </h2>

                                <p className="mt-3 text-neutral-600">
                                    {project.shortDescription}
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </Container>
        </section>
    );
}