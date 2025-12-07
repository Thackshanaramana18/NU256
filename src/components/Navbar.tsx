'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between w-full">
        <Link href="#home" className="navbar-logo">
          NU256
        </Link>
        
        <ul className="nav-links hidden md:flex">
          {['home', 'mission', 'about', 'achievements', 'research', 'technology', 'services', 'contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="nav-link capitalize"
                aria-label={`Go to ${item} section`}
              >
                {item === 'home' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <button className="get-started-btn hidden md:block px-6 py-2 bg-green-500 hover:bg-green-600 rounded transition">
          Get Started
        </button>

        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          id="menuToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#071127] md:hidden flex flex-col">
          {['home', 'mission', 'about', 'achievements', 'research', 'technology', 'services', 'contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="nav-link block px-4 py-3 border-b border-gray-700 capitalize"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
