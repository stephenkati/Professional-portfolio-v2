import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-red-100 text-blue-950 font-bold w-screen p-3 shadow-lg fixed top-0 z-20">
      <div className="w-full flex gap-1 justify-between text items-center px-2">
        
        <h1 className="logo kalam text-left text-3xl text-primary">
          Katuli
        </h1>

        <div>
          <DesktopMenu />
          {isMobileMenuOpen && <MobileMenu />}
          <span
            className="sm:hidden text-2xl font-bold cursor-pointer"
            onClick={handleMenuOpen}
          >
            <FaBars />
          </span>
        </div>

        <a href='#contact' className="btn btn-primary rounded-lg hidden sm:flex">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
