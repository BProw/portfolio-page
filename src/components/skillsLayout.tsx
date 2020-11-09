import React from 'react'

export const SkillsLayout: React.FC = () => {
  return (
    <section className="base-container-height w-full m-auto">
      <div className="w-2/3 h-full m-auto bg-white -mt-32 rounded-lg">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-black text-xl">Languages | Frameworks</h3>
            <h4 className="text-center text-sm font-bold text-main-purple-dark">I enjoy coding in these <br/> languages but love <br/> learning new skills even more.</h4>
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
              <li>Microsoft Systems | Azure</li>
              <li>Sanity CMS</li>
            </ul>
          </div>
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-xl">Developer</h3>
            <h4 className="text-center text-sm font-bold text-main-purple-dark">I like to code things from scratch, <br /> and enjoy bringing ideas to <br /> life in the browser.</h4>
            <ul>
              <li>Strong code practices</li>
              <li>UI / UX</li>
              <li>Accessibility</li>
              <li>Unit Testing</li>
              <li>RESTful API Develpment</li>
              <li>Authentication</li>
              <li>Native applications</li>
              <li>Ecommerce web applications</li>
              <li>Agile methodology</li>
            </ul>
          </div>
          <div className="flex flex-col mt-16">
            <h3 className="text-center mb-5 font-bold text-xl">Background</h3>
            <h4 className="text-center text-sm font-bold text-main-purple-dark">Skills I draw from these <br/> skills and experiences to help <br/> further my develpment career.</h4>
            <ul>
              <li>Sales</li>
              <li>Team leadership</li>
              <li>Customer satisfaction</li>
              <li>Mentorship</li>
              <li>Problem solving</li>
              <li>Client relations</li>
              <li>Volunteer experience</li>
              <li>World travel</li>
              <li>Hospitality</li>
              <li>Positive thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}