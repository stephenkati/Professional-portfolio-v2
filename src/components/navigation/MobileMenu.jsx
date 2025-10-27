import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MobileMenu = ({ onClose }) => {
  const links = [
    { text: 'Projects', section: '#projects' },
    { text: 'About', section: '#about' },
    { text: 'Skills', section: '#skills' },
    { text: 'Contact', section: '#contact' }
  ]

  return (
    <div className="mobile-menu" id="mobile-menu">
      <button
        type="button"
        className="mobile-menu__close"
        onClick={onClose}
        aria-label="Close navigation"
      >
        <AiOutlineClose />
      </button>

      <div className="mobile-menu__links">
        {links.map((link) => (
          <a key={link.text} href={link.section} onClick={onClose} className="nav-link">
            {link.text}
          </a>
        ))}
      </div>

      <a href="#contact" className="btn-pill btn-filled" onClick={onClose}>
        Start a project
      </a>
    </div>
  )
}

export default MobileMenu
