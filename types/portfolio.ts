export type PortfolioCategory =
    | "booth-pameran"
    | "event-activation"
    | "sales-promotor";

export interface PortfolioProject {
    id: string;
    slug: string;

    title: string;

    category: PortfolioCategory;

    client: string;

    year: number;

    shortDescription: string;

    fullDescription: string;

    coverImage: string;

    gallery: string[];
}