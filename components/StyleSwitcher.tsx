'use client';

import { useState } from 'react';
import '../app/style-switcher.css';

export default function StyleSwitcher() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function setActiveStyle(color: string) {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', color);
    }
  }

  const [isDay, setIsDay] = useState(true);

  function handleDayNight() {
    setIsDay((prev) => !prev);
    document.body.classList.toggle('light');
  }

  const toggleMobileMenu = () => setIsMenuOpen((open) => !open);

  return (
    <div className={`style-switcher${open ? ' open' : ''}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setOpen((prev) => !prev)}
      >
        <i className="fas fa-cog fa-spin" />
      </div>
      <div
        className="day-night s-icon"
        onClick={handleDayNight}
      >
        <i className={`fas ${isDay ? 'fa-moon' : 'fa-sun'}`} />
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color1" onClick={() => setActiveStyle('color1')} />
        <span className="color2" onClick={() => setActiveStyle('color2')} />
        <span className="color3" onClick={() => setActiveStyle('color3')} />
      </div>
      <nav>
        <ul id="menu" className={isMenuOpen ? 'active' : ''}>
          {/* ...menu items... */}
        </ul>
        <a className="mobile-toggle" onClick={toggleMobileMenu}>
          {/* ...icon... */}
        </a>
      </nav>
    </div>
  );
}