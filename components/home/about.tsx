import Container from "../ui/container";

export default function About() {
    return (
        <section className="py-32">
            <Container>

                <div className="grid gap-20 lg:grid-cols-2">

                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                            About Us
                        </p>

                        <h2 className="text-5xl font-bold leading-tight">
                            More Than
                            <br />
                            Booth Builder.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-8 text-neutral-600">

                        <p>
                            Skema HQ is a creative production house specializing
                            in exhibition booths, event activations, sales promotion,
                            and premium brand experiences.
                        </p>

                        <p>
                            We help brands communicate with customers through
                            impactful designs, quality fabrication, and flawless
                            project execution.
                        </p>

                        <p>
                            Trusted by leading KAO Group brands, we consistently
                            deliver projects on time with high production standards.
                        </p>

                    </div>

                </div>

            </Container>
        </section>
    );
}