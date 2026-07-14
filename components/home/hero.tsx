import Link from "next/link";

import Container from "../ui/container";
import Button from "../ui/button";

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center">
            <Container>
                <div className="max-w-4xl">

                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                        Creative Production House
                    </p>

                    <h1 className="text-6xl font-bold leading-tight md:text-8xl">
                        We Build
                        <br />
                        Extraordinary
                        <br />
                        Brand Experiences.
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                        Skema HQ specializes in exhibition booths,
                        event activations, and sales promotion
                        with premium execution and impactful experiences.
                    </p>

                    <div className="mt-12 flex gap-4">
                        <Button>View Portfolio</Button>

                        <Link
                            href="/contact"
                            className="rounded-full border border-neutral-300 px-8 py-4 transition hover:bg-neutral-100"
                        >
                            Let's Talk
                        </Link>
                    </div>

                </div>
            </Container>
        </section>
    );
}