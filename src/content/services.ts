export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  heroImage: string;
  positioning: string;
  overview: {
    description: string;
    whyItMatters: string;
    whoItIsFor: string;
  };
  capabilities: {
    materials: string[];
    technology: string[];
    finishes: string[];
    customization: string[];
  };
  specifications: {
    dimensions: string;
    weatherResistance: string;
    warranty: string;
    certifications: string;
    maintenance: string;
  };
  pricing: {
    startingFrom: string;
    customQuotationNotes: string[];
  };
  process: ServiceProcess[];
  industriesServed: string[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
  seoMetadata: {
    title: string;
    description: string;
  };
}

const standardProcess: ServiceProcess[] = [
  { step: "01", title: "Consultation & Site Survey", description: "Technical evaluation of the site architecture, viewing angles, and structural requirements." },
  { step: "02", title: "Engineering & Design", description: "Creation of precision blueprints, material selection, and 3D mockups for approval." },
  { step: "03", title: "Manufacturing", description: "In-house fabrication using CNC routing, laser cutting, and premium architectural materials." },
  { step: "04", title: "Installation", description: "Secure, code-compliant structural mounting by our certified installation teams." },
  { step: "05", title: "Support & Maintenance", description: "Ongoing warranty support and scheduled maintenance to ensure decades of performance." }
];

