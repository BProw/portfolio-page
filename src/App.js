import React from 'react';
import { Header } from './components/header'
import { AboutMe } from './components/aboutMe'
import { SkillsLayout } from './components/skillsLayout'
import { Projects } from './components/projects'
import { Testimonials } from './components/testimonials'

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <SkillsLayout />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default App;
