import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter, PhoneCall } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
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

export const Products: React.FC = () => {
  const { openModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProductsList: ProductDetail[] = Object.values(productsData);

  const categoryFiltered =
    selectedCategory === 'All Products'
      ? allProductsList
      : allProductsList.filter((p) => p.category === selectedCategory);

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
      className={styles.page}
    >
      {/* 1. Page Header & Search Filter */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products Catalogue' }]} />

          <div className={styles.heroContent}>
            <SectionEyebrow>B2B MANUFACTURING CATALOGUE</SectionEyebrow>
            <h1 className={styles.heroTitle}>Commercial Sign Boards & Architectural Facades</h1>
            <p className={styles.heroDesc}>
              Complete range of in-house manufactured signage solutions engineered in Nikol,
              Ahmedabad. Direct factory pricing with certified specifications and multi-year
              warranties.
            </p>
          </div>

          {/* Search Box & Category Filter Pills */}
          <div className={styles.filterBarWrapper}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={18} />
              <input
                type="text"
                placeholder="Search products by name, material, or application (e.g. LED, Stainless Steel, ACP)..."
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
                <Filter size={13} /> Filter:
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
      </section>

      {/* 2. Product Cards Catalogue Grid */}
      <section className={styles.catalogueSection} id="catalogue">
        <Container>
          <span className={styles.countLabel}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All Products' && ` in "${selectedCategory}"`}
          </span>

          {filteredProducts.length === 0 ? (
            <div className={styles.noResultsBox}>
              <h3>No products found matching your search</h3>
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
            <div className={styles.grid}>
              {filteredProducts.map((prod) => (
                <div key={prod.slug} className={styles.card}>
                  {/* Visual Image with Category Badge */}
                  <div className={styles.imageWrapper}>
                    <span className={styles.categoryBadge}>{prod.category}</span>
                    <img
                      src={prod.heroImage}
                      alt={`${prod.name} fabrication`}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className={styles.cardBody}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{prod.name}</h3>
                      <span className={styles.pricePill}>{prod.pricing.startingFrom}</span>
                    </div>

                    <p className={styles.cardDesc}>{prod.shortDescription}</p>

                    {/* Spec Badges */}
                    <div className={styles.badgesRow}>
                      {prod.capabilities?.materials?.slice(0, 2).map((mat, i) => (
                        <span key={i} className={styles.specBadge}>
                          {mat}
                        </span>
                      ))}
                      {prod.specifications?.warranty && (
                        <span className={styles.specBadge}>{prod.specifications.warranty}</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.cardActions}>
                      <button
                        onClick={() => openModal({ product: prod.name, category: prod.category })}
                        className={styles.quoteBtn}
                      >
                        Get Free Quote
                      </button>
                      <Link to={`/products/${prod.slug}`} className={styles.detailsLink}>
                        Specifications <ArrowRight size={13} style={{ marginLeft: 4 }} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 3. Factory Manufacturing Credentials Strip */}
      <section className={styles.factoryStrip} aria-label="Factory Specifications">
        <Container>
          <div className={styles.factoryGrid}>
            <div className={styles.factoryItem}>
              <span className={styles.factoryNumber}>01. PRECISION CNC</span>
              <h4 className={styles.factoryTitle}>Fiber Laser &amp; 3D Bending</h4>
              <p className={styles.factoryDesc}>
                0.1mm tolerance laser cutting for SS 304, brass, and automated letter bending.
              </p>
            </div>
            <div className={styles.factoryItem}>
              <span className={styles.factoryNumber}>02. IP67 STANDARD</span>
              <h4 className={styles.factoryTitle}>Illumination Testing Lab</h4>
              <p className={styles.factoryDesc}>
                50,000h Samsung LED modules with Meanwell constant voltage drivers.
              </p>
            </div>
            <div className={styles.factoryItem}>
              <span className={styles.factoryNumber}>03. SPEED &amp; SLA</span>
              <h4 className={styles.factoryTitle}>7–10 Day Turnaround</h4>
              <p className={styles.factoryDesc}>
                Strict production timelines with certified CAD drawings and proof approvals.
              </p>
            </div>
            <div className={styles.factoryItem}>
              <span className={styles.factoryNumber}>04. PAN-INDIA</span>
              <h4 className={styles.factoryTitle}>On-Site Certified Rigging</h4>
              <p className={styles.factoryDesc}>
                Complete structural anchor certification and dedicated after-sales support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Industries We Serve */}
      <Industries
        title="Custom Signage Products Tailored for Industry Standards"
        subtitle="From hospital emergency wayfinding to luxury retail entrance logos, our products meet site-specific engineering regulations."
      />

      {/* 5. Product Selection FAQs */}
      <FAQ
        title="Product Specification & Selection FAQs"
        subtitle="Common questions regarding material grades, illumination power, wind load compliance, and warranty policies."
      />

      {/* 6. Lead Generation Consultation */}
      <ContactCTA />
    </motion.div>
  );
};

export default Products;
