'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
        aria-hidden="true"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <source src="/hero_section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-text">
          <h1 className="text-white" style={{ opacity: Math.max(0.5, 1 - scrollY / 500) }}>
            NU256
          </h1>
          <p className="hero-slogan">Decoding the Future of Genomic Medicine</p>
          <button className="cta-button" aria-label="Explore our scientific research and innovations">
            Explore Our Science
          </button>
        </div>
      </div>
    </section>
  );
}
