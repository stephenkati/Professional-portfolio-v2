import React from 'react'
import reactIcon from '../assets/Icons/react.svg'
import reduxIcon from '../assets/Icons/redux.svg'
import javascriptIcon from '../assets/Icons/javascript.svg'
import viteIcon from '../assets/Icons/vite-svgrepo-com.svg'
import nextJSIcon from '../assets/Icons/next-js-svgrepo-com.svg'
import htmlIcon from '../assets/Icons/html5.svg'
import cssIcon from '../assets/Icons/css3.svg'
import tailwindIcon from '../assets/Icons/tailwind-css.svg'
import bootstrapIcon from '../assets/Icons/bootstrap.svg'
import rubyIcon from '../assets/Icons/ruby.svg'
import railsIcon from '../assets/Icons/Rails.png'
import postgresIcon from '../assets/Icons/postgresql.svg'
import mysqlIcon from '../assets/Icons/mysql.svg'
import gitIcon from '../assets/Icons/git.svg'
import githubIcon from '../assets/Icons/github-142-svgrepo-com.svg'
import netlifyIcon from '../assets/Icons/netlify.svg'
import jestIcon from '../assets/Icons/jest-svgrepo-com.svg'
import webpackIcon from '../assets/Icons/icons8-webpack.svg'
import figmaIcon from '../assets/Icons/figma.svg'
import photoshopIcon from '../assets/Icons/photoshop.svg'
import illustratorIcon from '../assets/Icons/illustrator.svg'


const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <h3 className="font-bold text-3xl text-blue-950 slide-in" id='skills'>Skills & Languages</h3>

      <div className="p-4 flex flex-col items-center gap-4">

        <div className="p-2 flex flex-col gap-2 items-center">

          <h4 className="font-bold text-2xl text-blue-950">Frond-End</h4>

          <div className="flex flex-wrap justify-between gap-4">
              <div className="flex flex-col gap-1 items-center">
                  <img src={reactIcon} alt="React" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">React</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={reduxIcon} alt="Redux" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">Redux</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={javascriptIcon} alt="JavaScript" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">JavaScript</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={viteIcon} alt="Vite" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">Vite</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={nextJSIcon} alt="Next Js" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">Next Js</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={htmlIcon} alt="Html5" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">HTML</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={cssIcon} alt="CSS3" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">CSS</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={tailwindIcon} alt="Tailwind CSS" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">Tailwind</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                  <img src={bootstrapIcon} alt="Bootstrap" className="h-10 w-10" />
                  <p className="text-xs text-blue-950">Bootstrap</p>
              </div>
          </div>
        </div>

        <div className="p-2 flex flex-col gap-2 items-center">
            <h4 className="font-bold text-2xl text-blue-950">Back-End</h4>
            <div className="flex flex-wrap justify-between gap-4">
                <img src={rubyIcon} alt="Ruby" className="h-10 w-10" />
                <img src={railsIcon} alt="Ruby on Rails" className="h-10 w-10" />
                <img src={postgresIcon} alt="PostgreSQL" className="h-10 w-10" />
                <img src={mysqlIcon} alt="MySQL" className="h-10 w-10" />
            </div>
        </div>

        <div class="p-2 flex flex-col gap-2 items-center">
          <h4 class="font-bold text-2xl text-blue-950">Tools & Technologies</h4>
          <div class="flex flex-wrap justify-between gap-4">
              <div class="flex flex-col gap-1 items-center">
                  <img src={gitIcon} alt="Git" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Git</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={githubIcon} alt="Github" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Github</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={netlifyIcon} alt="Netlify" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Netlify</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={jestIcon} alt="Jest" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Jest</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={webpackIcon} alt="Webpack" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Webpack</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={figmaIcon} alt="Figma" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Figma</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={photoshopIcon} alt="Photoshop" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Photoshop</p>
              </div>
              <div class="flex flex-col gap-1 items-center">
                  <img src={illustratorIcon} alt="illustrator" class="h-10 w-10" />
                  <p class="text-xs text-blue-950">Illustrator</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Skills;
