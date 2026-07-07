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
  ShoppingBag,
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
    eyebrow: 'ABOUT TGB ENTERPRISE',
    title: 'Architectural Signage Engineering\n& Premium Facade Cladding',
    subtitle:
      "TGB Enterprise is Ahmedabad's established partner for custom signage solutions and architectural facades. From our corporate office in Thaltej and fabrication yard in Vatva, we engineer durable brand interfaces for businesses across India. Our services span LED sign boards, ACP cladding, 3D acrylic letters, stainless steel lettering, and pylon structures — each project managed end-to-end from material specification to certified installation.",
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'About Us' }],
    closingQuote:
      'We translate architectural drawings and brand guidelines into permanent physical structures that perform under real environmental conditions.',
  },

  // 2. Mission & Vision
  missionVision: {
    header: {
      eyebrow: 'PURPOSE & DIRECTION',
      title: 'Our Mission & Vision',
      subtitle:
        'The principles guiding our work as an industrial signage partner for high-exposure brand structures.',
    },
    mission: {
      title: 'Our Mission',
      description:
        'To engineer and fabricate signage systems that translate brand guidelines into structural landmarks. We prioritize absolute design fidelity, verified materials, and code-compliant installations that safeguard structural safety and maximize long-term brand equity.',
      icon: 'Target',
    },
    vision: {
      title: 'Our Vision',
      description:
        'To set the benchmark for commercial sign board fabrication and facade integration across India. We aim to be the most trusted manufacturer for architectural firms, developers, and corporate entities seeking permanent, weather-resistant visual systems.',
      icon: 'Eye',
    },
  },

  // 3. Company Journey
  journey: {
    header: {
      eyebrow: 'ESTABLISHMENT & EVOLUTION',
      title: 'The Story of TGB Enterprise',
      subtitle:
        'From a dedicated technical fabrication shop to a leading signage manufacturer in Gujarat.',
    },
    paragraphs: [
      'TGB Enterprise was established in Ahmedabad, Gujarat, to address a critical need in the B2B commercial space: the alignment of architectural design with industrial fabrication. While brands had access to creative graphic designs, they lacked a manufacturing partner who could translate those layouts into heavy-duty, weather-resistant physical systems. Our founders set up a dedicated workshop to combine precise typographic drafting with certified welding and metal forming.',
      'As client demands grew, our capabilities expanded to handle large-scale facade integrations and high-exposure sign systems. We established a dedicated design and estimation office in Thaltej, Ahmedabad, and a heavy-industry fabrication yard in the Vatva Industrial Estate. This dual presence allows us to collaborate with architectural studios during early planning, then execute precision CNC routing, laser profiling, and certified welding under one roof.',
      'Today, TGB Enterprise serves a diverse portfolio of clients across Gujarat and India. Our completed projects range from retail storefronts and corporate headquarters to hospitality brands and healthcare facilities. We manage the entire lifecycle in-house — from material audits and CAD cross-section drawings to certified onsite rigging and after-sales support.',
    ],
  },

  // 4. Who We Are
  whoWeAre: {
    header: {
      eyebrow: 'TEAM & CAPABILITY',
      title: 'Who We Are',
      subtitle:
        'A multidisciplinary team bringing industrial precision to commercial brand elements.',
    },
    description:
      'TGB Enterprise comprises structural draftsmen, material specialists, CNC programmers, certified welders, and professional rigging teams. We approach each sign board as a critical architectural element — one that integrates with building structures and electrical systems. By managing estimation, engineering, fabrication, and installation in-house, we ensure every letter, panel, and illumination system meets certified safety tolerances and exact corporate brand guidelines. Our service capabilities span LED sign boards, ACP facade cladding, acrylic and stainless steel lettering, neon signage, and pylon structures — each executed with the same level of structural rigor.',
    image: '/assets/images/who-we-are.jpg',
  },

  // 5. Company Statistics
  statistics: {
    header: {
      eyebrow: 'VERIFIED METRICS',
      title: 'Scale & Delivery',
      subtitle: 'Our established footprint and performance across India.',
    },
    metrics: [
      // TODO(Business): Verify this metric before production release.
      { value: '100+', label: 'Projects Delivered' },
      // TODO(Business): Verify this metric before production release.
      { value: '5+', label: 'Major Cities Served' },
      // TODO(Business): Verify this metric before production release.
      { value: 'Pan India', label: 'Service Footprint' },
      // TODO(Business): Verify this metric before production release.
      { value: '100%', label: 'Customer Commitment' },
    ] as AboutMetricItem[],
  },

  // 6. Core Values
  coreValues: {
    header: {
      eyebrow: 'GUIDING PRINCIPLES',
      title: 'Our Core Values',
      subtitle:
        'The operational standards that define how we source, build, and support our systems.',
    },
    items: [
      {
        title: 'Material Integrity',
        description:
          'We enforce strict raw material audits. Every sheet of composite cladding, stainless steel alloy, and LED module is sourced from certified manufacturers to ensure durability and resistance to UV and monsoon cycles.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Craftsmanship',
        description:
          'We do not compromise on tolerances or typography kerning. Utilizing advanced CNC profiling and laser routing, our fabricators match digital brand layouts down to sub-millimeter parameters.',
        icon: 'Workflow',
      },
      {
        title: 'Engineering Rigor',
        description:
          'We engineer all installations to withstand environmental loads. Every structural steel frame, concrete foundation mounting, and anchoring system is calculated to handle local wind shear and environmental factors.',
        icon: 'Factory',
      },
      {
        title: 'Partnership Accountability',
        description:
          'We coordinate with general contractors, architects, and corporate brand teams to meet commercial opening dates while complying with safety standards on active work sites.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Lifetime Support',
        description:
          'A premium sign is a long-term investment. Our commitment extends past project sign-off with structured warranties and responsive maintenance service to protect client assets.',
        icon: 'BadgeCheck',
      },
    ] as AboutCardItem[],
  },

  // 7. Why Businesses Trust TGB
  trust: {
    header: {
      eyebrow: 'THE TGB STANDARD',
      title: 'Why Businesses Trust TGB',
      subtitle:
        'We reduce project risk by controlling every stage in-house — from material selection through fabrication to site installation. Our clients choose us for consistency, structural safety, and typographic accuracy that protects their brand identity across every location.',
    },
    items: [
      {
        category: 'TYPOGRAPHY',
        title: 'Absolute Font Fidelity',
        description:
          'We respect original graphic guides. We never warp, stretch, or force logos to fit structures; instead, we customize frame dimensions and offsets to preserve brand spacing.',
        techLabel: 'Exact Kerning Match',
        icon: 'Type',
      },
      {
        category: 'DURABILITY',
        title: 'Selected Alloys & Materials',
        description:
          'We select metals based on exposure. From Grade 316 stainless steel for harsh weather environments to PVDF-coated aluminum composite panels, every stock material is certified exterior-grade.',
        techLabel: 'Weather Resistant',
        icon: 'CloudSun',
      },
      {
        category: 'SAFETY',
        title: 'Structural Anchor Redundancy',
        description:
          'We prioritize safety in public spaces. Overhead letter systems and commercial panels are secured using calculated anchoring points that maintain structural stability under wind load stresses.',
        techLabel: 'Double Redundant Anchor',
        icon: 'ShieldCheck',
      },
      {
        category: 'EXECUTION',
        title: 'End-to-End Control',
        description:
          'From discovery at our Thaltej office to CNC cutting, patination, and welding at our Vatva yard, we control the entire lifecycle. No outsourced compromises, no quality gaps.',
        techLabel: 'Turnkey Project Control',
        icon: 'Factory',
      },
    ] as AboutCardItem[],
  },

  // 8. Leadership Team
  leadership: {
    header: {
      eyebrow: 'MANAGEMENT OFFICE',
      title: 'Our Leadership Team',
      subtitle:
        'Creative, technical, and strategic direction working together to maintain consistent project standards.',
    },
    leaders: [
      {
        name: 'Divyesh Gajjar',
        role: 'Marketing Head',
        description:
          'Coordinates corporate client relationships, project estimations, and national brand rollouts. Divyesh manages B2B partnership programs with design studios, developers, and architects.',
        image: '/assets/images/divyesh-gajjar.jpeg',
      },
      {
        name: 'Ankit Gajjar',
        role: 'Technical Head',
        description:
          'Directs raw material validation, CNC machinery programming, structural framing execution, and certified onsite installation at our Vatva fabrication yard.',
        image: '/assets/images/ankit-gajjar.jpeg',
      },
      {
        name: 'Mayank Gajjar',
        role: 'Designing Head',
        description:
          'Leads visual planning, 3D structure visualization, typographic mapping, and architectural layout integration, ensuring compliance with brand systems.',
        image: '/assets/images/mayank-gajjar.jpeg',
      },
    ] as AboutLeaderItem[],
  },

  // 9. Industries We Serve
  industries: {
    header: {
      eyebrow: 'SECTORS WE SUPPORT',
      title: 'Industries We Serve',
      subtitle:
        'Signage requirements differ across sectors — a retail storefront demands high foot-traffic visibility, while a hospital needs clear wayfinding and clinical trust. We adapt materials, mounting methods, lighting configurations, and structural specifications to match the functional and branding needs of each industry.',
    },
    items: [
      {
        category: 'RETAIL',
        title: 'Retail & Showrooms',
        description:
          'Creating high-impact storefront signage, 3D gold-titanium lettering, and custom LED halo-lit boards that draw foot traffic and establish a premium street presence.',
        tag: 'Premium Retail Signage',
        icon: 'ShoppingBag',
      },
      {
        category: 'CORPORATE',
        title: 'Corporate Offices',
        description:
          'Architectural headquarters branding, metal lobby emblems, directional board systems, and facade integration aligning with corporate glass curtain walls.',
        tag: 'Corporate HQ Systems',
        icon: 'Building2',
      },
      {
        category: 'F&B',
        title: 'Restaurants & Cafés',
        description:
          'Atmospheric identity boards, custom LED flex-neon layouts, and rustic metal patinated signs designed to enhance customer dining experiences.',
        tag: 'Hospitality Branding',
        icon: 'UtensilsCrossed',
      },
      {
        category: 'HEALTHCARE',
        title: 'Hospitals & Healthcare',
        description:
          'High-contrast outdoor emergency glow boards, interior wayfinding signage, department boards, and clinic identification designed for clarity and visual trust.',
        tag: 'Clinical Wayfinding',
        icon: 'HeartPulse',
      },
      {
        category: 'HOSPITALITY',
        title: 'Hotels & Hospitality',
        description:
          'Tactile signage elements using refined metal finishes and indirect lighting solutions that complement hospitality architecture and welcome guests.',
        tag: 'Premium Hotel Branding',
        icon: 'Hotel',
      },
      {
        category: 'REAL ESTATE',
        title: 'Real Estate Projects',
        description:
          'Large-scale commercial park pylons, residential entrance gates, steel signage networks, and marketing center facades built for permanent visibility.',
        tag: 'Development Signage',
        icon: 'Landmark',
      },
      {
        category: 'INDUSTRIAL',
        title: 'Industrial & Manufacturing',
        description:
          'Durable, high-contrast exterior branding, safety signage, factory wayfinding, and heavy-gauge building name boards built for rugged environments.',
        tag: 'Operational Environment Signage',
        icon: 'Factory',
      },
      {
        category: 'EDUCATION',
        title: 'Educational Institutions',
        description:
          'Campus entry pillars, administrative building letters, wayfinding boards, and academic hall signs designed for navigation and heritage identity.',
        tag: 'Institutional Wayfinding',
        icon: 'GraduationCap',
      },
      {
        category: 'COMMERCIAL',
        title: 'Commercial Spaces',
        description:
          'Unified mall directory boards, shopping complex tenant signs, multi-level park markers, and interior lightboxes matching public area designs.',
        tag: 'Integrated Signage Systems',
        icon: 'LayoutGrid',
      },
    ],
  },

  // 10. Manufacturing Process
  process: {
    header: {
      eyebrow: 'FABRICATION WORKFLOW',
      title: 'Manufacturing Standards & Stages',
      subtitle: 'Our structured execution sequence ensures design compliance and build durability.',
    },
    introParagraph:
      'Quality control begins at material sourcing. We validate every raw stock shipment — verifying metal gauge thickness, composite panel certifications, and LED module ratings before they enter our workshop. CNC profiling and fiber laser routing then cut components within sub-millimeter tolerances, followed by structural welding using gas shielding to prevent micro-fissures. Electrical assemblies are bench-tested for heat dissipation and voltage stability before leaving the yard. Certified rigging crews execute site anchoring with calculated fasteners, and each installation concludes with a multi-point engineering survey verifying alignment, weatherproofing, and illumination levels. Post-installation, we provide documented maintenance guidelines and warranty support to ensure long-term performance.',
    stages: [
      {
        step: '01',
        title: 'Technical Discovery',
        duration: 'Initial Phase',
        description:
          'We analyze building blueprints, evaluate mounting facade load points, check viewing coordinates, and identify wind resistance requirements to formulate a stable structural estimate.',
        deliverables: [
          'Technical Scoping Sheet',
          'Material Recommendations',
          'Preliminary Quotation',
        ],
      },
      {
        step: '02',
        title: 'CAD Drafting & Spacing',
        duration: 'Design Phase',
        description:
          'Our designing head models exact 3D visualizations and drafts detailed CAD shop drawings, checking typography kerning and anchor spacing for complete design compliance.',
        deliverables: ['CAD Blueprint Layouts', '3D Graphic Mockups', 'Material Sample Approvals'],
      },
      {
        step: '03',
        title: 'Precision Fabrication',
        duration: 'Production Phase',
        description:
          'At our Vatva yard, CNC routers cut panels and laser units profile letters. Structural framing is welded and rust-treated, and premium LEDs are integrated in clean spaces.',
        deliverables: [
          'Precision Fabricated Letters',
          'Assembled Facade Cladding',
          'Electrical Testing Certification',
        ],
      },
      {
        step: '04',
        title: 'Certified Installation',
        duration: 'Onsite Phase',
        description:
          'Certified rigging teams execute site anchoring, utilizing calculated fasteners and neoprene buffers to eliminate galvanic corrosion and secure the structure.',
        deliverables: [
          'Onsite Structural Mounting',
          'Building Power Integration',
          'Final Engineering Survey Verification',
        ],
      },
      {
        step: '05',
        title: 'Lifecycle Support',
        duration: 'Ongoing Phase',
        description:
          'We provide warranty support and preventative cleaning schedules, ensuring your signage maintains its visual presence and operates safely for years to come.',
        deliverables: [
          'Warranty Document Delivery',
          'Maintenance Guidelines',
          'Support Contact Details',
        ],
      },
    ] as AboutProcessStage[],
  },

  // 11. Quality Commitment
  qualityCommitment: {
    header: {
      eyebrow: 'ASSURANCE STANDARDS',
      title: 'Quality Commitment',
      subtitle:
        'Our structural and material guarantees protect your long-term physical brand presence.',
    },
    items: [
      {
        title: 'Alloy & Compound Sourcing',
        description:
          'We verify raw materials using grade-certified alloys and exterior composite panels that resist extreme sun exposure and heavy monsoons without warping or delamination.',
      },
      {
        title: 'Illumination Reliability',
        description:
          'Our LED configurations use automated sensor dimming and constant-voltage drivers, extending module lifespan and eliminating hot-spots across illuminated surfaces.',
      },
      {
        title: 'Facade Protection',
        description:
          'We install rubberized isolation barriers between dissimilar metal joints to prevent galvanic corrosion, stopping facade run-off stains before they occur.',
      },
      {
        title: 'Compliance & Safety',
        description:
          'Every overhead structure is anchored with calculated safety margins, verified through on-site load testing before the installation is signed off.',
      },
      {
        title: 'Dedicated Warranty Service',
        description:
          'We back our installations with transparent warranty terms and a responsive support team ready for onsite maintenance when needed.',
      },
    ] as AboutCardItem[],
  },

  // 12. Our Commitment
  ourCommitment: {
    header: {
      eyebrow: 'BUSINESS RELATIONSHIPS',
      title: 'Our Long-Term Commitment',
      subtitle: 'Building partnerships that extend beyond individual projects.',
    },
    paragraphs: [
      'At TGB Enterprise, we approach every facade cladding project and retail signage rollout as a long-term partnership. As your brand expands into new markets, we adapt our fabrication workflows and planning estimates to match your development pipeline. We maintain consistent quality across all locations, ensuring your corporate visual identity performs reliably whether it is a single storefront or a multi-city rollout.',
      'Our estimation office on S.G. Highway, Thaltej, works directly with architects, general builders, and visual planners to produce blueprints that fit structural and budgetary requirements. We invite you to explore our completed projects and get in touch with our team to discuss specifications for your upcoming project.',
      'Continuous quality improvement guides our daily operations. Every installation is an opportunity to refine our material selection, fabrication methods, and installation processes. We remain committed to delivering signage that serves your business reliably — today and as your brand grows.',
    ],
  },
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
  ShoppingBag,
};
