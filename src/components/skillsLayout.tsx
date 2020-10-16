import React from 'react'

export const SkillsLayout: React.FC = () => {
  return(
    <section className="base-container-height w-full m-auto">
      <div className="w-full h-full m-auto -mt-40 relative">
        <div className="w-2/3 m-auto flex flex-col">
          <div className="flex flex-row">
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-black text-xl rounded-tl-lg">languages</h3>
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-xl">front-end developer</h3>
          <h3 className="m-auto pt-20 h-48 w-5/6 text-center bg-white font-bold text-xl rounded-tr-lg">background</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center justify-evenly w-full">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </section>
  )
}