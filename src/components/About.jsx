import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col text-center justify-center gap-4 px-4 py-10 items-center text-blue-950" id="about">
      <h3 className="text-3xl font-bold slide-in">About me</h3>
      <p className="text-lg bg-blue-950 text-white p-1 rounded-lg">Full Stack developer with a passion for Ruby on Rails.</p>
      <p className="max-w-sm text-center text-lg">Whether it's a small business website or a large-scale enterprise app, I'm committed to delivering high-quality, scalable, and maintainable solutions. Let's bring your ideas to life!</p>
      <p className="font-bold text-lg">Looking for my next job.</p>
    </div>
  )
}

export default About;
