import React from 'react'

export const SkillsLayout: React.FC = () => {
  return (
    <section className="base-container-height w-full m-auto">
      <div className="w-2/3 h-full m-auto bg-white -mt-32 rounded-lg">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-black text-xl">Languages | Frameworks</h3>
            <h4 className="text-center text-base">I enjoy coding in these languages but love learning new skills even more.</h4>
            <ul>
              <li>JavaScript</li>
              <li>React | Redux</li>
              <li>Vue | Nuxt</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS | SCSS | Tailwaind</li>
              <li>Node</li>
              <li>React Native</li>
              <li>Mocha | Chai</li>
              <li>Jest | Enzyme</li>
              <li>jQuery</li>
              <li>Microsoft Systems</li>
            </ul>
          </div>
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-xl">Front-end Developer</h3>
            <h4 className="text-center text-base">I like to code things from scratch, <br /> and enjoy bringing ideas to <br /> life in the browser.</h4>
            <ul>
              <li>UI / UX</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-xl">Background</h3>
            <h4 className="text-center text-base">Skills I draw from to further my develpment career</h4>
            <ul>
              <li>Sales</li>
              <li>Team Leadership</li>
              <li>Mentorship</li>
              <li>Overall Positivity</li>
              <li>Client Relations</li>
              <li>Volunteer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}