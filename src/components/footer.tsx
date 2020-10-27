import React from 'react'
import { footerImages } from '../assets/images/images'

export const Footer: React.FC = () => {

  const displaySocialMediaIcons = (): JSX.Element[] => {
    return footerImages.socailMediaIcons.map(val => {
      console.log(val)
      return (
        <button className="flex flex-col w-20 h-20 m-6 justify-center base-button rounded-full">
          <img src={`${val}`} alt="Link to " className="m-auto h-10 w-10" />
        </button>
      )
    });
  }

  return (
    <footer className="base-container-height bg-main-purple-light border-t-2 border-main-purple-dark">
      <div className="flex flex-row justify-center">
        {displaySocialMediaIcons()}
      </div>
    </footer>
  )
}