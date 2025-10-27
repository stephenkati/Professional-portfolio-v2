import React from 'react'
import Navbar from '../navigation/Navbar'
import Hero from './Hero'
import ProjectsHeader from './ProjectsHeader'

const HeroSection = () => {
  return (
    <header className="hero-section" id="top">
      <Navbar />
      <Hero />
      <ProjectsHeader />
    </header>
  )
}

export default HeroSection
