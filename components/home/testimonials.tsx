import Container from "../ui/container";

const testimonials = [
    {
        quote:
            "Skema HQ consistently delivers premium booth execution with excellent attention to detail and reliable project management.",
        author: "Marketing Team",
        company: "KAO Indonesia",
    },
    {
        quote:
            "Professional execution from planning to installation. The team understands brand standards and delivers beyond expectations.",
        author: "Brand Team",
        company: "KAO Indonesia",
    },
    {
        quote:
            "A trusted production partner for event activations, exhibitions, and retail campaigns across Indonesia.",
        author: "Project Management",
        company: "KAO Indonesia",
    },
];

export default function Testimonials() {
    return (
        <section className="border-t py-28">
            <Container>
                <div className="mb-20 max-w-2xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                        Testimonials
                    </p>

                    <h2 className="text-5xl font-bold">
                        Trusted by
                        <br />
                        Leading Brands.
                    </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.quote}
                            className="rounded-3xl border p-10 transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-8 text-5xl text-neutral-300">
                                "
                            </div>

                            <p className="leading-8 text-neutral-700">
                                {item.quote}
                            </p>

                            <div className="mt-10 border-t pt-6">
                                <h4 className="font-semibold">
                                    {item.author}
                                </h4>

                                <p className="text-neutral-500">
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}