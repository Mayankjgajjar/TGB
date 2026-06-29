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
    title: "Built to be Seen.\nMade to be remembered.",
    subtitle: "TGB Enterprise is a premium signage manufacturer in Ahmedabad, specializing in custom indoor and outdoor signage solutions for businesses across India. From design and manufacturing to installation and after-sales support, we create signage that elevates brands and leaves a lasting impression.",
    coordinates: "AHMEDABAD, GUJARAT / 23.0225° N, 72.5714° E",
    ctaLabel: "Explore Services"
  },

  identity: {
    intro: {
      eyebrowStory: "OUR STORY",
      headingStory: "We Build Visibility for Businesses Across India.",
      subheadingStory: "Designing, manufacturing, and installing premium signage solutions that transform spaces and strengthen brand identities.",
      eyebrowWho: "WHO WE ARE",
      headingWho: "More Than Signage.\nA Partner in Building Brand Presence.",
      paragraph1: "TGB Enterprise is a premium signage manufacturer based in Ahmedabad, Gujarat, delivering custom signage solutions for businesses across India. From retail storefronts and corporate offices to hospitality and commercial spaces, we create signage that combines creativity, craftsmanship, and durability.",
      paragraph2: "Our expertise spans LED sign boards, ACP sign boards, acrylic signage, 3D letter signages, neon signs, wayfinding systems, and complete branding solutions—designed and manufactured with uncompromising attention to detail.",
      paragraph3: "What truly sets us apart is our commitment beyond installation. We believe exceptional signage deserves exceptional support, which is why we provide dependable after-sales service and long-term partnerships with every client we serve.",
      closingStatement: "Because great signage isn't simply made to be seen.\nIt's made to represent your brand for years to come.",
      image: "/assets/images/who_we_are.png",
      metrics: [
        { value: "100+", label: "Projects Delivered" },
        { value: "5+", label: "Major Cities Served" },
        { value: "Pan India", label: "Service Capability" },
        { value: "100%", label: "Customer Commitment" }
      ],
      featuredClientsTitle: "Trusted by Growing Businesses and Established Brands",
      featuredClients: [
        "Speranza Legal Associates",
        "Speranza Tiles",
        "Grey Eminence",
        "Infinity AV Solution"
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
        category: "ILLUMINATION",
        title: "Lights That Don't Fade",
        description: "Premium LED systems engineered to maintain brightness for years and backed by a comprehensive 5-year warranty.",
        techLabel: "5 YEAR WARRANTY"
      },
      {
        number: "02",
        icon: "CloudSun",
        category: "MATERIALS",
        title: "Built For Every Season",
        description: "UV-resistant cast acrylic, durable ACP and SS304 materials selected to withstand harsh environments.",
        techLabel: "WEATHER RESISTANT"
      },
      {
        number: "03",
        icon: "Factory",
        category: "PRODUCTION",
        title: "Made Entirely In-House",
        description: "Every component is designed, manufactured and quality checked under one roof to ensure uncompromising quality.",
        techLabel: "100% IN-HOUSE"
      },
      {
        number: "04",
        icon: "BadgeCheck",
        category: "TRUST",
        title: "Trusted By Brands", /* Shortened from "Trusted Across Gujarat" just in case */
        description: "Chosen by startups, businesses and leading brands to build identities that represent them with confidence.",
        techLabel: "ESTABLISHED TRUST" /* Shortened from "MOST TRUSTED BRAND IN GUJARAT" */
      }
    ],
    leadershipLabel: "",
    leadershipTitle: "THE PEOPLE BEHIND TGB",
    leadershipSubtitle: "Three perspectives. One standard. From design and technical execution to marketing and client relationships, our leadership team shares a singular commitment to uncompromising craftsmanship and long-term value.",
    leaders: [
      {
        name: "Divyesh Gajjar",
        role: "MARKETING HEAD",
        description: "Leads client relationships, business development and brand strategy, ensuring every project reflects the values and vision of the businesses we serve.",
        image: "/assets/images/Divyesh%20Gajjar.jpeg"
      },
      {
        name: "Ankit Gajjar",
        role: "TECHNICAL HEAD",
        description: "Oversees engineering, fabrication and execution, ensuring every product meets the highest standards of quality and durability.",
        image: "/assets/images/Ankit%20Gajjar.jpeg"
      },
      {
        name: "Mayank Gajjar",
        role: "DESIGNING HEAD",
        description: "Leads the creative direction and visualization process, transforming ideas into signage and branding systems that leave lasting impressions.",
        image: "/assets/images/Mayank%20Gajjar.jpeg"
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
  }
};
