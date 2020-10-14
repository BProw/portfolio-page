import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header-base">
      <div className="flex flex-row justify-between">
        <button>Home Btn with icon</button>
        <button>Say Hello.</button>
      </div>
      <br/>
      <div>
        <h1>hi, my name is Garrett.</h1>
        <h2>a front-end developer</h2>
      </div>
    </header>
  )
}