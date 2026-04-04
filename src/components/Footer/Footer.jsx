import React, { useMemo } from "react";
import "./Footer.css";

export default function Footer() {
  const contactInfo = useMemo(() => ({
    email: "mo879937@gmail.com",
    phone: "+20 109 679 0839",
    location: "Cairo, Egypt",
  }), []);

  const socialLinks = useMemo(() => [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-mokhtar-a23a10372", iconClass: "fab fa-linkedin" },
    { name: "WhatsApp", url: "https://wa.me/01096790839", iconClass: "fab fa-whatsapp" },
    { name: "GitHub", url: "https://github.com/ahmed404mo", iconClass: "fab fa-github" },
  ], []);

  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 80,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 2,
  })), []);

  const shootingStars = useMemo(() => Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  })), []);

  return (
    <footer className="footer-lite" role="contentinfo">
      {/* Stars Background */}
      <div className="stars-container">
        {stars.map(star => (
          <svg key={star.id} className="star"
            style={{ 
              left: `${star.x}%`, 
              top: `${star.y}%`, 
              animationDelay: `${star.delay}s`, 
              animationDuration: `${star.duration}s` 
            }}
            width="10" height="10">
            <circle cx="5" cy="5" r="3" fill="#fff" />
          </svg>
        ))}
        
        {shootingStars.map(star => (
          <svg key={star.id} className="shooting-star"
            style={{ 
              left: `${star.x}%`, 
              animationDelay: `${star.delay}s`, 
              animationDuration: `${star.duration}s` 
            }}
            width="100" height="2">
            <line x1="0" y1="1" x2="100" y2="1" stroke="url(#shootingStarGradient)" strokeWidth="2" />
            <defs>
              <linearGradient id="shootingStarGradient">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="60%" stopColor="rgba(170,200,255,0.25)" />
                <stop offset="100%" stopColor="rgba(10,15,40,0)" />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>

      <div className="footer-overlay-lite" />

      <div className="footer-content-lite">
        <div className="col">
          <h3>Contact</h3>
          <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p>Phone: <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a></p>
          <p>Location: {contactInfo.location}</p>
        </div>

        <div className="col">
          <h3>Follow</h3>
          {socialLinks.map(link => (
            <a className="nn" key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${link.name} profile`}>
              <i className={`social-icon ${link.iconClass}`} />
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom-lite">
        © {new Date().getFullYear()} Ahmed Mokhtar. All rights reserved.
      </div>
    </footer>
  );
}