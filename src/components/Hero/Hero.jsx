import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import Resume from '../Resume'

const socialLinks = [
  { icon: <AiFillLinkedin />, href: 'https://www.linkedin.com/in/stephen-katuli/', label: 'LinkedIn' },
  { icon: <AiFillGithub />, href: 'https://github.com/stephenkati', label: 'Github' },
  { icon: <AiOutlineTwitter />, href: 'https://twitter.com/Stephen57913145', label: 'Twitter' },
  { icon: <AiOutlineMail />, href: 'mailto:stephenkatuli88@gmail.com', label: 'Email Stephen' }
]

const heroPills = ['Product systems', 'E-learning', 'Healthcare', 'Commerce']

const stats = [
  { value: '30+', label: 'Products shipped' },
  { value: '5', label: 'Years crafting experiences' },
  { value: '4', label: 'Time zones collaborated' }
]

const Hero = () => {
  return (
    <div className="hero-grid container">
      <div className="hero-content">
        <p className="eyebrow">Full-stack developer | Product collaborator</p>
        <div className="hero-pill-cloud">
          {heroPills.map((pill) => (
            <span key={pill} className="hero-pill">{pill}</span>
          ))}
        </div>
        <h1>
          Shipping bold digital experiences for teams that move fast.
        </h1>
        <p className="lede">
          I blend clean front-end craft with resilient back-end systems to help companies launch polished products quickly, iterate with confidence, and scale without drama.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-pill btn-filled">Explore projects</a>
          <Resume className="btn-pill btn-outline" />
        </div>

        <div className="hero-socials">
          {socialLinks.map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__card">
          <p>Currently helping product-led teams untangle legacy stacks and launch new revenue streams.</p>
          <span>Healthcare, commerce, and learning teams trust this workflow.</span>
        </div>
        <div className="hero-panel__metrics">
          {stats.map((stat) => (
            <div key={stat.label} className="metric">
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
