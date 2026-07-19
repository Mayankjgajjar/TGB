import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import { useQuoteModal } from '../../context/QuoteContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { openModal } = useQuoteModal();
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

  const handleMobileClose = () => {
    setMobileOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`;

  const navLinks = (
    <>
      <NavLink to="/" end className={getNavLinkClass} onClick={handleMobileClose}>
        Home
      </NavLink>
      <NavLink to="/products" className={getNavLinkClass} onClick={handleMobileClose}>
        Products
      </NavLink>
      <NavLink to="/gallery" className={getNavLinkClass} onClick={handleMobileClose}>
        Gallery
      </NavLink>
      <NavLink to="/about" className={getNavLinkClass} onClick={handleMobileClose}>
        About
      </NavLink>
      <NavLink to="/resources" className={getNavLinkClass} onClick={handleMobileClose}>
        Resources
      </NavLink>
      <NavLink to="/contact" className={getNavLinkClass} onClick={handleMobileClose}>
        Contact
      </NavLink>
    </>
  );

  return (
    <>
      <header ref={headerRef} className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}>
        <Container>
          <div className={styles.inner}>
            {/* Top Left: Logo */}
            <NavLink to="/" className={styles.logoLink}>
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
                <span
                  className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineTop : ''}`}
                />
                <span
                  className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineMid : ''}`}
                />
                <span
                  className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineBot : ''}`}
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <Container>
          <div className={styles.mobileNavLinks}>
            {navLinks}
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className={styles.mobileConsultBtn}
            >
              Get a Quote →
            </button>
          </div>
        </Container>
      </nav>

      {/* Backdrop overlay */}
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
