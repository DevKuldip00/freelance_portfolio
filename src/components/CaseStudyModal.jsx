import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-meta-row">
            <span className="badge-tag">{project.category}</span>
            <span className="mono-tag">PROJECT {project.number || 'SPEC'}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close project details modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          
          <h2 id="modalTitle" className="modal-title editorial-heading">
            {project.name}
          </h2>
          <p className="modal-tagline">{project.tagline}</p>

          {/* Project Preview Image */}
          <div className="modal-image-wrapper">
            <img 
              src={project.image} 
              alt={`${project.name} showcase`} 
              className="modal-image"
              loading="lazy"
            />
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-live-floating-btn btn btn-lime"
              >
                <span>Visit Live Site</span>
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          {/* Summary */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Globe size={18} className="text-secondary" />
              Project Overview
            </h3>
            <p className="modal-text">{project.summary}</p>
          </div>

          {/* Highlights & Verified Features */}
          {project.highlights && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} className="text-lime" />
                Verified Key Capabilities & Deliverables
              </h3>
              <ul className="modal-features-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <span className="check-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture & Tech Stack */}
          {project.architecture && (
            <div className="modal-section modal-tech-section">
              <h3 className="modal-section-title">
                <Cpu size={18} className="text-secondary" />
                Engineering & Architecture
              </h3>
              <div className="modal-arch-grid">
                <div className="arch-card">
                  <span className="arch-label">Role</span>
                  <span className="arch-value">{project.architecture.role}</span>
                </div>
                <div className="arch-card">
                  <span className="arch-label">Strategic Focus</span>
                  <span className="arch-value">{project.architecture.focus}</span>
                </div>
              </div>
              <div className="tech-tags-wrap mt-3">
                {project.architecture.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Direct CTA */}
          {project.liveUrl && (
            <div className="modal-footer-cta">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary w-100"
              >
                <span>Open {project.name} Live in New Tab</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
