import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { openModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90; // sticky header height offset
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>

          {/* ── Column 01: Brand Information ── */}
          <div className={styles.brandCol}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <img 
                src="/assets/logos/tgb-logo.svg" 
                alt="TGB Enterprise - Premium Signage & Branding Solutions in Ahmedabad" 
                style={{ height: '32px', width: 'auto', alignSelf: 'start' }}
              />
              <span className={styles.brandTagline}>Built to be Seen.</span>
            </div>
            <p className={styles.brandDesc}>
              TGB Enterprise is a premium sign board manufacturer in Ahmedabad, delivering custom signage solutions. Proudly serving Ahmedabad and businesses across Gujarat and India, we help brands create lasting impressions.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
              <a href="https://www.instagram.com/tgbsign" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
              <a href="https://www.facebook.com/tgbenterprise" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
            </div>
          </div>

          {/* ── Column 02: Quick Links ── */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className={styles.navLink}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className={styles.navLink}>About</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>Services</a></li>
              <li><a href="#projects" onClick={(e) => handleAnchorClick(e, 'projects')} className={styles.navLink}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className={styles.navLink}>Contact</a></li>
            </ul>
          </div>

          {/* ── Column 03: Our Services ── */}
          <div>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>LED Sign Boards</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>ACP Sign Boards</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>Acrylic & 3D Letter Signages</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>Corporate Signages</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>Neon & Custom Signages</a></li>
              <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.navLink}>Indoor & Outdoor Signage Systems</a></li>
            </ul>
            <a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={styles.viewAllLink}>
              View All Services →
            </a>
          </div>

          {/* ── Column 04: Industries We Serve ── */}
          <div>
            <h4 className={styles.colTitle}>Industries We Serve</h4>
            <ul className={styles.linksList}>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Retail & Showrooms</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Corporate Offices</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Restaurants & Cafés</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Hospitals & Healthcare</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Hotels & Hospitality</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Industrial & Manufacturing</a></li>
              <li><a href="#industries" onClick={(e) => handleAnchorClick(e, 'industries')} className={styles.navLink}>Commercial Spaces</a></li>
            </ul>
          </div>

          {/* ── Column 05: Contact Information ── */}
          <div>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactBlock}>
              <p className={styles.contactText}>
                <strong>Address:</strong><br />
                Shop No. 7/1, First Floor, Shukan Shopping Centre,<br />
                opp. Chanakya school, Sukan Cross Rd,<br />
                New India Colony, Nikol,<br />
                Ahmedabad, Gujarat 382345
              </p>
              <p className={styles.contactText}>
                <strong>Phone:</strong><br />
                <a href="tel:+919727136137" className={styles.contactAnchor}>+91 97271 36137</a>
              </p>
              <p className={styles.contactText}>
                <strong>Email:</strong><br />
                <a href="mailto:tgbsign@proton.me" className={styles.contactAnchor}>tgbsign@proton.me</a>
              </p>
              <p className={styles.contactText} style={{ opacity: 0.8, fontSize: '12px', fontStyle: 'italic' }}>
                Proudly serving Ahmedabad and businesses across Gujarat and India.
              </p>
              <button onClick={openModal} className={styles.startProjectBtn}>
                Start Your Project →
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom Section (SEO Statement, Quote, and Copyright Links) ── */}
        <div className={styles.bottomSection}>

          
          
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © 2025 TGB Enterprise. All Rights Reserved.
            </div>
            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <Link to="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
