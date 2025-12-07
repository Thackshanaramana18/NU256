'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 NU256. All rights reserved.</p>
      </footer>

      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`}
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <i className="iconify" data-icon="mdi:chevron-up"></i>
      </button>
    </>
  );
}
