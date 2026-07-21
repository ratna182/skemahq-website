export interface ProjectTypeOption {
  id: string;
  name: string;
  description: string;
  basePriceMin: number;
  basePriceMax: number;
  iconName: string;
}

export interface ScaleOption {
  id: string;
  name: string;
  sqm: number;
  multiplier: number;
}

export interface MaterialTier {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  badge?: string;
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "exhibition",
    name: "Exhibition Booth",
    description: "Custom booth pameran modular atau kustom indoor/outdoor dengan finishing halus.",
    basePriceMin: 25000000,
    basePriceMax: 45000000,
    iconName: "Layout",
  },
  {
    id: "activation",
    name: "Event Activation",
    description: "Stage & experiential booth untuk peluncuran produk atau brand engagement.",
    basePriceMin: 35000000,
    basePriceMax: 65000000,
    iconName: "Zap",
  },
  {
    id: "retail",
    name: "Retail & Sales Display",
    description: "POSM, gondola display, dan pop-up store permanen/semi-permanen di mall.",
    basePriceMin: 20000000,
    basePriceMax: 38000000,
    iconName: "Store",
  },
  {
    id: "fabrication",
    name: "Creative Fabrication",
    description: "Instalasi seni kustom, giant dummy produk, dan 3D fiberglass sculpture.",
    basePriceMin: 30000000,
    basePriceMax: 55000000,
    iconName: "Hammer",
  },
];

export const SCALE_OPTIONS: ScaleOption[] = [
  { id: "s", name: "Compact (3m x 3m / 9m²)", sqm: 9, multiplier: 1.0 },
  { id: "m", name: "Medium (6m x 3m / 18m²)", sqm: 18, multiplier: 1.8 },
  { id: "l", name: "Large (6m x 6m / 36m²)", sqm: 36, multiplier: 3.2 },
  { id: "xl", name: "Island / Pavilion (9m x 6m / 54m²)", sqm: 54, multiplier: 4.5 },
  { id: "custom", name: "Custom / Multi-City Setup (>100m²)", sqm: 100, multiplier: 7.0 },
];

export const MATERIAL_TIERS: MaterialTier[] = [
  {
    id: "standard",
    name: "Eco-Standard",
    description: "Multipleks berkualitas, finishing HPL/cat duco standar, neon box hemat energi.",
    multiplier: 1.0,
  },
  {
    id: "premium",
    name: "Premium Crafted",
    description: "Multipleks tebal, finishing Duco High-Gloss, akrilik timbul 3D, LED strip seamless.",
    multiplier: 1.35,
    badge: "Populer",
  },
  {
    id: "luxury",
    name: "Luxury & Futuristic",
    description: "Struktur metal frame, stainless steel hairline, videotron LED wall, akrilik frosted premium.",
    multiplier: 1.75,
  },
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: "3d-render",
    name: "3D Visual & VR Walkthrough",
    description: "Visualisasi 3D photorealistic & simulasi interaktif ruang untuk persetujuan brand.",
    price: 3500000,
  },
  {
    id: "engineering",
    name: "Structural Engineering Sign-Off",
    description: "Perhitungan beban & sertifikasi keamanan resmi untuk struktur tinggi di mall/JEPO.",
    price: 5000000,
  },
  {
    id: "av-lighting",
    name: "Pro AV & Interactive Lighting",
    description: "Paket sound system event, moving lights, dan kontroler pencahayaan terprogram.",
    price: 8500000,
  },
  {
    id: "crew-logistics",
    name: "Dedicated On-Site Crew & Maintenance",
    description: "Tim teknisi siaga 24/7 selama acara berlangsung untuk antisipasi kendala teknis.",
    price: 4500000,
  },
  {
    id: "express",
    name: "Express 48-Hour Fabrication",
    description: "Prioritas jalur cepat di workshop untuk pengerjaan mendesak / deadline singkat.",
    price: 7500000,
  },
];

export interface ProjectStatusMilestone {
  stepNumber: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  dateCompleted?: string;
}

export interface ClientProjectTrackData {
  projectCode: string;
  clientName: string;
  projectName: string;
  projectType: string;
  venue: string;
  eventDates: string;
  overallProgress: number; // 0 - 100
  projectManager: {
    name: string;
    phone: string;
    email: string;
  };
  milestones: ProjectStatusMilestone[];
  fabricationPhotos?: { url: string; caption: string; timestamp: string }[];
}

