import React from 'react'
import { projectData } from '../assets/data/projectData'

export const Projects: React.FC = () => {

  const displayProjectData = ():JSX.Element[] => {
    return projectData.map(project => {
      return(
        <div>
          <h1>{project.title}</h1>
          <img src={project.imagePath} alt={`Display image for ${project.title}`} />
          <p>{project.description}</p>
          <a href={project.link}>Check Me</a>
        </div>
      )
    })
  }

  return (
    <section className="base-container-height w-full flex bg-main-purple-light">
      {displayProjectData()}
    </section>
  )
}