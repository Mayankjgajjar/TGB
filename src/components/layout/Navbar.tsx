import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { openModal } = useQuoteModal();
  const [activeHash, setActiveHash] = React.useState(location.hash || '#home');

  React.useEffect(() => {
    if (location.pathname === '/') {
      setActiveHash(location.hash || '#home');
    } else {
      setActiveHash('');
    }
  }, [location.pathname, location.hash]);

  const isAnchorActive = (hash: string) => {
    if (location.pathname !== '/') return false;
    return activeHash === hash;
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          
          {/* Top Left: Logo */}
          <NavLink to="/" className={styles.logoLink}>
            <img 
              src="/assets/logos/2Asset%203.svg" 
              alt="TGB Enterprise Logo" 
              className={styles.logoImage} 
            />
          </NavLink>

          {/* Center: Navigation Options */}
          <nav className={styles.nav}>
            <a 
              href="/#home" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#home');
                  setActiveHash('#home');
                }
              }}
              className={`${styles.navLink} ${isAnchorActive('#home') ? styles.activeNavLink : ''}`}
            >
              Home
            </a>
            <a 
              href="/#about" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#about');
                  setActiveHash('#about');
                }
              }}
              className={`${styles.navLink} ${isAnchorActive('#about') ? styles.activeNavLink : ''}`}
            >
              About
            </a>
            <a 
              href="/#services" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#services');
                  setActiveHash('#services');
                }
              }}
              className={`${styles.navLink} ${isAnchorActive('#services') ? styles.activeNavLink : ''}`}
            >
              Services
            </a>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive && location.hash === '' ? styles.activeNavLink : ''}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Top Right: Consultation Action Button */}
          <div className={styles.rightActions}>
            <button onClick={openModal} className={styles.quoteButton}>
              Begin Consultation
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;
