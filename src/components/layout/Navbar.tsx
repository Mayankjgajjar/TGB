import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { openModal } = useQuoteModal();
  const [activeHash, setActiveHash] = React.useState(location.hash || '#home');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/') {
      setActiveHash(location.hash || '#home');
    } else {
      setActiveHash('');
    }
  }, [location.pathname, location.hash]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isAnchorActive = (hash: string) => {
    if (location.pathname !== '/') return false;
    return activeHash === hash;
  };

  const scrollTo = (id: string, hash: string) => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', hash);
      setActiveHash(hash);
    }
  };

  const navLinks = (
    <>
      <a
        href="/#home"
        onClick={(e) => { e.preventDefault(); scrollTo('home', '#home'); }}
        className={`${styles.navLink} ${isAnchorActive('#home') ? styles.activeNavLink : ''}`}
      >
        Home
      </a>
      <a
        href="/#about"
        onClick={(e) => { e.preventDefault(); scrollTo('about', '#about'); }}
        className={`${styles.navLink} ${isAnchorActive('#about') ? styles.activeNavLink : ''}`}
      >
        About
      </a>
      <a
        href="/#services-overview"
        onClick={(e) => { e.preventDefault(); scrollTo('services-overview', '#services-overview'); }}
        className={`${styles.navLink} ${isAnchorActive('#services-overview') ? styles.activeNavLink : ''}`}
      >
        Services
      </a>
      <NavLink
        to="/projects"
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          `${styles.navLink} ${isActive && location.hash === '' ? styles.activeNavLink : ''}`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>

          {/* Top Left: Logo */}
          <NavLink to="/" className={styles.logoLink}>
            <img
              src="/assets/logos/tgb-logo.svg"
              alt="TGB Enterprise Logo"
              className={styles.logoImage}
            />
          </NavLink>

          {/* Center: Desktop Navigation */}
          <nav className={styles.nav} aria-label="Primary navigation">
            {navLinks}
          </nav>

          {/* Top Right: Consultation Action Button */}
          <div className={styles.rightActions}>
            <button onClick={openModal} className={styles.quoteButton}>
              Begin Consultation
              <span className={styles.btnArrow}>→</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineTop : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineMid : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineBot : ''}`} />
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Drawer */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileNavLinks}>
          {navLinks}
          <button
            onClick={() => { setMobileOpen(false); openModal(); }}
            className={styles.mobileConsultBtn}
          >
            Begin Consultation →
          </button>
        </div>
      </nav>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
