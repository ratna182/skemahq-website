import Container from "../ui/container";

const reasons = [
    {
        number: "01",
        title: "Premium Execution",
        description:
            "Every booth, activation, and campaign is executed with meticulous attention to detail.",
    },
    {
        number: "02",
        title: "Trusted by Leading Brands",
        description:
            "Supporting multiple KAO brands across Indonesia with consistent quality and professionalism.",
    },
    {
        number: "03",
        title: "End-to-End Production",
        description:
            "From concept development, production, installation, until dismantling — everything is handled seamlessly.",
    },
    {
        number: "04",
        title: "On Time Delivery",
        description:
            "Reliable execution with strict timelines for exhibitions, retail activations, and nationwide campaigns.",
    },
];

export default function WhySkema() {
    return (
        <section className="border-t py-28">
            <Container>
                <div className="mb-20 max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                        Why Choose Us
                    </p>

                    <h2 className="text-5xl font-bold">
                        Built for Brands
                        <br />
                        That Demand Excellence.
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {reasons.map((item) => (
                        <div
                            key={item.number}
                            className="rounded-3xl border p-10 transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-6 text-5xl font-bold text-neutral-200">
                                {item.number}
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="leading-8 text-neutral-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}