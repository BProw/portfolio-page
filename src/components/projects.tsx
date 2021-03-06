import React, { useState } from 'react'
import { projectData } from '../assets/data/projectData'
import { projectIcons } from '../assets/images/images'

export const Projects: React.FC = () => {
  const [projectOneHover, setProjectOneHover] = useState(false);
  const toggleProjectOneHover = () => setProjectOneHover(!projectOneHover);

  const [projectTwoHover, setProjectTwoHover] = useState(false);
  const toggleProjectTwoHover = () => setProjectTwoHover(!projectTwoHover);

  const [projectThreeHover, setProjectThreeHover] = useState(false);
  const toggleProjectThreeHover = () => setProjectThreeHover(!projectThreeHover);

  const [projectFourHover, setHovered] = useState(false);
  const toggleProjectFourHover = () => setHovered(!projectFourHover);


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
            <img src={projectIcons.denver} alt="Denver art museum icon" className="h-32 w-32 m-auto mt-5" />
          </div>
          <div className={projectOneHover ? "flex flex-col m-auto items-center duration-1000 ease-in-out" : "flex flex-col m-auto items-center opacity-0 duration-700 ease-in-out transform scale-75"}>
            <p className="w-2/3 m-5 text-center text-white text-base">An application to improve the saftey of the commuters of Denver.</p>
            <a href={projectData[0].link} target="_blank" role="button" className="w-2/3 p-2 text-white text-center border rounded-full hover:bg-white hover:text-black">Watch Demo</a>
          </div>
        </div>


        <div className="palettePickerGradient flex flex-row h-64 w-full rounded shadow-2xl cursor-pointer"
          onMouseEnter={toggleProjectTwoHover}
          onMouseLeave={toggleProjectTwoHover}
        >
          <div className="flex flex-col w-1/2 m-auto pl-5">
            <img src={projectIcons.brush} alt="Paint brush icon" className="h-32 w-32 m-auto mt-5" />
          </div>
          <div className={projectTwoHover ? "flex flex-col m-auto items-center duration-1000 ease-in-out" : "flex flex-col m-auto items-center opacity-0 duration-700 ease-in-out transform scale-75"}>
            <h2 className="text-2xl font-semibold text-center">Palette Picker</h2>
            <p className="w-2/3 m-5 text-center text-base">Create and manage beautiful color palettes.</p>
            <a href={projectData[1].link} target="_blank" role="button" className="w-2/3 p-2 text-center border rounded-full hover:bg-white hover:text-black">Go Live</a>
          </div>
        </div>


        <div className="isoChallengeBackground h-64 w-full rounded shadow-2xl cursor-pointer"
          onMouseEnter={toggleProjectThreeHover}
          onMouseLeave={toggleProjectThreeHover}
        >
          <div className={projectThreeHover ? "flex flex-col m-auto items-center duration-1000 ease-in-out" : "flex flex-col m-auto items-center opacity-0 duration-700 ease-in-out transform scale-75"}>
            <h2 className="mt-3 text-3xl font-semibold text-center">Iso-Challenge</h2>
            <p className="w-1/2 m-2 text-center text-base">A game of meaningless basketball knowledge.</p>
            <h3 className="w-1/2 m-2 text-center text-base">Click the ball to play!</h3>
            <a href={projectData[3].link} target="_blank" role="button"><img src={projectIcons.basketball} alt="Basketball button" className="h-20 w-20 m-auto hover:animate-spin" /></a>
          </div>
        </div>


        <div className="fitlitBackground flex flex-col h-64 w-full rounded shadow-2xl cursor-pointer"
          onMouseEnter={toggleProjectFourHover}
          onMouseLeave={toggleProjectFourHover}
        >
          <h2 className="inline-block text-4xl font-bold"><img src={projectIcons.lightning} alt="" className="inline-block h-8 w-8" />FitLit</h2>
          <div className={projectFourHover ? "flex flex-col justify-center m-4 duration-1000 ease-in-out" : "flex flex-col justify-center m-4 opacity-0 duration-700 ease-in-out transform scale-75"}>
            <p className="w-1/3 m-3 text-base font-semibold">An application for both adults and kids to track their fitness metrics.</p>
            <a href={projectData[2].link} target="_blank" role="button" className="w-1/3 p-2 text-center border rounded-full hover:bg-white hover:text-black">Go Live</a>
          </div>
        </div>
      </section>
    </div>
  )
}