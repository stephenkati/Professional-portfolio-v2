import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center text-center p-4 gap-7 justify-center w-full" id="contact">
      <div className="flex flex-col gap-2 text-blue-950">
          <h3 className="font-bold text-3xl">Contact Me</h3>
          <p className="max-w-sm text-lg">I am committed to creating a warm and welcoming environment for everyone, and I look forward to getting to hear from you.</p>
          <p className="text-lg bg-blue-950 text-white p-1 rounded-lg">So don't be shy, drop me a message and let's get started!</p>
      </div>

      <form action="https://formspree.io/f/xyyapkva" method="POST" className="flex flex-col p-2 gap-4">
          <input className="bg-blue-950 text-white rounded-full p-2" type="text" name="name" id="name" placeholder="Your name please..." required />
          <input className="bg-blue-950 text-white rounded-full p-2" type="email" name="email" id="email" placeholder="Your email please..." required />
          <textarea className="bg-blue-950 text-white rounded h-40 p-4" type="text" name="message" id="message" placeholder="Write your message here..." required> </textarea>
          <button name="submit" id="submit" className="btn btn-secondary text-white">Send</button>
      </form>
    </div>
  )
}

export default Contact;
