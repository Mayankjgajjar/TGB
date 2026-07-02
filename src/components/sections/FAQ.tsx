import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'What types of signages do you manufacture?',
    answer: 'We manufacture a wide range of custom signage solutions including LED sign boards, ACP sign boards, acrylic signages, 3D letter signages, neon signages, corporate signages, retail signages, wayfinding systems, safety signages, and custom indoor and outdoor signage solutions.'
  },
  {
    question: 'Do you provide design and installation services?',
    answer: 'Yes. TGB Enterprise offers complete end-to-end custom signage solutions including consultation, design and visualization, high-precision manufacturing, professional signage installation, and dedicated after-sales support.'
  },
  {
    question: 'Do you only work in Ahmedabad?',
    answer: 'No. While we are based in Ahmedabad, Gujarat, we design, manufacture, and deliver professional signage installation solutions for businesses across India, including key projects in Surat, Rajkot, Mumbai, Bengaluru, Delhi, and other major cities.'
  },
  {
    question: 'Can you create completely customized signages?',
    answer: 'Absolutely. Every business has unique architectural and branding requirements. We specialize in engineering and fabricating custom signage solutions tailored to your exact brand guidelines and dimensions.'
  },
  {
    question: 'What materials do you use for your signages?',
    answer: 'We select premium materials based on application, including architectural ACP cladding, high-grade acrylic, stainless steel, structural aluminum, energy-efficient LED modules, and weatherproof vinyl to guarantee long-term outdoor performance.'
  },
  {
    question: 'How long does a signage project take?',
    answer: 'Timelines vary based on scale, engineering complexity, and installation scope. After assessing your requirements, our design and estimating team will provide a clear project schedule and deliver regular execution updates.'
  },
  {
    question: 'Do you provide after-sales service?',
    answer: 'Yes. Dependable after-sales service is a core pillar of TGB Enterprise. Our responsibility extends past installation to provide active support, electrical checkups, and maintenance assistance whenever clients need us.'
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We deliver custom signage solutions to diverse sectors including retail showrooms, corporate offices, restaurants, hotels, healthcare spaces, educational campuses, real estate sites, and heavy industrial facilities.'
  },
  {
    question: 'How can I get a quotation for my project?',
    answer: 'You can reach out via our website, phone, or email to share project files or design drafts. Our estimators will schedule a call to understand details and render a comprehensive quotation tailored to your requirements.'
  }
];

export const FAQ: React.FC = () => {
  const { openModal } = useQuoteModal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Dynamic FAQPage Structured Data (JSON-LD)
  React.useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-markup';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-markup');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Distribute items into left and right columns for balanced rendering on desktop
  const leftColFaqs = faqs.filter((_, idx) => idx % 2 === 0);
  const rightColFaqs = faqs.filter((_, idx) => idx % 2 !== 0);

  const renderFaqItem = (faq: typeof faqs[0], originalIndex: number) => {
    const isOpen = openIndex === originalIndex;

    return (
      <div 
        key={originalIndex} 
        className={`${styles.accordion} ${isOpen ? styles.accordionActive : ''}`}
      >
        <button 
          className={styles.accordionHeader} 
          onClick={() => toggleFAQ(originalIndex)}
          aria-expanded={isOpen}
        >
          <h3 className={styles.question}>{faq.question}</h3>
          <div className={styles.iconWrapper}>
            <Plus size={16} strokeWidth={2} />
          </div>
        </button>

        <div 
          className={styles.contentWrapper}
          style={{ 
            maxHeight: isOpen ? '240px' : '0',
            transition: 'max-height 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms ease'
          }}
        >
          <div className={styles.contentInner}>
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  const { ref, isRevealed, shouldReduceMotion } = useScrollReveal();

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} className={styles.section} id="faq">
      <div className={styles.inner}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.heading}>Everything You Need to Know.</h2>
          <p className={styles.subheading}>
            Have questions about our signage solutions, process, or services? Here are answers 
            to the most common questions we receive.
          </p>
        </motion.div>

        {/* ── Accordion Grid ── */}
        <div className={styles.grid}>
          <div className={styles.column}>
            {leftColFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);
              return renderFaqItem(faq, originalIndex);
            })}
          </div>

          <div className={styles.column}>
            {rightColFaqs.map((faq) => {
              const originalIndex = faqs.indexOf(faq);
              return renderFaqItem(faq, originalIndex);
            })}
          </div>
        </div>

        {/* ── Bottom Clean CTA (No heavy card, just elegant link) ── */}
        <div className={styles.bottomLinkBlock}>
          Still have questions? Our team is here to help.
          <button onClick={openModal} className={styles.bottomLink}>
            Let's Discuss Your Project →
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
