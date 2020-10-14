import React from 'react';
import images from '../assets/images/images'

export const Header: React.FC = () => {
  return (
    <header className="header-base">
      <div className="flex flex-row justify-between">
        <img role="button" src={images.gIcon} alt="G icon" className="h-12 w-12 m-6"/>
        <button className="base-button w-32 m-6 p-2 text-main-purple-dark">Say Hello.</button>
      </div>
      <br/>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-bold">hi, my name is Garrett</h1>
        <h2 className="text-xl font-medium">front-end developer.</h2>
      </div>
    </header>
  )
}