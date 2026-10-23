import React, { useState } from 'react';
import { MessageSquare, Mail, Send, ArrowUpRight, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Business Website',
    budget: 'Flexible / To Be Discussed',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name or company name.';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Please provide an email address or WhatsApp phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief description of what you are looking to build (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#C7FF4D', '#FFFFFF', '#A6DE24']
      });
    } catch {
      // safe fallback
    }

    // Prepare mailto direct action link as fallback so user can send instantly
    const subject = encodeURIComponent(`Project Enquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Open default email client after confirmation
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section className="contact-section section-padding dark-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial dark-header">
          <div className="section-label-group">
            <span className="mono-tag text-lime">06 / LET'S TALK</span>
            <div className="editorial-line dark-line" aria-hidden="true"></div>
          </div>
          
          <div className="contact-headline-box">
            <h2 className="contact-main-heading editorial-heading text-warm-white">
              Have an idea worth building<span className="accent-period">?</span>
            </h2>
            <p className="contact-subtext text-dark-secondary">
              Tell me what you're working on. Let's figure out the right digital solution for your business.
            </p>
          </div>
        </div>

        {/* Contact Split Grid */}
        <div className="contact-split-grid">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="contact-direct-col">
            
            <div className="direct-cta-card">
              <span className="mono-tag text-lime">FASTEST RESPONSE</span>
              <h3 className="direct-card-title text-warm-white">WhatsApp Direct Chat</h3>
              <p className="direct-card-desc text-dark-secondary">
                For quick consultations, project timelines, and preliminary scope discussions.
              </p>
              
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime w-100 mt-3"
              >
                <MessageSquare size={18} />
                <span>Start a conversation on WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="whatsapp-number-badge">
                <span>Direct WhatsApp: {PERSONAL_INFO.phoneFormatted}</span>
              </div>
            </div>

            {/* Additional Direct Channels */}
            <div className="contact-channels-list">
              
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="channel-link-card"
                aria-label="Send email to Kuldipsinh"
              >
                <div className="channel-icon">
                  <Mail size={20} className="text-lime" />
                </div>
                <div className="channel-info">
                  <span className="channel-label text-dark-muted">EMAIL DIRECT</span>
                  <span className="channel-value text-warm-white">{PERSONAL_INFO.email}</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link-card"
                aria-label="Connect on LinkedIn"
              >
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-label text-dark-muted">LINKEDIN</span>
                  <span className="channel-value text-warm-white">linkedin.com/in/kuldip-sodhaparmar</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              <div className="channel-link-card non-interactive">
                <div className="channel-icon">
                  <Phone size={20} className="text-lime" />
                </div>
                <div className="channel-info">
                  <span className="channel-label text-dark-muted">PHONE (CALLS / WHATSAPP)</span>
                  <span className="channel-value text-warm-white">{PERSONAL_INFO.phoneFormatted}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Structured Project Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              
              <div className="form-card-header">
                <h3 className="form-card-title text-warm-white">Send a Project Brief</h3>
                <p className="form-card-subtitle text-dark-secondary">
                  Fill in your details below. I will reply within 24 hours with ideas and next steps.
                </p>
              </div>

              {submitted ? (
                <div className="form-success-state" role="alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={40} className="text-lime" />
                  </div>
                  <h4 className="success-heading text-warm-white">Thank you, {formData.name}!</h4>
                  <p className="success-msg text-dark-secondary">
                    Your brief has been prepared. Your default mail client was triggered. You can also message me directly on WhatsApp for an immediate response.
                  </p>
                  <a 
                    href={PERSONAL_INFO.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-lime mt-4"
                  >
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button 
                    type="button" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        contact: '',
                        projectType: 'Business Website',
                        budget: 'Flexible / To Be Discussed',
                        message: ''
                      });
                    }}
                    className="btn btn-outline-dark mt-2"
                  >
                    <span>Submit another brief</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="project-brief-form">
                  
                  {/* Name */}
                  <div className="form-field">
                    <label htmlFor="name" className="field-label text-warm-white">
                      Your Name or Business <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anand Clinic / Rahul Sharma"
                      className={`form-input-dark ${errors.name ? 'has-error' : ''}`}
                      autoComplete="name"
                      required
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  {/* Contact */}
                  <div className="form-field">
                    <label htmlFor="contact" className="field-label text-warm-white">
                      Email or WhatsApp Number <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com or +91 98765 43210"
                      className={`form-input-dark ${errors.contact ? 'has-error' : ''}`}
                      autoComplete="email"
                      required
                    />
                    {errors.contact && <span className="field-error-msg">{errors.contact}</span>}
                  </div>

                  {/* Project Type */}
                  <div className="form-field">
                    <label htmlFor="projectType" className="field-label text-warm-white">
                      What are you looking to build?
                    </label>
                    <select 
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select-dark"
                    >
                      <option value="Business Website">Business & Brand Website</option>
                      <option value="Landing Page / Redesign">High-Converting Landing Page / Redesign</option>
                      <option value="Mobile App (Flutter)">Mobile Application (Flutter / Android / iOS)</option>
                      <option value="AI-Powered Application">AI-Powered App / Gemini Integration</option>
                      <option value="UI/UX Consultation">UI/UX & Design Consultation</option>
                      <option value="Other / Custom">Other Custom Digital Product</option>
                    </select>
                  </div>

                  {/* Budget (Optional) */}
                  <div className="form-field">
                    <label htmlFor="budget" className="field-label text-warm-white">
                      Estimated Budget Range <span className="text-dark-muted">(Optional)</span>
                    </label>
                    <select 
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select-dark"
                    >
                      <option value="Flexible / To Be Discussed">Flexible / Need consultation</option>
                      <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000 (Starter Website)</option>
                      <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000 (Custom Business Website)</option>
                      <option value="₹75,000 – ₹1,50,000+">₹75,000 – ₹1,50,000+ (Mobile App / Custom System)</option>
                      <option value="International Scope">International / Enterprise Scope</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="form-field">
                    <label htmlFor="message" className="field-label text-warm-white">
                      Project Details <span className="req-star">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does and what you'd like to achieve..."
                      className={`form-textarea-dark ${errors.message ? 'has-error' : ''}`}
                      required
                    ></textarea>
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit" 
                    className="btn btn-lime w-100 btn-submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Sending brief...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>

                  <p className="form-privacy-note text-dark-muted">
                    No spam ever. Direct one-on-one communication with Kuldipsinh.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
