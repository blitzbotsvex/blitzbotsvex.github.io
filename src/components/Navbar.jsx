import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'members', label: 'Members' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header-nav glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => handleNavClick('home')}>
        <div className="logo-mark" style={{ background: 'none', boxShadow: 'none', width: '42px', height: '42px', overflow: 'hidden' }}>
          <img src="/logo.png" alt="BlitzBots Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div className="logo-text">
          BLITZ<span>BOTS</span>
        </div>
      </div>

      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={currentPage === item.id ? 'active' : ''}
            >
              <a onClick={() => handleNavClick(item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '40px 24px',
            borderBottom: '1px solid var(--border-muted)',
            zIndex: 999,
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className={currentPage === item.id ? 'active' : ''}
                style={{ fontSize: '1.2rem' }}
              >
                <a
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    color: currentPage === item.id ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
