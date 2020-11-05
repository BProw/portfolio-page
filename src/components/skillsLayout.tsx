import React from 'react'

export const SkillsLayout: React.FC = () => {
  return(
    <section className="base-container-height w-full m-auto">
      <div className="w-full h-full m-auto -mt-40 relative">
        <div className="w-2/3 m-auto flex flex-col">
          <div className="flex flex-row">
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-black text-xl rounded-tl-lg">languages | frameworks</h3>
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-xl">front-end developer</h3>
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-xl rounded-tr-lg">background</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center justify-evenly w-full">
          <ul>
            <li>JavaScript</li>
            <li>React | Redux</li>
            <li>Vue | Nuxt</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS | SCSS | Tailwaind</li>
            <li>Node</li>
            <li>React Native</li>
            <li>jQuery</li>
          </ul>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul>
            <li>Sales</li>
            <li>Team Leadership</li>
            <li>Mentorship</li>
            <li>Overall Positivity</li>
          </ul>
        </div>
      </div>
    </section>
  )
}