import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Startups',     href: '#startups' },
  { label: 'Investors',    href: '#investors' },
  { label: 'KaroStartup',  href: '#karostartup' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <div className="nav-logo-badge">KP</div>
          <span className="nav-logo-name">
            Karo<span>Pitch</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-right">
          <a href="#investors" className="btn btn-ghost">For Investors</a>
          <a href="#apply" className="btn btn-primary">Apply to Pitch →</a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="mobile-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#apply" className="mobile-link mobile-cta" onClick={closeMenu}>
          Apply to Pitch →
        </a>
      </div>
    </>
  );
}
