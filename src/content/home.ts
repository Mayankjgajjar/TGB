export interface SectionHeader {
  label: string;
  title: string;
  subtitle?: string;
  coordinates?: string; // Technical label for geographic / drafting authenticity
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  parameters: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  finish: string;
  thicknessRange: string;
  description: string;
  suitability: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  elevationLimit?: string;
}

export interface QuoteStep {
  id: string;
  title: string;
  description: string;
  options: { label: string; value: string; description?: string }[];
}

export interface TGBCapability {
  number: string;
  icon: string;
  name: string;
  description: string;
}

export interface TGBStandard {
  number: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  techLabel: string;
}

export interface TGBLeader {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface TGBStandardSection {
  intro: {
    eyebrowStory: string;
    headingStory: string;
    subheadingStory: string;
    eyebrowWho: string;
    headingWho: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    closingStatement: string;
    image: string;
    metrics: { value: string; label: string }[];
    featuredClientsTitle: string;
    featuredClients: string[];
    trustBadges: string[];
  };
  label: string;
  title: string;
  subtitle: string;
  capabilitiesLabel: string;
  capabilities: TGBCapability[];
  trustLabel: string;
  trustTitle: string;
  trustSubtitle: string;
  standards: TGBStandard[];
  leadershipLabel: string;
  leadershipTitle: string;
  leadershipSubtitle: string;
  leaders: TGBLeader[];
}

export const homeContent = {
  hero: {
    label: "SIGNAGE • FACADES • BRANDING",
    title: "Built to be Seen.\nMade to be Remembered.",
    subtitle: "TGB Enterprise is a premium sign board manufacturer in Ahmedabad. Specializing in custom indoor and outdoor LED sign boards, we manage design, fabrication, installation, and dedicated after-sales support across Gujarat and India.",
    coordinates: "AHMEDABAD, GUJARAT / 23.0225° N, 72.5714° E",
    ctaLabel: "Explore Services"
  },

  identity: {
    intro: {
      eyebrowStory: "OUR STORY",
      headingStory: "We Build Visibility for Businesses Across Gujarat and India.",
      subheadingStory: "Designing, manufacturing, and installing premium signage solutions that transform spaces and strengthen brand identities.",
      eyebrowWho: "WHO WE ARE",
      headingWho: "More Than Signage.\nA Partner in Building Brand Presence.",
      paragraph1: "TGB Enterprise was established in Ahmedabad with a singular vision: to elevate how commercial landmarks are recognized and remembered. We do not just build sign boards; we engineer premium architectural identity systems that serve as the visual baseline for a brand's presence. From retail showrooms to corporate hubs, our solutions bridge structural engineering with high-fidelity graphic design. Every sign we design, fabricate, and install is built to stand as a visual landmark that defines its space and commands attention.",
      paragraph2: "Our end-to-end capabilities are managed entirely from our modern fabrication workshop in Nikol, Ahmedabad. By handling all design, laser cutting, CNC profiling, frame welding, and LED grid wiring in-house, we enforce strict tolerances and quality control. We work with premium raw materials: marine-grade 316 stainless steel, heavy-duty aluminum composite panels (ACP), cast acrylics, and certified IP67 weather-sealed LED systems. This complete manufacturing ownership ensures that our custom sign boards resist local monsoon conditions, high temperatures, and structural wind-loads without fading or degradation.",
      paragraph3: "Our operational commitment extends far beyond the day of installation. TGB Enterprise provides comprehensive technical support, reliable after-sales maintenance, and long-term warranty validation. We believe that a commercial signboard is a long-term capital asset, which is why we build relationships based on technical transparency, honest quoting, and strict material certification. Partnering with architects, developers, and retailers across Gujarat and India, we continue to engineer identity systems that perform flawlessly for years to come.",
      closingStatement: "Because great signage isn't simply made to be seen.\nIt's made to represent your brand for years to come.",
      image: "/assets/images/who-we-are.jpg",
      metrics: [
        { value: "10+ Years", label: "Industry Craftsmanship" },
        { value: "500+", label: "Completed Installations" },
        { value: "Pan India", label: "National Delivery" },
        { value: "100%", label: "In-House Fabrication" }
      ],
      featuredClientsTitle: "Trusted by Growing Businesses and Established Brands",
      featuredClients: [
        "INFRA CORP India",
        "The Gold Palace",
        "Glow & Co.",
        "Apex Commercial Hub"
      ],
      trustBadges: [
        "Premium Materials",
        "Custom Design Solutions",
        "Professional Manufacturing & Installation",
        "Reliable After-Sales Support",
        "Customer-First Approach",
        "Pan India Service"
      ]
    },
    label: "",
    title: "THE TGB STANDARD",
    subtitle: "Most signage looks good on day one, ours is built for the years that follow. We combine industrial engineering with architectural design to produce signage that commands attention and withstands the elements.",
    capabilitiesLabel: "",
    capabilities: [
      {
        number: "01",
        icon: "Zap",
        name: "LED Sign Boards",
        description: "High-brightness LED systems built for visibility day and night, with long-lasting performance."
      },
      {
        number: "02",
        icon: "Layers",
        name: "ACP Sign Boards",
        description: "Aluminium composite panel signage — lightweight, weatherproof, and sharp-finished."
      },
      {
        number: "03",
        icon: "Flame",
        name: "Neon Sign Boards",
        description: "Premium flex-neon and glass-neon displays designed to make your brand impossible to miss."
      },
      {
        number: "04",
        icon: "Type",
        name: "Acrylic Letters",
        description: "Precision-cut acrylic lettering with backlit and front-lit options for clean brand presence."
      },
      {
        number: "05",
        icon: "Bold",
        name: "SS Letters",
        description: "Stainless steel letters crafted for architectural permanence and a premium metallic finish."
      },
      {
        number: "06",
        icon: "Triangle",
        name: "Pylon Signs",
        description: "Freestanding pylon structures for commercial complexes, malls, and roadside brand identity."
      }
    ],
    trustLabel: "",
    trustTitle: "WHY BUSINESSES TRUST TGB",
    trustSubtitle: "Built for the years that follow. Most signage looks good on day one, but we engineer for the long term. From premium materials to complete in-house manufacturing, everything we build is designed to endure.",
    standards: [
      {
        number: "01",
        icon: "ShieldCheck",
        category: "QUALITY",
        title: "Built to Last",
        description: "We design every signboard for years of structural performance. Using robust engineering calculations, we reinforce sub-frames to withstand extreme wind velocities up to 150 km/h, preventing facade deformation. We balance dead weight, material thickness, and anchor-point calculations for maximum stability.",
        techLabel: "Premium Quality"
      },
      {
        number: "02",
        icon: "CloudSun",
        category: "MATERIALS",
        title: "Materials That Endure",
        description: "Our components are sourced from certified manufacturers. From PVDF-coated ACP cladding panels to cast acrylic diffusers and Samsung-powered LED modules, every piece is selected to resist high UV index, heavy monsoon humidity, and thermal expansion under local climates.",
        techLabel: "Weather Resistant"
      },
      {
        number: "03",
        icon: "Factory",
        category: "EXECUTION",
        title: "End-to-End Execution",
        description: "We oversee every phase of production in our Nikol workshop. From initial consultation and architectural drafting to laser-joint profiling, structural welding, and installation, our dedicated project management ensures absolute control over timing and craftsmanship quality.",
        techLabel: "Complete Solutions"
      },
      {
        number: "04",
        icon: "BadgeCheck",
        category: "SUPPORT",
        title: "Relationships Beyond Delivery",
        description: "Our partnership does not end when the installation crew leaves the site. We back our products with a robust warranty claim system and technical support SLA, providing regular inspections and component replacements to protect your brand's visual asset.",
        techLabel: "Customer First"
      }
    ],
    leadershipLabel: "",
    leadershipTitle: "THE PEOPLE BEHIND TGB",
    leadershipSubtitle: "Three perspectives. One standard. From design and technical execution to marketing and client relationships, our leadership team shares a singular commitment to uncompromising craftsmanship and long-term value.",
    leaders: [
      {
        name: "Divyesh Gajjar",
        role: "MARKETING HEAD",
        description: "Leads business development, client relationship management, and commercial estimates. Divyesh works directly with builders, corporate clients, and retail managers to align structural signage requirements with brand objectives and local compliance codes.",
        image: "/assets/images/divyesh-gajjar.jpeg"
      },
      {
        name: "Ankit Gajjar",
        role: "TECHNICAL HEAD",
        description: "Directs our fabrication shop and technical installation crews. Ankit manages automated CNC profiling, structural steel welding quality control, LED luminous intensity tests, and anchor-point safety calculations on-site.",
        image: "/assets/images/ankit-gajjar.jpeg"
      },
      {
        name: "Mayank Gajjar",
        role: "DESIGNING HEAD",
        description: "Heads our creative department and digital mockup design. Mayank translates architectural layout blueprints and brand guidelines into accurate 3D signage renders, selecting correct color temperatures, spacing, and material finishes.",
        image: "/assets/images/mayank-gajjar.jpeg"
      }
    ]
  } as TGBStandardSection,

  services: {
    header: {
      label: "02 / SPECIFICATIONS",
      title: "Core Engineering Disciplines",
      coordinates: "DISCIPLINE INDEX / DIRECTORY"
    } as SectionHeader,
    items: [
      {
        id: "design-engineering",
        number: "02.1",
        title: "Identity Engineering & Drafting",
        description: "Translating graphic guidelines into physical CAD structures. We specify wind-load resistance, structural steel substructures, and galvanic corrosion prevention methods.",
        parameters: ["CAD Modeling", "Wind Load Analysis", "Finite Element Analysis (FEA)", "Material Compatibility Matrices"]
      },
      {
        id: "precision-fabrication",
        number: "02.2",
        title: "Industrial Metal & Stone Fabrication",
        description: "Manufacturing using heavy-gauge architectural metals. Laser profiles, five-axis milling, chemical patination of copper, and custom metal finishing in cleanroom environments.",
        parameters: ["5-Axis CNC Milling", "Chemical Patination", "Laser Cut Profiling", "Argon TIG Arc Welding"]
      },
      {
        id: "structural-installation",
        number: "02.3",
        title: "Landmark Site Integration",
        description: "Rigging and installing identity structures at extreme heights. We handle core-drilling, high-tensile anchors, and integrate architectural illumination wiring directly with building automation systems.",
        parameters: ["Seismic Anchorage", "Building Automation Integration", "Rigging Engineering", "Corrosion Isolation"]
      }
    ] as ServiceItem[]
  },

  engineering: {
    header: {
      label: "03 / STRUCTURAL INTEGRITY",
      title: "Built to Resist Environmental Demands",
      coordinates: "TECHNICAL DATA / TESTING LAB"
    } as SectionHeader,
    description: "Every identity system we fabricate undergoes strict engineering reviews. We model aerodynamic resistance and anchor stresses to ensure architectural permanence.",
    stats: [
      { metric: "150 km/h", label: "Wind Load Tolerance", details: "Tested against local wind profiles" },
      { metric: "316 Grade", label: "Marine Stainless Steel", details: "Standard for corrosive environments" },
      { metric: "0.2 mm", label: "CNC Tolerance Limit", details: "For strict typographic alignment" }
    ]
  },

  materials: {
    header: {
      label: "04 / MATERIAL SYSTEM",
      title: "Selected Architectural Mediums",
      coordinates: "MATERIAL LIBRARY / RAW STOCK"
    } as SectionHeader,
    items: [
      {
        id: "patinated-copper",
        name: "Patinated Copper",
        finish: "Acid Etched / Heat Patinated",
        thicknessRange: "2.0mm - 4.0mm",
        description: "Creates a living finish that deepens in color when exposed to Ahmedabad's seasonal monsoon cycles, forming a protective natural oxide barrier.",
        suitability: "Heritage facade elements and premium entrance columns."
      },
      {
        id: "marine-stainless",
        name: "316 Stainless Steel",
        finish: "Bead Blasted / Directional Satin",
        thicknessRange: "3.0mm - 6.0mm",
        description: "Alloyed with molybdenum to resist pitting corrosion. Clean, light-deflecting surfaces that maintain visual structure under harsh sunlight.",
        suitability: "High-exposure tower branding and exterior structural grids."
      },
      {
        id: "cast-concrete",
        name: "Ultra-High Performance Concrete",
        finish: "Acid Washed / Formwork Textured",
        thicknessRange: "50mm - 120mm",
        description: "Reinforced with carbon microfibers for extreme tensile strength, creating monolithic signs integrated with building foundations.",
        suitability: "Monolithic ground-level monoliths and civic markers."
      }
    ] as MaterialItem[]
  },

  process: {
    header: {
      label: "05 / EXECUTION METHOD",
      title: "Sequence of Delivery",
      coordinates: "WORKFLOW STANDARDS / ISO 9001"
    } as SectionHeader,
    stages: [
      {
        step: "05.1",
        title: "Technical Review & Drafting",
        duration: "Weeks 1 - 3",
        description: "We audit structural plans and draw complete cross-sections of the identity element, verifying building facade load points and typography kerning.",
        deliverables: ["Shop Drawings", "3D Finite Element Analysis", "Material Samples"]
      },
      {
        step: "05.2",
        title: "Prototype & Patination Test",
        duration: "Weeks 4 - 6",
        description: "We produce 1:1 scale physical prototypes of critical letters and connections, exposing them to patination tests to verify visual tone.",
        deliverables: ["1:1 Metal Mockups", "Illumination Lux Reports", "Corrosion Chamber Reports"]
      },
      {
        step: "05.3",
        title: "Structural Fabrication",
        duration: "Weeks 7 - 12",
        description: "CNC profiling, structural welding, and finishing. Substructures are hot-dip galvanized and coated for maximum lifespan.",
        deliverables: ["Galvanization Certificates", "Mill Test Reports", "QA Dimension Logs"]
      },
      {
        step: "05.4",
        title: "Structural Anchoring & Rigging",
        duration: "Weeks 13 - 15",
        description: "Our certified rigging team secures the identity structures. Mechanical fastenings are dual-locked to isolate metal contact.",
        deliverables: ["Structural Engineering Sign-off", "Electrical Integration Report", "Maintenance Ledger"]
      }
    ] as ProcessStage[]
  },

  industries: {
    header: {
      label: "06 / ARCHITECTURAL ARCHETYPES",
      title: "Contexts We Design For",
      coordinates: "SECTOR ARCHIVE / SYSTEMS"
    } as SectionHeader,
    sectors: [
      {
        id: "civic-culture",
        title: "Civic & Cultural Landmarks",
        description: "Monolithic, permanent scale. Designed in conjunction with public spaces, incorporating local stone, cast concrete, and deeply patinated bronze to fit historical landscapes.",
        elevationLimit: "Unrestricted"
      },
      {
        id: "corporate-hq",
        title: "Corporate Headquarters",
        description: "Meticulous corporate identity displays that align with curtain-wall glass and architectural steel grids. Focus on precision lettering, internal light paths, and structural integration.",
        elevationLimit: "Tower Top Standard"
      },
      {
        id: "hospitality-retail",
        title: "Premium Hospitality & Facades",
        description: "Refined tactile detailing using high-finish alloys and indirect lighting. We construct entrance portals that act as the interface between the streetscape and the interior design.",
        elevationLimit: "Ground & Podium Level"
      }
    ] as IndustrySector[]
  },

  trust: {
    header: {
      label: "07 / STANDARDS & VERIFICATION",
      title: "Engineered Without Compromise",
      coordinates: "CERTIFICATION REGISTER"
    } as SectionHeader,
    points: [
      { title: "Typographic Fidelity", text: "We respect visual spacing. We never skew or force typography to fit spaces; instead, we re-engineer structural details to retain typographic integrity." },
      { title: "No Galvanic Corrosion", text: "We use neoprene isolators between stainless steel and zinc-coated elements. No metallic transfer, no rust bleeds on your building's facade." },
      { title: "Double-Redundant Anchors", text: "All overhead structures use double-redundant physical locks, calculated to exceed regional seismic load standards." }
    ]
  },

  quoteBuilder: {
    header: {
      label: "08 / CONFIGURATOR",
      title: "Structural Parameter Estimator",
      coordinates: "ONLINE SPECIFICATION SHEET"
    } as SectionHeader,
    steps: [
      {
        id: "material",
        title: "1. Select Structural Alloy",
        description: "Materials define physical permanence and weathering performance.",
        options: [
          { label: "Patinated Copper (Grade C101)", value: "copper", description: "Develops natural oxide patina" },
          { label: "Marine Stainless (Grade 316)", value: "stainless", description: "Maximum corrosion resistance" },
          { label: "Architectural Bronze (Alloy 385)", value: "bronze", description: "Deep golden-brown luster" },
          { label: "Brushed Aluminum (Grade 6061)", value: "aluminum", description: "Lightweight structural metal" }
        ]
      },
      {
        id: "scale",
        title: "2. Scope of Installation",
        description: "Physical boundaries dictate rigging and wind structural calculation needs.",
        options: [
          { label: "Monolithic Ground Monument", value: "ground", description: "Integrated with concrete foundations" },
          { label: "Curtain-Wall Facade Identity", value: "facade", description: "Requires structural facade engineering" },
          { label: "High-Rise Tower Branding", value: "tower", description: "Requires heavy wind and rigging analysis" }
        ]
      },
      {
        id: "illumination",
        title: "3. Illumination Dynamics",
        description: "Specify integration with electrical layouts.",
        options: [
          { label: "Non-Illuminated (Reflective Contrast)", value: "none", description: "Relying on natural light angles" },
          { label: "Indirect Halo Illumination (Warm LED)", value: "halo", description: "Reflected off the architectural surface" },
          { label: "Internal Channel Projection (Direct)", value: "internal", description: "Diffused through acrylic or quartz glass" }
        ]
      }
    ] as QuoteStep[]
  },

  contactCta: {
    label: "09 / CONSULTATION",
    title: "Incorporate Identity into Your Architectural Plan",
    description: "Connect with our engineering office in Ahmedabad to discuss structural requirements, load distributions, and material specifications for your project.",
    actionLabel: "Initiate Technical Briefing"
  },

  featuredProjects: {
    header: {
      eyebrow: "OUR WORK",
      heading: "Selected Projects That Define Visibility.",
      subheading: "Every project is an opportunity to transform a space and strengthen a brand. As a leading sign board manufacturer Ahmedabad, we design and deliver custom signage Nikol Ahmedabad projects and premium signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India."
    },
    items: [
      {
        id: "infra-corp-installation",
        category: "ACP Facade & Corporate Signage",
        project: "INFRA CORP Headquarters",
        location: "Ahmedabad, Gujarat",
        description: "A monumental exterior building facade cladding and high-impact corporate branding system. This landmark ACP board and corporate signage installation was fabricated to withstand wind loads while displaying a crisp, professional brand identity.",
        buttonText: "View Project →",
        imagePath: "/assets/images/projects/infra-corp.png",
        client: "INFRA CORP India",
        dimensions: "12.0m x 3.5m",
        materials: "Weatherproof ACP Cladding, Premium SS 316 Letters, LED Backlit Systems",
        engineering: "Reinforced architectural steel sub-frame engineered to resist local wind gusts up to 150 km/h."
      },
      {
        id: "gold-letter-signage",
        category: "3D Acrylic & Gold Letter Signage",
        project: "The Gold Palace Showroom",
        location: "Nikol, Ahmedabad",
        description: "Elegant 3D acrylic letters with custom gold-titanium finish for a luxury retail storefront. Featuring warm-white halo LED lighting that adds depth and prestige to the storefront entrance.",
        buttonText: "View Project →",
        imagePath: "/assets/images/projects/gold-palace.png",
        client: "The Gold Palace",
        dimensions: "4.8m x 1.2m",
        materials: "Gold Titanium Stainless Steel, High-Density Acrylic, Warm LED Halo Modules",
        engineering: "Blind-pin offset anchoring set into stone facade with neoprene vibration isolation sleeves."
      },
      {
        id: "custom-neon-signage",
        category: "Custom Neon Signage",
        project: "Glow & Co. Creative Studio",
        location: "Ahmedabad, Gujarat",
        description: "Vibrant custom neon sign board custom design Ahmedabad styled for creative indoor visibility. Precision flex-neon layout designed to showcase brand typography with high visual impact.",
        buttonText: "View Project →",
        imagePath: "/assets/images/projects/creative-neon.png",
        client: "Glow & Co.",
        dimensions: "2.2m x 1.0m",
        materials: "Flexible Silicone Neon, Clear Acrylic Backing, Dynamic LED Controllers",
        engineering: "Addressable LED wiring hidden within a double-layer CNC-routed backing panel."
      },
      {
        id: "acp-board-installation",
        category: "LED Glow Sign Board",
        project: "Apex Commercial Hub",
        location: "Ahmedabad, Gujarat",
        description: "A premium ACP sign board Ahmedabad installation featuring laser-cut acrylic 3D letters and under-lit lighting. Engineered for 24/7 visibility and absolute durability under intense weather conditions.",
        buttonText: "View Project →",
        imagePath: "/assets/images/projects/apex-acp.png",
        client: "Apex Properties",
        dimensions: "6.0m x 1.8m",
        materials: "Architectural Grade ACP, Laser Profile Acrylic, High-Output LED Modules",
        engineering: "Sub-surface wiring routing with dual-redundant power supplies and automatic dusk-to-dawn sensors."
      }
    ],
    cta: {
      heading: "Have a project in mind?",
      description: "Let's create signage that transforms your space and makes your brand impossible to ignore.",
      buttonLabel: "View All Projects →",
      buttonLink: "/projects"
    },
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "5+", label: "Cities Served" },
      { value: "Pan India", label: "Service Footprint" }
    ]
  }
};
