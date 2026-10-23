import React, { Suspense, lazy } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Lazy-load the 3D scene to protect initial render and LCP
const Hero3DCanvas = lazy(() => import('./Hero3DCanvas'));

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      const topOffset = 80;
      const elementPosition = workSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Left Editorial Copy Column */}
        <div className="hero-copy-col">
          
          {/* Small Brand & Region Tag */}
          <div className="hero-label-row">
            <span className="mono-tag hero-origin-tag">
              INDEPENDENT DEVELOPER · GUJARAT, INDIA
            </span>
            <div className="hero-availability-pill">
              <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
              <span className="availability-text">{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="hero-headline editorial-heading">
            I build digital<br />
            <span className="headline-highlight">experiences that</span><br />
            move businesses forward<span className="accent-period">.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-support-copy">
            From high-impact business websites to thoughtfully engineered mobile apps, 
            I turn ideas into useful, polished digital products.
          </p>

          {/* CTA Action Group */}
          <div className="hero-cta-group">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="btn btn-primary hero-btn-main"
            >
              <span>Explore my work</span>
              <ArrowDown size={16} />
            </a>

            <a 
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn-sub"
            >
              <span>Start a project</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Credibility Footnote */}
          <div className="hero-stats-strip">
            <div className="stat-pill">
              <span className="stat-title">Modern Web</span>
              <span className="stat-desc">React, Vite & Responsive CSS</span>
            </div>
            <div className="stat-sep" aria-hidden="true"></div>
            <div className="stat-pill">
              <span className="stat-title">Mobile Apps</span>
              <span className="stat-desc">Flutter, Firebase & Supabase</span>
            </div>
            <div className="stat-sep" aria-hidden="true"></div>
            <div className="stat-pill">
              <span className="stat-title">Practical AI</span>
              <span className="stat-desc">Gemini API & Vision Models</span>
            </div>
          </div>

        </div>

        {/* Right Interactive 3D Sculpture Stage */}
        <div className="hero-visual-col">
          <div className="sculpture-wrapper">
            <Suspense fallback={
              <div className="hero-3d-fallback" aria-hidden="true">
                <div className="sculptural-torus-fallback">
                  <div className="fallback-inner-ring"></div>
                </div>
              </div>
            }>
              <Hero3DCanvas />
            </Suspense>

            {/* Subtle floating 3D caption */}
            <div className="sculpture-caption">
              <span className="sculpture-tag">
                <Sparkles size={12} className="text-lime" />
                INTERACTIVE 3D PLATINUM FORM
              </span>
              <span className="sculpture-sub">Pointer-responsive WebGL</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="hero-scroll-wrap">
        <a 
          href="#work" 
          onClick={scrollToWork} 
          className="hero-scroll-anchor"
          aria-label="Scroll down to Selected Work"
        >
          <div className="mouse-indicator" aria-hidden="true">
            <span className="mouse-wheel"></span>
          </div>
          <span className="scroll-hint">SCROLL TO WORK</span>
        </a>
      </div>
    </section>
  );
}
