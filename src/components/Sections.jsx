import React from 'react';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';
import './Sections.css';

/* ═══════════════════════════════════
   TRUST BAR
═══════════════════════════════════ */
export function TrustBar() {
  const logos = ['YourStory', 'Inc42', 'Startup India', 'Economic Times', 'NASSCOM', 'Entrackr', 'CNBC TV18'];
  return (
    <div className="trust-bar">
      <span className="trust-label">As seen in</span>
      <div className="trust-divider" />
      <div className="trust-logos">
        {logos.map(l => <span key={l} className="trust-logo">{l}</span>)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   ABOUT KARO PITCH
═══════════════════════════════════ */
export function About() {
  const ref = useScrollRevealGroup();

  const pills = [
    { icon: '🇮🇳', label: 'Bharat-First' },
    { icon: '🏙️', label: 'Tier 2 & 3 Cities' },
    { icon: '🤝', label: 'Curated Investors' },
    { icon: '📰', label: 'Media Visibility' },
    { icon: '🚀', label: 'Free to Apply' },
  ];

  return (
    <section className="section bg-white" id="about" ref={ref}>
      <div className="container about-grid">

        <div className="about-text reveal">
          <span className="tag">About Karo Pitch</span>
          <h2 className="sec-h">
            Bharat's Founders Deserve a{' '}
            <span style={{ color: 'var(--blue)' }}>Real Shot</span> at Funding
          </h2>
          <p className="sec-sub">
            Thousands of founders across India are building incredible businesses —
            D2C brands, manufacturing units, consumer apps, SaaS products — but most
            never get in front of the right investors. Karo Pitch bridges this gap.
          </p>
          <p className="sec-sub" style={{ marginTop: 14 }}>
            We connect founders from every corner of India with curated investors through
            structured pitch events, media visibility on KaroStartup, and a growing
            discovery platform — with zero gatekeeping and zero application fee.
          </p>
          <div className="pills">
            {pills.map(p => (
              <span key={p.label} className="pill">
                <span>{p.icon}</span> {p.label}
              </span>
            ))}
          </div>
        </div>

        <div className="about-cards reveal delay-1">
          <div className="a-card">
            <div className="ac-icon">🗺️</div>
            <div className="ac-num" style={{ color: 'var(--blue)' }}>28+</div>
            <div className="ac-label">States Represented</div>
          </div>
          <div className="a-card">
            <div className="ac-icon">🏙️</div>
            <div className="ac-num" style={{ color: 'var(--orange)' }}>72%</div>
            <div className="ac-label">From Tier-2 &amp; Tier-3 Cities</div>
          </div>
          <div className="a-card dark-card">
            <div className="dark-card-row">
              <div>
                <div className="ac-icon">💰</div>
                <div className="ac-num" style={{ color: '#60A5FA' }}>₹12Cr+</div>
                <div className="ac-label" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Total funding facilitated
                </div>
              </div>
              <p className="dark-card-text">
                Startups from Jaipur, Nagpur, Patna, Coimbatore and beyond have raised
                their first cheques and built lasting investor relationships.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════ */
const STEPS = [
  { icon: '📋', num: 1, title: 'Apply with Your Pitch Deck',       desc: 'Fill a short form and upload your pitch deck. Tell us your story, the problem you\'re solving, and your traction.', chip: 'Takes ~10 minutes' },
  { icon: '🔍', num: 2, title: 'Get Shortlisted by KaroStartup',   desc: 'Our team personally reviews every application. Shortlisted founders get coaching, deck feedback, and pitch preparation.', chip: 'Results in 7 days' },
  { icon: '🎤', num: 3, title: 'Pitch Live to Investors',           desc: 'Take the stage — virtual or in-person — and present to a curated room of angels, VCs and family offices.', chip: 'Curated investor room' },
  { icon: '🚀', num: 4, title: 'Raise Funding and Scale',           desc: 'Close investor conversations, get featured on KaroStartup\'s media platform, and grow with our founder community.', chip: 'Media + Community' },
];

export function HowItWorks() {
  const ref = useScrollRevealGroup();
  return (
    <section className="section bg-gray" id="how-it-works" ref={ref}>
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="tag">How It Works</span>
          <h2 className="sec-h">
            From Application to Funding in{' '}
            <span style={{ color: 'var(--blue)' }}>4 Simple Steps</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            A transparent, founder-first process — no gatekeeping, no long waits,
            just a clear path from your idea to investors.
          </p>
        </div>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`step-card reveal ${i > 0 ? `delay-${i}` : ''}`}>
              <div className="step-ring">
                <span className="step-icon">{s.icon}</span>
                <span className="step-badge">{s.num}</span>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              <span className="step-chip">{s.chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════
   WHO CAN APPLY
═══════════════════════════════════ */
const WHO_CARDS = [
  { icon: '🛍️', title: 'D2C Brands',              desc: 'Consumer-facing product companies selling directly online — beauty, food, fashion, home and beyond.' },
  { icon: '📱', title: 'Consumer Startups',        desc: 'Apps and digital platforms built for everyday Indian consumers, solving real problems at scale.' },
  { icon: '🏭', title: 'MSMEs & Manufacturing',    desc: 'Traditional businesses going digital, modernizing with technology, or seeking growth capital.' },
  { icon: '💻', title: 'SaaS Startups',            desc: 'B2B software companies solving real business problems for Indian SMEs, enterprises, or going global.' },
  { icon: '🌾', title: 'Bharat-Focused Startups',  desc: 'Ventures built for Tier-2, Tier-3 and rural India — addressing opportunities metros often overlook.' },
  { icon: '🔬', title: 'Tech & Deep-Tech',          desc: 'AI, hardware, clean energy, agritech and biotech startups solving large-scale problems with impact.' },
];

export function WhoCanApply() {
  const ref = useScrollRevealGroup();
  return (
    <section className="section bg-white" id="who-can-apply" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="tag">Who Can Apply</span>
          <h2 className="sec-h">
            Built for <span style={{ color: 'var(--blue)' }}>Every Kind</span> of Founder
          </h2>
          <p className="sec-sub">
            If you're solving a real problem for Indian customers — whether you're in
            Mumbai or Muzaffarpur — you belong here.
          </p>
        </div>
        <div className="who-grid">
          {WHO_CARDS.map((c, i) => (
            <div key={c.title} className={`who-card reveal ${i % 3 !== 0 ? `delay-${i % 3}` : ''}`}>
              <span className="who-emoji">{c.icon}</span>
              <h3 className="who-title">{c.title}</h3>
              <p className="who-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
