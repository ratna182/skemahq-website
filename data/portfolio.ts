export type PortfolioItem = {
    id: number;
    slug: string;
    client: string;
    title: string;
    category: string;
    year: string;
    coverImage: string;
    shortDescription: string;
    fullDescription: string;
    services: string[];
    gallery: string[];
};

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        slug: "samsung-smartphone-launch",

        client: "Samsung",

        title: "Samsung Smartphone Launch",

        category: "Product Launch",

        year: "2026",

        coverImage: "/portfolio/samsung/cover.webp",

        shortDescription:
            "Premium smartphone launch event delivering an immersive brand experience through interactive product showcases and elegant event execution.",

        fullDescription:
            "Skema HQ successfully delivered Samsung's smartphone launch event by combining premium event production, exhibition design, customer engagement, and immersive brand storytelling. Every touchpoint was carefully crafted to strengthen product awareness while creating memorable experiences for visitors.",

        services: [
            "Creative Production",
            "Event Activation",
            "Product Launch",
            "Exhibition Design",
        ],

        gallery: [
            "/portfolio/samsung/gallery-1.webp",
            "/portfolio/samsung/gallery-2.webp",
            "/portfolio/samsung/gallery-3.webp",
            "/portfolio/samsung/gallery-4.webp",
            "/portfolio/samsung/gallery-5.webp",
            "/portfolio/samsung/gallery-6.webp",
        ],
    },

    {
        id: 2,
        slug: "biore-uv-activation",

        client: "Biore UV",

        title: "Biore UV Activation",

        category: "Retail Activation",

        year: "2026",

        coverImage: "/portfolio/biore-uv/cover.webp",

        shortDescription:
            "Interactive retail activation designed to increase customer engagement and strengthen Biore UV's brand presence.",

        fullDescription:
            "Skema HQ executed a premium retail activation campaign for Biore UV featuring interactive experiences, engaging booth activities, and strong visual branding that successfully attracted visitors while reinforcing product awareness.",

        services: [
            "Brand Activation",
            "Retail Experience",
            "Creative Production",
            "Booth Design",
        ],

        gallery: [
            "/portfolio/biore-uv/gallery-1.webp",
            "/portfolio/biore-uv/gallery-2.webp",
            "/portfolio/biore-uv/gallery-3.webp",
            "/portfolio/biore-uv/gallery-4.webp",
            "/portfolio/biore-uv/gallery-5.webp",
            "/portfolio/biore-uv/gallery-6.webp",
        ],
    },

    {
        id: 3,
        slug: "merries-family-event",

        client: "Merries",

        title: "Merries Family Event",

        category: "Family Experience",

        year: "2026",

        coverImage: "/portfolio/merries/cover.webp",

        shortDescription:
            "Family-focused brand activation creating meaningful experiences between parents, children, and the Merries brand.",

        fullDescription:
            "Skema HQ organized an engaging family experience for Merries through interactive games, educational activities, and premium event execution, strengthening emotional connections between the brand and young families.",

        services: [
            "Family Activation",
            "Creative Production",
            "Event Management",
            "Brand Experience",
        ],

        gallery: [
            "/portfolio/merries/gallery-1.webp",
            "/portfolio/merries/gallery-2.webp",
            "/portfolio/merries/gallery-3.webp",
            "/portfolio/merries/gallery-4.webp",
            "/portfolio/merries/gallery-5.webp",
            "/portfolio/merries/gallery-6.webp",
        ],
    },
];