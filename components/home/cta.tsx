import Link from "next/link";
import Container from "../ui/container";

export default function CTA() {
    return (
        <section className="bg-neutral-950 py-32 text-white">
            <Container>
                <div className="mx-auto max-w-4xl text-center">

                    <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-400">
                        Ready to Collaborate?
                    </p>

                    <h2 className="text-5xl font-bold leading-tight md:text-7xl">
                        Let's Build
                        <br />
                        Something
                        <br />
                        Extraordinary.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                        Whether you're planning an exhibition booth,
                        event activation, retail display, or brand campaign,
                        Skema HQ is ready to bring your vision to life.
                    </p>

                    <div className="mt-14 flex justify-center gap-4">

                        <Link
                            href="/contact"
                            className="rounded-full bg-white px-10 py-5 font-semibold text-black transition hover:bg-neutral-200"
                        >
                            Start Your Project
                        </Link>

                        <Link
                            href="/portfolio"
                            className="rounded-full border border-neutral-700 px-10 py-5 transition hover:bg-neutral-900"
                        >
                            View Portfolio
                        </Link>

                    </div>

                </div>
            </Container>
        </section>
    );
}