import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MobileMenu = () => {
  const links = [
    {text: 'Projects', section:''},
    {text: 'About', section:''},
    {text: 'Contact', section:''}
  ];

  const handleMenuClose = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('hidden');
  };

  return (
    <div className="absolute top-0 left-0 right-0 bg-white p-4 bg-gray-200" id="menu">
      <span
        className="text-2xl font-bold cursor-pointer"
        onClick={handleMenuClose}
      >
        <AiOutlineClose />
      </span>

      <ul className="flex-col gap-2 uppercase">
        {links.map((link) => (
          <li key={link.text} className="p-3 hover:cursor-pointer slide-in">
           {link.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu;
