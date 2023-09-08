import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail
} from 'react-icons/ai'

const Hero = () => {
  return (
    <div class="w-full flex flex-col p-1 gap-2 items-center bg-blue-950 ">
      <h1 class="text-3xl text-white">Hello,</h1>
      <h2 class="text-4xl text-white text-center">I'm Stephen Katuli, a <span class="text-secondary-focus">Full Stack developer</span> </h2>
      <p class="text-white text-center w-full max-w-sm">I use my experience in programming to create visually stunning and user-friendly websites to help bring your vision to life and create a website that your users will love.</p>
      <div class="flex text-white text-xl justify-center items-center gap-2">
          <a href="https://www.linkedin.com/in/stephen-katuli/" target='_blank'> <AiFillLinkedin /> </a>
          <a href="https://github.com/stephenkati" target='_blank'> <AiFillGithub /> </a>
          <a href="https://twitter.com/Stephen57913145" target='_blank'> <AiOutlineTwitter /> </a>
          <a href="mailto:stephenkatuli88@gmail.com" target='_blank'> <AiOutlineMail /> </a>
      </div>
      <a href="#" class="btn btn-secondary hover:bg-secondary-focus rounded-full">Contact me</a>
    </div>
  )
}

export default Hero;