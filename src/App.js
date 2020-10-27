import React from 'react';
import { Header } from './components/header'
import { AboutMe } from './components/aboutMe'
import { SkillsLayout } from './components/skillsLayout'
import { Projects } from './components/projects'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <SkillsLayout />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
