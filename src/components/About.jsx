import React from 'react'

const highlights = [
  {
    title: 'Strategy to shipping',
    copy: 'I partner with founders early, mapping flows, prototypes, and delivery plans that balance ambition with scope.'
  },
  {
    title: 'Systems thinking',
    copy: 'From component libraries to CI pipelines, I design for the next release so teams can move faster with less debt.'
  },
  {
    title: 'Team amplifier',
    copy: 'I enjoy pairing, mentoring, and documenting so knowledge compounds instead of hiding in commits.'
  },
  {
    title: 'AI-driven DevOps',
    copy: 'Recent deep-dive into a 10-step DevOps programme covering Linux, AWS, Terraform, Kubernetes, GitOps, and AI copilots to keep delivery pipelines sharp.'
  }
]

const About = () => {
  return (
    <section className="section-shell" id="about">
      <div className="container about-card">
        <div className="about-copy">
          <p className="eyebrow">About me</p>
          <h3>Full-stack dev shaping resilient digital products.</h3>
          <p>
            Whether it is a lean MVP or re-platforming a legacy tool, I focus on marrying tasteful interfaces with solid engineering,
            giving teams confidence in what we ship.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight) => (
            <article key={highlight.title}>
              <h4>{highlight.title}</h4>
              <p>{highlight.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
