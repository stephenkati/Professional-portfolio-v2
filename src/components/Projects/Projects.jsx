import React, { useEffect, useState } from 'react'
import ProjectsList from './ProjectsList'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const toggleBodyScroll = (shouldLock) => {
    if (typeof document === 'undefined') return
    document.body.classList[shouldLock ? 'add' : 'remove']('modal-open')
  }

  useEffect(() => {
    return () => {
      toggleBodyScroll(false)
    }
  }, [])

  const openProject = (project) => {
    setSelectedProject(project)
    toggleBodyScroll(true)
  }

  const closeProject = () => {
    setSelectedProject(null)
    toggleBodyScroll(false)
  }

  return (
    <section className="section-shell" id="projects">
      <div className="container">
        <div className="projects-grid">
          {ProjectsList.map((project) => {
            const cover = project.images[0]

            return (
              <article
                key={project.name}
                className="project-card"
                onClick={() => openProject(project)}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openProject(project)
                  }
                }}
              >
                <div className="project-card__media">
                  <span className="project-card__shine" />
                  <img src={cover} alt={`${project.name} preview`} loading="lazy" />
                </div>
                <div className="project-card__body">
                  <div className="project-card__title">
                    <span>{project.category}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project-card__meta">
                    <span>{project.timeline}</span>
                    <span>{project.stacks.slice(0, 2).join(' • ')}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="stack-list">
                    {project.stacks.map((stack) => (
                      <li key={stack} className="stack-chip">{stack}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.name} details`}
          onClick={closeProject}
        >
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeProject} aria-label="Close project details">
              &times;
            </button>

            <div className="project-modal__media">
              {selectedProject.images.map((image, index) => (
                <img key={image} src={image} alt={`${selectedProject.name} view ${index + 1}`} loading="lazy" />
              ))}
            </div>

            <div className="project-modal__content">
              <p className="eyebrow">{selectedProject.category}</p>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.longDescription || selectedProject.description}</p>

              {selectedProject.details && (
                <ul className="detail-list">
                  {selectedProject.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}

              <div className="project-modal__footer">
                <div className="stack-pills">
                  {selectedProject.stacks.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
                <div className="project-modal__links">
                  <a href={selectedProject.live} target="_blank" rel="noreferrer noopener" className="btn-pill btn-filled">
                    Launch live site
                  </a>
                  <a href={selectedProject.code} target="_blank" rel="noreferrer noopener" className="btn-pill btn-outline">
                    View code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
