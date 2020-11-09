import React from 'react'
import { projectData } from '../assets/data/projectData'
import { projectIcons } from '../assets/images/images'

export const Projects: React.FC = () => {

  const displayProjectData = (): JSX.Element[] => {
    return projectData.map(project => {
      return (
        <div className="flex flex-col space-between w-12/3 h-56 m-10 p-8 border shadow-2xl rounded border-main-purple-dark">
          <h1 className="text-lg font-bold p-1">{project.title}</h1>
          <img src={project.imagePath} alt={`Display image for ${project.title}`} className="p-1"/>
          {/* <p className="text-sm p-1">{project.description}</p> */}
          <a href={project.link} className="p-1">Click Me</a>
        </div>
      )
    })
  }

  return (
    <div>
      <h2 className="mt-20 text-2xl font-bold text-center">My Recent Projects</h2>
      <section className="grid grid-cols-2 gap-12 m-auto h-1/2 w-3/4">
        <div className="tweet311Gradient w-full m-10 rounded shadow-2xl cursor-pointer">
          <h2 className="text-white text-2xl font-semibold text-center m-2">Tweet311Denver</h2>
          <img src={projectIcons.denver} alt="" className="h-32 w-32 m-auto mt-5" />
        </div>
        {displayProjectData()}
      </section>
    </div>
  )
}