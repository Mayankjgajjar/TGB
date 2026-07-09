import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { openModal } = useQuoteModal();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* ── Column 01: Brand Information ── */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogoWrap}>
              <img
                src="/assets/logos/tgb-logo.svg"
                alt="TGB Enterprise - Premium Signage & Branding Solutions in Ahmedabad"
                loading="lazy"
                className={styles.brandLogoImg}
              />
              <span className={styles.brandTagline}>Built to be Seen.</span>
            </div>
            <p className={styles.brandDesc}>
              TGB Enterprise is a premium sign board manufacturer in Ahmedabad, delivering custom
              signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India,
              we help brands create lasting impressions.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/tgbsign"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on Instagram (opens in new tab)"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/tgbenterprise"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on Facebook (opens in new tab)"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* ── Column 02: Quick Links ── */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.navLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className={styles.navLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.navLink}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/claim-warranty" className={styles.navLink}>
                  Claim Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 03: Our Services ── */}
          <div>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/services/led-sign-boards" className={styles.navLink}>
                  LED Sign Boards
                </Link>
              </li>
              <li>
                <Link to="/services/acp-sign-boards" className={styles.navLink}>
                  ACP Sign Boards
                </Link>
              </li>
              <li>
                <Link to="/services/acrylic-letters" className={styles.navLink}>
                  Acrylic & 3D Letter Signages
                </Link>
              </li>
              <li>
                <Link to="/services/ss-letters" className={styles.navLink}>
                  SS Letters
                </Link>
              </li>
              <li>
                <Link to="/services/neon-sign-boards" className={styles.navLink}>
                  Neon & Custom Signages
                </Link>
              </li>
              <li>
                <Link to="/services/pylon-signs" className={styles.navLink}>
                  Pylon Signs
                </Link>
              </li>
            </ul>
            <Link to="/services" className={styles.viewAllLink}>
              View All Services →
            </Link>
          </div>

          {/* ── Column 04: Industries We Serve ── */}
          <div>
            <h4 className={styles.colTitle}>Industries We Serve</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Retail & Showrooms
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Corporate Offices
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Restaurants & Cafés
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Hospitals & Healthcare
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Hotels & Hospitality
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Industrial & Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/about#industries" className={styles.navLink}>
                  Commercial Spaces
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 05: Contact Information ── */}
          <div>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactBlock}>
              <p className={styles.contactText}>
                <strong>Address:</strong>
                <br />
                Shop No. 7/1, First Floor, Shukan Shopping Centre,
                <br />
                opp. Chanakya school, Sukan Cross Rd,
                <br />
                New India Colony, Nikol,
                <br />
                Ahmedabad, Gujarat 382345
              </p>
              <p className={styles.contactText}>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+919727136137" className={styles.contactAnchor}>
                  +91 97271 36137
                </a>
              </p>
              <p className={styles.contactText}>
                <strong>Email:</strong>
                <br />
                <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className={styles.contactAnchor}
                >
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
              </p>
              <p className={`${styles.contactText} ${styles.contactItalic}`}>
                Proudly serving Ahmedabad and businesses across Gujarat and India.
              </p>
              <button onClick={openModal} className={styles.startProjectBtn}>
                REQUEST A CONSULTATION →
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Section ── */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} TGB Enterprise. All Rights Reserved.
            </div>
            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={styles.legalLink}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
