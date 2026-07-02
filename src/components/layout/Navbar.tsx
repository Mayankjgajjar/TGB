import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { openModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Give a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90; // sticky header height offset
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveSection('home');
    }
  };

  const navLinks = (
    <>
      <a
        href="#home"
        onClick={(e) => handleAnchorClick(e, 'home')}
        className={`${styles.navLink} ${activeSection === 'home' ? styles.activeNavLink : ''}`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(e) => handleAnchorClick(e, 'about')}
        className={`${styles.navLink} ${activeSection === 'about' ? styles.activeNavLink : ''}`}
      >
        About
      </a>
      <a
        href="#services"
        onClick={(e) => handleAnchorClick(e, 'services')}
        className={`${styles.navLink} ${activeSection === 'services' ? styles.activeNavLink : ''}`}
      >
        Services
      </a>
      <a
        href="#projects"
        onClick={(e) => handleAnchorClick(e, 'projects')}
        className={`${styles.navLink} ${activeSection === 'projects' ? styles.activeNavLink : ''}`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => handleAnchorClick(e, 'contact')}
        className={`${styles.navLink} ${activeSection === 'contact' ? styles.activeNavLink : ''}`}
      >
        Contact
      </a>
    </>
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>

          {/* Top Left: Logo */}
          <NavLink to="/" onClick={handleLogoClick} className={styles.logoLink}>
            <img
              src="/assets/logos/tgb-logo.svg"
              alt="TGB Enterprise - Sign Board Manufacturer in Nikol, Ahmedabad"
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
