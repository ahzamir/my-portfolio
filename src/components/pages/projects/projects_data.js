/* eslint-disable max-len */

const suiteUpImage = require('../../../assets/project-screenshots/suite-up.png');
const suiteUpImage2 = require('../../../assets/project-screenshots/suite-up-2.png');
const suiteUpImage3 = require('../../../assets/project-screenshots/suite-up-3.png');
const suiteUpImage4 = require('../../../assets/project-screenshots/suite-up-4.png');
// const suiteUpImage5 = require('../../../assets/project-screenshots/suite-up-mobile.svg');
const budgetAppImage = require('../../../assets/project-screenshots/budget-app.png');
// const budgetAppImage2 = require('../../../assets/project-screenshots/budget-app-mobile.svg');
const weatherAppImage = require('../../../assets/project-screenshots/weather-app.png');
// const weatherAppImage2 = require('../../../assets/project-screenshots/weather-app-mobile.svg');
const bookStoreAppImage = require('../../../assets/project-screenshots/book-store.png');
const mathMagiciansImage = require('../../../assets/project-screenshots/math-magicians-1.png');
// const mathMagiciansImage2 = require('../../../assets/project-screenshots/math-magicians-mobile.svg');
const topRatedMoviesImage = require('../../../assets/project-screenshots/top-rated-movies.png');
const topRatedMoviesImage2 = require('../../../assets/project-screenshots/top-rated-movies-1.png');
const leaderboardImage = require('../../../assets/project-screenshots/leaderboard-1.png');
// const leaderboardImage2 = require('../../../assets/project-screenshots/leaderboard-mobile.svg');
const awesomeBooksImage = require('../../../assets/project-screenshots/awesom-books-1.png');
const awesomeBooksImage2 = require('../../../assets/project-screenshots/awesom-books-2.png');
// const awesomeBooksImage3 = require('../../../assets/project-screenshots/awesome-book-mobile.svg');
const incomingMovieImage = require('../../../assets/project-screenshots/incoming-movies-1.png');
const incomingMovieImage2 = require('../../../assets/project-screenshots/incoming-movies-2.png');
// const incomingMovieImage3 = require('../../../assets/project-screenshots/incoming-movies-mobile.svg');

