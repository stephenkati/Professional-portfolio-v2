import React from 'react'

const DesktopMenu = () => {
  const links = [
    { text: 'Projects', section: '#projects' },
    { text: 'About', section: '#about' },
    { text: 'Skills', section: '#skills' }
  ]

  return (
    <nav className="desktop-menu">
      {links.map((link) => (
        <a href={link.section} key={link.text} className="nav-link">
          {link.text}
        </a>
      ))}
    </nav>
  )
}

export default DesktopMenu
