import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Stephen Katuli. Built with care in React & Rails.</p>
        <div className="footer-links">
          <a href="mailto:stephenkatuli88@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/stephen-katuli/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href="https://github.com/stephenkati" target="_blank" rel="noreferrer noopener">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
