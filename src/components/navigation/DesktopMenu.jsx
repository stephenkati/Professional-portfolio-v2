import React from 'react'

const DesktopMenu = () => {
  const links = [
    {text: 'Projects', section:''},
    {text: 'About', section:''},
    {text: 'Contact', section:''}
  ];

  return (
    <div className="hidden sm:flex items-center text-xl uppercase">
      <ul className="flex gap-2">
        {links.map((link) => (
          <li key={link.text} className="px-3 hover:cursor-pointer slide-in">
           {link.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopMenu;