export const servicesData: Record<string, ServiceDetail> = {
  "led-sign-boards": {
    slug: "led-sign-boards",
    name: "LED Sign Boards",
    icon: "Zap",
    shortDescription: "High-brightness LED systems built for visibility day and night, with long-lasting performance.",
    heroImage: "/assets/services/led_sign.png",
    positioning: "Engineered for 24/7 brand visibility. Precision illumination meets architectural permanence.",
    overview: {
      description: "Our LED sign boards are designed to deliver uncompromising brightness and perfect light distribution. We utilize high-efficiency LED modules enclosed in weather-sealed housing, ensuring your brand remains impossible to miss even in the harshest conditions.",
      whyItMatters: "Visibility is the foundation of physical branding. A dim or failing sign degrades brand trust. Our LED systems guarantee even, intense illumination that commands authority.",
      whoItIsFor: "Retailers, corporate headquarters, hospitality groups, and large-scale commercial real estate developments."
    },
    capabilities: {
      materials: ["Extruded Aluminum", "Polycarbonate", "Cast Acrylic", "Stainless Steel"],
      technology: ["IP67 Rated LED Modules", "Meanwell Transformers", "Automated Light Sensors"],
      finishes: ["Matte Powder Coat", "Brushed Metal", "Automotive Grade Paint"],
      customization: ["RGB Addressable LEDs", "Custom Dimming Profiles", "Architectural Integration"]
    },
    specifications: {
      dimensions: "Fully custom scale. From 1m storefronts to 20m high-rise structural signs.",
      weatherResistance: "IP67 rated. Withstands Category 4 hurricane winds and extreme UV exposure.",
      warranty: "5-Year warranty on LEDs and Transformers. 10-Year structural guarantee.",
      certifications: "CE, RoHS, ISO 9001:2015",
      maintenance: "Low. Annual inspection of transformers and sealed enclosures recommended."
    },
    pricing: {
      startingFrom: "₹15,000",
      customQuotationNotes: [
        "Overall dimensions and depth requirements",
        "Number of LED modules required for uniform luminosity",
        "Complexity of structural mounting and height",
        "Material selections (Acrylic vs Polycarbonate)"
      ]
    },
    process: standardProcess,
    industriesServed: ["Retail", "Corporate", "Healthcare", "Hospitality"],
    gallery: [
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1562916694-5b4d7541d4bc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "How long do the LEDs last?", answer: "We use premium modules rated for 50,000 to 100,000 hours of continuous operation." },
      { question: "Is the lighting uneven or spotty?", answer: "No. We calculate precise LED placement and use light-diffusing acrylics to guarantee zero hot-spots." }
    ],
    seoMetadata: {
      title: "Premium LED Sign Boards | TGB Enterprise",
      description: "High-impact, architecturally integrated LED sign boards. Precision engineered in Ahmedabad for unmatched 24/7 visibility."
    }
  },
  "acp-sign-boards": {
    slug: "acp-sign-boards",
    name: "ACP Sign Boards",
    icon: "Layers",
    shortDescription: "Aluminium composite panel signage — lightweight, weatherproof, and sharp-finished.",
    heroImage: "/assets/services/acp_sign.png",
    positioning: "The architectural standard for exterior cladding and structural signage.",
    overview: {
      description: "Aluminium Composite Panels (ACP) offer the perfect balance of rigidity, weight, and weather resistance. We CNC-rout ACP to create seamless, flat facades that act as the perfect canvas for 3D letters or routed illumination.",
      whyItMatters: "A seamless facade projects stability. ACP allows us to cover large exterior spans with zero warping or oil-canning, ensuring a perfectly flat, premium surface.",
      whoItIsFor: "Automotive dealerships, corporate campuses, industrial facilities, and modern retail environments."
    },
    capabilities: {
      materials: ["3mm to 4mm Exterior Grade ACP", "MS Tubular Framing", "Aluminium Extrusions"],
      technology: ["CNC Precision Routing", "Laser Alignment Mounting"],
      finishes: ["Matte", "Gloss", "Metallic", "Wood Grain Texture"],
      customization: ["Push-through Acrylic Letters", "Back-lit Routed Logos", "Multi-panel Seamless Joins"]
    },
    specifications: {
      dimensions: "Standard panel sizes up to 8x4ft, joined seamlessly for infinite scale.",
      weatherResistance: "100% Rust-proof. Extreme heat and heavy monsoon resistant.",
      warranty: "10-Year anti-fade warranty on premium ACP sheets.",
      certifications: "Fire Retardant (FR) core options available.",
      maintenance: "Very low. Washable with standard non-abrasive industrial cleaners."
    },
    pricing: {
      startingFrom: "₹350 / Sq.Ft.",
      customQuotationNotes: [
        "Total square footage and panel yield",
        "Brand of ACP (Aludecor, Viva, Eurobond)",
        "Complexity of MS framing substructure",
        "Inclusion of routed push-through lighting"
      ]
    },
    process: standardProcess,
    industriesServed: ["Automotive", "Industrial", "Commercial Real Estate", "Retail"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "Will the color fade in the sun?", answer: "We exclusively use PVDF coated exterior-grade ACP, which guarantees color retention for over 10 years even under direct Indian sunlight." },
      { question: "Can ACP be curved?", answer: "Yes, our engineering team can route and roll ACP to wrap around architectural pillars and curved facades seamlessly." }
    ],
    seoMetadata: {
      title: "ACP Sign Boards & Facades | TGB Enterprise",
      description: "Precision-engineered ACP signage and cladding. Seamless, weatherproof, and architecturally brilliant."
    }
  },
  "neon-sign-boards": {
    slug: "neon-sign-boards",
    name: "Neon Sign Boards",
    icon: "Flame",
    shortDescription: "Premium flex-neon and glass-neon displays designed to make your brand impossible to miss.",
    heroImage: "/assets/services/neon_sign.png",
    positioning: "Vibrant, unignorable atmosphere. Engineered for maximum visual impact.",
    overview: {
      description: "Combining the nostalgic aesthetic of neon with modern, ultra-durable LED silicone flex technology. We craft neon signs that are unbreakable, highly energy-efficient, and capable of rendering complex typography and logos with perfect luminance.",
      whyItMatters: "Neon isn't just a sign; it's an architectural lighting feature. It sets the mood, draws foot traffic, and becomes a highly photogenic centerpiece for your interior or exterior.",
      whoItIsFor: "Bars, restaurants, boutique hotels, creative agencies, and modern retail concepts."
    },
    capabilities: {
      materials: ["Silicone LED Flex", "Clear Acrylic Backing", "Aluminium Channels"],
      technology: ["12V Low Voltage Systems", "Precision Laser Cut Backboards"],
      finishes: ["Clear Acrylic Base", "Matte Black ACM Base", "Suspended Wire Systems"],
      customization: ["Dimmable Controllers", "RGB Color Changing", "Custom Font Matching"]
    },
    specifications: {
      dimensions: "Customizable. Minimum stroke width of 6mm required for complex logos.",
      weatherResistance: "Indoor (IP20) and Outdoor (IP67) options available.",
      warranty: "1-Year comprehensive warranty on LEDs and adaptors.",
      certifications: "CE, RoHS Compliant",
      maintenance: "Zero maintenance. Simply wipe clean with a dry microfiber cloth."
    },
    pricing: {
      startingFrom: "₹6,000",
      customQuotationNotes: [
        "Total running length of the neon flex",
        "Complexity of the vector design / typography",
        "Indoor vs Outdoor waterproofing requirements",
        "Type of backing material (Clear acrylic, ACP, Mesh)"
      ]
    },
    process: standardProcess,
    industriesServed: ["Hospitality", "F&B", "Nightlife", "Creative Corporate"],
    gallery: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "Is this traditional glass neon?", answer: "No, we use premium LED silicone flex. It looks identical to glass neon but uses 80% less power, is unbreakable, and stays cool to the touch." },
      { question: "Can it be installed outdoors?", answer: "Yes, we can seal the flex and use waterproof power supplies for fully exposed exterior installations." }
    ],
    seoMetadata: {
      title: "Custom Neon Sign Boards | TGB Enterprise",
      description: "Premium LED neon signs for hospitality and retail. Unbreakable, vibrant, and engineered for atmosphere."
    }
  },
  "acrylic-letters": {
    slug: "acrylic-letters",
    name: "Acrylic Letters",
    icon: "Type",
    shortDescription: "Precision-cut acrylic lettering with backlit and front-lit options for clean brand presence.",
    heroImage: "/assets/services/acrylic_letters.png",
    positioning: "Sharp, clean, and endlessly versatile. The standard for premium corporate identity.",
    overview: {
      description: "Acrylic letters offer incredible versatility in depth, color, and illumination. We laser-cut and hand-finish premium cast acrylic to create solid 3D letters, halo-lit logos, and front-illuminated channel letters with razor-sharp edges.",
      whyItMatters: "Acrylic provides a perfectly smooth, glossy, or matte finish that looks expensive up close. It allows for perfect diffusion of light, creating an elegant glow rather than harsh glare.",
      whoItIsFor: "Corporate offices, luxury retail boutiques, clinics, and interior reception walls."
    },
    capabilities: {
      materials: ["Premium Cast Acrylic (3mm to 20mm)", "Polycarbonate Backing", "Sunboard"],
      technology: ["Laser Cutting", "CNC Routing", "Thermal Bending"],
      finishes: ["High Gloss", "Matte Frosted", "Vinyl Overlays"],
      customization: ["Front-lit", "Halo/Back-lit", "Edge-lit", "Solid Non-illuminated"]
    },
    specifications: {
      dimensions: "Depths from 3mm to 100mm. Heights from 2 inches to 5+ feet.",
      weatherResistance: "UV resistant. Will not yellow or crack under sunlight.",
      warranty: "3-Year warranty against UV yellowing.",
      certifications: "ISO Certified Acrylics",
      maintenance: "Low. Susceptible to scratching, clean only with soft microfiber and acrylic cleaners."
    },
    pricing: {
      startingFrom: "₹150 / Inch",
      customQuotationNotes: [
        "Thickness (depth) of the acrylic",
        "Illumination style (Front, Halo, Edge)",
        "Height of the letters",
        "Complexity of the logo shape"
      ]
    },
    process: standardProcess,
    industriesServed: ["Corporate", "Retail", "Healthcare", "Education"],
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "Will white acrylic turn yellow over time?", answer: "Cheap extruded acrylic will yellow. We strictly use premium UV-stabilized cast acrylic that stays pure white for years." },
      { question: "Can you match my exact brand color?", answer: "Yes, we can apply translucent Avery or 3M vinyl films to match exact Pantone colors perfectly." }
    ],
    seoMetadata: {
      title: "3D Acrylic Letters & Logos | TGB Enterprise",
      description: "Precision laser-cut acrylic letters. Front-lit, halo-lit, and solid options for premium corporate branding."
    }
  },
  "ss-letters": {
    slug: "ss-letters",
    name: "SS Letters",
    icon: "Bold",
    shortDescription: "Stainless steel letters crafted for architectural permanence and a premium metallic finish.",
    heroImage: "/assets/services/ss_letters.png",
    positioning: "Uncompromising permanence. Heavyweight industrial elegance for luxury brands.",
    overview: {
      description: "Stainless Steel (SS) letters are the pinnacle of architectural signage. We utilize 304 and 316-grade steel, precision laser-cut and welded by master craftsmen to create seamless, heavy-duty 3D letters that project absolute authority and luxury.",
      whyItMatters: "Nothing mimics the weight and reflection of real metal. SS letters convey a sense of establishment, wealth, and uncompromising quality that plastics cannot achieve.",
      whoItIsFor: "Luxury hotels, high-end residential developments, premium jewelers, and government institutions."
    },
    capabilities: {
      materials: ["304 Grade SS (Standard)", "316 Grade SS (Marine/Coastal)", "Titanium Coated SS"],
      technology: ["Fiber Laser Cutting", "Argon Welding", "Electroplating"],
      finishes: ["Brushed/Hairline", "Mirror Polished", "Titanium Gold", "Rose Gold", "Matte Black PVD"],
      customization: ["Solid Cut (Non-lit)", "Halo-lit (Backlit with LEDs)"]
    },
    specifications: {
      dimensions: "Depths from 10mm to 150mm. Laser precision down to 0.1mm tolerances.",
      weatherResistance: "100% Rust-proof (when 316 grade is used). Indestructible under normal conditions.",
      warranty: "10-Year structural and anti-rust warranty.",
      certifications: "Material Test Certificates (MTC) provided.",
      maintenance: "Requires occasional polishing with SS cleaner to maintain luster and remove fingerprints."
    },
    pricing: {
      startingFrom: "₹250 / Inch",
      customQuotationNotes: [
        "Grade of steel (304 vs 316)",
        "Finish required (Mirror vs Brushed vs PVD Gold)",
        "Depth (3D return) of the letters",
        "Addition of Halo LED lighting"
      ]
    },
    process: standardProcess,
    industriesServed: ["Luxury Hospitality", "Premium Real Estate", "Jewelry & Fashion", "Government"],
    gallery: [
      "https://images.unsplash.com/photo-1616423641402-53d9e8464303?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1621252179027-9d7fbdb8a101?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "Will the steel rust outdoors?", answer: "Standard 304 grade is excellent for most outdoor uses. For coastal areas or high-pollution zones, we upgrade to 316 marine-grade steel to guarantee zero rusting." },
      { question: "Can steel letters light up?", answer: "Steel itself is opaque, but we specialize in 'Halo-lit' designs where LEDs are mounted inside the steel letter, casting a luxurious glow against the wall behind it." }
    ],
    seoMetadata: {
      title: "Stainless Steel & Titanium Sign Letters | TGB Enterprise",
      description: "Luxury stainless steel, mirror, and titanium gold 3D letters. Laser-cut and welded for absolute architectural permanence."
    }
  },
  "pylon-signs": {
    slug: "pylon-signs",
    name: "Pylon Signs",
    icon: "Triangle",
    shortDescription: "Freestanding pylon structures for commercial complexes, malls, and roadside brand identity.",
    heroImage: "/assets/services/pylon_sign.png",
    positioning: "Monumental scale. Engineered landmarks that dominate the roadside landscape.",
    overview: {
      description: "Pylon and monument signs are colossal, freestanding architectural structures designed for maximum visibility from highways and main roads. We engineer the heavy MS steel substructures, pour the concrete foundations, and clad them in premium ACP and LED displays.",
      whyItMatters: "A pylon sign is often a customer's first physical touchpoint with a commercial property. It must withstand massive wind loads while maintaining a sleek, premium aesthetic at an immense scale.",
      whoItIsFor: "Shopping malls, petrol pumps, massive commercial tech parks, hospitals, and highway retail hubs."
    },
    capabilities: {
      materials: ["Heavy MS ISMB Beams", "RCC Foundations", "ACP Cladding", "Polycarbonate Fascias"],
      technology: ["Structural Engineering", "Wind Load Calculation", "Crane Installation"],
      finishes: ["Industrial Epoxy Paint", "Premium ACP Cladding"],
      customization: ["Multi-tenant Lightboxes", "Integrated LED Video Walls", "Architectural Shapes"]
    },
    specifications: {
      dimensions: "Heights ranging from 10ft monument signs to 80ft+ highway pylons.",
      weatherResistance: "Engineered to withstand extreme seismic and wind loads.",
      warranty: "15-Year structural warranty.",
      certifications: "Structural Stability Certificate provided by certified engineers.",
      maintenance: "Requires annual structural safety audits and electrical checks."
    },
    pricing: {
      startingFrom: "₹1,50,000",
      customQuotationNotes: [
        "Overall height and width of the structure",
        "Soil conditions and concrete foundation requirements",
        "Wind load engineering specifications",
        "Integration of digital screens or complex lighting"
      ]
    },
    process: standardProcess,
    industriesServed: ["Commercial Real Estate", "Retail Malls", "Healthcare", "Automotive"],
    gallery: [
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200"
    ],
    faqs: [
      { question: "Do you handle the structural engineering?", answer: "Yes. Every pylon over 15ft undergoes rigorous structural analysis and wind-load calculations by our partnered structural engineers before fabrication begins." },
      { question: "Who handles the foundation work?", answer: "We offer end-to-end turnkey solutions, including digging, RCC casting, and foundation bolt setting." }
    ],
    seoMetadata: {
      title: "Architectural Pylon & Monument Signs | TGB Enterprise",
      description: "Colossal, structurally engineered pylon signs for malls and commercial parks. Built for safety, scale, and visibility."
    }
  }
};
