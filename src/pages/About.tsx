import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Container from '../components/ui/Container';
import PageHero from '../components/sections/PageHero';
import { useQuoteModal } from '../context/QuoteContext';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { openModal } = useQuoteModal();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.aboutPage}
    >
      {/* ── 1. Hero Section ── */}
      <PageHero
        eyebrow="ABOUT US"
        title="About TGB Enterprise"
        subtitle="Crafting high-quality signage solutions that help businesses stand out with confidence, creativity, and long-lasting performance."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Hero CTAs */}
      <div style={{ marginTop: '-40px', marginBottom: '80px' }}>
        <Container>
          <div className={styles.btnRow}>
            <Link to="/services" className={styles.btnPrimary}>
              Explore Our Services
            </Link>
            <Link to="/contact" className={styles.btnSecondary}>
              Contact Our Team
            </Link>
          </div>
        </Container>
      </div>

      {/* ── 2. Company Introduction ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Company Introduction">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <span className={styles.eyebrow}>Who We Are</span>
              <h2 className={styles.heading}>Building Powerful Brand Visibility Through Quality Signage</h2>
            </div>
            <div>
              <p className={styles.bodyText}>
                TGB Enterprise is a professional signage design, manufacturing, and installation company based in Ahmedabad, Gujarat. We specialize in delivering premium indoor and outdoor signage solutions for businesses across multiple industries, combining innovative design with precision craftsmanship.
              </p>
              <p className={styles.bodyText}>
                From custom LED sign boards and ACP signage to acrylic letters, stainless steel letters, pylon signs, and complete branding solutions, we work closely with our clients to create signage that strengthens brand identity and enhances customer visibility.
              </p>
              <p className={styles.bodyText}>
                Every project is approached with attention to detail, durable materials, and a commitment to delivering signage that represents the quality of our clients' businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Story ── */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-label="Our Story">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <p className={styles.bodyText}>
                Every successful brand deserves signage that reflects its identity.
              </p>
              <p className={styles.bodyText}>
                Recognizing the growing demand for professionally manufactured, durable, and visually impactful signage, TGB Enterprise was established with the vision of helping businesses create memorable first impressions.
              </p>
              <p className={styles.bodyText}>
                Over the years, we have partnered with retailers, corporate offices, healthcare facilities, educational institutions, hospitality businesses, industrial companies, and commercial developments to deliver signage solutions tailored to their unique requirements.
              </p>
              <p className={styles.bodyText}>
                Our growth has been built on long-term relationships, consistent workmanship, and a commitment to delivering projects on time without compromising quality.
              </p>
            </div>
            <div>
              <span className={styles.eyebrow}>Our Journey</span>
              <h2 className={styles.heading}>A History of Precision Sign Board Manufacturing</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Mission & Vision ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Mission and Vision">
        <div className={styles.inner}>
          <div style={{ marginBottom: '48px' }}>
            <span className={styles.eyebrow}>Our Purpose</span>
            <h2 className={styles.heading}>Mission &amp; Vision</h2>
          </div>
          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDesc}>
                To provide innovative, durable, and professionally manufactured signage solutions that help businesses communicate their identity effectively while maintaining exceptional quality and customer satisfaction.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDesc}>
                To become one of India's most trusted signage solution providers by continuously improving our manufacturing standards, adopting modern technologies, and delivering outstanding customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Core Values ── */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-label="Core Values">
        <div className={styles.inner}>
          <div style={{ marginBottom: '48px' }}>
            <span className={styles.eyebrow}>Our Pillars</span>
            <h2 className={styles.heading}>Our Core Values</h2>
          </div>
          <div className={styles.grid4}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Quality</h3>
              <p className={styles.cardDesc}>
                We believe every sign should represent the quality of the business it serves.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Integrity</h3>
              <p className={styles.cardDesc}>
                We maintain transparency throughout every stage of design, manufacturing, and installation.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Innovation</h3>
              <p className={styles.cardDesc}>
                We continuously explore modern materials, manufacturing techniques, and creative solutions.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Customer Commitment</h3>
              <p className={styles.cardDesc}>
                Every project is completed with our clients' goals and satisfaction at the center of our process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose TGB Enterprise ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Why Choose TGB Enterprise">
        <div className={styles.inner}>
          <div style={{ marginBottom: '48px' }}>
            <span className={styles.eyebrow}>Partnership Strengths</span>
            <h2 className={styles.heading}>Why Choose TGB Enterprise</h2>
          </div>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Experienced Professionals</h3>
              <p className={styles.cardDesc}>
                Our experienced team understands the technical and creative aspects of professional signage manufacturing.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Materials</h3>
              <p className={styles.cardDesc}>
                We use carefully selected materials designed for durability, weather resistance, and long-term performance.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom Solutions</h3>
              <p className={styles.cardDesc}>
                Every project is designed specifically for the client's brand, location, and business objectives.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>End-to-End Service</h3>
              <p className={styles.cardDesc}>
                From consultation and design to manufacturing, installation, and after-sales support, we manage the complete project lifecycle.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Timely Delivery</h3>
              <p className={styles.cardDesc}>
                We understand business deadlines and strive to complete projects efficiently without sacrificing quality.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Reliable Support</h3>
              <p className={styles.cardDesc}>
                Our relationship with clients continues beyond installation through responsive support and warranty assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Our Manufacturing Process ── */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-label="Manufacturing Process Overview">
        <div className={styles.inner}>
          <div>
            <span className={styles.eyebrow}>Our Method</span>
            <h2 className={styles.heading}>Our Manufacturing Process</h2>
            <p className={styles.bodyText} style={{ maxWidth: '600px' }}>
              Every signage project follows a highly structured, quality-controlled process to ensure precision and reliability from design to deployment.
            </p>
          </div>

          <div className={styles.processOverview}>
            <span className={styles.processStep}>Consultation</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Site Survey</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Design</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Material Selection</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Manufacturing</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Quality Inspection</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Installation</span>
            <span className={styles.processArrow}>➔</span>
            <span className={styles.processStep}>Support</span>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link to="/services" className={styles.btnSecondary}>
              View Complete Process Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Industries We Serve ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Industries We Serve">
        <div className={styles.inner}>
          <div>
            <span className={styles.eyebrow}>Diverse Expertise</span>
            <h2 className={styles.heading}>Industries We Serve</h2>
            <p className={styles.bodyText} style={{ maxWidth: '600px' }}>
              We proudly provide high-performance indoor and outdoor signage solutions for:
            </p>
          </div>
          <div className={styles.chipGrid}>
            {[
              'Corporate Offices',
              'Retail Stores',
              'Restaurants & Cafés',
              'Shopping Centres',
              'Hospitals',
              'Educational Institutions',
              'Hotels',
              'Industrial Facilities',
              'Commercial Buildings',
              'Real Estate Projects'
            ].map((industry) => (
              <span key={industry} className={styles.chip}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Quality & Materials ── */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-label="Quality and Materials">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <span className={styles.eyebrow}>Material Standards</span>
              <h2 className={styles.heading}>Built for Performance</h2>
            </div>
            <div>
              <p className={styles.bodyText}>
                Quality begins with selecting the right materials.
              </p>
              <p className={styles.bodyText}>
                Our signage solutions are manufactured using premium-grade acrylic, stainless steel, aluminum composite panels (ACP), LED lighting systems, weather-resistant finishes, and high-performance fabrication techniques to ensure durability, safety, and long-term visual appeal.
              </p>
              <p className={styles.bodyText}>
                Every project undergoes careful inspection before installation to maintain our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Company Statistics ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Company Statistics">
        <div className={styles.inner}>
          <div style={{ marginBottom: '48px' }}>
            <span className={styles.eyebrow}>Performance Record</span>
            <h2 className={styles.heading}>Company Statistics</h2>
          </div>
          <div className={styles.grid4}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years of Experience</div>
              <p className={styles.statDesc}>Serving Ahmedabad & India</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
              <p className={styles.statDesc}>Across multiple states</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Business Clients</div>
              <p className={styles.statDesc}>Retail and enterprise</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Custom Solutions</div>
              <p className={styles.statDesc}>Designed to brand specs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Our Commitment ── */}
      <section className={`${styles.section} ${styles.sectionLight}`} aria-label="Our Commitment">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <p className={styles.bodyText}>
                At TGB Enterprise, we believe successful projects are built on collaboration, trust, and consistent communication.
              </p>
              <p className={styles.bodyText}>
                Our goal is not simply to manufacture signage but to create lasting branding solutions that support the long-term growth of our clients' businesses.
              </p>
              <p className={styles.bodyText}>
                We remain committed to delivering dependable service, professional workmanship, and signage solutions that continue to perform for years to come.
              </p>
            </div>
            <div>
              <span className={styles.eyebrow}>Partnership Values</span>
              <h2 className={styles.heading}>Building Long-Term Partnerships</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Final CTA ── */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-label="Call to Action">
        <div className={styles.inner} style={{ textAlign: 'center' }}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.heading} style={{ margin: '0 auto 20px', maxWidth: '600px' }}>Let's Build Something Exceptional</h2>
          <p className={styles.bodyText} style={{ margin: '0 auto 32px', maxWidth: '600px' }}>
            Whether you're opening a new business, upgrading your storefront, or expanding your corporate identity, our team is ready to help you create signage that leaves a lasting impression.
          </p>
          <div className={styles.btnRow} style={{ justifyContent: 'center' }}>
            <button onClick={openModal} className={styles.btnPrimary} style={{ cursor: 'pointer', border: 'none' }}>
              Request a Quote
            </button>
            <Link to="/services" className={styles.btnSecondary}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
