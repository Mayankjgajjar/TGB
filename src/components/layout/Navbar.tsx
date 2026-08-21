import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Zap,
  Layers,
  Box,
  Building2,
  Flame,
  Maximize2,
  Phone,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteContext';
import { useTheme } from '../../context/ThemeContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import styles from './Navbar.module.css';

const PRODUCT_MENU_ITEMS = [
  {
    title: 'LED Sign Boards',
    desc: '3D illuminated glow signs & letters',
    slug: 'led-sign-boards',
    icon: Zap,
  },
  {
    title: 'ACP Sign Boards & Facades',
    desc: '4mm PVDF architectural cladding',
    slug: 'acp-sign-boards',
    icon: Layers,
  },
  {
    title: '3D Acrylic Letters',
    desc: 'Precision laser-cut acrylic logos',
    slug: 'acrylic-letters',
    icon: Box,
  },
  {
    title: 'Stainless Steel Letters',
    desc: 'Grade 304/316 & Titanium Gold',
    slug: 'ss-letters',
    icon: Building2,
  },
  {
    title: 'Custom Neon Signs',
    desc: 'Vibrant 12V LED flex neon displays',
    slug: 'neon-sign-boards',
    icon: Flame,
  },
  {
    title: 'Pylon & Totem Signs',
    desc: 'Highway & plaza monolithic signs',
    slug: 'pylon-signs',
    icon: Maximize2,
  },
];

export const Navbar: React.FC = () => {
  const { openModal } = useQuoteModal();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const scrollDirection = useScrollDirection(8);
  const location = useLocation();

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const isHidden = scrollDirection === 'down' && !mobileOpen;

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`;

  return (
    <>
      <header className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}>
        <div className={styles.inner}>
          {/* Brand Logo */}
          <NavLink to="/" className={styles.logoLink} onClick={handleMobileClose}>
            <img
              src={theme === 'light' ? '/assets/logos/tgb-logo-light.svg' : '/assets/logos/tgb-logo.svg'}
              alt="TGB Enterprise - Sign Board Manufacturer"
              className={styles.logoImage}
            />
          </NavLink>

          {/* Desktop Navigation in Title Case */}
          <nav className={styles.nav} aria-label="Primary navigation">
            <NavLink to="/" end className={getNavLinkClass}>
              Home
            </NavLink>

            {/* Products Dropdown with controlled hover and click dismissal */}
            <div
              className={styles.navItemWithMenu}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink to="/products" className={getNavLinkClass} onClick={handleDropdownClose}>
                Signage Products <ChevronDown size={14} />
              </NavLink>

              <div
                className={`${styles.megaMenuDropdown} ${dropdownOpen ? styles.dropdownVisible : ''}`}
              >
                <div className={styles.megaGrid}>
                  {PRODUCT_MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={`/products/${item.slug}`}
                        className={styles.megaItem}
                        onClick={handleDropdownClose}
                      >
                        <div className={styles.megaItemIcon}>
                          <Icon size={18} />
                        </div>
                        <div className={styles.megaItemText}>
                          <span className={styles.megaItemTitle}>{item.title}</span>
                          <span className={styles.megaItemDesc}>{item.desc}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <NavLink to="/gallery" className={getNavLinkClass}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={getNavLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/resources" className={getNavLinkClass}>
              Resources
            </NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Actions: Theme Toggle + Phone + Quote CTA */}
          <div className={styles.rightActions}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={styles.themeToggleBtn}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun size={17} className={styles.themeIcon} />
              ) : (
                <Moon size={17} className={styles.themeIcon} />
              )}
            </button>

            <a href="tel:+919727136137" className={styles.phoneLink} title="Factory Direct Line">
              <Phone size={14} className={styles.phoneIcon} />
              <span>+91 97271 36137</span>
            </a>

            <button onClick={() => openModal()} className={styles.quoteBtn}>
              Get a Quote <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
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
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <div className={styles.mobileThemeRow}>
            <span className={styles.mobileThemeLabel}>Appearance</span>
            <button
              onClick={toggleTheme}
              className={styles.mobileThemeToggleBtn}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={16} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <NavLink to="/" end className={getNavLinkClass} onClick={handleMobileClose}>
            Home
          </NavLink>
          <NavLink to="/products" className={getNavLinkClass} onClick={handleMobileClose}>
            All Signage Products
          </NavLink>
          <NavLink to="/gallery" className={getNavLinkClass} onClick={handleMobileClose}>
            Project Gallery
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass} onClick={handleMobileClose}>
            About Us
          </NavLink>
          <NavLink to="/resources" className={getNavLinkClass} onClick={handleMobileClose}>
            Resources
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass} onClick={handleMobileClose}>
            Contact Us
          </NavLink>

          <button
            onClick={() => {
              setMobileOpen(false);
              openModal();
            }}
            className={styles.mobileQuoteBtn}
          >
            Get Free Quote →
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
