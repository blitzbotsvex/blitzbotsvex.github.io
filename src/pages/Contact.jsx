import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <h2 className="section-title">CONTACT US</h2>
      <p className="section-subtitle">Get in Touch with Our Team</p>

      <div className="contact-layout" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Contact info panel centered */}
        <div className="contact-info-panel" style={{ width: '100%', maxWidth: '500px' }}>
          <div className="contact-card glass">
            <h3>Contact Information</h3>
            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a
                      href="mailto:blitzbotsvexteam@gmail.com"
                      style={{ color: 'var(--text-main)', textDecoration: 'none' }}
                    >
                      blitzbotsvexteam@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>No location at this time</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={18} />
                </div>
                <div className="contact-text">
                  <h4>Meeting Hours</h4>
                  <p>Wednesdays and Saturdays<br />12:00 PM - 3:00 PM</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
