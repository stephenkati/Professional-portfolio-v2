// console hub images
import consoleHubImg from '../../assets/Projects/consolehub-consoles.png'
import consoleHubTab from '../../assets/Projects/consolehub-consoles-tablet.png'
import consoleHubMob from '../../assets/Projects/consolehub-consoles-mobile.png'

// image hub images
import imageHubImg from '../../assets/Projects/image-hub.png'
import imageHubTab from '../../assets/Projects/image-hub-tablet.png'
import imageHubMob from '../../assets/Projects/image-hub-mobile.png'

// consoles api images
import consolesApiImg from '../../assets/Projects/consoles-api.png'
import consolesApiTab from '../../assets/Projects/consoles-api-tab.png'

// pokemon favourites images
import pokemonFavImg from '../../assets/Projects/pokemon-fav.png'
import pokemonFavTab from '../../assets/Projects/pokemon-fav-tablet.png'
import pokemonFavMob from '../../assets/Projects/pokemon-fav-mobile.png'

// leaderboard images
import leaderboardImg from '../../assets/Projects/leaderboard.png'
import leaderboardTab from '../../assets/Projects/leaderboard-tablet.png'
import leaderboardMob from '../../assets/Projects/leaderboard-mobile.png'

const ProjectsList = [
  {
    name: 'Console Hub',
    images: [consoleHubImg, consoleHubTab, consoleHubMob],
    description: "ConsoleHub is a cutting-edge app that lets you book gaming sessions. Whether you're a hardcore gamer or just looking to unwind, it's a seamless way to get your game on.",
    stacks: ['Consoles API', 'React', 'Redux', 'TailWind', 'Daisy UI'],
    live: 'https://console-hub.netlify.app/',
    code: 'https://github.com/stephenkati/gaming_console_reservation_front_end'
  },
  {
    name: 'Image Hub',
    images: [imageHubImg, imageHubTab, imageHubMob],
    description: "A web app that provides unsplash image collections.It provides detailed information for each collection a user clicks.",
    stacks: ['Unsplash API', 'React', 'Redux', 'JavaScript', 'CSS'],
    live: 'https://image-hub.onrender.com/',
    code: 'https://github.com/stephenkati/Unsplash-Image-Hub'
  },
  {
    name: 'Consoles API',
    images: [consolesApiImg, consolesApiTab],
    description: "Gaming_console_reservation_back_end is a backend rails api that provides service to the front-end react app to fetch data for gaming console reservation.",
    stacks: ['Ruby on Rails', 'Ruby', 'Devise', 'Postgres'],
    live: 'https://gaming-console-reservation.onrender.com/',
    code: 'https://github.com/stephenkati/gaming_console_reservation_back_end'
  },
  {
    name: 'Pokemon favourites',
    images: [pokemonFavImg, pokemonFavTab, pokemonFavMob],
    description: "It display data from the Pokeapi and involvement API. It allows users to like, comment and view comments on different pokemon characters ",
    stacks: ['Poke Api', 'Involvement Api', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://stephenkati.github.io/JavaScript-capstone-group-project/dist/',
    code: 'https://github.com/stephenkati/JavaScript-capstone-group-project'
  },
  {
    name: 'Leaderboard',
    images: [leaderboardImg, leaderboardTab, leaderboardMob],
    description: "A website that displays scores submitted by different players.It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    stacks: ['Leaderboard Api', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://stephenkati.github.io/Leaderboard/dist/',
    code: 'https://github.com/stephenkati/Leaderboard'
  }
];

export default ProjectsList;
