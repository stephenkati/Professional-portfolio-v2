import React from 'react'
import Navbar from '../navigation/Navbar'
import Hero from './Hero'
import ProjectsHeader from './ProjectsHeader'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-around min-h-screen items-center">
      <Navbar />
      <Hero />
      <ProjectsHeader />
      {/* <AboutMe />
      <ContactMe /> */}
    </div>
  )
}

export default HeroSection;
