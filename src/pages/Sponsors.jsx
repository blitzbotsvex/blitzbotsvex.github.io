import React from 'react';
import { Check, Shield, Download, Mail } from 'lucide-react';

export default function Sponsors({ setCurrentPage }) {
  const tiers = [
    {
      class: 'tier-platinum',
      name: 'Platinum Tier',
      price: '$2,500',
      period: 'yr',
      benefits: [
        'Huge prominent logo on robot chassis',
        'Top logo placement on official jerseys',
        'Live robot demonstration at your HQ',
        'Website, social media, & video feature',
        'Dedicated showcase banner at events'
      ]
    },
    {
      class: 'tier-gold',
      name: 'Gold Tier',
      price: '$1,000',
      period: 'yr',
      benefits: [
        'Large logo placement on robot',
        'Logo printed on official jerseys',
        'Prominent placement on website & banner',
        'Invitation to our season reveal event',
        'Monthly team progress newsletter'
      ]
    },
    {
      class: 'tier-silver',
      name: 'Silver Tier',
      price: '$500',
      period: 'yr',
      benefits: [
        'Logo placement on robot chassis',
        'Small logo on official jerseys',
        'Logo on our website sponsors grid',
        'Team photograph with seasonal robot'
      ]
    },
    {
      class: 'tier-bronze',
      name: 'Bronze Tier',
      price: '$100',
      period: 'yr',
      benefits: [
        'Name listed on seasonal robot',
        'Name on website sponsor list',
        'Official team thank you certificate'
      ]
    }
  ];

  const currentSponsors = [];

  return (
    <div>
      <h2 className="section-title">OUR SPONSORS</h2>
      <p className="section-subtitle">Fueling Innovation & STEM Access</p>

      {/* Intro Text */}
      <section style={{ maxWidth: '800px', margin: '0 auto 60px auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          As a fully student-run, non-profit organization based in Fremont, CA, BlitzBots relies entirely on the generosity of local businesses and corporate sponsors. Your funding pays for competition registration fees, raw aluminum stock, motors, electronics, and shipping costs.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
          <a
            href="mailto:sponsors@blitzbots.org"
            className="btn btn-primary"
          >
            <Mail size={16} /> Partner With Us
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Sponsorship package PDF download simulated!"); }}
            className="btn btn-secondary"
          >
            <Download size={16} /> Download Package Packet
          </a>
        </div>
      </section>

      {/* Sponsor Packages / Tiers */}
      <section className="sponsor-packages">
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>
          Sponsorship Packages
        </h3>
        
        <div className="tiers-grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`tier-card glass ${tier.class}`}>
              <div>
                <div className="tier-name">{tier.name}</div>
                <div className="tier-price">{tier.price}<span>/{tier.period}</span></div>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <Check size={14} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="btn btn-secondary"
                style={{ width: '100%', padding: '10px' }}
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Inquire
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Logos Grid */}
      <section className="sponsors-showcase">
        <h3>Current Corporate Partners</h3>
        {currentSponsors.length > 0 ? (
          <div className="sponsors-logo-container">
            {currentSponsors.map((sponsor, i) => (
              <div key={i} className="sponsor-logo-card">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>{sponsor.name}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                    {sponsor.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '1.05rem', margin: '20px 0' }}>
            We are currently updating our sponsorship roster for the new season. Contact us to become a partner!
          </p>
        )}
      </section>
    </div>
  );
}
