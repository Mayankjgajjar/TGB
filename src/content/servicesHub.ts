import {
  ShoppingBag,
  Briefcase,
  Coffee,
  Heart,
  GraduationCap,
  Factory,
  Compass,
  Settings,
  Diamond,
  Wrench,
  CheckCircle,
  PhoneCall,
} from 'lucide-react';

export const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingBag,
  Briefcase,
  Coffee,
  Heart,
  GraduationCap,
  Factory,
  Compass,
  Settings,
  Diamond,
  Wrench,
  CheckCircle,
  PhoneCall,
};

export const servicesHubContent = {
  meta: {
    title: 'Commercial Signage Services Hub | TGB Enterprise',
    description:
      "Explore TGB Enterprise's B2B signage services in Ahmedabad. Compare LED boards, ACP facades, 3D lettering, and find custom recommendations for your industry.",
  },
  introduction: {
    eyebrow: 'SERVICES HUB',
    title: 'Architectural Signage Services Engineered for Business Growth.',
    subtitle:
      'TGB Enterprise manufactures and installs high-visibility commercial signage for retail storefronts, corporate headquarters, and industrial spaces. We guide projects from initial design scoping through fabrication to secure on-site installation.',
    extendedIntro:
      'Choosing the correct physical branding requires balancing structural constraints, lighting demands, and material longevity. Our team works with architects, developers, and brands across India to manufacture signboards that command attention. Below, you can explore our six primary service lines, use our recommendation matrices to match solutions to your building type, and request custom scoping for your project.',
  },
  recommendations: {
    header: {
      eyebrow: 'DECISION SUPPORT',
      title: 'Which Signage Is Right for Your Business?',
      subtitle:
        'Select the signage class that aligns with your property type, architectural visibility goals, and local municipal guidelines.',
    },
    items: [
      {
        icon: 'ShoppingBag',
        category: 'RETAIL STORES',
        title: 'Retail Storefronts',
        description:
          'Maximize high-street and mall visibility. Recommended: LED Sign Boards for high brightness or Custom Neon for high-impact indoor styling.',
        tag: 'Explore LED Boards',
        to: '/services/led-sign-boards',
      },
      {
        icon: 'Briefcase',
        category: 'CORPORATE IDENTITIES',
        title: 'Corporate Offices',
        description:
          'Project professionalism and stability. Recommended: Stainless Steel & Titanium Letters for exterior facades or Acrylic Letters for lobby walls.',
        tag: 'Explore SS Letters',
        to: '/services/ss-letters',
      },
      {
        icon: 'Coffee',
        category: 'ATMOSPHERE BRANDS',
        title: 'Restaurants & Cafés',
        description:
          'Build an inviting interior character. Recommended: Custom Neon Sign Boards for vibrant photogenic focal points and custom styling.',
        tag: 'Explore Neon Signs',
        to: '/services/neon-sign-boards',
      },
      {
        icon: 'Heart',
        category: 'PUBLIC NAVIGATION',
        title: 'Hospitals & Healthcare',
        description:
          'Prioritize clear, non-glare legibility. Recommended: Non-illuminated Acrylic Letters and structural panels for clean reception branding.',
        tag: 'Explore Acrylic Letters',
        to: '/services/acrylic-letters',
      },
      {
        icon: 'GraduationCap',
        category: 'CAMPUS IDENTITY',
        title: 'Educational Spaces',
        description:
          'Support navigation at scale. Recommended: Durable dimensional Acrylic lettering and custom wayfinding directory layouts.',
        tag: 'Explore Acrylic Letters',
        to: '/services/acrylic-letters',
      },
      {
        icon: 'Factory',
        category: 'HEAVY EXPOSURE',
        title: 'Industrial Facilities',
        description:
          'Ensure structural stability against harsh monsoons. Recommended: Rigid ACP Sign Boards for large cladding spans and high weather resistance.',
        tag: 'Explore ACP Boards',
        to: '/services/acp-sign-boards',
      },
    ],
  },
  whyChooseUs: {
    header: {
      eyebrow: 'CAPABILITIES',
      title: 'Service Delivery Standards We Stand By',
      subtitle:
        'Every commercial signage project is executed in-house to guarantee quality control, structural integrity, and timeline accuracy.',
    },
    items: [
      {
        icon: 'Compass',
        title: 'Design Consultation',
        description:
          'We review building blueprints, evaluate viewing heights, map illumination angles, and match specifications to your brand standards.',
      },
      {
        icon: 'Settings',
        title: 'Custom Manufacturing',
        description:
          'Signage is fabricated in our Vatva industrial yard using automated CNC routing, laser cutting, and precision sheet folding.',
      },
      {
        icon: 'Diamond',
        title: 'Material Quality',
        description:
          'We utilize premium raw stock: PVDF-coated exterior ACP (warranty-supported), UV-stabilized cast acrylics, and certified structural steel.',
      },
      {
        icon: 'Wrench',
        title: 'Installation Expertise',
        description:
          'Our teams execute secure structural mounting, aligning facade brackets, anchor bolts, and electrical connections to withstand regional wind loads.',
      },
      {
        icon: 'CheckCircle',
        title: 'Project Execution',
        description:
          'From site survey to power connection, our estimating team provides transparent timelines and direct updates throughout fabrication.',
      },
      {
        icon: 'PhoneCall',
        title: 'After-Sales Support',
        description:
          'We provide support for electrical components, transformer reviews, and maintenance guidance, honoring all material warranties.',
      },
    ],
  },
  faq: {
    header: {
      eyebrow: 'SERVICE GUIDE',
      title: 'Choosing the Right Signage: FAQ',
      subtitle: 'Common technical questions from businesses evaluating signage installations.',
    },
    items: [
      {
        question: 'Which signage solution is best for my business type?',
        answer:
          'The choice depends on your property visibility targets. Retail environments benefit most from high-brightness LED Sign Boards or custom Neon branding. Corporate offices typically select premium 3D Stainless Steel or Acrylic lettering to project a clean, permanent corporate identity.',
      },
      {
        question: 'What is the key difference between ACP and LED signage?',
        answer:
          'ACP (Aluminium Composite Panel) signage is a flat, structural facade system clad in metal, acting as a weatherproof backing. LED signboards use active light-emitting modules inside acrylic or steel letters mounted on the ACP backing to ensure 24/7 night visibility.',
      },
      {
        question: 'Can signboards be customized to our exact brand guidelines?',
        answer:
          'Yes. We calibrate our laser and CNC cutting machinery to follow your exact vector logo paths and typeface files. We use Avery or 3M translucent vinyl films to match corporate Pantone colors, maintaining brand uniformity.',
      },
      {
        question: 'Which signage is suitable for indoor vs. outdoor applications?',
        answer:
          'Outdoor signs require weatherproofing: we recommend PVDF-coated ACP backgrounds, IP67-rated sealed LEDs, and mirror-polished SS. Indoor signages can utilize standard acrylic letters, frosted panels, and silicone LED neon flex systems that stay cool to the touch.',
      },
      {
        question: 'Do you handle both manufacturing and installation?',
        answer:
          'Yes. All our services cover turnkey execution. We fabricate components in our Vatva workshop and deploy our experienced installation team to handle physical mounting, facade anchoring, and final electrical safety checks on-site.',
      },
      {
        question: 'How do I request a quotation and share my designs?',
        answer:
          'You can submit your project requirements and vector files (CDR, AI, PDF) via our quote forms. Our estimating team will analyze your drawings, calculate material yields, and render a scoping quotation detailing pricing, materials, and production timelines.',
      },
    ],
  },
  industriesIntro:
    'Every sector demands a custom approach. We customize visual cladding, viewing dimensions, and lighting configurations to match specific commercial environments—ensuring long-term legibility and brand alignment.',
};
