export interface ProjectDetails {
  id: string;
  name: string;
  client: string;
  location: string;
  year: string;
  category: string;
  materials: string[];
  dimensions: {
    height: string;
    width: string;
    depth?: string;
    weight?: string;
  };
  engineeringHighlight: string;
  description: string;
  imagePath: string; // Resolves to public/assets/images/...
}

export const projectsContent = {
  header: {
    label: "ARCHIVE / SELECT WORKS",
    title: "Identity Landmarks",
    subtitle: "A catalog of engineered installations fabricated for commercial facades, towers, and civic plazas."
  },
  items: [
    {
      id: "shivalik-plaza",
      name: "Shivalik Business Plaza",
      client: "Shivalik Group",
      location: "SG Highway, Ahmedabad",
      year: "2025",
      category: "Commercial Facade & Monolith",
      materials: ["316 Stainless Steel", "Acid-Washed Concrete", "Warm LED Halo Systems"],
      dimensions: {
        height: "8.5 meters",
        width: "1.8 meters",
        depth: "0.6 meters",
        weight: "1,200 kg"
      },
      engineeringHighlight: "Seismic grade anchorage into monolithic reinforced concrete base, designed to withstand wind gusts up to 160 km/h.",
      description: "A ground-level structural monument and curtain-wall identity system that aligns with the horizontal glazing lines of the tower facade.",
      imagePath: "/assets/images/projects/shivalik-plaza.jpg"
    },
    {
      id: "gift-tower-branding",
      name: "GIFT City Tower One",
      client: "Gujarat Infrastructure Tech",
      location: "GIFT City, Gandhinagar",
      year: "2024",
      category: "High-Rise Tower Branding",
      materials: ["Marine Grade Aluminum", "Copper Patina Cladding", "Sealed LED Elements"],
      dimensions: {
        height: "4.2 meters (letters)",
        width: "18.5 meters (span)",
        weight: "2,400 kg (total structure)"
      },
      engineeringHighlight: "Rigged at a height of 120 meters. Engineered using dual-locking galvanized steel trusses with neoprene dampening layers to reduce wind harmonics.",
      description: "A high-altitude brand mark integrated into the structural steel crown of the tower, visible across the Sabarmati riverbed.",
      imagePath: "/assets/images/projects/gift-tower.jpg"
    },
    {
      id: "ahmedabad-museum-portal",
      name: "Gujarat Cultural Center",
      client: "Ahmedabad Municipal Corporation",
      location: "Riverfront East, Ahmedabad",
      year: "2023",
      category: "Civic Monument & Signage Grid",
      materials: ["Solid Patinated Copper", "Monolith Sandstone Base", "Indirect Fiber Optics"],
      dimensions: {
        height: "3.5 meters",
        width: "12.0 meters",
        depth: "0.4 meters",
        weight: "3,800 kg"
      },
      engineeringHighlight: "Monolithic copper patination formulated to match the riverfront landscaping, using blind pin anchors set into Dhrangadhra stone blocks.",
      description: "A permanent entrance signway and directories layout engineered to weather gracefully alongside the public riverfront plaza.",
      imagePath: "/assets/images/projects/cultural-center.jpg"
    }
  ] as ProjectDetails[]
};
