import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionEyebrow from '../ui/SectionEyebrow';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './ProductCatalogGrid.module.css';

export interface ProductItem {
  id: string;
  slug: string;
  categoryTag: string;
  filterCategory: 'all' | 'led' | 'acp' | 'letters' | 'neon' | 'outdoor';
  name: string;
  image: string;
  price: string;
  description: string;
  features: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'led-sign-boards',
    slug: 'led-sign-boards',
    categoryTag: 'ILLUMINATED',
    filterCategory: 'led',
    name: 'LED 3D Glow Sign Boards',
    image: '/assets/services/led-sign.png',
    price: 'Starting ₹1,200/Sqft',
    description:
      'High-impact front-lit and backlit glow signs engineered with IP67 Samsung LED modules and Meanwell power supplies.',
    features: [
      '50,000h Life Samsung IP67 LEDs',
      'Extruded aluminum weather chassis',
      'Zero dark spots & uniform glow',
    ],
  },
  {
    id: 'acp-sign-boards',
    slug: 'acp-sign-boards',
    categoryTag: 'ACP FACADES',
    filterCategory: 'acp',
    name: 'ACP Sign Boards & Cladding',
    image: '/assets/services/acp-sign.png',
    price: 'Starting ₹350/Sqft',
    description:
      'Architectural exterior building facades and robust sign boards crafted with 4mm PVDF-coated aluminum composite panels.',
    features: [
      '4mm PVDF exterior weather grade',
      'CNC V-grooved seamless returns',
      '100% Rust-proof & UV-stable',
    ],
  },
  {
    id: 'acrylic-letters',
    slug: 'acrylic-letters',
    categoryTag: '3D LETTERS',
    filterCategory: 'letters',
    name: '3D Acrylic Letters & Logos',
    image: '/assets/services/acrylic-letters.png',
    price: 'Starting ₹85/Inch',
    description:
      'Precision laser-cut virgin cast acrylic dimensional lettering with flame-polished edges for corporate lobbies & retail.',
    features: [
      'Cast optical-grade virgin acrylic',
      'Edge-glow & halo-lit options',
      'Pristine clarity & drop shadow depth',
    ],
  },
  {
    id: 'ss-letters',
    slug: 'ss-letters',
    categoryTag: 'ARCHITECTURAL METALS',
    filterCategory: 'letters',
    name: 'SS 304/316 Metal Letters',
    image: '/assets/services/ss-letters.png',
    price: 'Starting ₹95/Inch',
    description:
      'Marine-grade stainless steel letters with mirror gold, brushed hairline, or PVD titanium finishes for entrance gates.',
    features: [
      'Grade 304/316 Marine Stainless Steel',
      'Micro-TIG welded precision returns',
      'Never tarnishes or rusts (7-Yr Guarantee)',
    ],
  },
  {
    id: 'neon-sign-boards',
    slug: 'neon-sign-boards',
    categoryTag: 'CREATIVE NEON',
    filterCategory: 'neon',
    name: 'Custom LED Flex Neon Signs',
    image: '/assets/services/neon-sign.png',
    price: 'Starting ₹4,500/Set',
    description:
      'Vibrant low-voltage 12V LED neon art mounted on laser-cut transparent acrylic for cafes, events, and modern offices.',
    features: [
      '12V Safe DC shatterproof flex silicone',
      'Laser-cut clear acrylic backplate',
      'Dimmer & dynamic flash controllers',
    ],
  },
  {
    id: 'pylon-signs',
    slug: 'pylon-signs',
    categoryTag: 'OUTDOOR STRUCTURES',
    filterCategory: 'outdoor',
    name: 'Monolithic Pylon & Totem Signs',
    image: '/assets/services/pylon-sign.png',
    price: 'Custom Fabricated',
    description:
      'Freestanding double-sided highway totems with structural steel I-beams and PVDF cladding for corporate towers & tech parks.',
    features: [
      'Wind load tested to 160 km/h',
      'Internal IP67 illumination grid',
      'Visible from 300+ meters',
    ],
  },
];

const CATEGORIES = [
  { label: 'All Products', key: 'all' },
  { label: 'LED Glow Signs', key: 'led' },
  { label: 'ACP Cladding', key: 'acp' },
  { label: '3D Letters', key: 'letters' },
  { label: 'Neon Signs', key: 'neon' },
  { label: 'Pylons & Totems', key: 'outdoor' },
] as const;

export const ProductCatalogGrid: React.FC = () => {
  const { openModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filtered =
    activeTab === 'all' ? PRODUCTS : PRODUCTS.filter((item) => item.filterCategory === activeTab);

  return (
    <section
      className={styles.section}
      id="products-showcase"
      aria-label="Signage Products Showcase"
    >
      <Container>
        <div className={styles.header}>
          <SectionEyebrow>OUR PRODUCT RANGE</SectionEyebrow>
          <h2 className={styles.sectionTitle}>Custom Signage Solutions For Every Industry</h2>
          <p className={styles.sectionSubtitle}>
            Direct factory manufacturing with transparent pricing, certified materials, and 100%
            in-house fabrication in Nikol, Ahmedabad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabsRow} role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeTab === cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`${styles.tabBtn} ${activeTab === cat.key ? styles.tabBtnActive : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3-Column Clean Card Grid */}
        <div className={styles.grid}>
          {filtered.map((prod) => (
            <motion.div
              key={prod.id}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.imageWrapper}>
                <span className={styles.tag}>{prod.categoryTag}</span>
                <img src={prod.image} alt={prod.name} className={styles.image} loading="lazy" />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h3 className={styles.cardTitle}>{prod.name}</h3>
                  <span className={styles.priceBadge}>{prod.price}</span>
                </div>

                <p className={styles.cardDesc}>{prod.description}</p>

                <ul className={styles.featureList}>
                  {prod.features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <Check size={14} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.actionsRow}>
                  <button
                    onClick={() => openModal({ product: prod.name, category: prod.categoryTag })}
                    className={styles.quoteCardBtn}
                  >
                    Get Free Quote
                  </button>
                  <Link to={`/products/${prod.slug}`} className={styles.detailsBtn}>
                    Details <ArrowRight size={13} style={{ marginLeft: 4 }} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductCatalogGrid;
