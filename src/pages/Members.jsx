import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Members() {
  const [activeFilter, setActiveFilter] = useState('all');

  const membersData = [
    {
      name: 'Daiwik Shah',
      role: 'Team Captain',
      team: 'Leadership & Builder',
      tag: 'leadership build',
      avatarColor: 'var(--accent-cyan)',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person1@blitzbots.org' }
    },
    {
      name: 'Ishan Garg',
      role: 'Team Captain & Software Lead',
      team: 'Leadership & Programmer',
      tag: 'leadership programming',
      avatarColor: '#00ff87', // Neon green
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person2@blitzbots.org' }
    },
    {
      name: 'Krishna Kandregula',
      role: 'Lead Outreach Coordinator',
      team: 'Outreach',
      tag: 'outreach',
      avatarColor: 'var(--accent-blue)',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person3@blitzbots.org' }
    },
    {
      name: 'Shreyank Kamatala',
      role: 'Build Lead',
      team: 'Builder',
      tag: 'build',
      avatarColor: '#00ff87',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person4@blitzbots.org' }
    },
    {
      name: 'Rohan Dravid',
      role: '',
      team: 'Builder',
      tag: 'build',
      avatarColor: '#f1c40f', // Yellow
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person5@blitzbots.org' }
    },
    {
      name: 'Mithil Levudala',
      role: '',
      team: 'Builder',
      tag: 'build',
      avatarColor: '#00ff87',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person6@blitzbots.org' }
    },
    {
      name: 'Jai Yadav',
      role: '',
      team: 'Builder',
      tag: 'build',
      avatarColor: '#00ff87',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person6@blitzbots.org' }
    },
    {
      name: 'Ritik Pradhan',
      role: '',
      team: 'Programmer',
      tag: 'programming',
      avatarColor: '#00ff87',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person7@blitzbots.org' }
    },
    {
      name: 'Kavish Gupta',
      role: '',
      team: 'Outreach',
      tag: 'outreach',
      avatarColor: '#f1c40f',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person8@blitzbots.org' }
    },
    {
      name: 'Parthiv Sreejayan',
      role: '',
      team: 'Outreach',
      tag: 'outreach',
      avatarColor: '#f1c40f',
      bio: '',
      socials: { github: '#', linkedin: '#', email: 'person8@blitzbots.org' }
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Members' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'build', label: 'Build' },
    { id: 'programming', label: 'Programming' },
    { id: 'outreach', label: 'Outreach' }
  ];

  const filteredMembers = activeFilter === 'all'
    ? membersData
    : membersData.filter(m => m.tag.includes(activeFilter) || (activeFilter === 'leadership' && m.role.includes('Captain') || m.role.includes('VP')));

  return (
    <div>
      <h2 className="section-title">MEET OUR TEAM</h2>
      <p className="section-subtitle">Board & Engineers</p>

      {/* Roster Filter */}
      <div className="filters-container">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            className={`filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Roster Grid */}
      <div className="members-grid">
        {filteredMembers.map((member, i) => (
          <div key={i} className="member-card glass">
            <div className="member-photo-container">
              {/* Premium custom Vector Avatar instead of image placeholders */}
              <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ padding: '24px' }}>
                <circle cx="60" cy="60" r="50" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border-muted)" strokeWidth="1" />
                <path d="M 60 75 C 75 75 90 82 92 90 C 80 98 60 98 60 98 C 60 98 40 98 28 90 C 30 82 45 75 60 75 Z" fill={member.avatarColor} opacity="0.8" />
                <circle cx="60" cy="48" r="16" fill={member.avatarColor} />
                <circle cx="60" cy="60" r="40" stroke={member.avatarColor} strokeWidth="1.5" strokeDasharray="3 6" opacity="0.5" />
              </svg>
            </div>
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <div className="member-team">{member.team}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px', minHeight: '44px' }}>
                {member.bio}
              </p>

              {/* <div className="member-socials"> */}
              {/*   <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="member-social-link" aria-label="GitHub"> */}
              {/*     <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> */}
              {/*   </a> */}
              {/*   <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="member-social-link" aria-label="LinkedIn"> */}
              {/*     <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> */}
              {/*   </a> */}
              {/*   <a href={`mailto:${member.socials.email}`} className="member-social-link" aria-label="Email"> */}
              {/*     <Mail size={18} /> */}
              {/*   </a> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
