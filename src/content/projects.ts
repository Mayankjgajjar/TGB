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
  items: [] as ProjectDetails[]
};
