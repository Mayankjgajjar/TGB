import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  BookOpen,
  Wrench,
  Sparkles,
  Building2,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Grid from '../components/ui/Grid';
import ContactCTA from '../components/sections/ContactCTA';
import {
  downloadsData,
  faqCategoriesData,
  articlesData,
  technicalSpecsData,
} from '../content/resources';
import { useSearch } from '../hooks/useSearch';
import styles from './Resources.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  BookOpen,
  ShieldCheck,
  Wrench,
  Sparkles,
};

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'downloads' | 'faq' | 'technical'>('downloads');
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqCategoriesData[0].category);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter FAQs using useSearch hook
  const activeFaqList = faqCategoriesData.find((c) => c.category === activeFaqCategory)?.faqs || [];
  const filteredFaqs = useSearch(activeFaqList, faqSearchQuery, ['question', 'answer']);

  const toggleFaq = (idx: number) => {
    setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="page"
    >
      <Section
        spacing="large"
        style={{ paddingTop: '140px', background: 'var(--color-surface-container-low)' }}
      >
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources Hub' }]} />

          <div style={{ marginTop: '24px', maxWidth: '800px' }}>
            <SectionEyebrow>TECHNICAL RESOURCES &amp; KNOWLEDGE CENTER</SectionEyebrow>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 700,
                margin: '16px 0',
                lineHeight: 1.15,
              }}
            >
              Downloads, Specifications &amp; Design Guides
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
              Access corporate brochures, signage catalogues, fire ratings, wind-load calculations,
              warranty care manuals, and our technical design knowledge center.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.tabsWrapper}>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`${styles.tabBtn} ${activeTab === 'downloads' ? styles.tabBtnActive : ''}`}
            >
              <Download size={16} /> Downloads &amp; Catalogues
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`${styles.tabBtn} ${activeTab === 'faq' ? styles.tabBtnActive : ''}`}
            >
              <HelpCircle size={16} /> Knowledge Center FAQs
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`${styles.tabBtn} ${activeTab === 'technical' ? styles.tabBtnActive : ''}`}
            >
              <FileText size={16} /> Material Specifications
            </button>
          </div>
        </Container>
      </Section>

      {/* Main Content Area */}
      <Section spacing="large">
        <Container>
          {/* TAB 1: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div>
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '8px' }}>
                  Available Documentation
                </h2>
                <p style={{ color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                  Select any PDF files below to download directly for your design references.
                </p>
              </div>

              <Grid cols={3} gap="normal">
                {downloadsData.map((res) => {
                  const Icon = ICON_MAP[res.icon] || FileText;
                  return (
                    <div key={res.id} className={styles.downloadCard}>
                      <div className={styles.downloadIconWrap}>
                        <Icon size={24} className={styles.downloadIcon} />
                      </div>
                      <span className={styles.downloadCategory}>{res.category.toUpperCase()}</span>
                      <h3 className={styles.downloadTitle}>{res.title}</h3>
                      <p className={styles.downloadDesc}>{res.description}</p>
                      <div className={styles.downloadFooter}>
                        <span className={styles.fileInfo}>
                          {res.format} • {res.fileSize}
                        </span>
                        <a href={res.downloadUrl} download className={styles.downloadLink}>
                          Download <Download size={14} style={{ marginLeft: '4px' }} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </Grid>

              {/* Related Design Articles & Case Studies */}
              <div
                style={{
                  marginTop: '64px',
                  paddingTop: '48px',
                  borderTop: '1px solid var(--color-outline-variant)',
                }}
              >
                <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '24px' }}>
                  Signage Design Articles &amp; Case Studies
                </h2>
                <Grid cols={3} gap="normal">
                  {articlesData.map((art) => (
                    <div key={art.id} className={styles.articleCard}>
                      <img src={art.image} alt={art.title} className={styles.articleImage} />
                      <div style={{ padding: '20px' }}>
                        <span
                          style={{
                            fontSize: '10px',
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontFamily: 'var(--font-technical)',
                          }}
                        >
                          {art.category}
                        </span>
                        <h3
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            margin: '8px 0 12px',
                            lineHeight: 1.35,
                          }}
                        >
                          {art.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-secondary)',
                            margin: '0 0 16px',
                            lineHeight: 1.5,
                          }}
                        >
                          {art.summary}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '11px',
                            color: 'var(--color-secondary)',
                          }}
                        >
                          <span>{art.author}</span>
                          <span>{art.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Grid>
              </div>
            </div>
          )}

          {/* TAB 2: KNOWLEDGE CENTER FAQS */}
          {activeTab === 'faq' && (
            <div className={styles.faqWrapper}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  marginBottom: '32px',
                }}
              >
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '8px' }}>
                    Signage Selection FAQs
                  </h2>
                  <p style={{ color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                    Browse FAQs categorized by topic or search directly for queries.
                  </p>
                </div>
                <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
                  <input
                    type="text"
                    placeholder="Search questions & answers..."
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    className={styles.faqSearchInput}
                  />
                </div>
              </div>

              {/* Sidebar filter list + main FAQ accordions */}
              <div className={styles.faqGrid}>
                <div className={styles.faqCategoriesSidebar}>
                  {faqCategoriesData.map((cat) => (
                    <button
                      key={cat.category}
                      onClick={() => {
                        setActiveFaqCategory(cat.category);
                        setExpandedFaqIndex(null);
                      }}
                      className={`${styles.faqCatBtn} ${activeFaqCategory === cat.category ? styles.faqCatBtnActive : ''}`}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>

                <div className={styles.faqAccordionCol}>
                  {filteredFaqs.length === 0 ? (
                    <div
                      style={{
                        padding: '30px',
                        textAlign: 'center',
                        border: '1px dashed var(--color-outline-variant)',
                      }}
                    >
                      No matching questions found for "{faqSearchQuery}".
                    </div>
                  ) : (
                    filteredFaqs.map((faq, idx) => {
                      const isExpanded = expandedFaqIndex === idx;
                      return (
                        <div key={idx} className={styles.faqItemCard}>
                          <button onClick={() => toggleFaq(idx)} className={styles.faqHeaderBtn}>
                            <span className={styles.faqQuestionText}>{faq.question}</span>
                            <ChevronDown
                              size={18}
                              className={`${styles.faqChevron} ${isExpanded ? styles.faqChevronRotated : ''}`}
                            />
                          </button>
                          {isExpanded && (
                            <div className={styles.faqAnswerText}>
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MATERIAL SPECIFICATIONS */}
          {activeTab === 'technical' && (
            <div>
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '8px' }}>
                  Material Specifications &amp; Structural Standards
                </h2>
                <p style={{ color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                  Detailed architectural spec standards for factory engineering audits.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {technicalSpecsData.map((spec) => (
                  <div key={spec.id} className={styles.specBox}>
                    <div className={styles.specHeader}>
                      <div>
                        <span className={styles.specSystemBadge}>{spec.materialOrSystem}</span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '8px 0 4px' }}>
                          {spec.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '11px',
                            color: 'var(--color-secondary)',
                            fontFamily: 'var(--font-technical)',
                          }}
                        >
                          STANDARDS: {spec.standards}
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        margin: '12px 0 20px',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {spec.summary}
                    </p>
                    <ul className={styles.specPointList}>
                      {spec.specificationsList.map((pt, i) => (
                        <li key={i} className={styles.specPointItem}>
                          <CheckCircle2 size={16} className={styles.specCheckIcon} /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <ContactCTA />
    </motion.div>
  );
};

export default Resources;
