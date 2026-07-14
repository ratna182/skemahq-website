import Container from "../ui/container";
import { clients } from "@/data/clients";

export default function TrustedBrands() {
    return (
        <section className="border-y border-neutral-200 py-20">
            <Container>

                <p className="mb-12 text-center text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Trusted by KAO Group Brands
                </p>

                <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                    {clients.map((client) => (
                        <div
                            key={client}
                            className="rounded-xl border border-neutral-200 bg-white py-6 font-semibold transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {client}
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}