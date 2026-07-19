import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  Zap,
  Shield,
  Box,
  Layers,
  Sparkles,
  Award,
  Sun,
  Maximize2,
  Compass,
  Building,
  AlertTriangle,
  Briefcase,
  ShoppingBag,
  Wrench,
  Search,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Industries from '../components/sections/Industries';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';
import {
  productsData,
  PRODUCT_CATEGORIES,
  ProductCategory,
  ProductDetail,
} from '../content/products';
import { useSearch } from '../hooks/useSearch';
import { useQuoteModal } from '../context/QuoteContext';
import styles from './Products.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Shield,
  Box,
  Layers,
  Sparkles,
  Award,
  Sun,
  Maximize2,
  Compass,
  Building,
  AlertTriangle,
  Briefcase,
  ShoppingBag,
  Wrench,
};

export const Products: React.FC = () => {
  const { openModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProductsList: ProductDetail[] = Object.values(productsData);

  // 1. Filter by Category
  const categoryFiltered =
    selectedCategory === 'All Products'
      ? allProductsList
      : allProductsList.filter((p) => p.category === selectedCategory);

  // 2. Filter by Search Query using reusable useSearch hook
  const filteredProducts = useSearch(categoryFiltered, searchQuery, [
    'name',
    'shortDescription',
    'category',
    'overview.description',
    'capabilities.materials',
    'capabilities.customization',
  ]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="page"
    >
      {/* 1. Hero / Header Banner */}
      <Section
        spacing="large"
        style={{ paddingTop: '140px', background: 'var(--color-surface-container-low)' }}
      >
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products Catalogue' }]} />

          <div style={{ marginTop: '24px', maxWidth: '840px' }}>
            <SectionEyebrow>TGB ENTERPRISE CATALOGUE</SectionEyebrow>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 700,
                margin: '16px 0',
                lineHeight: 1.15,
              }}
            >
              Architectural Signage & Facade Products
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-secondary)',
                lineHeight: 1.6,
                maxWidth: '750px',
              }}
            >
              Explore our complete range of engineered LED sign boards, ACP cladding, 3D metal
              letters, pylon structures, and wayfinding systems. Manufactured in-house in Vatva,
              Ahmedabad for clients across India.
            </p>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className={styles.filterBarWrapper}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={18} />
              <input
                type="text"
                placeholder="Search products by name, material, or application (e.g., LED, Stainless Steel, PVDF)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className={styles.clearSearchBtn}>
                  Clear
                </button>
              )}
            </div>

            <div className={styles.categoriesPillTrack}>
              <span className={styles.filterLabel}>
                <Filter size={14} /> Category:
              </span>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.categoryPill} ${selectedCategory === cat ? styles.categoryPillActive : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Product Cards Catalogue Grid */}
      <Section spacing="large" id="catalogue">
        <Container>
          <div
            style={{
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-secondary)',
                fontFamily: 'var(--font-technical)',
              }}
            >
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All Products' && ` in "${selectedCategory}"`}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.noResultsBox}>
              <h3>No products found</h3>
              <p>Try clearing your search query or choosing a different category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Products');
                }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <Grid cols={3} gap="normal">
              {filteredProducts.map((prod) => {
                const IconComponent = ICON_MAP[prod.icon] || Zap;
                return (
                  <Card
                    key={prod.slug}
                    icon={IconComponent}
                    category={prod.category}
                    title={prod.name}
                    description={prod.shortDescription}
                    footerPill={prod.pricing.startingFrom}
                    to={`/products/${prod.slug}`}
                    badge={prod.capabilities.materials[0]}
                  />
                );
              })}
            </Grid>
          )}
        </Container>
      </Section>

      {/* 3. Industries We Serve */}
      <Industries
        title="Custom Signage Products Tailored for Industry Standards."
        subtitle="From hospital emergency wayfinding to luxury retail entrance logos, our products meet site-specific engineering regulations."
      />

      {/* 4. Product Selection FAQs */}
      <FAQ
        title="Product Specification FAQs"
        subtitle="Common questions regarding material choices, LED illuminations, wind load compliance, and warranty policies."
        items={[
          {
            question: 'How do I choose between SS 304 and Acrylic 3D letters?',
            answer:
              'SS 304 provides an authentic metallic mirror or brushed finish ideal for prestigious entrance corporate logos. Acrylic is versatile, lighter, and allows vibrant front illumination.',
          },
          {
            question: 'Are all TGB products suitable for exterior monsoon weather?',
            answer:
              'Yes! All exterior products utilize weather-proof materials (PVDF ACP, IP67 LEDs, Grade 304/316 SS) engineered to endure intense rain, UV sun rays, and high winds.',
          },
          {
            question: 'Can I request a custom product size or non-standard shape?',
            answer:
              'Absolutely. Every single product is custom fabricated to your exact site dimensions, vector artwork, and architectural blueprints.',
          },
        ]}
      />

      {/* 5. Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Products;
