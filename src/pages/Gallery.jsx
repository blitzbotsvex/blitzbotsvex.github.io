import React, { useState } from 'react';
import { Camera, X, Layers, Cpu, Users } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Blitz-6 Chassis CAD',
      category: 'robots',
      svgType: 'cad',
      desc: '3D model assembly showing double-reverse four-bar linkage and pneumatics integration.'
    },
    {
      id: 2,
      title: 'Season Reveal Reveal Photo',
      category: 'robots',
      svgType: 'reveal',
      desc: 'First profile photoshoot of Blitz-6 ready for VEX competition.'
    },
    {
      id: 3,
      title: 'California State Championship',
      category: 'competitions',
      svgType: 'trophy',
      desc: 'Team members receiving the Excellence Award at the California State Finals.'
    },
    {
      id: 4,
      title: 'VEX Worlds Alliance Matches',
      category: 'competitions',
      svgType: 'match',
      desc: 'Alliance coordination discussions before high-stakes match in Dallas, Texas.'
    },
    {
      id: 5,
      title: 'Gael Force Invitational Workshop',
      category: 'workshops',
      svgType: 'workshop',
      desc: 'Collaborative workshop hosted in Dublin High School room Q12.'
    },
    {
      id: 6,
      title: 'STEM Outreach at Fallon Middle School',
      category: 'workshops',
      svgType: 'outreach',
      desc: 'Mentoring young students on clawbot assembly and drivetrain principles.'
    }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Helper function to render a custom SVG representing each gallery slide
  const renderSVGImage = (type, inLightbox = false) => {
    const strokeWidth = inLightbox ? 2 : 1.5;
    switch (type) {
      case 'cad':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#0d0f14" />
            <path d="M 0 0 L 400 300 M 0 300 L 400 0" stroke="rgba(0, 242, 254, 0.05)" strokeWidth="1" />
            <circle cx="200" cy="150" r="100" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} opacity="0.3" />
            <circle cx="200" cy="150" r="60" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} strokeDasharray="5 5" />
            <rect x="150" y="120" width="100" height="60" rx="4" stroke="var(--accent-blue)" strokeWidth={strokeWidth + 1} fill="rgba(79, 172, 254, 0.1)" />
            <line x1="200" y1="120" x2="200" y2="180" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} />
            <line x1="150" y1="150" x2="250" y2="150" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} />
            <circle cx="200" cy="150" r="8" fill="var(--accent-neon)" />
            <text x="20" y="280" fill="var(--text-muted)" fontFamily="monospace" fontSize="10">BLITZ_6_DR4B_MODEL.step</text>
            <text x="320" y="40" fill="var(--accent-cyan)" fontFamily="monospace" fontSize="12">CAD VIEW</text>
          </svg>
        );
      case 'reveal':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#121620" />
            <circle cx="200" cy="130" r="80" fill="radial-gradient(circle, rgba(0,242,254,0.2) 0%, transparent 60%)" />
            {/* Robot silhouette */}
            <path d="M 140 220 L 160 110 L 240 110 L 260 220 Z" fill="var(--bg-tertiary)" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} />
            <line x1="160" y1="110" x2="240" y2="110" stroke="var(--accent-neon)" strokeWidth={strokeWidth + 2} />
            <circle cx="160" cy="220" r="14" fill="#0d0f14" stroke="var(--accent-blue)" strokeWidth="2" />
            <circle cx="240" cy="220" r="14" fill="#0d0f14" stroke="var(--accent-blue)" strokeWidth="2" />
            <text x="165" y="160" fill="var(--text-muted)" fontSize="14" fontFamily="sans-serif" fontWeight="bold">BLITZ v6</text>
          </svg>
        );
      case 'trophy':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#0b0e14" />
            <path d="M 200 50 L 230 110 L 290 110 L 245 150 L 265 210 L 200 175 L 135 210 L 155 150 L 110 110 L 170 110 Z" fill="rgba(241, 196, 15, 0.15)" stroke="#f1c40f" strokeWidth={strokeWidth + 1} />
            <circle cx="200" cy="135" r="30" fill="none" stroke="var(--accent-cyan)" strokeWidth={strokeWidth} strokeDasharray="3 3" />
            <text x="200" y="260" fill="var(--text-main)" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">STATE EXCELLENCE AWARD</text>
          </svg>
        );
      case 'match':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#0a0c10" />
            {/* Field Grid */}
            <line x1="80" y1="50" x2="320" y2="50" stroke="var(--border-muted)" strokeWidth="1" />
            <line x1="80" y1="150" x2="320" y2="150" stroke="var(--accent-blue)" strokeWidth="2" />
            <line x1="80" y1="250" x2="320" y2="250" stroke="var(--border-muted)" strokeWidth="1" />
            <line x1="80" y1="50" x2="80" y2="250" stroke="var(--border-muted)" strokeWidth="1" />
            <line x1="200" y1="50" x2="200" y2="250" stroke="var(--border-muted)" strokeWidth="1" />
            <line x1="320" y1="50" x2="320" y2="250" stroke="var(--border-muted)" strokeWidth="1" />
            {/* Robot markers */}
            <circle cx="120" cy="100" r="10" fill="rgba(0, 242, 254, 0.6)" stroke="var(--accent-cyan)" strokeWidth="1.5" />
            <circle cx="280" cy="200" r="10" fill="rgba(255, 132, 132, 0.6)" stroke="#ff4f4f" strokeWidth="1.5" />
            <text x="200" y="30" fill="var(--text-muted)" fontSize="12" fontFamily="sans-serif" textAnchor="middle">FIELD STRATEGY PLANNER</text>
          </svg>
        );
      case 'workshop':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#1b2030" />
            <rect x="60" y="80" width="280" height="140" rx="10" fill="#121620" stroke="var(--border-muted)" strokeWidth="2" />
            <line x1="60" y1="150" x2="340" y2="150" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            {/* Virtual classroom blocks */}
            <rect x="80" y="100" width="60" height="35" rx="4" fill="rgba(0,255,135,0.08)" stroke="var(--accent-neon)" strokeWidth="1.5" />
            <rect x="170" y="100" width="60" height="35" rx="4" fill="rgba(0,242,254,0.08)" stroke="var(--accent-cyan)" strokeWidth="1.5" />
            <rect x="260" y="100" width="60" height="35" rx="4" fill="rgba(79,172,254,0.08)" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <text x="200" y="200" fill="var(--text-main)" fontSize="13" fontFamily="sans-serif" textAnchor="middle">DUBLIN HIGH ROOM Q12 LAB</text>
          </svg>
        );
      case 'outreach':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#0d0f14" />
            <circle cx="200" cy="120" r="50" stroke="var(--accent-cyan)" strokeWidth="2" />
            <circle cx="120" cy="180" r="30" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <circle cx="280" cy="180" r="30" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <line x1="150" y1="160" x2="175" y2="140" stroke="var(--accent-neon)" strokeWidth="2" />
            <line x1="250" y1="160" x2="225" y2="140" stroke="var(--accent-neon)" strokeWidth="2" />
            <text x="200" y="250" fill="var(--text-muted)" fontSize="13" fontFamily="sans-serif" textAnchor="middle">MENTORING MIDDLE SCHOOL CLUBS</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="section-title">MEDIA GALLERY</h2>
      <p className="section-subtitle">BlitzBots in Action</p>

      {/* Gallery Filter */}
      <div className="filters-container">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Media
        </button>
        <button
          className={`filter-btn ${filter === 'robots' ? 'active' : ''}`}
          onClick={() => setFilter('robots')}
        >
          Robots & CAD
        </button>
        <button
          className={`filter-btn ${filter === 'competitions' ? 'active' : ''}`}
          onClick={() => setFilter('competitions')}
        >
          Competitions
        </button>
        <button
          className={`filter-btn ${filter === 'workshops' ? 'active' : ''}`}
          onClick={() => setFilter('workshops')}
        >
          Workshops & Outreach
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setActiveItem(item)}
          >
            {renderSVGImage(item.svgType, false)}
            <div className="gallery-overlay">
              <span className="gallery-item-tag">{item.category}</span>
              <h3 className="gallery-item-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox modal */}
      {activeItem && (
        <div className="lightbox" onClick={() => setActiveItem(null)}>
          <button className="lightbox-close" onClick={() => setActiveItem(null)} aria-label="Close Lightbox">
            <X />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
              {renderSVGImage(activeItem.svgType, true)}
            </div>
            <div className="lightbox-caption">
              <span style={{ color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
                {activeItem.category}
              </span>
              <h3 style={{ margin: '6px 0', color: 'var(--text-main)', fontSize: '1.6rem' }}>{activeItem.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>{activeItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
