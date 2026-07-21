export const siteConfig = {
    name: "Skema HQ",
    description:
        "Creative production house specializing in exhibition booths, event activation, and sales promoter management.",
    url: "https://skemahq.com",
    ogImage: "/images/og-image.jpg",

    links: {
        instagram: "https://instagram.com/skemahq",
        linkedin: "https://linkedin.com/company/skemahq",
        email: "firmanskema@gmail.com",
        phone: "+62 878-8952-7901",
        address: "Jl. Sepakat V, RT.2/RW.1, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13870",
    },

    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
    ],
} as const;