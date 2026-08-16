import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ChevronDown, CheckCircle2 } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import SectionEyebrow from '../components/ui/SectionEyebrow';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ContactCTA from '../components/sections/ContactCTA';
import { downloadsData, faqCategoriesData, technicalSpecsData } from '../content/resources';
import { useSearch } from '../hooks/useSearch';
import styles from './Resources.module.css';

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'downloads' | 'faq' | 'technical'>('downloads');
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqCategoriesData[0].category);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      className={styles.page}
    >
      {/* 1. Header Banner */}
      <section className={styles.heroSection}>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources Hub' }]} />

          <div className={styles.heroContent}>
            <SectionEyebrow>TECHNICAL RESOURCES &amp; SPECIFICATIONS</SectionEyebrow>
            <h1 className={styles.heroTitle}>Downloads, Specifications &amp; Technical Guides</h1>
            <p className={styles.heroDesc}>
              Access corporate brochures, engineering blueprints, fire safety certifications, wind
              load compliance sheets, and material specifications.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.tabsWrapper}>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`${styles.tabBtn} ${activeTab === 'downloads' ? styles.tabBtnActive : ''}`}
            >
              <Download size={15} /> Catalogues &amp; PDFs
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`${styles.tabBtn} ${activeTab === 'technical' ? styles.tabBtnActive : ''}`}
            >
              <FileText size={15} /> Engineering Specs
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`${styles.tabBtn} ${activeTab === 'faq' ? styles.tabBtnActive : ''}`}
            >
              <FileText size={15} /> Technical FAQs
            </button>
          </div>
        </Container>
      </section>

      {/* 2. Content Section */}
      <section className={styles.contentSection}>
        <Container>
          {/* TAB 1: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className={styles.grid3}>
              {downloadsData.map((item) => (
                <div key={item.id} className={styles.downloadCard}>
                  <div>
                    <div className={styles.downloadIconWrap}>
                      <Download size={20} />
                    </div>
                    <span className={styles.downloadCategory}>{item.category}</span>
                    <h3 className={styles.downloadTitle}>{item.title}</h3>
                    <p className={styles.downloadDesc}>{item.description}</p>
                  </div>

                  <div className={styles.downloadFooter}>
                    <span className={styles.fileInfo}>
                      {item.fileType} • {item.fileSize}
                    </span>
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadLink}
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECS */}
          {activeTab === 'technical' && (
            <div>
              {technicalSpecsData.map((spec, i) => (
                <div key={i} className={styles.specBox}>
                  <span className={styles.specSystemBadge}>{spec.system}</span>
                  <h3 className={styles.specTitle}>{spec.material}</h3>
                  <ul className={styles.specPointList}>
                    {spec.points.map((pt, j) => (
                      <li key={j} className={styles.specPointItem}>
                        <CheckCircle2 size={16} className={styles.specCheckIcon} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: FAQ KNOWLEDGE BASE */}
          {activeTab === 'faq' && (
            <div className={styles.faqGrid}>
              <div className={styles.faqCategoriesSidebar}>
                {faqCategoriesData.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveFaqCategory(cat.category)}
                    className={`${styles.faqCatBtn} ${activeFaqCategory === cat.category ? styles.faqCatBtnActive : ''}`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              <div className={styles.faqAccordionCol}>
                {filteredFaqs.map((faq, idx) => {
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
                      {isExpanded && <p className={styles.faqAnswerText}>{faq.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Consultation CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default Resources;
