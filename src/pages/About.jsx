import React from 'react';
import { Cpu, Code, Layers, MessageSquare, Zap, BookOpen, Clock } from 'lucide-react';

export default function About() {
  const subteams = [
    {
      icon: <Layers size={22} />,
      name: 'Mechanical & Build',
      desc: 'Hands-on assembly of the chassis, lifters, intakes, and pneumatic systems. Masters of structural stability, weight distribution, and mechanical efficiency.'
    },
    {
      icon: <Code size={22} />,
      name: 'Programming',
      desc: 'Writing autonomous routines and driver controls in C++ (PROS). Integrating sensor loops (PID, odometry) for flawless execution on the field.'
    },
    {
      icon: <MessageSquare size={22} />,
      name: 'Outreach & Documentation',
      desc: 'Maintaining our rigorous Engineering Notebook (the design logbook), filming reveal videos, raising sponsorships, and planning workshops.'
    }
  ];

  return (
    <div className="about-sections">
      {/* Overview Block */}
      <section className="about-row">
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>WHO WE ARE</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '24px' }}>VEX Robotics Team</p>
          <p>
            Founded in Fremont, California, BlitzBots is a student-run VEX Robotics club dedicated to fostering engineering skill, teamwork, and technical leadership. We compete at regional, state, and world championship levels, showcasing Fremont's brightest minds.
          </p>
          <p>
            Our organization operates like a real engineering firm. From early-stage brainstorming and CAD simulations to rigorous software testing and marketing campaigns, every member learns how to collaborate, problem-solve, and lead.
          </p>
        </div>
        <div className="about-visual glass">
          <div className="map-grid-bg" style={{ opacity: 0.15 }}></div>
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="50" height="50" rx="10" stroke="var(--accent-cyan)" strokeWidth="3" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="18" fill="rgba(0, 242, 254, 0.1)" stroke="var(--accent-blue)" strokeWidth="2" />
            <path d="M 50 20 L 50 35 M 50 65 L 50 80 M 20 50 L 35 50 M 65 50 L 80 50" stroke="var(--accent-cyan)" strokeWidth="2.5" />
            <path d="M 40 45 L 50 35 L 60 45" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="50" r="4" fill="var(--accent-neon)" />
          </svg>
        </div>
      </section>

      {/* Sub-Teams Section */}
      <section>
        <h2 className="section-title">OUR DEPARTMENTS</h2>
        <p className="section-subtitle">Specialized Sub-Teams</p>

        <div className="subteams-grid">
          {subteams.map((sub, i) => (
            <div key={i} className="subteam-card glass">
              <h4>
                <span style={{ color: 'var(--accent-cyan)' }}>{sub.icon}</span>
                {sub.name}
              </h4>
              <p>{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
