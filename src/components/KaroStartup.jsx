import React from 'react';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';
import './KaroStartup.css';

const STATS = [
  { num: '5,000+', label: 'Startup Stories Published' },
  { num: '2M+',    label: 'Community Members' },
  { num: '5+ Yrs', label: 'Building the Ecosystem' },
  { num: '28+',    label: 'States Covered' },
];

const FEATURES = [
  { icon: '📰', title: 'Startup Media Platform',  sub: 'Thousands of founder stories published across India' },
  { icon: '🤝', title: 'Founder Community',        sub: '2M+ entrepreneurs, investors & builders connected' },
  { icon: '🚀', title: 'Karo Pitch Initiative',    sub: 'Direct funding access for early-stage founders across Bharat' },
];

const SOCIALS = [
  { label: '▣ Instagram', href: 'https://www.instagram.com/karo_startup_/' },
  { label: 'in LinkedIn', href: 'https://www.linkedin.com/company/karo-startup/' },
  { label: '𝕏 Twitter',  href: 'https://x.com/karo_startup' },
  { label: '▶ YouTube',  href: 'https://www.youtube.com/@karostartup/videos' },
  { label: 'f Facebook', href: 'https://www.facebook.com/karostartup' },
];

export default function KaroStartup() {
  const ref = useScrollRevealGroup();
  return (
    <section className="section bg-white" id="karostartup" ref={ref}>
      <div className="container ks-grid">

        {/* Left */}
        <div className="ks-left reveal">
          <span className="tag">About KaroStartup</span>
          <h2 className="sec-h">
            India's Largest{' '}
            <span style={{ color: 'var(--blue)' }}>Startup Storytelling</span> Platform
          </h2>
          <p className="sec-sub">
            Founded over 5 years ago, KaroStartup has grown into one of India's most
            trusted startup media platforms — publishing thousands of founder stories from
            every corner of Bharat and building a community of 2 million+ entrepreneurs,
            investors and ecosystem builders.
          </p>
          <p className="sec-sub" style={{ marginTop: 12 }}>
            Karo Pitch is the next step in that mission — moving beyond storytelling to
            actively helping founders access investors, raise funding, and scale.
          </p>

          <div className="ks-stats">
            {STATS.map((s, i) => (
              <div key={s.label} className={`ks-stat reveal ${i > 0 ? `delay-${i}` : ''}`}>
                <div className="ks-stat-num">{s.num}</div>
                <div className="ks-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="ks-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ks-soc">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — dark quote card */}
        <div className="reveal delay-1">
          <div className="ks-quote-card">
            <div className="ks-quote-mark">"</div>
            <p className="ks-quote-text">
              The best startups in India aren't always in Bangalore. They're in Varanasi,
              in Surat, in Coimbatore. Karo Pitch exists to find them before anyone else
              does — and give them the stage they deserve.
            </p>
            <div className="ks-author">
              <div className="ks-author-av">KS</div>
              <div>
                <div className="ks-author-name">Team KaroStartup</div>
                <div className="ks-author-role">Founders of KaroStartup &amp; Karo Pitch</div>
              </div>
            </div>
            <div className="ks-features">
              {FEATURES.map(f => (
                <div key={f.title} className="ks-feat">
                  <span className="ks-feat-icon">{f.icon}</span>
                  <div>
                    <div className="ks-feat-title">{f.title}</div>
                    <div className="ks-feat-sub">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ks-visit">
              <a href="https://karostartup.com" target="_blank" rel="noopener noreferrer">
                Visit karostartup.com →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
