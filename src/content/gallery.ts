import { projectsContent } from './projects';
import { servicesData } from './services';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  tags: string[];
  link: string;
}

export interface FeaturedWork {
  id: string;
  src: string;
  title: string;
  category: string;
  link: string;
}

export interface SignageType {
  slug: string;
  name: string;
  shortDescription: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  tag: string;
}

export interface QualityPoint {
  title: string;
  description: string;
}

const projects = projectsContent.items;

const featuredWork: FeaturedWork[] = projects.map((p) => ({
  id: p.id,
  src: p.imagePath,
  title: p.name,
  category: p.category,
  link: `/projects/${p.id}`,
}));

function buildGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const p of projects) {
    items.push({
      id: `project-${p.id}`,
      src: p.imagePath,
      alt: `${p.name} - ${p.category} by TGB Enterprise`,
      category: p.category,
      tags: categoryToTags(p.category),
      link: `/projects/${p.id}`,
    });
  }

  for (const [slug, svc] of Object.entries(servicesData)) {
    if (svc.heroImage) {
      items.push({
        id: `service-${slug}`,
        src: svc.heroImage,
        alt: `${svc.name} - TGB Enterprise`,
        category: svc.name,
        tags: [slug],
        link: `/services/${slug}`,
      });
    }

    if (svc.gallery && svc.gallery.length > 0) {
      for (let i = 0; i < svc.gallery.length; i++) {
        items.push({
          id: `gallery-${slug}-${i}`,
          src: svc.gallery[i],
          alt: `${svc.name} gallery image - TGB Enterprise`,
          category: svc.name,
          tags: [slug],
          link: `/services/${slug}`,
        });
      }
    }
  }

  return items;
}

function categoryToTags(category: string): string[] {
  const lower = category.toLowerCase();
  const tags: string[] = [];
  if (lower.includes('led')) tags.push('led-sign-boards');
  if (lower.includes('acp')) tags.push('acp-sign-boards');
  if (lower.includes('neon')) tags.push('neon-sign-boards');
  if (lower.includes('acrylic')) tags.push('acrylic-letters');
  if (lower.includes('ss') || lower.includes('stainless') || lower.includes('gold'))
    tags.push('ss-letters');
  if (lower.includes('pylon') || lower.includes('glow')) tags.push('pylon-signs');
  if (lower.includes('facade') || lower.includes('corporate')) tags.push('acp-sign-boards');
  if (tags.length === 0) tags.push('led-sign-boards');
  return tags;
}

const galleryItems = buildGalleryItems();

const signageTypes: SignageType[] = Object.values(servicesData).map((s) => ({
  slug: s.slug,
  name: s.name,
  shortDescription: s.shortDescription,
}));

const industries: IndustryItem[] = [
  {
    title: 'Retail & Showrooms',
    description: 'High-impact storefront signage that attracts customers and drives foot traffic.',
    tag: 'Retail Signage',
  },
  {
    title: 'Corporate Offices',
    description: 'Professional identity systems that reinforce brand presence.',
    tag: 'Corporate Signage',
  },
  {
    title: 'Hotels & Hospitality',
    description: 'Premium signage experiences that elevate guest satisfaction.',
    tag: 'Hospitality Signage',
  },
  {
    title: 'Healthcare',
    description: 'Clear wayfinding and professional branding for medical facilities.',
    tag: 'Healthcare Signage',
  },
  {
    title: 'Education',
    description: 'Campus identity and navigation systems for institutions.',
    tag: 'Education Signage',
  },
  {
    title: 'Industrial',
    description: 'Durable indoor and outdoor signage for operational environments.',
    tag: 'Industrial Signage',
  },
  {
    title: 'Commercial Real Estate',
    description: 'Large-scale branding for developments and commercial hubs.',
    tag: 'Commercial Signage',
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Distinctive signage that creates memorable customer experiences.',
    tag: 'F&B Signage',
  },
];

const qualityPoints: QualityPoint[] = [
  {
    title: 'Premium Materials',
    description:
      'We use only architectural-grade ACP, UV-stabilized acrylics, marine-grade stainless steel, and IP67-rated LED modules.',
  },
  {
    title: 'Precision Fabrication',
    description:
      'Every component is CNC-routed, laser-cut, or precision-folded in our Nikol workshop to exact specifications.',
  },
  {
    title: 'Professional Installation',
    description:
      'Our certified teams handle structural mounting, facade anchoring, and electrical integration with safety compliance.',
  },
  {
    title: 'Attention to Detail',
    description:
      'From seamless panel joins to perfectly diffused lighting, every finish is inspected before delivery.',
  },
  {
    title: 'Long-Lasting Finishes',
    description:
      'PVDF-coated surfaces, anti-corrosion treatments, and weather-sealed electronics ensure decades of performance.',
  },
];

const faqItems = [
  {
    question: 'Can you build a sign similar to one I saw in the gallery?',
    answer:
      'Absolutely. Our team can replicate or adapt any design shown in our portfolio. We work from your reference images, brand guidelines, and site measurements to create a custom solution tailored to your business.',
  },
  {
    question: 'Can designs be fully customized?',
    answer:
      'Yes. Every sign we manufacture is custom-engineered to your exact requirements. We accommodate custom dimensions, materials, colors, illumination styles, and mounting configurations.',
  },
  {
    question: 'Do you manufacture the signs shown in the gallery?',
    answer:
      'Every installation in our gallery was designed, fabricated, and installed by TGB Enterprise at our Nikol, Ahmedabad workshop. We do not use stock photography or third-party work.',
  },
  {
    question: 'Can I request a quotation based on a specific project I saw?',
    answer:
      'Yes. Reference the project name or ID from our gallery when contacting us, and our estimating team will prepare a tailored quotation based on similar specifications and your site requirements.',
  },
  {
    question: 'Do you provide installation for all types of signage?',
    answer:
      'Yes. We offer turnkey installation for every signage type we manufacture, including LED boards, ACP facades, acrylic letters, SS letters, neon signs, and pylon structures across India.',
  },
];

export const galleryContent = {
  hero: {
    eyebrow: 'GALLERY / PORTFOLIO',
    title: 'Visual Portfolio',
    subtitle:
      'Explore a selection of completed signage installations, custom fabrication projects, storefront branding, architectural signage, and illuminated displays delivered by TGB Enterprise for businesses across multiple industries.',
  },
  featuredWork,
  galleryItems,
  signageTypes,
  industries,
  qualityPoints,
  faq: {
    title: 'Your Questions About Our Work',
    subtitle: 'Common questions from visitors exploring our portfolio.',
    items: faqItems,
  },
};
