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
    <div className="text-blue-950 font-bold w-full p-3 shadow-lg">
      <div className="w-full flex gap-1 justify-between text items-center px-2">
        
        <h1 className="logo text-left text-3xl text-primary">
          S.Katuli
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
