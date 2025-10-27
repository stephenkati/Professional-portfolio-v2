import React from 'react'

const channels = [
  { label: 'Email', value: 'stephenkatuli88@gmail.com', href: 'mailto:stephenkatuli88@gmail.com' },
  { label: 'LinkedIn', value: '/in/stephen-katuli', href: 'https://www.linkedin.com/in/stephen-katuli/' },
  { label: 'Github', value: '@stephenkati', href: 'https://github.com/stephenkati' }
]

const Contact = () => {
  return (
    <section className="section-shell" id="contact">
      <div className="container contact-card">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h3>Tell me about the idea you cannot shake.</h3>
          <p>I read every note. Share context, timelines, and the business outcomes you are chasing--then we will map the next steps.</p>

          <div className="contact-channels">
            {channels.map((channel) => (
              <a key={channel.label} href={channel.href} target="_blank" rel="noreferrer noopener">
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <form action="https://formspree.io/f/xyyapkva" method="POST" className="contact-form">
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" placeholder="Jane Product" required />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" placeholder="team@example.com" required />
          </label>
          <label htmlFor="message">
            Project notes
            <textarea name="message" id="message" placeholder="Share goals, timelines, and links." required />
          </label>
          <button type="submit" className="btn-pill btn-filled">
            Send the note
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
