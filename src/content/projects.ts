export interface ProjectDetails {
  id: string;
  /** Display name shown on cards and detail page */
  name: string;
  client: string;
  location: string;
  year: string;
  category: string;
  /** Flat list of primary materials used */
  materials: string[];
  dimensions: {
    height: string;
    width: string;
    depth?: string;
    weight?: string;
  };
  engineeringHighlight: string;
  description: string;
  /** Path relative to /public — e.g. "/assets/images/projects/infra-corp.png" */
  imagePath: string;
}

export const projectsContent = {
  header: {
    label: "ARCHIVE / SELECT WORKS",
    title: "Identity Landmarks",
    subtitle: "A catalog of engineered installations fabricated for commercial facades, towers, and civic plazas."
  },
  items: [
    {
      id: "infra-corp-installation",
      name: "INFRA CORP Headquarters",
      client: "INFRA CORP India",
      location: "Ahmedabad, Gujarat",
      year: "2024",
      category: "ACP Facade & Corporate Signage",
      materials: [
        "Weatherproof ACP Cladding",
        "SS 316 Letters",
        "LED Backlit Systems"
      ],
      dimensions: {
        height: "3.5m",
        width: "12.0m"
      },
      engineeringHighlight: "Reinforced architectural steel sub-frame engineered to resist local wind gusts up to 150 km/h.",
      description: "A monumental exterior building facade cladding and high-impact corporate branding system. This landmark ACP board and corporate signage installation was fabricated to withstand wind loads while displaying a crisp, professional brand identity.",
      imagePath: "/assets/images/projects/infra-corp.png"
    },
    {
      id: "gold-letter-signage",
      name: "The Gold Palace Showroom",
      client: "The Gold Palace",
      location: "Nikol, Ahmedabad",
      year: "2024",
      category: "3D Acrylic & Gold Letter Signage",
      materials: [
        "Gold Titanium Stainless Steel",
        "High-Density Acrylic",
        "Warm LED Halo Modules"
      ],
      dimensions: {
        height: "1.2m",
        width: "4.8m"
      },
      engineeringHighlight: "Blind-pin offset anchoring set into stone facade with neoprene vibration isolation sleeves.",
      description: "Elegant 3D acrylic letters with custom gold-titanium finish for a luxury retail storefront. Featuring warm-white halo LED lighting that adds depth and prestige to the storefront entrance.",
      imagePath: "/assets/images/projects/gold-palace.png"
    },
    {
      id: "custom-neon-signage",
      name: "Glow & Co. Creative Studio",
      client: "Glow & Co.",
      location: "Ahmedabad, Gujarat",
      year: "2023",
      category: "Custom Neon Signage",
      materials: [
        "Flexible Silicone Neon",
        "Clear Acrylic Backing",
        "Dynamic LED Controllers"
      ],
      dimensions: {
        height: "1.0m",
        width: "2.2m"
      },
      engineeringHighlight: "Addressable LED wiring hidden within a double-layer CNC-routed backing panel.",
      description: "Vibrant custom neon sign board styled for creative indoor visibility. Precision flex-neon layout designed to showcase brand typography with high visual impact.",
      imagePath: "/assets/images/projects/creative-neon.png"
    },
    {
      id: "acp-board-installation",
      name: "Apex Commercial Hub",
      client: "Apex Properties",
      location: "Ahmedabad, Gujarat",
      year: "2023",
      category: "LED Glow Sign Board",
      materials: [
        "Architectural Grade ACP",
        "Laser Profile Acrylic",
        "High-Output LED Modules"
      ],
      dimensions: {
        height: "1.8m",
        width: "6.0m"
      },
      engineeringHighlight: "Sub-surface wiring routing with dual-redundant power supplies and automatic dusk-to-dawn sensors.",
      description: "A premium ACP sign board installation featuring laser-cut acrylic 3D letters and under-lit lighting. Engineered for 24/7 visibility and absolute durability under intense weather conditions.",
      imagePath: "/assets/images/projects/apex-acp.png"
    }
  ] as ProjectDetails[]
};
