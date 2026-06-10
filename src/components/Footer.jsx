import React from 'react';
import { Cpu, Mail } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleLinkClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container" style={{ marginBottom: '16px' }} onClick={() => handleLinkClick('home')}>
            <div className="logo-mark" style={{ background: 'none', boxShadow: 'none', width: '42px', height: '42px', overflow: 'hidden' }}>
              <img src="/logo.png" alt="BlitzBots Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className="logo-text">
              BLITZ<span>BOTS</span>
            </div>
          </div>
          <p>
            Student-run VEX Robotics team based in Fremont, CA. Empowering the next generation of engineers, builders, and innovators.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="mailto:contact@blitzbots.org" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a onClick={() => handleLinkClick('home')}>Home</a></li>
            <li><a onClick={() => handleLinkClick('about')}>About</a></li>
            <li><a onClick={() => handleLinkClick('members')}>Members</a></li>
            <li><a onClick={() => handleLinkClick('gallery')}>Gallery</a></li>
            <li><a onClick={() => handleLinkClick('sponsors')}>Sponsors</a></li>
            <li><a onClick={() => handleLinkClick('contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>VEX Resources</h4>
          <ul>
            <li><a href="https://www.robotevents.com" target="_blank" rel="noopener noreferrer">RobotEvents</a></li>
            <li><a href="https://www.vexrobotics.com" target="_blank" rel="noopener noreferrer">VEX Robotics</a></li>
            <li><a href="https://vexforum.com" target="_blank" rel="noopener noreferrer">VEX Forum</a></li>
            <li><a href="https://www.fremont.gov/" target="_blank" rel="noopener noreferrer">Fremont, CA Portal</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <p>&copy; {new Date().getFullYear()} BlitzBots Robotics. All rights reserved.</p> */}
        <p>Built by Team BlitzBots</p>
      </div>
    </footer>
  );
}
