import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { openModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const scrollDirection = useScrollDirection(8);
  const headerRef = React.useRef<HTMLElement>(null);

  // Reveal navbar only when KEYBOARD focus enters it (not mouse clicks).
  // This prevents nav link clicks from permanently locking the navbar visible.
  const [focusVisible, setFocusVisible] = React.useState(false);
  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onFocusIn = () => {
      // :focus-visible heuristic — only keyboard-triggered focus should reveal
      const active = document.activeElement as HTMLElement | null;
      if (active && active.matches(':focus-visible')) {
        setFocusVisible(true);
      }
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!header.contains(e.relatedTarget as Node)) {
        setFocusVisible(false);
      }
    };

    header.addEventListener('focusin', onFocusIn);
    header.addEventListener('focusout', onFocusOut);
    return () => {
      header.removeEventListener('focusin', onFocusIn);
      header.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  // Don't hide when mobile drawer is open
  const isHidden = scrollDirection === 'down' && !mobileOpen && !focusVisible;

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
    (e.currentTarget as HTMLElement).blur();
    
    if (location.pathname === '/' && location.hash === `#${id}`) {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -130;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
    setActiveSection(id);
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

  const isHomePage = location.pathname === '/';
  const navLinks = (
    <>
      <a
        href="#home"
        onClick={(e) => handleAnchorClick(e, 'home')}
        className={`${styles.navLink} ${(isHomePage && activeSection === 'home') ? styles.activeNavLink : ''}`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(e) => handleAnchorClick(e, 'about')}
        className={`${styles.navLink} ${(isHomePage && activeSection === 'about') ? styles.activeNavLink : ''}`}
      >
        About
      </a>
      <a
        href="#services"
        onClick={(e) => handleAnchorClick(e, 'services')}
        className={`${styles.navLink} ${(isHomePage && activeSection === 'services') ? styles.activeNavLink : ''}`}
      >
        Services
      </a>
      <a
        href="#projects"
        onClick={(e) => handleAnchorClick(e, 'projects')}
        className={`${styles.navLink} ${(isHomePage && activeSection === 'projects') ? styles.activeNavLink : ''}`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => handleAnchorClick(e, 'contact')}
        className={`${styles.navLink} ${(isHomePage && activeSection === 'contact') ? styles.activeNavLink : ''}`}
      >
        Contact
      </a>
    </>
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}
      >
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
                Get a Quote
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
      </header>

      {/* Mobile Drawer - Wrapped in Container to align with header grid */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <Container>
          <div className={styles.mobileNavLinks}>
            {navLinks}
            <button
              onClick={() => { setMobileOpen(false); openModal(); }}
              className={styles.mobileConsultBtn}
            >
              Get a Quote →
            </button>
          </div>
        </Container>
      </nav>

      {/* Backdrop overlay - Moved outside <header> */}
      {mobileOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
