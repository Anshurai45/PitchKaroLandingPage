import React from "react";
import { useScrollRevealGroup } from "../hooks/useScrollReveal";
import "./Investors.css";

const INVESTORS = [
  {
    initials: "RK",
    name: "Rahul Kapoor",
    role: "Partner · Bharat Ventures",
    color: "#2563EB",
    chips: ["D2C", "Consumer"],
    plain: "₹25L–₹2Cr",
  },
  {
    initials: "SM",
    name: "Sunita Mehta",
    role: "Angel Investor · Ex-Flipkart",
    color: "#7C3AED",
    chips: ["SaaS", "FinTech"],
    plain: "₹50L+",
  },
  {
    initials: "AV",
    name: "Arun Verma",
    role: "MD · Tier2 Capital",
    color: "#059669",
    chips: ["AgriTech", "Impact"],
    plain: "Seed Stage",
  },
  {
    initials: "NP",
    name: "Neha Pillai",
    role: "GP · StartupBharat Fund",
    color: "#D97706",
    chips: ["B2B", "MSME Tech"],
    plain: "Pre-Seed",
  },
];

export default function Investors() {
  const ref = useScrollRevealGroup();
  return (
    <section className="section bg-dark" id="investors" ref={ref}>
      <div className="container">
        <div className="inv-header reveal">
          <div>
            <span className="tag dark">Investor Network</span>
            <h2 className="sec-h" style={{ color: "#fff" }}>
              Meet Investors Looking for
              <br />
              the <span style={{ color: "#60A5FA" }}>Next Big Startup</span>
            </h2>
          </div>
          <p
            className="sec-sub"
            style={{ color: "rgba(255,255,255,0.48)", maxWidth: 380 }}
          >
            Every Karo Pitch event brings a curated group of angels, family
            offices, micro VCs and institutional funds — all actively deploying
            capital in early-stage Indian startups.
          </p>
        </div>

        <div className="inv-grid">
          {INVESTORS.map((inv, i) => (
            <div
              key={inv.initials}
              className={`inv-card reveal ${i > 0 ? `delay-${i}` : ""}`}
            >
              <div className="inv-avatar" style={{ background: inv.color }}>
                {inv.initials}
              </div>
              <h4 className="inv-name">{inv.name}</h4>
              <p className="inv-role">{inv.role}</p>
              <div className="inv-chips">
                {inv.chips.map((c) => (
                  <span key={c} className="inv-chip">
                    {c}
                  </span>
                ))}
                <span className="inv-chip plain">{inv.plain}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="inv-footer reveal">
          <p>
            + 76 more investors across angels, family offices and micro-VCs
            attend every season
          </p>
          <a href="#apply" className="btn btn-primary">
            Partner as an Investor →
          </a>
        </div>
      </div>
    </section>
  );
}
