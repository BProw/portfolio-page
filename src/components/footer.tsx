import React from 'react'
import { footerImages } from '../assets/images/images'

export const Footer: React.FC = () => {

  const displaySocialMediaIcons = (): JSX.Element[] => {
    return footerImages.socailMediaIcons.map(val => {
      return (
        <button className="flex flex-col w-20 h-20 m-6 justify-center base-button rounded-full">
          <img src={`${val}`} alt="Link to " className="m-auto h-10 w-10" />
        </button>
      )
    });
  }

  return (
    <footer className="base-container-height bg-main-purple-light border-t-2 border-main-purple-dark">
      <div className="h-64 w-2/3 m-auto -mt-32 border rounded bg-main-gray-blue-medium">
        <div className="flex flex-row justify-evenly mt-12">
          <p className="text-white text-3xl font-semibold">
            <strong>Interested in working together?</strong> 
            <br />
            Let's start something
            <br />
            Email me.
          </p>
          <div role="button" className="footer-button flex flex-col justify-center w-56 h-16 mt-10 font-semibold text-center text-white border-2 rounded-full">Let's go!</div>
        </div>
      </div>
      <a href=""><img src={footerImages.gIcon} alt="G icon back to home" className="h-10 w-10 m-auto mt-32" /></a>
      <h3 className="text-center my-8">Some phrase or words to sum it up</h3>
      <div className="flex flex-row justify-center">
        {displaySocialMediaIcons()}
      </div>
    </footer>
  )
}