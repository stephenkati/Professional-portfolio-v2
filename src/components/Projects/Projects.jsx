import React from 'react'
import ProjectsList from './ProjectsList'
import ImageSwiper from './ImageSwiper';

const Projects = () => {
  return (

    <div className="flex flex-col gap-2 items-center px-5 pt-16" id="projects">
      <div className="flex w-full flex-wrap gap-16 px-4 justify-around">
        {ProjectsList.map((project, projectIndex) => (
          <div key={projectIndex} className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">
            <div className="absolute -top-14 w-3/4">
               <ImageSwiper images={project.images} />
            </div>

          <div className="px-2 w-full flex flex-col justify-around card-content">
            <h4 className="font-bold text-2xl text-secondary-focus shrink kalam "> {project.name} </h4>

            <p> {project.description} </p>

            <div className="w-full py-2">
              <ul className="flex flex-wrap-reverse justify-around w-full gap-2">
                {project.stacks.map((stack, index) => (
                  <li key={index} className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink"> {stack} </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex gap-2 justify-around">
              <a target="_blank" rel="noopener" href={project.live} className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
              <a target="_blank" rel="noopener" href={project.code} className="liveDemo btn btn-primary rounded-lg shrink">Code</a>
            </div>

          </div>

          </div>
        ))}
      </div>
    </div>

  )
}

export default Projects;
