export interface DownloadResource {
  id: string;
  title: string;
  category: 'Company' | 'Products' | 'Guides' | 'Technical';
  description: string;
  fileSize: string;
  format: 'PDF' | 'ZIP' | 'DOCX';
  downloadUrl: string;
  icon: string;
}

export interface FAQCategory {
  category: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ArticleResource {
  id: string;
  title: string;
  category: 'Guide' | 'Case Study' | 'Material' | 'Branding';
  summary: string;
  readTime: string;
  publishedDate: string;
  image: string;
  author: string;
}

export interface TechnicalSpecResource {
  id: string;
  title: string;
  materialOrSystem: string;
  standards: string;
  summary: string;
  specificationsList: string[];
}

export const downloadsData: DownloadResource[] = [
  {
    id: 'company-profile',
    title: 'TGB Enterprise Corporate Profile 2026',
    category: 'Company',
    description:
      'Complete overview of our manufacturing facilities, machinery park, certifications, and client portfolio.',
    fileSize: '4.8 MB',
    format: 'PDF',
    downloadUrl: '/assets/downloads/tgb-company-profile.pdf',
    icon: 'Building2',
  },
  {
    id: 'product-catalogue',
    title: 'Architectural Signage Product Catalogue',
    category: 'Products',
    description:
      'Detailed catalog covering LED sign boards, ACP cladding, 3D metal letters, pylon signs, and wayfinding.',
    fileSize: '12.4 MB',
    format: 'PDF',
    downloadUrl: '/assets/downloads/tgb-product-catalogue.pdf',
    icon: 'BookOpen',
  },
  {
    id: 'warranty-policy',
    title: 'Warranty Support & Maintenance Terms',
    category: 'Company',
    description:
      'Comprehensive warranty guidelines, coverage terms, claim steps, and preventative care instructions.',
    fileSize: '1.2 MB',
    format: 'PDF',
    downloadUrl: '/assets/downloads/tgb-warranty-policy.pdf',
    icon: 'ShieldCheck',
  },
  {
    id: 'installation-guide',
    title: 'Structural Sign Mounting & Wiring Manual',
    category: 'Guides',
    description:
      'Technical guidance for site engineers on anchor bolt sizing, wind-load calculations, and driver wiring.',
    fileSize: '3.1 MB',
    format: 'PDF',
    downloadUrl: '/assets/downloads/tgb-installation-guide.pdf',
    icon: 'Wrench',
  },
  {
    id: 'maintenance-guide',
    title: 'Architectural Signage Care & Cleaning Manual',
    category: 'Guides',
    description:
      'Best practices for cleaning cast acrylic, SS 304/316 metals, PVDF ACP sheets, and LED driver hatches.',
    fileSize: '1.8 MB',
    format: 'PDF',
    downloadUrl: '/assets/downloads/tgb-maintenance-guide.pdf',
    icon: 'Sparkles',
  },
];

export const faqCategoriesData: FAQCategory[] = [
  {
    category: 'General & Purchasing',
    faqs: [
      {
        question: 'Where is TGB Enterprise located and what areas do you serve?',
        answer:
          'Our corporate office is located in Thaltej, Ahmedabad and our manufacturing fabrication yard is in Vatva GIDC. We deliver and install signage across Gujarat and pan-India.',
      },
      {
        question: 'What is the typical lead time for custom sign board manufacturing?',
        answer:
          'Standard projects take 7 to 12 working days from CAD drawing approval. Complex pylon structures or high-rise building cladding take 15 to 21 working days.',
      },
      {
        question: 'How do I request a site survey and quotation?',
        answer:
          'You can request a quote online using our Get a Quote form, call us directly at +91 98980 00000, or send artwork to sales@tgbsign.com.',
      },
    ],
  },
  {
    category: 'Materials & Technical',
    faqs: [
      {
        question: 'What is the difference between Grade 304 and Grade 316 Stainless Steel?',
        answer:
          'SS 304 is the architectural standard for non-coastal cities. SS 316 includes molybdenum for superior resistance against chemical fumes and marine saltwater environments.',
      },
      {
        question: 'Are your exterior LED signs energy efficient?',
        answer:
          'Yes, we use IP67 constant-voltage Meanwell LED drivers operating at high luminous efficacy (up to 130 lumens per watt) with automatic daylight sensors.',
      },
      {
        question: 'Can you match custom corporate Pantone or RAL colors?',
        answer:
          'Yes! We use industrial spectrophotometer color matching and automotive polyurethane/PVDF paints to guarantee exact brand color accuracy.',
      },
    ],
  },
  {
    category: 'Warranty & Support',
    faqs: [
      {
        question: 'What warranty is provided with TGB Enterprise sign boards?',
        answer:
          'We provide a 3 to 5 year comprehensive on-site warranty covering structural integrity, paint adhesion, acrylic anti-yellowing, and LED driver operation.',
      },
      {
        question: 'How do I submit a warranty claim if a light component fails?',
        answer:
          'Visit our dedicated Warranty Claim page (/claim-warranty), submit your invoice number and a photo/video of the issue, and our team will dispatch a field technician within 48 hours.',
      },
    ],
  },
];

export const articlesData: ArticleResource[] = [
  {
    id: 'led-vs-neon-guide',
    title: 'LED Flex Neon vs. Traditional Glass Neon: A Complete Guide for Retail Outlets',
    category: 'Guide',
    summary:
      'Compare energy consumption, longevity, safety, and visual aesthetics between modern silicone LED flex neon and classic glass tube neon.',
    readTime: '5 min read',
    publishedDate: 'January 12, 2026',
    image: '/assets/services/neon-sign.png',
    author: 'TGB Engineering Team',
  },
  {
    id: 'acp-cladding-case-study',
    title: 'Case Study: Weather-Proofing a 12-Story Corporate Tower with PVDF ACP Cladding',
    category: 'Case Study',
    summary:
      'How TGB Enterprise engineered a structural sub-grid to withstand monsoon wind loads up to 150 km/h for INFRA CORP headquarters.',
    readTime: '7 min read',
    publishedDate: 'December 20, 2025',
    image: '/assets/images/projects/infra-corp.png',
    author: 'Design Engineering Dept.',
  },
  {
    id: 'material-selection-guide',
    title: 'Architectural Material Selection: Choosing Between Brass, SS 304, and Acrylic',
    category: 'Material',
    summary:
      'A technical breakdown of durability ratings, chemical resistance, surface finishes, and maintenance schedules for 3D metal lettering.',
    readTime: '6 min read',
    publishedDate: 'November 15, 2025',
    image: '/assets/services/ss-letters.png',
    author: 'Materials Specialist',
  },
];

export const technicalSpecsData: TechnicalSpecResource[] = [
  {
    id: 'acp-panel-specs',
    title: '4mm PVDF Aluminum Composite Panel Specifications',
    materialOrSystem: 'Exterior Facade Grade ACP',
    standards: 'ASTM E84 Class A Fire Rating / ISO 9001',
    summary: 'Technical physical properties for non-combustible mineral core ACP panels.',
    specificationsList: [
      'Skin Thickness: 0.5mm 3003 Alloy Aluminum',
      'Coating: 70% Kynar 500 / Hylar 5000 PVDF resin',
      'Tensile Strength: > 140 MPa',
      'Thermal Expansion: 2.4 mm/m at 100°C temperature gradient',
      'Peel Off Strength: > 9.0 N/mm',
    ],
  },
  {
    id: 'led-module-specs',
    title: 'IP67 High-Lumen Constant Voltage LED Module Specifications',
    materialOrSystem: 'Optical LED Modules & Power Driver',
    standards: 'CE, RoHS, UL Listed, IP67 Waterproof',
    summary: 'Electrical performance metrics for continuous-operation illuminated signboards.',
    specificationsList: [
      'Operating Voltage: 12V DC Constant Voltage',
      'Luminous Efficacy: 125 lm/W at 6500K Daylight White',
      'Beam Angle: 160° Batwing Lens Optical Diffuser',
      'Ingress Protection: IP67 Silicone Over-Molded Enclosure',
      'Operating Temperature: -30°C to +65°C',
    ],
  },
];