export const MOCK_CLIENT_PROJECTS: Record<string, ClientProjectTrackData> = {
  "SKM-2026-KAO": {
    projectCode: "SKM-2026-KAO",
    clientName: "PT KAO Indonesia",
    projectName: "Biore Guard Nationwide Roadshow Booth & Activation",
    projectType: "Event Activation & Custom Booth",
    venue: "Main Atrium Gandaria City Mall, Jakarta",
    eventDates: "25 - 28 Juli 2026",
    overallProgress: 85,
    projectManager: {
      name: "Budi Santoso",
      phone: "+62 878-8952-7901",
      email: "project@skemahq.id",
    },
    milestones: [
      {
        stepNumber: 1,
        title: "3D Design & Concept Approval",
        description: "Persetujuan desain visual 3D dan tata letak zoning pengalaman pengunjung.",
        status: "completed",
        dateCompleted: "10 Juli 2026",
      },
      {
        stepNumber: 2,
        title: "Technical Drawing & Engineering",
        description: "Gambar kerja pabrikasi, skema kelistrikan, dan persetujuan manajemen gedung.",
        status: "completed",
        dateCompleted: "14 Juli 2026",
      },
      {
        stepNumber: 3,
        title: "Workshop Fabrication & QC",
        description: "Pabrikasi struktur modul, perakitan multipleks, dan finishing duco di workshop.",
        status: "in-progress",
      },
      {
        stepNumber: 4,
        title: "On-site Loading & Venue Setup",
        description: "Pengiriman barang ke mall dan instalasi overnight oleh tim profesional.",
        status: "pending",
      },
      {
        stepNumber: 5,
        title: "Live Event & Handover",
        description: "Serah terima kondisi siap pakai, uji kelistrikan, dan pendampingan acara.",
        status: "pending",
      },
    ],
    fabricationPhotos: [
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        caption: "Pemotongan struktur presisi CNC multipleks di Workshop Skema HQ",
        timestamp: "18 Juli 2026",
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
        caption: "Proses finishing Duco & inspeksi kualitas permukaan",
        timestamp: "20 Juli 2026",
      },
    ],
  },
  "SKM-2026-SAMSUNG": {
    projectCode: "SKM-2026-SAMSUNG",
    clientName: "Samsung Indonesia",
    projectName: "Galaxy Flagship Experience Zone - Central Park",
    projectType: "Exhibition & Interactive Booth",
    venue: "Central Park Mall, Jakarta Barat",
    eventDates: "01 - 05 Agustus 2026",
    overallProgress: 95,
    projectManager: {
      name: "Rian Hidayat",
      phone: "+62 878-8952-7901",
      email: "project@skemahq.id",
    },
    milestones: [
      {
        stepNumber: 1,
        title: "3D Design & Concept Approval",
        description: "Approved render & acoustic zoning spec.",
        status: "completed",
        dateCompleted: "05 Juli 2026",
      },
      {
        stepNumber: 2,
        title: "Technical Drawing & Engineering",
        description: "Perhitungan beban videotron & sertifikat mall.",
        status: "completed",
        dateCompleted: "11 Juli 2026",
      },
      {
        stepNumber: 3,
        title: "Workshop Fabrication & QC",
        description: "Modul booth selesai 100% dan lolos QC uji pasang di workshop.",
        status: "completed",
        dateCompleted: "20 Juli 2026",
      },
      {
        stepNumber: 4,
        title: "On-site Loading & Venue Setup",
        description: "Persiapan konvoi armada pengiriman ke venue.",
        status: "in-progress",
      },
      {
        stepNumber: 5,
        title: "Live Event & Handover",
        description: "Persiapan ujicoba akhir pada hari H-1.",
        status: "pending",
      },
    ],
    fabricationPhotos: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        caption: "Trial assembly booth frame di workshop sebelum pengepakan",
        timestamp: "19 Juli 2026",
      },
    ],
  },
  "SKM-2026-NIVEA": {
    projectCode: "SKM-2026-NIVEA",
    clientName: "Beiersdorf Indonesia (Nivea)",
    projectName: "Nivea Sun Protection Beach Experience",
    projectType: "Pop-Up Experience Store",
    venue: "Pakuwon Mall, Surabaya",
    eventDates: "15 - 20 Agustus 2026",
    overallProgress: 40,
    projectManager: {
      name: "Siska Wijaya",
      phone: "+62 878-8952-7901",
      email: "project@skemahq.id",
    },
    milestones: [
      {
        stepNumber: 1,
        title: "3D Design & Concept Approval",
        description: "Revisi akhir visualisasi 3D nuansa pantai.",
        status: "completed",
        dateCompleted: "15 Juli 2026",
      },
      {
        stepNumber: 2,
        title: "Technical Drawing & Engineering",
        description: "Finalisasi gambar kerja & bill of materials.",
        status: "in-progress",
      },
      {
        stepNumber: 3,
        title: "Workshop Fabrication & QC",
        description: "Pemotongan bahan dasar dan persiapan cetak akrilik.",
        status: "pending",
      },
      {
        stepNumber: 4,
        title: "On-site Loading & Venue Setup",
        description: "Jadwal loading-in pertengahan Agustus.",
        status: "pending",
      },
      {
        stepNumber: 5,
        title: "Live Event & Handover",
        description: "Serah terima tempat.",
        status: "pending",
      },
    ],
  },
};