const projects = [
  {
    id: '1',
    title: 'SuiteApp',
    description: 'SuiteUp is a Rails React app which simulates a hotel booking system. It allows users to book a room, view their bookings, and cancel bookings. It also allows users to create a new room and view all rooms. It uses a PostgreSQL database to store the data, and RESTful API to communicate with the database.',
    image: suiteUpImage,
    languages_and_tools: ['Ruby on Rails', 'React', 'PostgreSQL', 'Bootstrap', 'Heroku', 'Vercel'],
    more_images: [
      suiteUpImage,
      suiteUpImage2,
      suiteUpImage3,
      suiteUpImage4,
      // suiteUpImage5,
    ],
    live_link: 'https://hotel-room-frontend.vercel.app/',
    source_link: 'https://github.com/felixodette/hotel-room-frontend',
  },
  {
    id: '2',
    title: 'Budget App',
    description: 'Budget App is a Ruby on Rails app which allows users to create a budget and track their expenses. It uses a PostgreSQL database to store the data, RESTful API to communicate with the database, Devise for user authentication, and Swagger for API documentation.',
    image: budgetAppImage,
    languages_and_tools: ['Ruby on Rails', 'PostgreSQL', 'Heroku', 'Swagger', 'Devise'],
    more_images: [
      budgetAppImage,
      // budgetAppImage2,
    ],
    live_link: 'https://zamir-budget-app.herokuapp.com/users/sign_in',
    source_link: 'https://github.com/ahzamir/budget-app',
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'Weather App is a React app which allows users to search for a city and state and view the current weather conditions and a 5-day forecast. It uses the OpenWeatherMap API to get the weather data.',
    image: weatherAppImage,
    languages_and_tools: ['React', 'OpenWeatherMap API', 'Netlify', 'Bootstrap'],
    more_images: [
      weatherAppImage,
      // weatherAppImage2,
    ],
    live_link: 'https://gregarious-pavlova-aaa751.netlify.app/',
    source_link: 'https://github.com/ahzamir/weather-condition-app',
  },
  {
    id: '4',
    title: 'Bookstore CMS',
    description: 'Bookstore CMS is a React app which allows users to add, remove, and edit books. It uses a PostgreSQL database to store the data, RESTful API to communicate with the database, and React Router to handle routing.',
    image: bookStoreAppImage,
    languages_and_tools: ['React', 'PostgreSQL', 'React Router', 'Netlify', 'Bootstrap'],
    more_images: [
      bookStoreAppImage,
    ],
    live_link: 'https://62ba1732b6caef0aee728265--leafy-gingersnap-7d2f91.netlify.app/',
    source_link: 'https://github.com/ahzamir/Book-Store',
  },
  {
    id: '5',
    title: 'Math Magicians',
    description: 'Math Magicians is a React app which allows users to perform basic math operations. It uses React Router to handle routing.',
    image: mathMagiciansImage,
    languages_and_tools: ['React', 'React Router', 'Netlify', 'Bootstrap'],
    more_images: [
      mathMagiciansImage,
      // mathMagiciansImage2,
    ],
    live_link: 'https://62ab3f1807095e1efe36b2cd--quiet-gumdrop-092633.netlify.app/',
    source_link: 'https://github.com/ahzamir/Math-Magicians',
  },
  {
    id: '6',
    title: 'Top-Rated Movies',
    description: 'Top-Rated Movies is a JavaScript app which allows users to view the 20 top-rated movies. It uses the TMDB API to get the movie data.',
    image: topRatedMoviesImage,
    languages_and_tools: ['JavaScript', 'TMDB API', 'Netlify', 'Bootstrap'],
    more_images: [
      topRatedMoviesImage,
      topRatedMoviesImage2,
    ],
    live_link: 'https://63472938939be20b59bda72c--stellular-cassata-c5fee6.netlify.app/',
    source_link: 'https://github.com/felixodette/Javascript-Group-Capstone',
  },
  {
    id: '7',
    title: 'Leaderboard',
    description: 'Leaderboard is a JavaScript app which allows users to view the players scores and add their own score. It uses the Webpack and ES6 modules to organize the code, and Microverse API to get the player data.',
    image: leaderboardImage,
    languages_and_tools: ['JavaScript', 'Webpack', 'ES6 modules', 'Microverse API', 'Netlify', 'Bootstrap'],
    more_images: [
      leaderboardImage,
      // leaderboardImage2,
    ],
    live_link: 'https://ahzamir.github.io/Leaderboard/',
    source_link: 'https://github.com/ahzamir/Leaderboard',
  },
  {
    id: '8',
    title: 'Awesome Books',
    description: 'Awesome Books is a JavaScript app which allows users to add and remove books. It uses the ES6 modules to organize the code.',
    image: awesomeBooksImage,
    languages_and_tools: ['HTML', 'JavaScript', 'ES6 modules', 'GitHub Pages', 'CSS'],
    more_images: [
      awesomeBooksImage,
      awesomeBooksImage2,
    ],
    live_link: 'https://ahzamir.github.io/Awessom-books-with-ES6/',
    source_link: 'https://github.com/ahzamir/Awessom-books-with-ES6',
  },
  {
    id: '9',
    title: 'Incoming Movies Event',
    description: 'Incoming Movies Event is a JavaScript app which allows users to view an upcoming event about movies. It shows the event details, the speakers, and the schedule.',
    image: incomingMovieImage,
    languages_and_tools: ['HTML', 'JavaScript', 'GitHub Pages', 'CSS'],
    more_images: [
      incomingMovieImage,
      incomingMovieImage2,
    ],
    live_link: 'https://ahzamir.github.io/Incoming-Movies/',
    source_link: 'https://github.com/ahzamir/Incoming-Movies',
  },
];

export default projects;
