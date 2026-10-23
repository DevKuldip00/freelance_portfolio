import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';

export default function Services() {
  const [expandedService, setExpandedService] = useState('business-websites');

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="mono-tag">03 / CAPABILITIES</span>
            <div className="editorial-line" aria-hidden="true"></div>
          </div>
          
          <div className="section-title-wrap">
            <h2 className="section-title editorial-heading">
              Services tailored for ambitious businesses & founders<span className="accent-period">.</span>
            </h2>
            <p className="section-subtitle">
              From foundational business websites that convert regional clients, to sophisticated Flutter mobile applications with cloud and AI integrations.
            </p>
          </div>
        </div>

        {/* Editorial Services List */}
        <div className="services-list-container">
          {SERVICES.map((service) => {
            const isExpanded = expandedService === service.id;
            const whatsappServiceLink = `https://wa.me/919327338336?text=Hi%20Kuldip%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.%20Let's%20discuss.`;

            return (
              <div 
                key={service.id}
                className={`service-item-row ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="service-summary-bar"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedService(isExpanded ? null : service.id);
                    }
                  }}
                >
                  <div className="service-number-col">
                    <span className="service-number">{service.number}</span>
                  </div>

                  <div className="service-title-col">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-headline-preview">{service.headline}</p>
                  </div>

                  <div className="service-badge-col desktop-only">
                    <span className="badge-tag">{service.badge}</span>
                  </div>

                  <div className="service-toggle-col">
                    <span className={`toggle-icon ${isExpanded ? 'rotated' : ''}`} aria-hidden="true">
                      <ChevronRight size={20} />
                    </span>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="service-details-panel">
                    <div className="service-details-grid">
                      
                      <div className="service-desc-box">
                        <p className="service-full-description">
                          {service.description}
                        </p>

                        <div className="service-enquire-action">
                          <a 
                            href={whatsappServiceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            <span>Enquire about {service.title}</span>
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </div>

                      <div className="service-deliverables-box">
                        <span className="mono-tag text-secondary deliverables-label">CORE DELIVERABLES</span>
                        <ul className="service-deliverables-list">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="deliverable-item">
                              <span className="check-bullet">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
