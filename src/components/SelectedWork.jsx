import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Eye } from 'lucide-react';
import { WEB_PROJECTS } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const bsfGym = WEB_PROJECTS.find(p => p.id === 'bsf-gym');
  const drKunj = WEB_PROJECTS.find(p => p.id === 'dr-kunj');
  const balaji = WEB_PROJECTS.find(p => p.id === 'balaji-interior');
  const shivam = WEB_PROJECTS.find(p => p.id === 'shivam-sales');

  return (
    <section className="work-section section-padding" id="work">
      <div className="container">
        
        {/* Section Editorial Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="mono-tag">01 / SELECTED WORK</span>
            <div className="editorial-line" aria-hidden="true"></div>
          </div>
          
          <div className="section-title-wrap">
            <h2 className="section-title editorial-heading">
              Websites crafted for impact & conversion<span className="accent-period">.</span>
            </h2>
            <p className="section-subtitle">
              Every project is custom-designed and engineered with intention—combining clean editorial aesthetics with real business purpose.
            </p>
          </div>
        </div>

        {/* Asymmetric Project Grid */}
        <div className="asymmetric-work-grid">
          
          {/* 1. LARGE FEATURED PROJECT: BSF THE GYM */}
          {bsfGym && (
            <article className="project-card project-card-featured" id="project-bsf">
              <div className="project-visual-frame" onClick={() => setActiveModalProject(bsfGym)}>
                <img 
                  src={bsfGym.image} 
                  alt="BSF THE GYM high-performance fitness website preview" 
                  className="project-preview-img"
                  loading="lazy"
                />
                <div className="project-frame-overlay">
                  <div className="overlay-badge">
                    <Eye size={14} />
                    <span>View Case Study</span>
                  </div>
                </div>
                <div className="live-indicator-badge">
                  <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
                  <span>LIVE PRODUCTION</span>
                </div>
              </div>

              <div className="project-info-panel">
                <div className="project-meta-top">
                  <span className="project-number">{bsfGym.number}</span>
                  <span className="badge-tag">{bsfGym.category}</span>
                </div>

                <h3 className="project-title editorial-heading">
                  <a 
                    href={bsfGym.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    {bsfGym.name}
                  </a>
                </h3>

                <p className="project-description">
                  {bsfGym.summary}
                </p>

                <div className="project-tags-row">
                  {bsfGym.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions-row">
                  <a 
                    href={bsfGym.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    aria-label={`Visit live site for ${bsfGym.name}`}
                  >
                    <span>Visit live site</span>
                    <ArrowUpRight size={16} />
                  </a>
                  
                  <button 
                    type="button" 
                    onClick={() => setActiveModalProject(bsfGym)}
                    className="btn btn-secondary"
                  >
                    <span>Case study</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* TWO MEDIUM PROJECTS: DR KUNJ & BALAJI INTERIOR */}
          <div className="medium-projects-row">
            
            {/* 2. DR KUNJ PATEL */}
            {drKunj && (
              <article className="project-card project-card-medium" id="project-drkunj">
                <div className="project-visual-frame" onClick={() => setActiveModalProject(drKunj)}>
                  <img 
                    src={drKunj.image} 
                    alt="Dr. Kunj Patel Clinical Dermatology website preview" 
                    className="project-preview-img"
                    loading="lazy"
                  />
                  <div className="project-frame-overlay">
                    <div className="overlay-badge">
                      <Eye size={14} />
                      <span>View Case Study</span>
                    </div>
                  </div>
                  <div className="live-indicator-badge">
                    <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
                    <span>LIVE PRODUCTION</span>
                  </div>
                </div>

                <div className="project-info-panel">
                  <div className="project-meta-top">
                    <span className="project-number">{drKunj.number}</span>
                    <span className="badge-tag">{drKunj.category}</span>
                  </div>

                  <h3 className="project-title-medium">
                    <a 
                      href={drKunj.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {drKunj.name}
                    </a>
                  </h3>

                  <p className="project-description">
                    {drKunj.summary}
                  </p>

                  <div className="project-tags-row">
                    {drKunj.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    <a 
                      href={drKunj.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      <span>Visit live site</span>
                      <ArrowUpRight size={15} />
                    </a>
                    <button 
                      type="button" 
                      onClick={() => setActiveModalProject(drKunj)}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </article>
            )}

            {/* 3. BALAJI INTERIOR DESIGNER */}
            {balaji && (
              <article className="project-card project-card-medium" id="project-balaji">
                <div className="project-visual-frame" onClick={() => setActiveModalProject(balaji)}>
                  <img 
                    src={balaji.image} 
                    alt="Balaji Interior Designer studio website preview" 
                    className="project-preview-img"
                    loading="lazy"
                  />
                  <div className="project-frame-overlay">
                    <div className="overlay-badge">
                      <Eye size={14} />
                      <span>View Case Study</span>
                    </div>
                  </div>
                  <div className="live-indicator-badge">
                    <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
                    <span>LIVE PRODUCTION</span>
                  </div>
                </div>

                <div className="project-info-panel">
                  <div className="project-meta-top">
                    <span className="project-number">{balaji.number}</span>
                    <span className="badge-tag">{balaji.category}</span>
                  </div>

                  <h3 className="project-title-medium">
                    <a 
                      href={balaji.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {balaji.name}
                    </a>
                  </h3>

                  <p className="project-description">
                    {balaji.summary}
                  </p>

                  <div className="project-tags-row">
                    {balaji.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    <a 
                      href={balaji.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      <span>Visit live site</span>
                      <ArrowUpRight size={15} />
                    </a>
                    <button 
                      type="button" 
                      onClick={() => setActiveModalProject(balaji)}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </article>
            )}

          </div>

          {/* 4. FULL-WIDTH DISTINCTIVE PROJECT: SHIVAM SALES & FURNITURE */}
          {shivam && (
            <article className="project-card project-card-full" id="project-shivam">
              <div className="project-full-grid">
                
                <div className="project-full-visual" onClick={() => setActiveModalProject(shivam)}>
                  <img 
                    src={shivam.image} 
                    alt="Shivam Sales & Furniture showroom website preview" 
                    className="project-preview-img"
                    loading="lazy"
                  />
                  <div className="project-frame-overlay">
                    <div className="overlay-badge">
                      <Eye size={14} />
                      <span>View Case Study</span>
                    </div>
                  </div>
                  <div className="live-indicator-badge">
                    <span className="pulse-dot pulse-lime" aria-hidden="true"></span>
                    <span>LIVE PRODUCTION</span>
                  </div>
                </div>

                <div className="project-full-content">
                  <div className="project-meta-top">
                    <span className="project-number">{shivam.number}</span>
                    <span className="badge-tag">{shivam.category}</span>
                  </div>

                  <h3 className="project-title editorial-heading">
                    <a 
                      href={shivam.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {shivam.name}
                    </a>
                  </h3>

                  <p className="project-tagline-text">{shivam.tagline}</p>

                  <p className="project-description">
                    {shivam.summary}
                  </p>

                  <div className="highlights-list">
                    {shivam.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="highlight-pill">
                        <span className="check-bullet">✓</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tags-row mt-4">
                    {shivam.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions-row mt-4">
                    <a 
                      href={shivam.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      <span>Visit live site</span>
                      <ArrowUpRight size={16} />
                    </a>
                    <button 
                      type="button" 
                      onClick={() => setActiveModalProject(shivam)}
                      className="btn btn-secondary"
                    >
                      <span>Detailed Case Study</span>
                    </button>
                  </div>
                </div>

              </div>
            </article>
          )}

        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </section>
  );
}
