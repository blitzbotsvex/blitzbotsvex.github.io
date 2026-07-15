import React from 'react';
import { Award, Shield, Users, Zap, ArrowRight } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  const stats = [
    // { num: '6+', label: 'Years Competing' },
    // { num: '12', label: 'Championship Banners' },
    // { num: '35+', label: 'Active Members' },
    // { num: '4', label: 'Teams (A, B, C, X)' }
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Precision Build',
      desc: 'Engineered for speed, stability, and high performance. We combine advanced mechanics with robust CAD modeling to construct agile robots capable of handling complex challenges with absolute accuracy.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Advanced Control',
      desc: 'Powering our hardware with intelligent automation. Through seamless sensor integration, computer vision, and optimized code, we give our bots the autonomy to think fast and react faster.'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Outreach',
      desc: 'Sparking a passion for STEM in the next generation. From local workshops to collaborative mentoring, the Blitzbots are dedicated to expanding access to technology and building a brighter future.'
    }
  ];

  const handleCTA = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <div style={{ width: '40px', height: '3px', backgroundColor: '#e67e22', marginBottom: '16px' }}></div>
          <div style={{ color: '#e67e22', letterSpacing: '2px', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            VEX ROBOTICS TEAM 21136D
          </div>
          <h1 className="hero-title" style={{ fontSize: '4.8rem', fontWeight: '800', color: '#fff', textShadow: '0 0 25px rgba(0, 242, 254, 0.45)', marginBottom: '24px', lineHeight: '1.05' }}>
            BLITZ BOTS
          </h1>
          <p className="hero-desc" style={{ fontSize: '1.15rem', color: '#f3f4f6', lineHeight: '1.7', marginBottom: '36px', maxWidth: '560px' }}>
            Blitz Bots is a student-run robotics team based in Fremont that combines advanced mechanical design with intelligent autonomous programming to build fast, adaptable robots. We foster a diverse, inclusive, and welcoming community for students interested in STEM, personal growth, or simply having fun.
          </p>
          <div className="hero-actions">
            <button className="btn" style={{ backgroundColor: '#e67e22', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px 28px' }} onClick={() => handleCTA('contact')}>
              Apply to Team
            </button>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="graphic-glow-bg"></div>
          <img
            src="/robot.png"
            alt="BlitzBots VEX Robot"
            className="robot-illustration"
            style={{
              zIndex: 2,
              width: '100%',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)'
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-container">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card glass">
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Engineering Features Section */}
      <section style={{ margin: '80px 0 40px 0' }}>
        <h2 className="section-title">BUILT FOR SPEED. ENGINEERED TO WIN.</h2>
        <p className="section-subtitle">Our Development Pillars</p>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card glass">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
