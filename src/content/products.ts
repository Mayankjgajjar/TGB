export interface ProductProcess {
  step: string;
  title: string;
  description: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
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
    taxNote: string;
    customQuotationNotes: string[];
  };
  process: ProductProcess[];
  industriesServed: string[];
  gallery: string[];
  relatedProductSlugs: string[];
  relatedProjectIds: string[];
  faqs: { question: string; answer: string }[];
  seoMetadata: {
    title: string;
    description: string;
  };
}

export const PRODUCT_CATEGORIES = [
  'All Products',
  'LED Sign Boards',
  'ACP Sign Boards',
  'Acrylic Signage',
  'Channel Letter Signage',
  'Stainless Steel Letters',
  'Brass Letters',
  'Neon Signs',
  'Pylon & Totem Signs',
  'Wayfinding Systems',
  'Reception Signs',
  'Safety Signage',
  'Corporate Branding',
  'Retail Branding',
  'Custom Fabrication',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

const standardProcess: ProductProcess[] = [
  {
    step: '01',
    title: 'Consultation & Site Survey',
    description:
      'Technical evaluation of the site architecture, viewing angles, structural mounting, and environmental loads.',
  },
  {
    step: '02',
    title: 'Engineering & Blueprints',
    description:
      'Precision CAD blueprints, structural steel calculations, lighting distribution simulation, and 3D mockups.',
  },
  {
    step: '03',
    title: 'CNC & Laser Fabrication',
    description:
      'In-house precision cutting, CNC routing, fiber laser welding, and high-spec architectural finish application.',
  },
  {
    step: '04',
    title: 'Certified Installation',
    description:
      'Structural anchor installation and electrical line integration by certified rigging engineers.',
  },
  {
    step: '05',
    title: 'Warranty & Maintenance',
    description:
      'Multi-year structural & electrical warranty coverage with scheduled maintenance services across India.',
  },
];

export const productsData: Record<string, ProductDetail> = {
  'led-sign-boards': {
    slug: 'led-sign-boards',
    name: 'LED Sign Boards',
    category: 'LED Sign Boards',
    icon: 'Zap',
    shortDescription:
      'High-brightness LED illuminated systems engineered for 24/7 brand visibility and exterior weather permanence.',
    heroImage: '/assets/services/led-sign.png',
    positioning:
      'Engineered for 24/7 brand visibility. Precision optical distribution meets structural weather resistance.',
    overview: {
      description:
        'Our illuminated LED sign boards deliver intense, uniform illumination with automated energy management. Fabricated using high-efficiency IP67 LED modules and weather-sealed aluminum chassis.',
      whyItMatters:
        'Daylight legibility and night brightness are critical to high-footfall commercial facades. Premium LEDs guarantee zero dark spots and decades of consistent lumen output.',
      whoItIsFor:
        'Corporate headquarters, retail showrooms, shopping malls, hospital facades, and highway commercial landmarks.',
    },
    capabilities: {
      materials: [
        'Extruded Aluminum Alloy',
        'Polycarbonate Diffusers',
        'Cast Acrylic',
        'Galvanized Sub-Frames',
      ],
      technology: [
        'IP67 Waterproof LED Modules',
        'Meanwell Constant Voltage Drivers',
        'Photocell Daylight Sensors',
      ],
      finishes: ['Architectural Powder Coating', 'PVDF Coating', 'Anodized Matte Finish'],
      customization: [
        'Multi-Color RGB Modules',
        'Front-Lit / Backlit / Dual Illumination',
        'Dimming Controllers',
      ],
    },
    specifications: {
      dimensions: 'Custom fabricated to site dimensions up to 15m single spans',
      weatherResistance: 'IP67 rated water and dust enclosure, wind load certified to 140 km/h',
      warranty: '3 to 5 Years Comprehensive On-Site Warranty',
      certifications: 'ISO 9001:2015 Manufacturing, CE Approved Electrical Components',
      maintenance: 'Wipe-clean acrylic face, quick-access driver hatch',
    },
    pricing: {
      startingFrom: '₹1,200 / sq. ft.',
      taxNote: 'Prices exclusive of GST and site installation structure',
      customQuotationNotes: [
        'Includes 3D architectural mockup and lighting simulation',
        'Custom structural steel brackets calculated per wind load',
      ],
    },
    process: standardProcess,
    industriesServed: [
      'Retail & Showrooms',
      'Corporate Facilities',
      'Healthcare & Hospitals',
      'Hospitality',
    ],
    gallery: ['/assets/images/projects/infra-corp.png', '/assets/services/led-sign.png'],
    relatedProductSlugs: ['acp-sign-boards', 'acrylic-letters', 'pylon-signs'],
    relatedProjectIds: ['infra-corp-installation', 'gold-letter-signage'],
    faqs: [
      {
        question: 'What is the average lifespan of TGB LED sign boards?',
        answer:
          'Our industrial LED modules are rated for over 50,000 continuous operating hours (approx. 8–10 years).',
      },
      {
        question: 'Are your LED boards weatherproof for torrential monsoons?',
        answer:
          'Yes, all modules and transformers are housed inside IP67 weather-sealed aluminum enclosures with silicone gaskets.',
      },
    ],
    seoMetadata: {
      title: 'LED Sign Boards Manufacturer in Ahmedabad | TGB Enterprise',
      description:
        'Custom illuminated LED sign boards engineered by TGB Enterprise in Ahmedabad. High brightness, IP67 waterproof, multi-year warranty.',
    },
  },

  'acp-sign-boards': {
    slug: 'acp-sign-boards',
    name: 'ACP Sign Boards',
    category: 'ACP Sign Boards',
    icon: 'Shield',
    shortDescription:
      'Ultra-durable Aluminum Composite Panel facade cladding and heavy-duty exterior sign boards.',
    heroImage: '/assets/services/acp-sign.png',
    positioning:
      'Sleek architectural facade integration. Weather-proof metallic and solid color panel systems.',
    overview: {
      description:
        'TGB Enterprise manufactures precision-routed ACP sign boards and full building facade cladding. Built using 3mm to 4mm exterior grade PVDF coated composite panels.',
      whyItMatters:
        'ACP provides a perfectly flat, non-warping architectural surface that shields building facades while providing a high-contrast base for 3D lettering.',
      whoItIsFor:
        'Automobile dealerships, commercial office towers, bank branches, industrial parks, and retail facades.',
    },
    capabilities: {
      materials: [
        '4mm PVDF Aluminum Composite Panel',
        'Mild Steel Tubular Grid Structure',
        'Stainless Steel Fasteners',
      ],
      technology: [
        'CNC V-Grooving & Routing',
        'Precision Panel Folding',
        'Thermal Expansion Joint Sealing',
      ],
      finishes: ['Metallic Silver', 'Champagne Gold', 'Wood Grain Texture', 'Solid High-Gloss'],
      customization: [
        'Curved Panel Bending',
        'Perforated Backlit Panels',
        'Integrated Channel Letters',
      ],
    },
    specifications: {
      dimensions: 'Standard 8ft x 4ft panel modules engineered seamlessly',
      weatherResistance: 'UV-resistant PVDF coating, 100% rustproof face',
      warranty: '5 Years Structural & Paint Warranty',
      certifications: 'Class A Fire-Retardant Core Options Available',
      maintenance: 'Pressure washable surface, low dust retention',
    },
    pricing: {
      startingFrom: '₹350 / sq. ft.',
      taxNote: 'Prices exclusive of GST and steel framing erection',
      customQuotationNotes: [
        'Site structural survey included for facades over 500 sq. ft.',
        'CAD elevation drawings provided prior to fabrication',
      ],
    },
    process: standardProcess,
    industriesServed: [
      'Corporate Real Estate',
      'Automobile Showrooms',
      'Banking & Finance',
      'Industrial Plants',
    ],
    gallery: ['/assets/images/projects/apex-acp.png', '/assets/services/acp-sign.png'],
    relatedProductSlugs: ['led-sign-boards', 'ss-letters', 'pylon-signs'],
    relatedProjectIds: ['acp-board-installation', 'infra-corp-installation'],
    faqs: [
      {
        question: 'Does ACP board color fade in harsh sunlight?',
        answer:
          'We use exterior PVDF coated aluminum sheets certified against UV degradation and color fading for up to 10 years.',
      },
    ],
    seoMetadata: {
      title: 'ACP Sign Board Cladding & Facades in Ahmedabad | TGB Enterprise',
      description:
        'Premium PVDF aluminum composite panel (ACP) sign boards and exterior facade cladding manufactured by TGB Enterprise, Ahmedabad.',
    },
  },

  'acrylic-letters': {
    slug: 'acrylic-letters',
    name: '3D Acrylic Signage',
    category: 'Acrylic Signage',
    icon: 'Box',
    shortDescription:
      'Precision CNC-cut 3D acrylic letters with front-lit, halo-lit, and edge-lit LED configurations.',
    heroImage: '/assets/services/acrylic-letters.png',
    positioning:
      'High-clarity optical grade 3D branding elements. Crisp edges, vibrant colors, and smooth translucent diffusion.',
    overview: {
      description:
        'Crafted from virgin cast acrylic sheets, our 3D letters deliver crisp, dimensionally accurate brand logotypes for interior receptions and exterior building faces.',
      whyItMatters:
        '3D depth creates tactile prestige that flat signage cannot match. Optically pure acrylic ensures even light diffusion without hot spots.',
      whoItIsFor:
        'Boutiques, luxury showrooms, corporate reception desks, hotel lobbies, and restaurant interiors.',
    },
    capabilities: {
      materials: [
        'Cast Virgin Acrylic (3mm to 25mm)',
        'Translucent Diffuser Film',
        'Brass/SS Standoff Brackets',
      ],
      technology: ['Laser Edge Polishing', 'CNC Router Carving', 'Solvent Bonding'],
      finishes: [
        'Flame Polished Edges',
        'Frosted Matte',
        'High-Gloss Clear',
        'Vinyl Overlay Color Matching',
      ],
      customization: [
        'Halo Backlight Effect',
        'Dual-Color Face/Side Combinations',
        'Push-Through Acrylic',
      ],
    },
    specifications: {
      dimensions: 'Letter heights from 50mm to 1800mm',
      weatherResistance: 'Non-yellowing UV stabilized grade cast acrylic',
      warranty: '3 Years Color & Light Warranty',
      certifications: 'RoHS Compliant Acrylic Materials',
      maintenance: 'Microfiber dust wipe with anti-static acrylic cleaner',
    },
    pricing: {
      startingFrom: '₹85 / inch height per letter',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: [
        'Vector file artwork (.AI / .CDR / .DXF) required for exact quote',
        'Includes installation 1:1 paper template stencil',
      ],
    },
    process: standardProcess,
    industriesServed: [
      'Luxury Retail',
      'Corporate Offices',
      'Jewelry Showrooms',
      'Interior Design Studios',
    ],
    gallery: ['/assets/images/projects/gold-palace.png', '/assets/services/acrylic-letters.png'],
    relatedProductSlugs: ['ss-letters', 'channel-letters', 'reception-signs'],
    relatedProjectIds: ['gold-letter-signage'],
    faqs: [
      {
        question: 'Will acrylic letters turn yellow over time?',
        answer:
          'No, we exclusively use virgin cast acrylic sheets with built-in UV stabilizers that guarantee zero yellowing for over 7 years.',
      },
    ],
    seoMetadata: {
      title: '3D Acrylic Letters & Signage Manufacturer in Ahmedabad | TGB Enterprise',
      description:
        'Precision laser-cut 3D acrylic letters, front-lit and halo-lit signage manufactured by TGB Enterprise, Nikol, Ahmedabad.',
    },
  },

  'channel-letters': {
    slug: 'channel-letters',
    name: 'Channel Letter Signage',
    category: 'Channel Letter Signage',
    icon: 'Layers',
    shortDescription:
      'Individually fabricated 3D aluminum and stainless steel channel letters with LED internal lighting.',
    heroImage: '/assets/services/acrylic-letters.png',
    positioning:
      'Architectural 3D letterforms with structural strength and individual module serviceability.',
    overview: {
      description:
        'Channel letters are custom-made 3D building sign letters with individual returns and faces. Built using computer-controlled letter benders for extreme geometric precision.',
      whyItMatters:
        'Individual channel letters allow light to project both forward through acrylic faces and backward against the building wall, producing high-impact dual halo effects.',
      whoItIsFor:
        'Commercial plazas, shopping malls, multiplexes, auto dealerships, and institutional facades.',
    },
    capabilities: {
      materials: [
        'Aluminum Channel Returns',
        'Stainless Steel 304',
        'Cast Acrylic Face',
        'High-Lumen LEDs',
      ],
      technology: ['Automated CNC Letter Benders', 'Fiber Laser Welding', 'Silicone Sealing'],
      finishes: [
        'Powder Coated Sides',
        'Mirror Polish',
        'Brush Satin',
        'Custom Pantone Paint Match',
      ],
      customization: ['Trimless Flush Face', 'Standard Trim Cap', 'Open Neon/Filament Look'],
    },
    specifications: {
      dimensions: 'Depth from 50mm to 150mm; Heights from 200mm to 2500mm',
      weatherResistance: 'IP65 sealed individual letter cavities',
      warranty: '3 Years Warranty',
      certifications: 'CE LED Drivers, Class 1 Structural Anchor Bolts',
      maintenance: 'Front acrylic face removable for internal LED servicing',
    },
    pricing: {
      startingFrom: '₹120 / inch height',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Price varies based on letter depth and halo effect specification'],
    },
    process: standardProcess,
    industriesServed: ['Shopping Malls', 'Cinemas & Multiplexes', 'Commercial Complexes'],
    gallery: ['/assets/images/projects/infra-corp.png'],
    relatedProductSlugs: ['led-sign-boards', 'ss-letters', 'acrylic-letters'],
    relatedProjectIds: ['infra-corp-installation'],
    faqs: [
      {
        question: 'What is the difference between trimless and trimcap channel letters?',
        answer:
          'Trimless channel letters have a seamless, flush edge on the front acrylic face for a modern look, while trimcap uses an architectural plastic molding edge for extra structural grip.',
      },
    ],
    seoMetadata: {
      title: '3D Channel Letter Signage Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'Precision fabricated 3D channel letters with LED illumination by TGB Enterprise in Ahmedabad. Commercial building facade specialists.',
    },
  },

  'ss-letters': {
    slug: 'ss-letters',
    name: 'Stainless Steel Letters',
    category: 'Stainless Steel Letters',
    icon: 'Sparkles',
    shortDescription:
      'Corrosion-proof Stainless Steel 304/316 3D letters with mirror, brushed satin, and gold PVD titanium coatings.',
    heroImage: '/assets/services/ss-letters.png',
    positioning:
      'Permanent architectural metal craft. Grade 304 & 316 stainless steel for prestigious entrance identity.',
    overview: {
      description:
        'Engineered from marine-grade stainless steel sheets, our SS 3D letters provide unmatched corrosion protection, structural stiffness, and high-end aesthetic reflection.',
      whyItMatters:
        'Stainless steel delivers an undeniable feeling of permanence and financial security. It withstands harsh industrial pollutants and coastal humidity without rusting.',
      whoItIsFor:
        'Banks, corporate towers, government institutions, luxury residential gates, and diamond/jewelry merchants.',
    },
    capabilities: {
      materials: ['SS 304 Grade', 'SS 316 Marine Grade', 'PVD Titanium Gold/Rose Gold Sheets'],
      technology: ['Fiber Laser Cutting', 'TIG Micro-Welding', 'Precision Metal Folding'],
      finishes: [
        'High-Mirror Chrome',
        'Brushed Hairline Satin',
        'PVD Gold Coating',
        'Antique Copper Tone',
      ],
      customization: ['Solid Block Steel', 'Fabricated Hollow Box', 'Warm LED Backlit Halo'],
    },
    specifications: {
      dimensions: 'Thickness from 1.2mm to 3mm sheet stock; Depths from 15mm to 100mm',
      weatherResistance: '100% Rust-proof and acid-rain resistant',
      warranty: '7 Years Corrosion Guarantee',
      certifications: 'AISI 304/316 Certified Stainless Steel Stock',
      maintenance: 'Periodic polish with stainless steel cleaner spray',
    },
    pricing: {
      startingFrom: '₹95 / inch height',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['PVD Titanium Gold finish available upon request'],
    },
    process: standardProcess,
    industriesServed: [
      'Banking & Financial Institutions',
      'Government & Public Sector',
      'Luxury Real Estate',
    ],
    gallery: ['/assets/images/projects/gold-palace.png', '/assets/services/ss-letters.png'],
    relatedProductSlugs: ['brass-letters', 'acrylic-letters', 'reception-signs'],
    relatedProjectIds: ['gold-letter-signage', 'infra-corp-installation'],
    faqs: [
      {
        question: 'Is Grade 316 stainless steel necessary for Ahmedabad climate?',
        answer:
          'Grade 304 is ideal for inland cities like Ahmedabad. Grade 316 is recommended for chemical industrial plants or coastal regions.',
      },
    ],
    seoMetadata: {
      title: 'Stainless Steel 3D Letters Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'Grade 304/316 Stainless Steel 3D letters, PVD Gold titanium letters, and laser-cut metal signage by TGB Enterprise Ahmedabad.',
    },
  },

  'brass-letters': {
    slug: 'brass-letters',
    name: 'Brass Letters & Emblems',
    category: 'Brass Letters',
    icon: 'Award',
    shortDescription:
      'Solid brass and polished bronze 3D letters offering classic antique elegance and rich warm reflections.',
    heroImage: '/assets/services/ss-letters.png',
    positioning: 'Heritage metal craftsmanship meets modern laser precision cutting.',
    overview: {
      description:
        'Fabricated from heavy gauge solid brass plate, our brass letters offer timeless warm yellow tones, natural aging patina, or protective clear lacquer coatings.',
      whyItMatters:
        'Brass conveys heritage, tradition, and established history. Ideal for law firms, heritage hotels, and legacy financial houses.',
      whoItIsFor:
        'Law firms, executive suites, luxury heritage hotels, museums, and high-end residential estates.',
    },
    capabilities: {
      materials: [
        'Solid CZ108 Brass Plate',
        'Leaded Brass Sheet Stock',
        'Protective Clear Lacquer',
      ],
      technology: ['Waterjet Cutting', 'Hand Polishing & Buffing', 'Chemical Patina Aging'],
      finishes: [
        'Bright Polished Gold',
        'Antique Hand-Rubbed Patina',
        'Satin Brushed Brass',
        'Clear Lacquered',
      ],
      customization: ['Flat Cut Solid Sheet', 'Built-Up 3D Boxed Letters', 'Stud Mount Standoffs'],
    },
    specifications: {
      dimensions: 'Sheet thickness from 2mm to 12mm solid plate',
      weatherResistance: 'Clear polyurethane lacquered against tarnishing',
      warranty: '5 Years Finish Warranty',
      certifications: 'High-Purity Brass Alloy Certification',
      maintenance: 'Soft cloth wipe; avoid harsh acidic chemicals',
    },
    pricing: {
      startingFrom: '₹140 / inch height',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Clear coat lacquer application included as standard'],
    },
    process: standardProcess,
    industriesServed: ['Law & Consultancy Firms', 'Heritage Hotels', 'Executive Suites'],
    gallery: ['/assets/images/projects/gold-palace.png'],
    relatedProductSlugs: ['ss-letters', 'reception-signs', 'acrylic-letters'],
    relatedProjectIds: ['gold-letter-signage'],
    faqs: [
      {
        question: 'Will brass letters tarnish outdoors?',
        answer:
          'We coat our exterior brass letters with two layers of automotive clear polyurethane lacquer to lock in the polish and prevent oxidation.',
      },
    ],
    seoMetadata: {
      title: 'Brass 3D Letters & Signage Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'Solid polished brass 3D letters, antique patina emblems, and clear lacquered architectural brass signage by TGB Enterprise.',
    },
  },

  'neon-sign-boards': {
    slug: 'neon-sign-boards',
    name: 'Neon & Custom Signages',
    category: 'Neon Signs',
    icon: 'Sun',
    shortDescription:
      'Vibrant LED flexible neon signs and traditional glass neon tubes for high-contrast artistic branding.',
    heroImage: '/assets/services/neon-sign.png',
    positioning:
      'Artistic glowing brand expressions. High-luminescence flex-neon engineered for safety and energy efficiency.',
    overview: {
      description:
        'TGB Enterprise creates custom LED flex neon art and traditional glass neon signs. Built mounted on crystal clear acrylic backplanes with hidden wiring tracks.',
      whyItMatters:
        'Neon creates instant mood, photogenic social media backgrounds, and high-energy nightlife visibility.',
      whoItIsFor:
        'Cafes, lounges, night clubs, creative agency studios, fitness centers, and event spaces.',
    },
    capabilities: {
      materials: [
        'Silicone LED Flex Neon Hose',
        'Clear Cast Acrylic Backer (5mm)',
        'Low-Voltage Wire Harness',
      ],
      technology: [
        '12V DC Low-Voltage Operation',
        'Dimmer & Strobe Controllers',
        'CNC Acrylic Contour Routing',
      ],
      finishes: ['Transparent Acrylic Backer', 'Black Matte Acrylic Backer', 'Mirror Backer'],
      customization: [
        'Custom Script Handwriting',
        'Multi-Color Neon Blending',
        'Waterproof Outdoor Neon',
      ],
    },
    specifications: {
      dimensions: 'Custom sizes from 300mm desktop units to 4000mm wall murals',
      weatherResistance: 'Indoor standard (IP20); Outdoor waterproof silicone (IP65)',
      warranty: '2 Years Power Supply & Neon Warranty',
      certifications: 'UL/CE Low Voltage 12V Safety Certified',
      maintenance: 'Low heat generation; dry dust cloth cleaning',
    },
    pricing: {
      startingFrom: '₹4,500 per custom sign module',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Includes 12V adapter power supply and hanging hardware'],
    },
    process: standardProcess,
    industriesServed: [
      'Restaurants & Cafes',
      'Nightlife & Lounges',
      'Fitness & Lifestyle',
      'Creative Studios',
    ],
    gallery: ['/assets/images/projects/creative-neon.png', '/assets/services/neon-sign.png'],
    relatedProductSlugs: ['acrylic-letters', 'reception-signs', 'custom-fabrication'],
    relatedProjectIds: ['custom-neon-signage'],
    faqs: [
      {
        question: 'Are LED flex neon signs safer than traditional glass neon?',
        answer:
          'Yes! LED flex neon operates on harmless 12V DC power, generates zero heat, is shatterproof, and uses 80% less electricity.',
      },
    ],
    seoMetadata: {
      title: 'Custom LED Neon Signs Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'Custom LED flex neon signs for cafes, lounges, offices, and events by TGB Enterprise in Nikol, Ahmedabad.',
    },
  },

  'pylon-signs': {
    slug: 'pylon-signs',
    name: 'Pylon & Totem Signs',
    category: 'Pylon & Totem Signs',
    icon: 'Maximize2',
    shortDescription:
      'Freestanding double-sided monolithic totem structures designed for highway visibility and site entrances.',
    heroImage: '/assets/services/pylon-sign.png',
    positioning:
      'Monolithic highway identity landmarks. Structural steel framing engineered for maximum wind stability.',
    overview: {
      description:
        'TGB Enterprise designs and fabricates heavy-duty freestanding pylon signs and entryway totems. Constructed with internal structural I-beams anchored deep into concrete foundation footings.',
      whyItMatters:
        'Pylon signs capture high-speed traffic attention long before visitors reach your property entrance, displaying tenant directories or brand logos clearly.',
      whoItIsFor:
        'Highway commercial plazas, fuel stations, tech parks, hospital campuses, and industrial estates.',
    },
    capabilities: {
      materials: [
        'Structural Heavy I-Beams / C-Channels',
        '3mm PVDF ACP Face Cladding',
        'Internal LED Modules',
      ],
      technology: [
        'Structural Soil Anchor Calculations',
        'Laser Cut Tenant Panels',
        'Digital Time/Temp Displays',
      ],
      finishes: [
        'Polyurethane Automotive Paint Finish',
        'Anodized Metallic Panels',
        'Rust-Inhibiting Epoxy Primer',
      ],
      customization: [
        'Single-Sided / Double-Sided V-Shape',
        'Modular Interchangeable Tenant Plates',
      ],
    },
    specifications: {
      dimensions: 'Heights from 3 meters to 12 meters freestanding',
      weatherResistance: 'Wind load engineered up to 160 km/h (Zone 3/4 structural compliance)',
      warranty: '5 Years Structural Integrity Warranty',
      certifications: 'Civil Structural Engineer Calculation Certificate Provided',
      maintenance: 'Ground-accessible maintenance hatches',
    },
    pricing: {
      startingFrom: '₹1,50,000 per structure complete',
      taxNote: 'Prices exclusive of GST and civil foundation excavation',
      customQuotationNotes: ['Structural civil foundation drawings provided'],
    },
    process: standardProcess,
    industriesServed: [
      'Highway Commercial Plazas',
      'Tech Parks & SEZs',
      'Fuel Stations',
      'Hospital Campuses',
    ],
    gallery: ['/assets/images/projects/infra-corp.png', '/assets/services/pylon-sign.png'],
    relatedProductSlugs: ['acp-sign-boards', 'led-sign-boards', 'wayfinding-systems'],
    relatedProjectIds: ['infra-corp-installation', 'acp-board-installation'],
    faqs: [
      {
        question: 'Do you provide structural engineering drawings for pylon foundation footing?',
        answer:
          'Yes! We provide certified structural calculation drawings detailing concrete grade, rebar mesh, and anchor bolt specifications.',
      },
    ],
    seoMetadata: {
      title: 'Pylon & Totem Signboard Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'Monolithic freestanding pylon signs, highway totem structures, and entryway landmark signs engineered by TGB Enterprise, Ahmedabad.',
    },
  },

  'wayfinding-systems': {
    slug: 'wayfinding-systems',
    name: 'Wayfinding & Directional Systems',
    category: 'Wayfinding Systems',
    icon: 'Compass',
    shortDescription:
      'Modular indoor and outdoor directional signage systems for smooth human traffic navigation.',
    heroImage: '/assets/services/acp-sign.png',
    positioning:
      'Architectural spatial navigation. Modular aluminum extrusions and tactile directional graphics.',
    overview: {
      description:
        'Our wayfinding systems help visitors navigate complex facilities effortlessly. We produce directional totems, wall finger posts, floor directory boards, and door plaques.',
      whyItMatters:
        'Clear wayfinding reduces visitor anxiety, improves accessibility compliance, and reflects a professional management standard.',
      whoItIsFor:
        'Hospitals, university campuses, shopping malls, airport terminals, and multi-tenant corporate parks.',
    },
    capabilities: {
      materials: [
        'Extruded Modular Aluminum Track',
        'Acrylic Inserts',
        'Reflective Grade Vinyl',
        'ADA Braille Panels',
      ],
      technology: [
        'Tactile UV Raised Printing',
        'Interchangeable Slide Slat System',
        'CNC Engraving',
      ],
      finishes: ['Satin Anodized Aluminum', 'Powder Coated Color Codes', 'Anti-Glare Matte Face'],
      customization: ['Color-Coded Zone Systems', 'Illuminated Directional Arrow Panels'],
    },
    specifications: {
      dimensions: 'Custom modular slat widths from 100mm to 1200mm',
      weatherResistance: 'UV proof non-fading print inks and aluminum extrusions',
      warranty: '3 Years Warranty',
      certifications: 'ADA Compliant Braille & Tactile Standards Available',
      maintenance: 'Modular slide-out slats for effortless office name updates',
    },
    pricing: {
      startingFrom: '₹1,500 per directional plaque',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: [
        'Wayfinding spatial mapping consultation included for full campus projects',
      ],
    },
    process: standardProcess,
    industriesServed: [
      'Hospitals & Healthcare',
      'Educational Campuses',
      'Corporate Offices',
      'Transit Hubs',
    ],
    gallery: ['/assets/images/projects/infra-corp.png'],
    relatedProductSlugs: ['pylon-signs', 'safety-signage', 'reception-signs'],
    relatedProjectIds: ['infra-corp-installation'],
    faqs: [
      {
        question:
          'Can individual tenant names be updated on directional boards without replacing the full sign?',
        answer:
          'Yes! Our modular aluminum slat systems feature quick-release end caps so you can swap out individual tenant slats in seconds.',
      },
    ],
    seoMetadata: {
      title: 'Wayfinding & Directional Signage Systems Ahmedabad | TGB Enterprise',
      description:
        'Modular interior and exterior wayfinding systems, campus directional signage, and hospital floor maps by TGB Enterprise, Ahmedabad.',
    },
  },

  'reception-signs': {
    slug: 'reception-signs',
    name: 'Reception & Lobby Signage',
    category: 'Reception Signs',
    icon: 'Building',
    shortDescription:
      'High-precision executive foyer signage crafted with polished metals, acrylic, and halo illumination.',
    heroImage: '/assets/services/acrylic-letters.png',
    positioning:
      'The first physical touchpoint of corporate prestige. Premium lobby logos engineered for intimate viewing distances.',
    overview: {
      description:
        'Your reception wall creates the immediate first impression for visiting clients. We craft floating acrylic panels, brushed metal logos, and halo LED lobby signs.',
      whyItMatters:
        'Close viewing distances in corporate lobbies require flawless surface finishing, invisible mounting hardware, and subtle lighting control.',
      whoItIsFor:
        'Corporate headquarters, law offices, private wealth management lounges, and hotel reception desks.',
    },
    capabilities: {
      materials: [
        'Cast Acrylic',
        'Brushed Brass',
        'PVD Gold SS 304',
        'Tempered Back-Painted Glass',
      ],
      technology: [
        'Invisible Rear Pin Mounting',
        'Precision Fiber Laser Cutting',
        'Low-Lumen Warm LED Strips',
      ],
      finishes: ['Hairline Satin Metal', 'High-Gloss Flame Polished', 'Matte Frosted Glass'],
      customization: [
        'Panel-Mounted Standoffs',
        'Direct Wall Stud Mounting',
        'Edge-Lit Glass Plates',
      ],
    },
    specifications: {
      dimensions: 'Custom wall spans up to 4000mm width',
      weatherResistance: 'Indoor climate-controlled premium finish',
      warranty: '5 Years Indoor Finish Warranty',
      certifications: 'RoHS Non-Toxic Finishes',
      maintenance: 'Dust with soft micro-fiber anti-static cloth',
    },
    pricing: {
      startingFrom: '₹15,000 per reception sign set',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['1:1 scale paper template included for mounting alignment'],
    },
    process: standardProcess,
    industriesServed: [
      'Corporate Offices',
      'Legal & Wealth Consultancies',
      'Luxury Hotels',
      'Medical Clinics',
    ],
    gallery: ['/assets/images/projects/gold-palace.png', '/assets/services/acrylic-letters.png'],
    relatedProductSlugs: ['acrylic-letters', 'ss-letters', 'brass-letters'],
    relatedProjectIds: ['gold-letter-signage'],
    faqs: [
      {
        question: 'How are reception signs mounted to interior drywall or marble backdrop walls?',
        answer:
          'We use rear-threaded stainless steel studs drilled precision-matched into wall anchors, or floating brass standoffs.',
      },
    ],
    seoMetadata: {
      title: 'Corporate Reception & Lobby Signage Ahmedabad | TGB Enterprise',
      description:
        'Executive lobby signs, 3D metal reception logos, and floating glass foyer branding by TGB Enterprise, Ahmedabad.',
    },
  },

  'safety-signage': {
    slug: 'safety-signage',
    name: 'Industrial & Safety Signage',
    category: 'Safety Signage',
    icon: 'AlertTriangle',
    shortDescription:
      'OSHA & ISO compliant photoluminescent, reflective, and hazard warning signs for industrial plants.',
    heroImage: '/assets/services/acp-sign.png',
    positioning:
      'Industrial compliance and emergency clarity. Glow-in-the-dark and retro-reflective hazard protection.',
    overview: {
      description:
        'We manufacture industrial safety signage compliant with ISO 7010 and OSHA standards. Includes photoluminescent (glow-in-the-dark) emergency egress route signs, fire safety markers, and chemical hazard warnings.',
      whyItMatters:
        'Factory audits and life safety codes require non-fading, highly visible hazard warning markers that remain readable even during total power blackouts.',
      whoItIsFor:
        'Chemical plants, pharmaceutical factories, manufacturing facilities, warehouses, and commercial building basements.',
    },
    capabilities: {
      materials: [
        '1.5mm Rigid PVC Sheet',
        '0.5mm Aluminum Sheet',
        '3M Photoluminescent Film',
        'Retro-Reflective Vinyl',
      ],
      technology: ['Direct UV Flatbed Printing', 'Screen Printing with Chemical-Resistant Inks'],
      finishes: ['Chemical Resistant Clear Over-Laminate', 'Photoluminescent Glow Finish'],
      customization: [
        'Custom Facility Safety Rule Boards',
        'Multilingual Safety Instructions (Gujarati/Hindi/English)',
      ],
    },
    specifications: {
      dimensions: 'Standard ISO sizes (A5, A4, A3, A2) and custom plant boards',
      weatherResistance: 'Resistant to industrial chemical fumes, oil splashes, and UV exposure',
      warranty: '3 Years Industrial Outdoor Warranty',
      certifications: 'ISO 7010 Symbol Compliant, DIN 67510 Photoluminescent Standard',
      maintenance: 'Wipeable oil-resistant surface',
    },
    pricing: {
      startingFrom: '₹150 per standard safety plaque',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Bulk factory signage audit packages available'],
    },
    process: standardProcess,
    industriesServed: [
      'Pharmaceutical Plants',
      'Chemical Manufacturing',
      'Warehousing & Logistics',
      'Construction Sites',
    ],
    gallery: ['/assets/images/projects/infra-corp.png'],
    relatedProductSlugs: ['wayfinding-systems', 'acp-sign-boards', 'custom-fabrication'],
    relatedProjectIds: ['infra-corp-installation'],
    faqs: [
      {
        question: 'How long do your photoluminescent exit signs glow during a blackout?',
        answer:
          'Our DIN 67510 class glow films charge under ambient room light and glow brightly for over 6 hours during power failures.',
      },
    ],
    seoMetadata: {
      title: 'Industrial Safety Signage & Photoluminescent Signs Ahmedabad | TGB Enterprise',
      description:
        'ISO 7010 compliant industrial safety signs, glow-in-the-dark emergency egress markers, and factory hazard signs by TGB Enterprise.',
    },
  },

  'corporate-branding': {
    slug: 'corporate-branding',
    name: 'Corporate Branding Signage',
    category: 'Corporate Branding',
    icon: 'Briefcase',
    shortDescription:
      'Complete end-to-end architectural branding systems for corporate campuses and multi-city headquarters.',
    heroImage: '/assets/services/led-sign.png',
    positioning:
      'Cohesive multi-building physical identity. Brand standards translated into precision metal and illuminated structures.',
    overview: {
      description:
        'We execute end-to-end corporate office exterior and interior branding transformations. From high-rise rooftop illuminated logotypes to perimeter boundary wall plaques.',
      whyItMatters:
        'Brand consistency across regional offices builds enterprise trust. We strictly adhere to corporate pantone codes, font geometries, and architectural guidelines.',
      whoItIsFor:
        'Multinational corporations, IT enterprise campuses, financial institutions, and corporate franchises.',
    },
    capabilities: {
      materials: [
        'Structural Aluminum',
        'Stainless Steel 304/316',
        'Architectural Glass',
        'LED Illumination',
      ],
      technology: [
        'Pantone Color Spectrophotometer Matching',
        '3D CAD Blueprints',
        'Structural Calculations',
      ],
      finishes: ['Automotive Polyurethane Paint', 'PVDF Metal Coating', 'Brushed Metal Satin'],
      customization: [
        'Rooftop Sky Signage',
        'Monolithic Boundary Gateways',
        'Executive Floor Identity',
      ],
    },
    specifications: {
      dimensions: 'Custom engineered up to rooftop high-rise scale',
      weatherResistance: 'Engineered for high altitude wind speeds up to 180 km/h',
      warranty: '5 Years Turnkey Warranty',
      certifications: 'ISO 9001:2015 Quality Management System',
      maintenance: 'Annual structural inspection and LED driver health checks',
    },
    pricing: {
      startingFrom: '₹50,000 turnkey baseline project',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Dedicated project manager assigned for multi-location rollouts'],
    },
    process: standardProcess,
    industriesServed: ['IT Enterprises', 'Banking & Financial Campuses', 'Corporate Headquarters'],
    gallery: ['/assets/images/projects/infra-corp.png', '/assets/services/led-sign.png'],
    relatedProductSlugs: ['led-sign-boards', 'acp-sign-boards', 'pylon-signs', 'reception-signs'],
    relatedProjectIds: ['infra-corp-installation'],
    faqs: [
      {
        question: 'Can you handle multi-state corporate signage rollouts?',
        answer:
          'Yes, TGB Enterprise has turn-key installation teams that execute pan-India corporate identity deployments.',
      },
    ],
    seoMetadata: {
      title: 'Corporate Branding & Rooftop Signage Manufacturer Ahmedabad | TGB Enterprise',
      description:
        'End-to-end corporate campus branding, high-rise rooftop sky signs, and building identity systems by TGB Enterprise, Ahmedabad.',
    },
  },

  'retail-branding': {
    slug: 'retail-branding',
    name: 'Retail & Storefront Signage',
    category: 'Retail Branding',
    icon: 'ShoppingBag',
    shortDescription:
      'High-impact illuminated storefront facades, blade signs, and window graphic displays for retail outlets.',
    heroImage: '/assets/services/neon-sign.png',
    positioning:
      'High-conversion storefront identity. Captivating lighting and high-finish retail displays.',
    overview: {
      description:
        'Storefront signage is your primary customer magnet. We build complete retail facade displays incorporating 3D illuminated letters, projecting double-sided blade signs, and entrance archways.',
      whyItMatters:
        'In busy shopping streets, a store visual frontage must stand out immediately against competing storefronts.',
      whoItIsFor:
        'Apparel brands, jewelry showrooms, restaurant chains, supermarkets, and franchise retail networks.',
    },
    capabilities: {
      materials: [
        'Cast Acrylic',
        'Aluminum Channel Returns',
        'LED Flex Neon',
        'High-Gloss ACP Sheets',
      ],
      technology: ['High-Brightness LEDs (10,000 Lux)', 'Automated Flashing Dimmer Modules'],
      finishes: ['High-Gloss Piano Finish', 'Mirror Gold PVD', 'Vibrant Vinyl Overlays'],
      customization: ['Double-Sided Projecting Blade Signs', 'Animated LED Display Borders'],
    },
    specifications: {
      dimensions: 'Custom store frontage widths from 2m to 20m',
      weatherResistance: 'Waterproof storefront LED modules with IP67 transformers',
      warranty: '3 Years Warranty',
      certifications: 'Commercial Electrical Safety Approved',
      maintenance: 'Easy-access front faces for quick cleaning',
    },
    pricing: {
      startingFrom: '₹1,100 / sq. ft.',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Storefront site survey and 3D visual preview included'],
    },
    process: standardProcess,
    industriesServed: [
      'Fashion & Retail Chains',
      'Jewelry Outlets',
      'Supermarket Networks',
      'Quick Service Restaurants',
    ],
    gallery: ['/assets/images/projects/gold-palace.png', '/assets/services/neon-sign.png'],
    relatedProductSlugs: ['led-sign-boards', 'acrylic-letters', 'neon-sign-boards'],
    relatedProjectIds: ['gold-letter-signage', 'custom-neon-signage'],
    faqs: [
      {
        question: 'Do you fabricate double-sided projecting blade signs for retail streets?',
        answer:
          'Yes! We manufacture heavy-duty steel framed double-sided illuminated blade signs that project perpendicular to pedestrian traffic.',
      },
    ],
    seoMetadata: {
      title: 'Retail Storefront Signage & Shop Boards Ahmedabad | TGB Enterprise',
      description:
        'High-impact retail store signs, illuminated shop boards, and projecting blade signage manufactured by TGB Enterprise Ahmedabad.',
    },
  },

  'custom-fabrication': {
    slug: 'custom-fabrication',
    name: 'Custom Architectural Metal Fabrication',
    category: 'Custom Fabrication',
    icon: 'Wrench',
    shortDescription:
      'Bespoke non-standard architectural metalwork, sculptural sign monuments, and custom facade features.',
    heroImage: '/assets/services/acp-sign.png',
    positioning: 'Where custom architectural vision meets heavy industrial metalcraft.',
    overview: {
      description:
        'When standard sign boards cannot meet complex architectural blueprints, TGB Enterprise provides custom fabrication. We engineer bespoke sculptural metal landmarks, perforated screen facades, and custom geometric light structures.',
      whyItMatters:
        'Architectural visionaries require a manufacturing partner capable of converting non-standard CAD designs into structural reality without compromising aesthetics or safety.',
      whoItIsFor:
        'Architects, urban planners, landscape designers, luxury resort developers, and landmark public works.',
    },
    capabilities: {
      materials: [
        'Corten Steel',
        'Brass & Bronze Plates',
        'SS 316 Stainless Steel',
        'Architectural Aluminum',
        'Structural Mild Steel',
      ],
      technology: [
        '5-Axis CNC Waterjet Cutting',
        'Fiber Laser Metal Cutting',
        'TIG / MIG Heavy Welding',
      ],
      finishes: [
        'Natural Rust Corten Patina',
        'Mirror Polish',
        'Custom Anodizing',
        'Automotive Polyurethane Coating',
      ],
      customization: ['100% Bespoke Structural Shapes & Kinetic Assemblies'],
    },
    specifications: {
      dimensions: 'Custom fabricated per structural drawings',
      weatherResistance: 'Custom engineered to site specific seismic & wind load criteria',
      warranty: '5 Years Structural Warranty',
      certifications: 'Structural Weld Quality Certification (AWS Standard)',
      maintenance: 'Custom maintenance manual provided per project',
    },
    pricing: {
      startingFrom: 'Quotation by Blueprints',
      taxNote: 'Prices exclusive of GST',
      customQuotationNotes: ['Engineering feasibility study conducted prior to formal quotation'],
    },
    process: standardProcess,
    industriesServed: [
      'Architecture & Urban Planning',
      'Luxury Resorts',
      'Public Landmarks',
      'High-End Residential',
    ],
    gallery: ['/assets/images/projects/infra-corp.png', '/assets/images/projects/apex-acp.png'],
    relatedProductSlugs: ['pylon-signs', 'ss-letters', 'acp-sign-boards'],
    relatedProjectIds: ['infra-corp-installation', 'acp-board-installation'],
    faqs: [
      {
        question: 'Can you fabricate custom Corten steel weathered rust signage?',
        answer:
          'Yes! We work with authentic Corten steel plates, accelerating the natural protective oxide rust patina to deliver stunning rustic architectural monuments.',
      },
    ],
    seoMetadata: {
      title: 'Custom Architectural Metal Fabrication Ahmedabad | TGB Enterprise',
      description:
        'Bespoke architectural metalwork, Corten steel monuments, and custom non-standard signage engineered by TGB Enterprise, Ahmedabad.',
    },
  },
};
