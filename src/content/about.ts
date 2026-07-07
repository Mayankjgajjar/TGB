import { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Zap,
  Layers,
  Flame,
  Type,
  Bold,
  Sun,
  Home,
  Triangle,
  Lightbulb,
  Factory,
  CloudSun,
  BadgeCheck,
  Target,
  Eye,
  BookOpen,
  Award,
  HeartHandshake,
  Workflow,
  Search,
  Pencil,
  Hammer,
  Truck,
  Building2,
  UtensilsCrossed,
  HeartPulse,
  Hotel,
  Landmark,
  GraduationCap,
  LayoutGrid,
  ShoppingBag
} from 'lucide-react';

export interface AboutSectionHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface AboutCardItem {
  title: string;
  description: string;
  icon?: string;
  category?: string;
  techLabel?: string;
}

export interface AboutMetricItem {
  value: string;
  label: string;
}

export interface AboutLeaderItem {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface AboutProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const aboutContent = {
  // 1. Company Introduction
  introduction: {
    eyebrow: "ABOUT TGB ENTERPRISE",
    title: "Architectural Signage Engineering\n& Premium Facade Cladding",
    subtitle: "TGB Enterprise is Ahmedabad’s established partner for custom signage solutions and architectural facades. Serving leading brands across India from our corporate office in Thaltej and fabrication yard in Vatva, we engineer durable brand interfaces that command presence.",
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "About Us" }
    ],
    closingQuote: "We bridge the gap between creative visual designs and permanent physical structures."
  },

  // 2. Mission & Vision
  missionVision: {
    header: {
      eyebrow: "PURPOSE & DIRECTION",
      title: "Our Mission & Vision",
      subtitle: "The principles guiding our work as an industrial signage partner for high-exposure brand structures."
    },
    mission: {
      title: "Our Mission",
      description: "To engineer and fabricate signage systems that translate brand guidelines into structural landmarks. We prioritize absolute design fidelity, verified materials, and code-compliant installations that safeguard structural safety and maximize long-term brand equity.",
      icon: "Target"
    },
    vision: {
      title: "Our Vision",
      description: "To set the benchmark for commercial sign board fabrication and facade integration across India. We aim to be the most trusted manufacturer for architectural firms, developers, and corporate entities seeking permanent, weather-resistant visual systems.",
      icon: "Eye"
    }
  },

  // 3. Company Journey
  journey: {
    header: {
      eyebrow: "ESTABLISHMENT & EVOLUTION",
      title: "The Story of TGB Enterprise",
      subtitle: "From a dedicated technical fabrication shop to a leading signage manufacturer in Gujarat."
    },
    paragraphs: [
      "TGB Enterprise was established in Ahmedabad, Gujarat, to address a critical need in the B2B commercial space: the alignment of architectural design with industrial fabrication. While brands had access to creative graphic designs, they lacked a manufacturing partner who could translate those layouts into heavy-duty, weather-resistant physical systems. Our founders established a dedicated workshop to combine precise typographic drafting with certified welding and metal forming.",
      "As client demands grew, we evolved our capabilities to handle large-scale facade integrations and high-exposure sign systems. Our operations expanded to include a dedicated design and estimation office in Thaltej, Ahmedabad, and a heavy-industry fabrication yard in the Vatva Industrial Estate. This dual-presence allows us to collaborate closely with architectural studios during early planning, followed by precision CNC routing, laser profiling, and certified welding in our production facility.",
      "Today, TGB Enterprise represents permanence and reliability. We serve a diverse portfolio of clients across Gujarat and India, specializing in durable LED glow sign boards, architectural ACP facade cladding, 3D acrylic letters, and stainless steel lettering. We manage the entire lifecycle in-house—from material audits and CAD cross-section drawings to certified onsite rigging and dedicated after-sales support."
    ]
  },

  // 4. Who We Are
  whoWeAre: {
    header: {
      eyebrow: "TEAM & CAPABILITY",
      title: "Who We Are",
      subtitle: "A multidisciplinary team bringing industrial precision to commercial brand elements."
    },
    description: "TGB Enterprise comprises structural draftsmen, material specialists, CNC programmers, certified welders, and professional rigging teams. We understand that a sign board is not merely a marketing piece—it is a critical architectural element integrated with building structures and electrical systems. By managing estimation, engineering, fabrication, and installation, we ensure that every letters, panel, and illumination system complies with certified safety tolerances and exact corporate brand guidelines.",
    image: "/assets/images/who-we-are.jpg"
  },

  // 5. Company Statistics
  statistics: {
    header: {
      eyebrow: "VERIFIED METRICS",
      title: "Scale & Delivery",
      subtitle: "Our established footprint and performance across India."
    },
    metrics: [
      { value: "100+", label: "Projects Delivered" },
      { value: "5+", label: "Major Cities Served" },
      { value: "Pan India", label: "Service Footprint" },
      { value: "100%", label: "Customer Commitment" }
    ] as AboutMetricItem[]
  },

  // 6. Core Values
  coreValues: {
    header: {
      eyebrow: "GUIDING PRINCIPLES",
      title: "Our Core Values",
      subtitle: "The operational standards that define how we source, build, and support our systems."
    },
    items: [
      {
        title: "Quality Sourcing",
        description: "We enforce strict raw material audits. Every sheet of composite cladding, stainless steel alloy, and LED module is sourced from certified manufacturers to ensure durability and resistance to UV and monsoon cycles.",
        icon: "ShieldCheck"
      },
      {
        title: "Precision Execution",
        description: "We do not compromise on tolerances or typography kerning. Utilizing advanced CNC profiling and laser routing, our fabricators match digital brand layouts down to sub-millimeter parameters.",
        icon: "Workflow"
      },
      {
        title: "Structural Integrity",
        description: "We engineering all installations to withstand environmental loads. All structural steel frames, concrete foundation mountings, and anchoring systems are calculated to handle local wind shear and environmental factors.",
        icon: "Factory"
      },
      {
        title: "B2B Professionalism",
        description: "We coordinate seamlessly with general contractors, architects, and corporate brand teams, meeting critical commercial opening dates and complying with strict safety standards on work sites.",
        icon: "HeartHandshake"
      },
      {
        title: "Long-Term Partnership",
        description: "A premium sign is a long-term investment. Our commitment extends far past initial project sign-off, offering structured warranties and prompt maintenance services to protect client assets.",
        icon: "BadgeCheck"
      }
    ] as AboutCardItem[]
  },

  // 7. Why Businesses Trust TGB
  trust: {
    header: {
      eyebrow: "THE TGB STANDARD",
      title: "Why Businesses Trust TGB",
      subtitle: "We engineer signage systems for durability, structural safety, and typographic fidelity."
    },
    items: [
      {
        category: "TYPOGRAPHY",
        title: "Absolute Font Fidelity",
        description: "We respect original graphic guides. We never warp, stretch, or force logos to fit structures; instead, we customize frame dimensions and offsets to preserve brand spacing.",
        techLabel: "Exact Kerning Match",
        icon: "Type"
      },
      {
        category: "DURABILITY",
        title: "Selected Alloys & Materials",
        description: "We select metals based on exposure. From Grade 316 stainless steel for harsh weather environments to PVDF-coated aluminum composite panels, every stock material is certified exterior-grade.",
        techLabel: "Weather Resistant",
        icon: "CloudSun"
      },
      {
        category: "SAFETY",
        title: "Structural Anchor Redundancy",
        description: "We prioritize safety in public spaces. Overhead letter systems and commercial panels are secured using calculated anchoring points, ensuring structural stability under wind load stresses.",
        techLabel: "Double Redundant Anchor",
        icon: "ShieldCheck"
      },
      {
        category: "EXECUTION",
        title: "End-to-End Control",
        description: "From discovery at our Thaltej office to CNC cutting, patination, and welding at our Vatva yard, we control the entire lifecycle. No outsourced compromises, no quality gaps.",
        techLabel: "Turnkey Project Control",
        icon: "Factory"
      }
    ] as AboutCardItem[]
  },

  // 8. Leadership Team
  leadership: {
    header: {
      eyebrow: "MANAGEMENT OFFICE",
      title: "Our Leadership Team",
      subtitle: "Aligning creative, technical, and strategic heads to maintain uncompromising standards."
    },
    leaders: [
      {
        name: "Divyesh Gajjar",
        role: "Marketing Head",
        description: "Coordinates corporate client relationships, project estimations, and national brand rollouts. Divyesh manages B2B partnership programs with design studios, developers, and architects.",
        image: "/assets/images/divyesh-gajjar.jpeg"
      },
      {
        name: "Ankit Gajjar",
        role: "Technical Head",
        description: "Directs raw material validation, CNC machinery programming, structural framing execution, and certified onsite installation at our Vatva fabrication yard.",
        image: "/assets/images/ankit-gajjar.jpeg"
      },
      {
        name: "Mayank Gajjar",
        role: "Designing Head",
        description: "Leads visual planning, 3D structure visualization, typographic mapping, and architectural layout integration, ensuring absolute compliance with brand systems.",
        image: "/assets/images/mayank-gajjar.jpeg"
      }
    ] as AboutLeaderItem[]
  },

  // 9. Industries We Serve
  industries: {
    header: {
      eyebrow: "SECTORS WE SUPPORT",
      title: "Industries We Serve",
      subtitle: "Tailoring fabrication techniques and structural specifications to meet the distinct functional and branding needs of every sector."
    },
    items: [
      {
        category: "RETAIL",
        title: "Retail & Showrooms",
        description: "Creating high-impact storefront signage, 3D gold-titanium lettering, and custom LED halo-lit boards that draw foot traffic and establish a premium street presence.",
        tag: "Premium Retail Signage",
        icon: "ShoppingBag"
      },
      {
        category: "CORPORATE",
        title: "Corporate Offices",
        description: "Architectural headquarters branding, metal lobby emblems, directional board systems, and facade integration aligning with corporate glass curtain walls.",
        tag: "Corporate HQ Systems",
        icon: "Building2"
      },
      {
        category: "F&B",
        title: "Restaurants & Cafés",
        description: "Atmospheric identity boards, custom LED flex-neon layouts, and rustic metal patinated signs designed to enhance customer dining experiences.",
        tag: "Hospitality Branding",
        icon: "UtensilsCrossed"
      },
      {
        category: "HEALTHCARE",
        title: "Hospitals & Healthcare",
        description: "High-contrast outdoor emergency glow boards, interior wayfinding signage, department boards, and clinic identification designed for clarity and visual trust.",
        tag: "Clinical Wayfinding",
        icon: "HeartPulse"
      },
      {
        category: "HOSPITALITY",
        title: "Hotels & Hospitality",
        description: "Tactile signage elements using refined metal finishes and indirect lighting solutions that complement hospitality architecture and welcome guests.",
        tag: "Premium Hotel Branding",
        icon: "Hotel"
      },
      {
        category: "REAL ESTATE",
        title: "Real Estate Projects",
        description: "Large-scale commercial park pylons, residential entrance gates, steel signage networks, and marketing center facades built for permanent visibility.",
        tag: "Development Signage",
        icon: "Landmark"
      },
      {
        category: "INDUSTRIAL",
        title: "Industrial & Manufacturing",
        description: "Durable, high-contrast exterior branding, safety signage, factory wayfinding, and heavy-gauge building name boards built for rugged environments.",
        tag: "Operational Environment Signage",
        icon: "Factory"
      },
      {
        category: "EDUCATION",
        title: "Educational Institutions",
        description: "Campus entry pillars, administrative building letters, wayfinding boards, and academic hall signs designed for navigation and heritage identity.",
        tag: "Institutional Wayfinding",
        icon: "GraduationCap"
      },
      {
        category: "COMMERCIAL",
        title: "Commercial Spaces",
        description: "Unified mall directory boards, shopping complex tenant signs, multi-level park markers, and interior lightboxes matching public area designs.",
        tag: "Integrated Signage Systems",
        icon: "LayoutGrid"
      }
    ]
  },

  // 10. Manufacturing Process
  process: {
    header: {
      eyebrow: "FABRICATION WORKFLOW",
      title: "Manufacturing Standards & Stages",
      subtitle: "Our structured execution sequence ensures design compliance and build durability."
    },
    introParagraph: "At TGB Enterprise, we hold our fabrication workflows to professional standards. Every custom project begins with raw stock validation, verifying metal gauge thickness and compound composite certifications. CNC profiling and fiber laser routing cut components within sub-millimeter tolerances. Structural frames undergo robust welding using gas shielding to prevent micro-fissures, and electrical lighting assemblies are bench-tested for heat dissipation. Certified rigging crews execute site anchoring using calculated fasteners, followed by a final multi-point engineering survey to verify alignment, weatherproofing, and illumination levels.",
    stages: [
      {
        step: "01",
        title: "Technical Discovery",
        duration: "Initial Phase",
        description: "We analyze building blueprints, evaluate mounting facade load points, check viewing coordinates, and identify wind resistance requirements to formulate a stable structural estimate.",
        deliverables: ["Technical Scoping Sheet", "Material Recommendations", "Preliminary Quotation"]
      },
      {
        step: "02",
        title: "CAD Drafting & Spacing",
        duration: "Design Phase",
        description: "Our designing head models exact 3D visualizations and drafts detailed CAD shop drawings, checking typography kerning and anchor spacing for complete design compliance.",
        deliverables: ["CAD Blueprint Layouts", "3D Graphic Mockups", "Material Sample Approvals"]
      },
      {
        step: "03",
        title: "Precision Fabrication",
        duration: "Production Phase",
        description: "At our Vatva yard, CNC routers cut panels and laser units profile letters. Structural framing is welded and rust-treated, and premium LEDs are integrated in clean spaces.",
        deliverables: ["Precision Fabricated Letters", "Assembled Facade Cladding", "Electrical Testing Certification"]
      },
      {
        step: "04",
        title: "Certified Installation",
        duration: "Onsite Phase",
        description: "Certified rigging teams execute site anchoring, utilizing calculated fasteners and neoprene buffers to eliminate galvanic corrosion and secure the structure.",
        deliverables: ["Onsite Structural Mounting", "Building Power Integration", "Final Engineering Survey Verification"]
      },
      {
        step: "05",
        title: "Lifecycle Support",
        duration: "Ongoing Phase",
        description: "We provide warranty support and preventative cleaning schedules, ensuring your signage maintains its visual presence and operates safely for years to come.",
        deliverables: ["Warranty Document Delivery", "Maintenance Guidelines", "Support Contact Details"]
      }
    ] as AboutProcessStage[]
  },

  // 11. Quality Commitment
  qualityCommitment: {
    header: {
      eyebrow: "ASSURANCE STANDARDS",
      title: "Quality Commitment",
      subtitle: "Our structural and material guarantees protect your long-term physical brand presence."
    },
    items: [
      {
        title: "Alloy & Compound Sourcing",
        description: "We verify raw materials, using grade-certified alloys and exterior composite panels that resist extreme sun exposure and heavy monsoons without warping."
      },
      {
        title: "Illumination Reliability",
        description: "Our LED configurations feature automated sensor dimming and constant-voltage drivers, doubling the lifespan of modules and eliminating hot-spots."
      },
      {
        title: "Facade Protection",
        description: "We use rubberized isolation barriers between contrasting metal joints to isolate chemical interaction, preventing facade run-off rust stains."
      },
      {
        title: "Compliance & Safety",
        description: "Every overhead structure is anchored with structural factor safety margins, protecting structural stability in commercial zones."
      },
      {
        title: "Dedicated Warranty Service",
        description: "We back our visual installations with transparent warranties, backed by a responsive technical support fleet ready for onsite maintenance."
      }
    ] as AboutCardItem[]
  },

  // 12. Our Commitment
  ourCommitment: {
    header: {
      eyebrow: "BUSINESS RELATIONSHIPS",
      title: "Our Long-Term Commitment",
      subtitle: "A transition from vendor contracts to shared developmental success."
    },
    paragraphs: [
      "At TGB Enterprise, we look at every facade cladding project and retail signage rollout as a long-term commitment. As your brand expands into new markets, we adapt our fabrication workflows and planning estimates to match your developmental pipelines. We provide consistent quality control across all locations, ensuring that your corporate visual identity looks premium and operates safely.",
      "Our estimation office on S.G. Highway, Thaltej, coordinates with architects, general builders, and visual planners to draft blueprints that fit architectural requirements. We invite you to explore our completed projects and consult our engineering office to discuss structural load coordinates, material specifications, and installation details for your upcoming project."
    ]
  }
};

export const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Zap,
  Layers,
  Flame,
  Type,
  Bold,
  Sun,
  Home,
  Triangle,
  Lightbulb,
  Factory,
  CloudSun,
  BadgeCheck,
  Target,
  Eye,
  BookOpen,
  Award,
  HeartHandshake,
  Workflow,
  Search,
  Pencil,
  Hammer,
  Truck,
  Building2,
  UtensilsCrossed,
  HeartPulse,
  Hotel,
  Landmark,
  GraduationCap,
  LayoutGrid,
  ShoppingBag
};
