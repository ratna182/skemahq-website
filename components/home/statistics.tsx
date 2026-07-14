import Container from "../ui/container";
import { statistics } from "@/data/statistics";

export default function Statistics() {
    return (
        <section className="border-y border-neutral-200 py-28">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {statistics.map((item) => (
                        <div key={item.label}>
                            <h2 className="text-6xl font-bold tracking-tight">
                                {item.value}
                            </h2>

                            <p className="mt-4 text-neutral-500">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}