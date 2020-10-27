import React from 'react'

export const Footer: React.FC = () => {
  return(
    <footer className="base-container-height bg-main-purple-light border-t-2 border-main-purple-dark">
      <div className="flex flex-row justify-center">
        <div className="text-center pt-3 rounded-full border border-main-purple-dark w-12 h-12">email</div>
        <div className="text-center pt-2 rounded-full border border-main-purple-dark w-12 h-12">T</div>
        <div className="text-center pt-2 rounded-full border border-main-purple-dark w-12 h-12">GH</div>
        <div className="text-center pt-2 rounded-full border border-main-purple-dark w-12 h-12">LI</div>
      </div>
    </footer>
  )
}