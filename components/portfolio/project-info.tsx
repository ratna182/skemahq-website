type PortfolioProjectInfoProps = {
    client: string;
    category: string;
    year: string;
    services: string[];
    description: string;
};

export default function PortfolioProjectInfo({
    client,
    category,
    year,
    services,
    description,
}: PortfolioProjectInfoProps) {
    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-20 lg:grid-cols-[2fr_1fr]">

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                            Project Overview
                        </p>

                        <h2 className="mt-5 text-5xl font-bold">
                            Creating Meaningful Brand Experiences
                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                            {description}
                        </p>

                    </div>

                    <div className="space-y-10">

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                                Client
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {client}
                            </h3>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                                Category
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {category}
                            </h3>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                                Year
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {year}
                            </h3>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                                Services
                            </p>

                            <ul className="mt-4 space-y-2">

                                {services.map((service) => (
                                    <li
                                        key={service}
                                        className="text-lg text-neutral-700"
                                    >
                                        • {service}
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}