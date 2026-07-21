import Image from "next/image";

type PortfolioHeroProps = {
    title: string;
    client: string;
    category: string;
    year: string;
    description: string;
    coverImage: string;
};

export default function PortfolioHero({
    title,
    client,
    category,
    year,
    description,
    coverImage,
}: PortfolioHeroProps) {
    return (
        <section className="pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-6">

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                    Portfolio
                </p>

                <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                    {title}
                </h1>

                <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase tracking-widest text-neutral-600">

                    <span>{client}</span>

                    <span>•</span>

                    <span>{category}</span>

                    <span>•</span>

                    <span>{year}</span>

                </div>

                <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-600">
                    {description}
                </p>

                <div className="mt-16 overflow-hidden rounded-[32px]">

                    <Image
                        src={coverImage}
                        alt={title}
                        width={1800}
                        height={1200}
                        priority
                        className="w-full h-[650px] object-cover"
                    />

                </div>

            </div>
        </section>
    );
}