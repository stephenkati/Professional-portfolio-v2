import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { FaBars } from 'react-icons/fa';
import Logo from '/katuli.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-red-100 text-blue-950 font-bold w-sc py-1 px-4 shadow-lg fixed top-0 z-20 w-screen">
      <div className="w-full flex gap-1 justify-between text items-center px-2 py-0">
        
        <div className="logo kalam text-left text-3xl text-primary w-28 h-16 flex items-center">
          <img src={Logo} alt="Katuli" className="w-full" />
        </div>

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
