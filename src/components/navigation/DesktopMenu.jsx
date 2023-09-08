import React from 'react'

const DesktopMenu = () => {
  const links = [
    {text: 'Projects', section:'#projects'},
    {text: 'About', section:'#about'},
    {text: 'Skills', section:'#skills'}
  ];

  return (
    <div className="hidden sm:flex items-center text-xl uppercase">
      <ul className="flex gap-2">
        {links.map((link) => (
          <a href={link.section} key={link.text} className="p-3 hover:cursor-pointer slide-in">
            {link.text}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default DesktopMenu;
