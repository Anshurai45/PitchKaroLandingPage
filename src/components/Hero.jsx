import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="hero" id="home">
      <div className="hero-inner reveal" ref={ref}>

        <div className="hero-badge">
          <span className="badge-dot" />
          Applications Open · Season 2025
        </div>

        <h1 className="hero-title">
          Pitch Your Startup to<br />
          India's <span className="text-blue">Top Investors.</span>
        </h1>

        <p className="hero-sub">
          Karo Pitch is a platform where early-stage founders from across India —
          especially from Tier-2 and Tier-3 cities — can pitch their startups
          directly to investors, gain visibility, and raise funding.
        </p>

        <div className="hero-btns">
          <a href="#apply" className="btn btn-hero-main">Apply to Pitch →</a>
          <a href="#startups" className="btn btn-hero-outline">Explore Startups</a>
        </div>

        <div className="hero-stats">
          <div className="h-stat">
            <span className="h-stat-num">500<em>+</em></span>
            <span className="h-stat-label">Startups Applied</span>
          </div>
          <div className="h-stat">
            <span className="h-stat-num">₹12<em>Cr+</em></span>
            <span className="h-stat-label">Funding Facilitated</span>
          </div>
          <div className="h-stat">
            <span className="h-stat-num">80<em>+</em></span>
            <span className="h-stat-label">Investor Partners</span>
          </div>
        </div>

      </div>
    </section>
  );
}
