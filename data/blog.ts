export type BlogPost = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-create-high-converting-exhibition-booths",
    category: "EVENT ACTIVATION",
    title: "How to Create High-Converting Exhibition Booths // Event Strategy",
    date: "07/15/2026",
    coverImage: "/portfolio/samsung/gallery-1.webp",
    excerpt:
      "Learn the core design principles and spatial flow strategies that attract visitor traffic, boost engagement, and create unforgettable brand activations at major trade shows.",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "creative-fabrication-secrets-for-brand-activations",
    category: "FABRICATION GUIDE",
    title: "Creative Fabrication & Material Secrets for Brand Activations",
    date: "06/28/2026",
    coverImage: "/portfolio/biore-uv/gallery-1.webp",
    excerpt:
      "A deep dive into precision fabrication, durable lighting installations, and material selection that ensure flawless build quality for demanding brand activations.",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "maximizing-foot-traffic-sales-promotion-campaigns",
    category: "RETAIL INSIGHTS",
    title: "Maximizing Foot Traffic & Engagement in Sales Promotion Campaigns",
    date: "05/14/2026",
    coverImage: "/portfolio/merries/gallery-1.webp",
    excerpt:
      "Key tactics for orchestrating nationwide sales promotion roadshows with trained field staff, interactive displays, and measurable ROI for consumer brands.",
    readTime: "4 min read",
  },
];
