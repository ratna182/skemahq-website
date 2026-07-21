import Image from "next/image";

type PortfolioGalleryProps = {
    images: string[];
};

export default function PortfolioGallery({
    images,
}: PortfolioGalleryProps) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16">

                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                        Project Gallery
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                        Behind The Project
                    </h2>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {images.map((image, index) => (

                        <div
                            key={index}
                            className="group overflow-hidden rounded-[28px] bg-neutral-100"
                        >

                            <Image
                                src={image}
                                alt={`Exhibition project gallery detail ${index + 1}`}
                                width={1200}
                                height={900}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}