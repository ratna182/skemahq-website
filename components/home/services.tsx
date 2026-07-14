import Container from "../ui/container";

const services = [
    {
        title: "Exhibition Booth",
        description:
            "Premium booth design and fabrication that attracts visitors and strengthens your brand presence.",
    },
    {
        title: "Event Activation",
        description:
            "Creative event experiences designed to increase engagement and create memorable customer interactions.",
    },
    {
        title: "Sales Promotion",
        description:
            "End-to-end promotional campaigns supported by experienced field execution and production.",
    },
    {
        title: "Creative Production",
        description:
            "Design, fabrication, printing, and installation with premium quality and reliable project management.",
    },
];

export default function Services() {
    return (
        <section className="py-32">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                        OUR SERVICES
                    </p>

                    <h2 className="mt-6 text-5xl font-bold leading-tight">
                        Everything Your Brand
                        <br />
                        Needs To Stand Out.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-neutral-600">
                        We combine strategy, creativity, fabrication, and flawless
                        execution to deliver impactful brand experiences.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group rounded-3xl border border-neutral-200 p-10 transition duration-300 hover:-translate-y-2 hover:border-black hover:shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold">
                                {service.title}
                            </h3>

                            <p className="mt-5 leading-8 text-neutral-600">
                                {service.description}
                            </p>

                            <div className="mt-8 text-sm font-semibold uppercase tracking-widest">
                                Learn More →
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}