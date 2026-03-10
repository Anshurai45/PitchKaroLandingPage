import React from 'react';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';
import './Startups.css';

const STARTUPS = [
  {
    icon: '🌿', bg: '#FEF3C7', stage: 'Seed Stage', stageClass: 'sp-seed',
    name: 'EcoCart', cat: 'D2C · Sustainable Packaging',
    desc: "India's first fully compostable packaging brand helping 400+ D2C businesses reduce plastic waste and cut packaging costs by up to 30%.",
    loc: 'Pune, Maharashtra',
  },
  {
    icon: '🌾', bg: '#DCFCE7', stage: 'Angel Round', stageClass: 'sp-angel',
    name: 'FarmLink', cat: 'AgriTech · Supply Chain',
    desc: 'Connecting 12,000+ small-scale farmers in Rajasthan directly with retailers — eliminating 4 middlemen layers and doubling farmer incomes.',
    loc: 'Jaipur, Rajasthan',
  },
  {
    icon: '🛒', bg: '#EDE9FE', stage: 'Pre-Seed', stageClass: 'sp-pre',
    name: 'QuickKart', cat: 'Hyperlocal Commerce',
    desc: '10-minute delivery for everyday essentials in Tier-2 cities, powered by a dark-store model built for Indian neighborhoods and buying habits.',
    loc: 'Lucknow, Uttar Pradesh',
  },
  {
    icon: '🏥', bg: '#FFE4E6', stage: 'Angel Round', stageClass: 'sp-a2',
    name: 'MediReach', cat: 'HealthTech · Rural Care',
    desc: 'Telemedicine platform connecting rural patients in 3,000+ villages with specialist doctors using feature phones and local health workers.',
    loc: 'Bhopal, Madhya Pradesh',
  },
  {
    icon: '⚙️', bg: '#FEF3C7', stage: 'Seed Stage', stageClass: 'sp-seed',
    name: 'FactoryOS', cat: 'MSME SaaS · Manufacturing',
    desc: 'ERP and inventory management built for Indian MSME manufacturers — 40% faster than spreadsheets and 1/10th the cost of enterprise tools.',
    loc: 'Surat, Gujarat',
  },
  {
    icon: '🎓', bg: '#DCFCE7', stage: 'Pre-Seed', stageClass: 'sp-angel',
    name: 'SkillVillage', cat: 'EdTech · Vocational Training',
    desc: 'Offline-first vocational training for youth in Tier-3 towns, placing 5,000+ students in local jobs annually across 12 states.',
    loc: 'Patna, Bihar',
  },
];

export default function Startups() {
  const ref = useScrollRevealGroup();
  return (
    <section className="section bg-gray" id="startups" ref={ref}>
      <div className="container">

        <div className="st-header reveal">
          <div>
            <span className="tag">Featured Startups</span>
            <h2 className="sec-h">
              Startups That Pitched on{' '}
              <span style={{ color: 'var(--blue)' }}>Our Stage</span>
            </h2>
          </div>
          <a href="#" className="view-all">View All 200+ Startups →</a>
        </div>

        <div className="st-grid">
          {STARTUPS.map((s, i) => (
            <div key={s.name} className={`st-card reveal ${i % 3 !== 0 ? `delay-${i % 3}` : ''}`}>
              <div className="st-card-top">
                <div className="st-icon" style={{ background: s.bg }}>{s.icon}</div>
                <span className={`stage-pill ${s.stageClass}`}>{s.stage}</span>
              </div>
              <h3 className="st-name">{s.name}</h3>
              <p className="st-cat">{s.cat}</p>
              <p className="st-desc">{s.desc}</p>
              <div className="st-footer">
                <span className="st-loc">📍 {s.loc}</span>
                <a href="#" className="st-link">View Pitch →</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
