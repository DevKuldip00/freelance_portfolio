import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  // Live time in Gujarat, India (IST UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setLocalTime(formatter.format(now));
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="siteFooter">
      <div className="container">
        
        {/* Main Footer Row */}
        <div className="footer-top-row">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#hero" className="brand-wordmark footer-wordmark">
              <span>KULDIP</span>
              <span className="dot">.</span>
            </a>
            <p className="footer-descriptor">
              Independent digital creator building modern websites and mobile applications for businesses, startups, and founders.
            </p>
            <div className="footer-location-tag">
              <span className="mono-tag">BASED IN GUJARAT, INDIA</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <span className="mono-tag footer-col-label">NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#work" className="footer-link">Selected Work</a></li>
              <li><a href="#apps" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About & Credentials</a></li>
              <li><a href="#contact" className="footer-link">Start a Project</a></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="footer-connect-col">
            <span className="mono-tag footer-col-label">CONNECT</span>
            <ul className="footer-links-list">
              <li>
                <a 
                  href={PERSONAL_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  WhatsApp Direct ↗
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="footer-link"
                >
                  Email ({PERSONAL_INFO.email})
                </a>
              </li>
              <li>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <span className="footer-text-muted">
                  Phone: {PERSONAL_INFO.phoneFormatted}
                </span>
              </li>
            </ul>
          </div>

          {/* Live Time Widget */}
          <div className="footer-time-col">
            <span className="mono-tag footer-col-label">LOCAL TIME</span>
            <div className="live-clock-card">
              <div className="clock-header">
                <span className="pulse-dot pulse-lime"></span>
                <span className="clock-city">Gujarat, India</span>
              </div>
              <div className="clock-time">{localTime || 'Loading...'}</div>
              <div className="clock-tz">Asia/Kolkata · IST (UTC+5:30)</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved. Designed & built with minimal interface and extraordinary detail.
          </p>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
