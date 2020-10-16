import React from 'react';
import { headerImages }from '../assets/images/images'

export const Header: React.FC = () => {
    const getHeaderImages = ():JSX.Element[] => {
    return headerImages.headerIcons.map(val => {
      return <img src={`${val}`} alt="Decorative icon" className="h-16 w-16 m-6"/>
    })
  };

  return (
    <header className="base-container-height">
      <div className="flex flex-row justify-between">
        <img role="button" src={headerImages.gIcon} alt="G icon" className="h-12 w-12 m-6 hover:animate-spin"/>
        <button className="base-button w-32 m-6 p-2 text-main-purple-dark">Say Hello</button>
      </div>
      <br/>
      <div className="flex flex-col items-center mt-24">
        <h1 className="text-6xl font-bold">hi, my name is Garrett</h1>
        <h2 className="mb-64 text-xl font-medium">front-end developer.</h2>
      </div>
      <div className="w-full pt-2 flex flex-row justify-center"> 
        {getHeaderImages()}
      </div>
        <div className="border-b-2 border-main-purple-dark"></div>
    </header>
  )
}