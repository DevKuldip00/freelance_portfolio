import React, { useState } from 'react';
import { Compass, CheckCircle2, Terminal, Code2, Database, Smartphone, Sparkles } from 'lucide-react';
import { VERIFIED_TECH_STACK, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mobile', 'Frontend', 'Backend / DB', 'AI & Vision'];

  const filteredTech = activeCategory === 'All' 
    ? VERIFIED_TECH_STACK 
    : VERIFIED_TECH_STACK.filter(t => t.category.includes(activeCategory) || (activeCategory === 'Backend / DB' && (t.category.includes('Backend') || t.category.includes('Database') || t.category.includes('Geospatial'))));

  const principles = [
    {
      title: "Design with a clear purpose",
      desc: "Every visual decision, typography choice, and spacing value exists to communicate clearly and guide the visitor toward action."
    },
    {
      title: "Build responsive experiences",
      desc: "Websites and apps must look impeccable and respond fluidly across mobile phones, tablets, and wide desktop screens."
    },
    {
      title: "Structure applications thoughtfully",
      desc: "Clean MVVM patterns, modular component hierarchy, and predictable state management that make code easy to maintain and scale."
    },
    {
      title: "Integrate APIs & practical AI",
      desc: "Leveraging cloud infrastructure, spatial databases, and Gemini AI APIs to solve genuine user needs without novelty fluff."
    },
    {
      title: "Test & refine before delivery",
      desc: "Rigorous verification of user journeys, form validations, performance benchmarks, and edge cases before handing over."
    }
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="mono-tag">04 / BACKGROUND & PHILOSOPHY</span>
            <div className="editorial-line" aria-hidden="true"></div>
          </div>
          
          <div className="section-title-wrap">
            <h2 className="section-title editorial-heading">
              Good software should look considered and work beautifully<span className="accent-period">.</span>
            </h2>
          </div>
        </div>

        {/* Editorial Profile & Bio Grid */}
        <div className="about-main-grid">
          
          {/* Left Column: Portrait & Studio Spec */}
          <div className="about-portrait-col">
            <div className="portrait-frame">
              <img 
                src="/assets/images/kuldip_portrait.jpg" 
                alt="Kuldipsinh Sodhaparmar — Independent Website & Mobile App Developer"
                className="portrait-image"
                loading="lazy"
              />
              <div className="portrait-badge">
                <span className="mono-tag">KULDIPSINH SODHAPARMAR</span>
                <span className="portrait-role">Independent Digital Craftsman</span>
              </div>
            </div>

            <div className="location-callout">
              <div className="location-dot"></div>
              <div className="location-info">
                <span className="location-region">Gujarat, India</span>
                <span className="location-sub">Collaborating locally and globally</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="about-narrative-col">
            
            <p className="about-lead-text">
              I'm Kuldipsinh, an independent developer focused on building modern websites 
              and mobile applications. I work across visual design, frontend implementation, 
              and application engineering to create digital products that are useful, responsive, 
              and thoughtfully built.
            </p>

            <p className="about-secondary-text">
              Whether building a conversion-focused web presence for a local business in Gujarat, 
              or engineering a cross-platform mobile application with real-time geospatial tracking 
              and AI vision, my focus remains constant: minimal interface complexity, extraordinary detail, 
              and reliable engineering.
            </p>

            {/* Approach Principles */}
            <div className="about-principles-block">
              <h3 className="principles-heading">
                <Compass size={18} className="text-secondary" />
                Core Working Principles
              </h3>

              <div className="principles-grid">
                {principles.map((p, idx) => (
                  <div key={idx} className="principle-item">
                    <div className="principle-number">0{idx + 1}</div>
                    <div className="principle-content">
                      <h4 className="principle-title">{p.title}</h4>
                      <p className="principle-desc">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Verified Technical Stack Interactive Matrix */}
        <div className="tech-matrix-block">
          <div className="tech-matrix-header">
            <div>
              <span className="mono-tag">VERIFIED CREDENTIALS & TECHNOLOGIES</span>
              <h3 className="tech-matrix-title">Tools & Frameworks I Actually Build With</h3>
            </div>
            
            {/* Filter Pills */}
            <div className="tech-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="tech-matrix-grid">
            {filteredTech.map((item) => (
              <div key={item.name} className="tech-matrix-card">
                <div className="tech-card-header">
                  <span className="tech-category-tag">{item.category}</span>
                  <span className="verified-badge" title="Verified by production client projects or mobile apps">
                    <CheckCircle2 size={14} className="text-lime" />
                    <span>Verified</span>
                  </span>
                </div>
                <h4 className="tech-card-name">{item.name}</h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
