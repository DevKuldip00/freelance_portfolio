import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Apps", href: "#apps" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`} id="siteNavbar">
        <div className="container nav-container">
          
          {/* Typographic Brand Wordmark */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="brand-wordmark"
            aria-label="Kuldipsinh Sodhaparmar Home"
          >
            <span>KULDIP</span>
            <span className="dot">.</span>
          </a>

          {/* Desktop Center Navigation */}
          <nav className="desktop-nav-wrap" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions & Availability */}
          <div className="nav-actions">
            
            {/* Availability Badge */}
            <div className="availability-badge desktop-only" title="Currently open for freelance project discussions">
              <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
              <span className="availability-text">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Primary Action Button */}
            <a 
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta-btn"
              aria-label="Let's talk on WhatsApp"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobileDrawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <div 
        id="mobileDrawer"
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-drawer-sheet" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          
          <div className="mobile-drawer-header">
            <div className="brand-wordmark">
              <span>KULDIP</span>
              <span className="dot">.</span>
            </div>
            <button 
              type="button" 
              className="mobile-close-btn" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer-body">
            
            <div className="mobile-availability-tag">
              <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <nav className="mobile-nav-list" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-item"
                >
                  <span className="mobile-nav-label">{link.label}</span>
                  <ArrowUpRight size={18} className="mobile-nav-arrow" />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-cta">
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime w-100"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="btn btn-secondary w-100 mt-2"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
