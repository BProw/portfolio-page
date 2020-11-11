import React, { useState } from 'react'
// import { projectData } from '../assets/data/projectData'
import { projectIcons } from '../assets/images/images'

export const Projects: React.FC = () => {
  const [projectOneHover, setHovered] = useState(false);
  const toggleProjectOneHover = () => setHovered(!projectOneHover);

  // const displayProjectData = (): JSX.Element[] => {
  //   return projectData.map(project => {
  //     return (
  //       <div className="h-56 w-4/5 border shadow-2xl rounded border-main-purple-dark transition-all duration-7000 ease-out"
  //         onMouseEnter={toggleProjectOneHover}
  //         onMouseLeave={toggleProjectOneHover}
  //       >
  //         <h1 className="text-lg font-bold p-1">{project.title}</h1>
  //         <img src={project.imagePath} alt={`Display image for ${project.title}`} className="p-1" />
  //         <p className="text-sm p-1">{project.description}</p>
  //         <a href={project.link} className="p-1">Click Me</a>
  //       </div>
  //     )
  //   })
  // }

  return (
    <div>
      <h2 className="my-20 text-2xl font-bold text-center">My Recent Projects</h2>
      <section className="grid grid-cols-2 gap-12 m-auto h-1/2 w-3/4">
        <div className="tweet311Gradient flex flex-row h-64 w-full rounded shadow-2xl cursor-pointer"
          onMouseEnter={toggleProjectOneHover}
          onMouseLeave={toggleProjectOneHover}
        >
          <div className="flex flex-col m-auto pl-5">
            <h2 className="text-white text-2xl font-semibold text-center m-2">Tweet311Denver</h2>
            <img src={projectIcons.denver} alt="" className="h-32 w-32 m-auto mt-5" />
          </div>
          <div className={projectOneHover ? "flex flex-col m-auto items-center ransition duration-1000 ease-in-out" : "opacity-0"}>
            <p className="w-2/3 m-5 text-center text-white text-base">An application to improve the saftey of the commuters of Denver.</p>
            <button className="w-2/3 p-2 text-white border rounded-full hover:bg-white hover:text-black">Go Live</button>
          </div>
        </div>
        {/* <div className="tweet311Gradient flex flex-row h-64 w-full rounded shadow-2xl cursor-pointer"
          onMouseEnter={toggleProjectOneHover}
          onMouseLeave={toggleProjectOneHover}
        >
          <div className="flex flex-col m-auto pl-5">
            <h2 className="text-white text-2xl font-semibold text-center m-2">Tweet311Denver</h2>
            <img src={projectIcons.denver} alt="" className="h-32 w-32 m-auto mt-5" />
          </div>
          <div className={hovered ? "flex flex-col m-auto items-center ransition duration-1000 ease-in-out" : "opacity-0"}>
            <p className="w-2/3 m-5 text-center text-white text-base">An application to improve the saftey of the commuters of Denver.</p>
            <button className="w-2/3 p-2 text-white border rounded-full hover:bg-white hover:text-black">Go Live</button>
          </div>
        </div> */}
      </section>
    </div>
  )
}