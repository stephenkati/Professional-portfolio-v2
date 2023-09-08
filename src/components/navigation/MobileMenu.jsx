import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MobileMenu = () => {
  const links = [
    {text: 'Projects', section:'#projects'},
    {text: 'About', section:'#about'},
    {text: 'Skills', section:'#skills'}
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
          <a href={link.section} key={link.text} className="p-3 hover:cursor-pointer slide-in">
           {link.text}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu;
