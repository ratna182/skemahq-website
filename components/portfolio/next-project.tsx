import Image from "next/image";
import Link from "next/link";

type PortfolioNextProjectProps = {
    title: string;
    slug: string;
    image: string;
};

export default function PortfolioNextProject({
    title,
    slug,
    image,
}: PortfolioNextProjectProps) {
    return (
        <section className="border-t border-neutral-200 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Next Project
                </p>

                <Link
                    href={`/portfolio/${slug}`}
                    className="group mt-10 block"
                >

                    <div className="overflow-hidden rounded-[32px]">

                        <Image
                            src={image}
                            alt={title}
                            width={1600}
                            height={900}
                            className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                    </div>

                    <div className="mt-8 flex items-center justify-between">

                        <div>

                            <h2 className="text-4xl font-bold">
                                {title}
                            </h2>

                            <p className="mt-3 text-neutral-500">
                                View Case Study
                            </p>

                        </div>

                        <div className="text-5xl transition group-hover:translate-x-2">
                            →
                        </div>

                    </div>

                </Link>

            </div>
        </section>
    );
}