import { notFound } from "next/navigation";

import { portfolioItems } from "@/data/portfolio";

import PortfolioHero from "@/components/portfolio/hero";
import PortfolioGallery from "@/components/portfolio/gallery";
import PortfolioProjectInfo from "@/components/portfolio/project-info";
import PortfolioNextProject from "@/components/portfolio/next-project";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PortfolioDetailPage({
    params,
}: Props) {
    const { slug } = await params;

    const projectIndex = portfolioItems.findIndex(
        (item) => item.slug === slug
    );

    if (projectIndex === -1) {
        notFound();
    }

    const project = portfolioItems[projectIndex];

    const nextProject =
        portfolioItems[(projectIndex + 1) % portfolioItems.length];

    return (
        <main>

            <PortfolioHero
                title={project.title}
                client={project.client}
                category={project.category}
                year={project.year}
                description={project.shortDescription}
                coverImage={project.coverImage}
            />

            <PortfolioProjectInfo
                client={project.client}
                category={project.category}
                year={project.year}
                description={project.fullDescription}
                services={project.services}
            />

            <PortfolioGallery
                images={project.gallery}
            />

            <PortfolioNextProject
                title={nextProject.title}
                slug={nextProject.slug}
                image={nextProject.coverImage}
            />

        </main>
    );
}