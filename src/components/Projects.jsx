import React from 'react'
import consoleHubImg from '../assets/Projects/consolehub-consoles.png'
import imageHubImg from '../assets/Projects/image-hub.png'
import consolesApiImg from '../assets/Projects/consoles-api.png'
import pokemonFavImg from '../assets/Projects/pokemon-fav.png'
import leaderboardImg from '../assets/Projects/leaderboard.png'

const Projects = () => {
  return (
    <div className="flex flex-col gap-2 items-center px-5 pt-16" id="projects">
      <div className="flex w-full flex-wrap gap-16 px-4 justify-around">

        <div className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">

            <div className="absolute -top-14 w-3/4">
              <img src={consoleHubImg} alt="Consoles Hub" className="w-full max-w-sm rounded-lg" />
            </div>

            <div className="px-2 w-full flex flex-col justify-around card-content">
                <h4 className="font-bold text-2xl text-secondary-focus shrink kalam ">Console Hub</h4>
                <p className=""> ConsoleHub is a cutting-edge app that lets you book gaming sessions. Whether you're a hardcore gamer or just looking to unwind, it's a seamless way to get your game on. </p>
                <div className="w-full py-2">
                    <div className="flex flex-wrap-reverse justify-around w-full gap-2">
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Consoles API</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">React</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Redux</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">TailWind</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Daisy UI</div>
                    </div>
                </div>
                <div className="w-full flex gap-2 justify-around">
                    <a target="_blank" rel="noopener" href="https://console-hub.netlify.app/" className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
                    <a target="_blank" rel="noopener" href="https://github.com/stephenkati/gaming_console_reservation_front_end" className="sourceCode btn btn-primary rounded-lg shrink">Code</a>
                </div>
            </div>
        </div>

        <div className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">

            <div className="absolute -top-14 w-3/4">
              <img src={imageHubImg} alt="Image Hub" className="w-full max-w-sm rounded-lg" />
            </div>

            <div className="px-2 w-full flex flex-col justify-around card-content">
                <h4 className="font-bold text-2xl text-secondary-focus shrink kalam ">Image Hub</h4>
                <p className=""> A web app that provides unsplash image collections.It provides detailed information for each collection a user clicks. </p>
                <div className="w-full py-2">
                    <div className="flex flex-wrap-reverse justify-around w-full gap-2">
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Unsplash API</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">React</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Redux</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">JavaScript</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">CSS</div>
                    </div>
                </div>
                <div className="w-full flex gap-2 justify-around">
                    <a target="_blank" rel="noopener" href="https://image-hub.onrender.com/" className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
                    <a target="_blank" rel="noopener" href="https://github.com/stephenkati/Unsplash-Image-Hub" className="sourceCode btn btn-primary rounded-lg shrink">Code</a>
                </div>
            </div>
        </div>

        <div className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">

            <div className="absolute -top-14 w-3/4">
              <img src={consolesApiImg} alt="Consoles Api" className="w-full max-w-sm rounded-lg" />
            </div>

            <div className="px-2 w-full flex flex-col justify-around card-content">
                <h4 className="font-bold text-2xl text-secondary-focus shrink kalam ">Consoles API</h4>
                <p className=""> Gaming_console_reservation_back_end is a backend rails api that provides service to the front-end react app to fetch data for gaming console reservation. </p>
                <div className="w-full py-2">
                    <div className="flex flex-wrap-reverse justify-around w-full gap-2">
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink"> Ruby on Rails </div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink"> Ruby </div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink"> Devise </div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink"> Postgres </div>
                    </div>
                </div>
                <div className="w-full flex gap-2 justify-around">
                    <a target="_blank" rel="noopener" href="https://gaming-console-reservation.onrender.com/" className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
                    <a target="_blank" rel="noopener" href="https://github.com/stephenkati/gaming_console_reservation_back_end" className="sourceCode btn btn-primary rounded-lg shrink">Code</a>
                </div>
            </div>
        </div>

        <div className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">

        <div className="absolute -top-14 w-3/4">
            <img src={pokemonFavImg} alt="Categories page for smart wallet app" className="w-full max-w-sm rounded-lg" />
        </div>

        <div className="px-2 w-full flex flex-col justify-around card-content">
            <h4 className="font-bold text-2xl text-secondary-focus shrink kalam ">Pokemon favourites</h4>
            <p className=""> It display data from the Pokeapi and involvement API. It allows users to like, comment and view comments on different pokemon characters </p>
            <div className="w-full py-2">
                <div className="flex flex-wrap-reverse justify-around w-full gap-2">
                    <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Poke Api</div>
                    <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Involvement Api</div>
                    <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">JavaScript</div>
                    <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">CSS</div>
                    <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">HTML</div>
                </div>
            </div>
            <div className="w-full flex gap-2 justify-around">
                <a target="_blank" rel="noopener" href="https://stephenkati.github.io/JavaScript-capstone-group-project/dist/" className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
                <a target="_blank" rel="noopener" href="https://github.com/stephenkati/JavaScript-capstone-group-project" className="sourceCode btn btn-primary rounded-lg shrink">Code</a>
            </div>
        </div>
        </div>

        <div className="card w-full text-white pt-20 py-1 bg-blue-950 rounded-2xl relative flex flex-col items-center justify-end">

            <div className="absolute -top-14 w-3/4">
              <img src={leaderboardImg} alt="Categories page for smart wallet app" className="w-full max-w-sm rounded-lg" />
            </div>

            <div className="px-2 w-full flex flex-col justify-around card-content">
                <h4 className="font-bold text-2xl text-secondary-focus shrink kalam ">Leaderboard</h4>
                <p className=""> A website that displays scores submitted by different players.It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service. </p>
                <div className="w-full py-2">
                    <div className="flex flex-wrap-reverse justify-around w-full gap-2">
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">Leaderboard Api</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">JavaScript</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">CSS</div>
                        <div className="w-max bg-white rounded-lg text-sm text-blue-950 kalam p-1 shrink">HTML</div>
                    </div>
                </div>
                <div className="w-full flex gap-2 justify-around">
                    <a target="_blank" rel="noopener" href="https://stephenkati.github.io/Leaderboard/dist/" className="liveDemo btn btn-primary rounded-lg shrink">Live</a>
                    <a target="_blank" rel="noopener" href="https://github.com/stephenkati/Leaderboard" className="sourceCode btn btn-primary rounded-lg shrink">Code</a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;
