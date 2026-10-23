import React, { useState } from 'react';
import { Smartphone, Sparkles, Navigation, Layers, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { MOBILE_APPS, PERSONAL_INFO } from '../data/portfolioData';

export default function MobileApps() {
  const [activeTab, setActiveTab] = useState('fitsangha');

  const activeApp = MOBILE_APPS.find(app => app.id === activeTab) || MOBILE_APPS[0];

  return (
    <section className="apps-section section-padding dark-section" id="apps">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial dark-header">
          <div className="section-label-group">
            <span className="mono-tag text-lime">02 / BEYOND THE BROWSER</span>
            <div className="editorial-line dark-line" aria-hidden="true"></div>
          </div>
          
          <div className="section-title-wrap">
            <h2 className="section-title editorial-heading text-warm-white">
              Mobile applications engineered with Flutter & AI<span className="accent-period">.</span>
            </h2>
            <p className="section-subtitle text-dark-secondary">
              Substantial cross-platform software products built with reactive state management, cloud databases, and practical artificial intelligence.
            </p>
          </div>
        </div>

        {/* App Switcher Tabs */}
        <div className="app-switcher-bar">
          {MOBILE_APPS.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => setActiveTab(app.id)}
              className={`app-switch-btn ${activeTab === app.id ? 'active' : ''}`}
              aria-selected={activeTab === app.id}
            >
              <Smartphone size={16} />
              <span className="app-name">{app.name}</span>
              <span className="app-cat-hint">{app.id === 'fitsangha' ? 'Fitness & AI' : 'Expense AI'}</span>
            </button>
          ))}
        </div>

        {/* Active Application Showcase Stage */}
        <div className="app-showcase-stage">
          <div className="app-showcase-grid">
            
            {/* Left Column: Device Mockup */}
            <div className="app-device-col">
              <div className="phone-mockup-wrapper">
                <div className="phone-chassis">
                  <div className="phone-screen-frame">
                    <img 
                      src={activeApp.image} 
                      alt={`${activeApp.name} mobile application interface screenshot`}
                      className="phone-screen-img"
                      loading="lazy"
                    />
                    <div className="phone-notch"></div>
                  </div>
                  <div className="phone-glare"></div>
                </div>
                
                {/* Floating Meta Badges */}
                <div className="floating-device-badge top-right">
                  <span className="pulse-dot pulse-lime"></span>
                  <span>Flutter Native</span>
                </div>

                <div className="floating-device-badge bottom-left">
                  <Sparkles size={13} className="text-lime" />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Deep Dive */}
            <div className="app-details-col">
              
              <div className="app-badge-row">
                <span className="badge-tag-lime-dark">{activeApp.category}</span>
                <span className="mono-tag text-dark-muted">PRODUCTION ARCHITECTURE</span>
              </div>

              <h3 className="app-title editorial-heading text-warm-white">
                {activeApp.name}
              </h3>

              <p className="app-descriptor text-dark-secondary">
                {activeApp.descriptor}
              </p>

              {/* Verified Capabilities */}
              <div className="app-capabilities-block">
                <h4 className="capabilities-title text-warm-white">
                  <Zap size={16} className="text-lime" />
                  Verified Engineering Capabilities
                </h4>

                <div className="capabilities-stack">
                  {activeApp.capabilities.map((cap, idx) => (
                    <div key={idx} className="capability-card">
                      <div className="cap-indicator">
                        <span className="cap-num">0{idx + 1}</span>
                      </div>
                      <div className="cap-body">
                        <h5 className="cap-title text-warm-white">{cap.title}</h5>
                        <p className="cap-desc text-dark-secondary">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="app-tech-container">
                <span className="tech-title text-dark-muted mono-tag">TECHNOLOGY STACK</span>
                <div className="tech-chips-row">
                  {activeApp.stack.map(tech => (
                    <span key={tech} className="tech-chip-dark">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Contextual CTA */}
              <div className="app-cta-row">
                <a 
                  href={`${PERSONAL_INFO.whatsapp}&text=Hi%20Kuldip%2C%20I%20saw%20your%20${activeApp.name}%20mobile%20app%20and%20would%20like%20to%20discuss%20a%20mobile%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lime"
                >
                  <span>Discuss an app like {activeApp.name}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
