import React from 'react'

export const Testimonials: React.FC = () => {
  return (
    <div className="base-container-height w-1/3 m-auto flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center">Testimonials</h2>
      <h3 className="text-xs mb-4 text-center">People say nice things!</h3>
      <p className="mb-1">
        I had the pleasure to work with Garrett during his contract at Frontier Airlines. 
        Garrett is a talented developer with a keen mind for problem solving and collaboration. 
        During his time at Frontier, he exceeded expectations, quickly becoming a valuable 
        asset to the team. It is without reservation that I can recommend Garrett for future
        positions as a software engineer.
      </p>
      <h3 className="text-xs text-center">- Brandon Haller -</h3>
      <h3 className="text-xs text-center">Sr. Software Engineer at Frontier Airlines</h3>
    </div>
    )
}