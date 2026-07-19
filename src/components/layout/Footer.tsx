import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import { getEnvVar } from '../../lib/env';
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

          {/* ── Column 02: Company ── */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/about" className={styles.navLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.navLink}>
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.navLink}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 03: Products ── */}
          <div>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/products/led-sign-boards" className={styles.navLink}>
                  LED Sign Boards
                </Link>
              </li>
              <li>
                <Link to="/products/acp-sign-boards" className={styles.navLink}>
                  ACP Sign Boards
                </Link>
              </li>
              <li>
                <Link to="/products/acrylic-letters" className={styles.navLink}>
                  3D Acrylic Letters
                </Link>
              </li>
              <li>
                <Link to="/products/ss-letters" className={styles.navLink}>
                  Stainless Steel Letters
                </Link>
              </li>
              <li>
                <Link to="/products/neon-sign-boards" className={styles.navLink}>
                  Neon Signs
                </Link>
              </li>
              <li>
                <Link to="/products/pylon-signs" className={styles.navLink}>
                  Pylon &amp; Totem Signs
                </Link>
              </li>
            </ul>
            <Link to="/products" className={styles.viewAllLink}>
              View All Products →
            </Link>
          </div>

          {/* ── Column 04: Resources & Support ── */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/resources" className={styles.navLink}>
                  Resources &amp; Downloads
                </Link>
              </li>
              <li>
                <Link to="/claim-warranty" className={styles.navLink}>
                  Warranty Support
                </Link>
              </li>
              <li>
                <Link to="/resources" className={styles.navLink}>
                  Technical FAQs
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
                  href={`mailto:${getEnvVar('VITE_CONTACT_EMAIL', 'tgbsign@proton.me')}`}
                  className={styles.contactAnchor}
                >
                  {getEnvVar('VITE_CONTACT_EMAIL', 'tgbsign@proton.me')}
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
