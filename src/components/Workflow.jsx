import React from 'react';
import { WORKFLOW_STAGES } from '../data/portfolioData';

export default function Workflow() {
  return (
    <section className="workflow-section section-padding" id="workflow">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="mono-tag">05 / PROCESS</span>
            <div className="editorial-line" aria-hidden="true"></div>
          </div>
          
          <div className="section-title-wrap">
            <h2 className="section-title editorial-heading">
              A structured approach from concept to deployment<span className="accent-period">.</span>
            </h2>
            <p className="section-subtitle">
              How I collaborate with clients to turn goals and requirements into polished, dependable digital solutions.
            </p>
          </div>
        </div>

        {/* 4 Stages Grid */}
        <div className="workflow-grid">
          {WORKFLOW_STAGES.map((stage) => (
            <div key={stage.step} className="workflow-stage-card">
              
              <div className="stage-top-bar">
                <span className="stage-step-num">{stage.step}</span>
                <span className="stage-dot" aria-hidden="true"></span>
              </div>

              <h3 className="stage-title">{stage.title}</h3>
              <span className="stage-subtitle">{stage.subtitle}</span>

              <p className="stage-description">
                {stage.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
