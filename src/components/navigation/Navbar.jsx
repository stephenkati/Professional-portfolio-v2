import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { FaBars } from 'react-icons/fa';
import Logo from '/katuli.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div className="navbar-shell">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Stephen Katuli logo">
          <img src={Logo} alt="Katuli logo" className="nav-logo" />
          <span>Stephen Katuli</span>
        </a>

        <DesktopMenu />

        <div className="nav-cta">
          <a href="#contact" className="btn-pill btn-outline hidden sm:inline-flex">
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="menu-toggle sm:hidden"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default Navbar;
