import React from 'react'

export const SkillsLayout: React.FC = () => {
  return(
    <section className="base-container-height w-full m-auto">
      <div className="w-2/3 h-full m-auto border">
          <div className="flex flex-row">
          </div>
        <div className="flex flex-row justify-center justify-evenly w-full">
          <div className="flex flex-col">
            <h3 className="text-center bg-white font-bold text-black text-xl">languages | frameworks</h3>
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
          </div>
          <div className="flex flex-col">
            <h3 className="text-center bg-white font-bold text-xl">front-end developer</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center bg-white font-bold text-xl">background</h3>
            <ul>
              <li>Sales</li>
              <li>Team Leadership</li>
              <li>Mentorship</li>
              <li>Overall Positivity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}