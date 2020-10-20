import React from 'react';
import { Header } from './components/header'
import { AboutMe } from './components/aboutMe'
import { SkillsLayout } from './components/skillsLayout'
import { Projects } from './components/projects'

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <SkillsLayout />
      <Projects />
    </div>
  );
}

export default App;
