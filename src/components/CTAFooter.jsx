import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./CTAFooter.css";

/* ═══════════════════════════
   CTA SECTION
═══════════════════════════ */
export function CTA() {
  const ref = useScrollReveal();
  return (
    <section className="cta-section" id="apply">
      <div className="container">
        <div className="cta-inner reveal" ref={ref}>
          <span className="cta-eyebrow">
            🚀 Applications Open · Season 2025 · Free to Apply
          </span>
          <h2 className="cta-title">
            Ready to Pitch
            <br />
            Your Startup?
          </h2>
          <p className="cta-sub">
            Join 500+ founders who've already taken the stage. Your idea
            deserves to be heard by the right investors — in the right room.
          </p>
          <div className="cta-btns">
            <a href="mailto:business@karostartup.com" className="btn-cta-w">
              Apply Now — It's Free
            </a>
            <a href="mailto:business@karostartup.com" className="btn-cta-o">
              Partner With Us
            </a>
          </div>
          <p className="cta-note">
            No fee · Open to all early-stage startups · Results within 7 days
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   FOOTER
═══════════════════════════ */
const FOOTER_PLATFORM = [
  { label: "Apply to Pitch", href: "#apply" },
  { label: "Browse Startups", href: "#startups" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Investors", href: "#investors" },
];
const FOOTER_COMPANY = [
  { label: "KaroStartup.com", href: "https://karostartup.com", ext: true },
  {
    label: "Karo Pitch Instagram",
    href: "https://www.instagram.com/karopitch/",
    ext: true,
  },
  { label: "Contact Us", href: "mailto:business@karostartup.com", ext: false },
  { label: "Privacy Policy", href: "/privacy", ext: false },
];
const FOOTER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/karo_startup_/",
    icon: "▣",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/karo-startup/",
    icon: "in",
  },
  { label: "Twitter", href: "https://x.com/karo_startup", icon: "𝕏" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@karostartup/videos",
    icon: "▶",
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-badge">KP</div>
              <span className="footer-logo-name">
                Karo<span>Pitch</span>
              </span>
            </div>
            <p className="footer-brand-text">
              An initiative by KaroStartup — India's largest startup
              storytelling platform. Helping early-stage founders across Bharat
              access investors, mentorship and the visibility they deserve.
            </p>
            <div className="footer-contact">
              <p>
                📧{" "}
                <a href="mailto:business@karostartup.com">
                  business@karostartup.com
                </a>
              </p>
              <p>
                📞 <a href="tel:+919315194393">+91 93151 94393</a>
              </p>
            </div>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              {FOOTER_PLATFORM.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.ext
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="footer-col">
            <h5>Follow Us</h5>
            <ul>
              {FOOTER_SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.facebook.com/karostartup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Karo Pitch · An initiative by{" "}
            <a
              href="https://karostartup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              KaroStartup
            </a>
            . All rights reserved.
          </p>
          <div className="footer-social">
            {FOOTER_SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fsoc"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
