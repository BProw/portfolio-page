import React from 'react'
import { projectData } from '../assets/data/projectData'

export const Projects: React.FC = () => {

  const displayProjectData = (): JSX.Element[] => {
    return projectData.map(project => {
      return (
        <div className="flex flex-col space-between w-full m-10 p-8 border rounded border-main-purple-dark">
          <h1 className="text-lg font-bold p-1">{project.title}</h1>
          <img src={project.imagePath} alt={`Display image for ${project.title}`} className="p-1"/>
          <p className="text-sm p-1">{project.description}</p>
          <a href={project.link} className="p-1">Click Me</a>
        </div>
      )
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Recent Projects</h2>
      <section className="h-1/2 w-1/2 m-auto">
        {displayProjectData()}
      </section>
    </div>
  )
}