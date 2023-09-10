import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail
} from 'react-icons/ai'
import Resume from '../Resume';

const Hero = () => {
  return (
    <div className="w-full flex flex-col p-1 gap-2 items-center bg-blue-950 mt-24">
      <h1 className="text-3xl text-white">Hello,</h1>
      <h2 className="text-4xl text-white text-center">I'm <span className="kalam">Stephen Katuli,</span> a <span className="text-secondary-focus">Full Stack developer</span> </h2>
      <p className="text-white text-center w-full max-w-sm text-lg">I use my experience in programming to create visually stunning and user-friendly websites to help bring your vision to life and create a website that your users will love.</p>
      <div className="flex text-white text-xl justify-center items-center gap-2">
          <a href="https://www.linkedin.com/in/stephen-katuli/" target='_blank'> <AiFillLinkedin /> </a>
          <a href="https://github.com/stephenkati" target='_blank'> <AiFillGithub /> </a>
          <a href="https://twitter.com/Stephen57913145" target='_blank'> <AiOutlineTwitter /> </a>
          <a href="mailto:stephenkatuli88@gmail.com" target='_blank'> <AiOutlineMail /> </a>
      </div>
      
      <div className="flex gap-3">
        <a href="#contact" className="btn btn-secondary hover:bg-secondary-focus rounded-full">Contact me</a>
        <Resume />
      </div>

    </div>
  )
}

export default Hero;