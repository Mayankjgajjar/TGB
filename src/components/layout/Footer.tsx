import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { contactContent } from '../../content/contact';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <img 
              src="/assets/logos/logo.svg" 
              alt="TGB Enterprise Logo" 
              className={styles.logoImg} 
            />
            <p className={styles.companyMeta}>
              We design, fabricate, and install premium architectural identity systems for commercial buildings. We engineer how landmarks are recognized.
            </p>
          </div>

          {/* Directory Links Column */}
          <div>
            <h4 className={styles.colTitle}>Index</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link to="/">Home</Link></li>
              <li className={styles.linkItem}><Link to="/projects">Projects</Link></li>
              <li className={styles.linkItem}><Link to="/contact">Contact & Details</Link></li>
            </ul>
          </div>

          {/* Departments Contact Column */}
          <div>
            <h4 className={styles.colTitle}>Inquiries</h4>
            <ul className={styles.linksList}>
              {contactContent.departments.map((dept, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={`mailto:${dept.email}`} title={dept.name}>
                    {dept.name.split(' ')[0]} Office
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Columns */}
          <div>
            <h4 className={styles.colTitle}>Locations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
              {contactContent.offices.map((office, index) => (
                <div key={index} className={styles.officeInfo}>
                  <strong style={{ color: 'var(--color-off-white)' }}>{office.name}</strong>
                  <span>{office.address[1]}</span>
                  <span className={styles.coordinates}>{office.coordinates}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Metadata */}
        <div className={styles.bottom}>
          <div>
            © {currentYear} TGB ENTERPRISE. ALL RIGHTS RESERVED.
          </div>
          <div>
            ISO 9001:2015 REGISTERED / AHMEDABAD, GUJARAT
          </div>
          <div>
            DESIGNED FOR ARCHITECTURAL PERMANENCE
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
