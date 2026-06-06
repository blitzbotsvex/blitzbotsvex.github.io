import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setSubmitted(true);
      // Simulate form submission
      console.log('Submitted message:', formData);
    }
  };

  return (
    <div>
      <h2 className="section-title">CONTACT US</h2>
      <p className="section-subtitle">Get in Touch with Our Team</p>

      <div className="contact-layout">
        {/* Left Panel: Contact info */}
        <div className="contact-info-panel">
          <div className="contact-card glass">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:placeholder@example.com" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>placeholder@example.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Room 000, Placeholder Center<br />123 Placeholder St, Fremont, CA 94539</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={18} />
                </div>
                <div className="contact-text">
                  <h4>Meeting Hours</h4>
                  <p>Days & Times<br />0:00 PM - 0:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive School Campus Map Visual */}
          <div className="map-placeholder">
            <div className="map-grid-bg"></div>
            <div className="map-marker">📍</div>
            <div className="map-text">
              <p>Placeholder Campus Map</p>
              <span>Engineering Building Room 000</span>
            </div>
            {/* Compass ornament */}
            <svg
              style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', height: '40px', opacity: 0.3 }}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="var(--accent-cyan)" strokeWidth="2" />
              <polygon points="50,20 57,47 50,53" fill="var(--accent-cyan)" />
              <polygon points="50,80 57,53 50,47" fill="var(--accent-blue)" />
            </svg>
          </div>
        </div>

        {/* Right Panel: Contact form */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="contact-form glass success-msg">
              <div className="success-icon">
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--accent-neon)' }}>
                Message Transmitted!
              </h3>
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '340px' }}>
                Thank you for reaching out to BlitzBots. Our student leadership team will review your message and reply via email within 48 hours.
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'general', message: '' });
                }}
                style={{ marginTop: '16px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Alex Morgan"
                  style={{ borderColor: errors.name ? 'rgba(255, 79, 79, 0.5)' : '' }}
                />
                {errors.name && <span style={{ color: '#ff4f4f', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@example.com"
                  style={{ borderColor: errors.email ? 'rgba(255, 79, 79, 0.5)' : '' }}
                />
                {errors.email && <span style={{ color: '#ff4f4f', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject of Inquiry</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-muted)',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="sponsorship">Sponsorship & Partnership</option>
                  <option value="academy">Blitz Academy Info</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  style={{ borderColor: errors.message ? 'rgba(255, 79, 79, 0.5)' : '' }}
                ></textarea>
                {errors.message && <span style={{ color: '#ff4f4f', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
