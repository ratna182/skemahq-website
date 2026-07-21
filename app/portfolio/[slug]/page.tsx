import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { portfolioItems } from "@/data/portfolio";
import PortfolioHero from "@/components/portfolio/hero";
import PortfolioGallery from "@/components/portfolio/gallery";
import PortfolioProjectInfo from "@/components/portfolio/project-info";
import PortfolioNextProject from "@/components/portfolio/next-project";
import { BreadcrumbJsonLd, PortfolioItemJsonLd } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} (${project.client}) | Skema HQ Case Study`;
  const description = `${project.shortDescription} — Proyek ${project.category} oleh Skema HQ untuk ${project.client}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://skemahq.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://skemahq.com/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Skema HQ`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.coverImage],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;

  const projectIndex = portfolioItems.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioItems[projectIndex];
  const nextProject = portfolioItems[(projectIndex + 1) % portfolioItems.length];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Portfolio", item: "/portfolio" },
          { name: project.title, item: `/portfolio/${project.slug}` },
        ]}
      />
      <PortfolioItemJsonLd
        title={project.title}
        description={project.shortDescription}
        image={project.coverImage}
        client={project.client}
        year={project.year}
        category={project.category}
      />

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

      <PortfolioGallery images={project.gallery} />

      <PortfolioNextProject
        title={nextProject.title}
        slug={nextProject.slug}
        image={nextProject.coverImage}
      />
    </main>
  );
}