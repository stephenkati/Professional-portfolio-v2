import React from 'react'
import Navbar from '../navigation/Navbar'
import Hero from './Hero'
import ProjectsHeader from './ProjectsHeader'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-around min-h-screen items-center">
      <Navbar />
      <Hero />
      <ProjectsHeader />
    </div>
  )
}

export default HeroSection;
