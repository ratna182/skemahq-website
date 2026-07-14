import Container from "../ui/container";

const stats = [
    {
        value: "120+",
        label: "Projects Delivered",
    },
    {
        value: "8",
        label: "KAO Brands",
    },
    {
        value: "12+",
        label: "Years Experience",
    },
    {
        value: "100%",
        label: "Client Commitment",
    },
];

export default function CompanyStats() {
    return (
        <section className="border-t border-b py-20">
            <Container>
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-5xl font-bold">{stat.value}</h3>

                            <p className="mt-4 text-neutral-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}