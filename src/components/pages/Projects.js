import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import projectsSvg from '../../assets/svgs/projects-page.svg';

const suiteUpImage = require('../../assets/project-screenshots/suite-up.png');
// const suiteUpImage2 = require('../../assets/project-screenshots/suite-up-2.png');
// const suiteUpImage3 = require('../../assets/project-screenshots/suite-up-3.png');
// const suiteUpImage4 = require('../../assets/project-screenshots/suite-up-mobile.svg');
const budgetAppImage = require('../../assets/project-screenshots/budget-app.png');
// const budgetAppImage2 = require('../../assets/project-screenshots/budget-app-mobile.svg');
const weatherAppImage = require('../../assets/project-screenshots/weather-app.png');
// const weatherAppImage2 = require('../../assets/project-screenshots/weather-app-mobile.svg');
const bookStoreAppImage = require('../../assets/project-screenshots/book-store.png');
const mathMagiciansImage = require('../../assets/project-screenshots/math-magicians-1.png');
// const mathMagiciansImage2 = require('../../assets/project-screenshots/math-magicians-mobile.svg');
const topRatedMoviesImage = require('../../assets/project-screenshots/top-rated-movies.png');
// const topRatedMoviesImage2 = require('../../assets/project-screenshots/top-rated-movies-1.png');
const leaderboardImage = require('../../assets/project-screenshots/leaderboard-1.png');
// const leaderboardImage2 = require('../../assets/project-screenshots/leaderboard-mobile.svg');
const awesomeBooksImage = require('../../assets/project-screenshots/awesom-books-1.png');
// const awesomeBooksImage2 = require('../../assets/project-screenshots/awesome-books-2.png');
// const awesomeBooksImage3 = require('../../assets/project-screenshots/awesome-book-mobile.svg');
const incomingMovieImage = require('../../assets/project-screenshots/incoming-movies-1.png');
// const incomingMovieImage2 = require('../../assets/project-screenshots/incoming-movies-2.png');
// const incomingMovieImage3 = require('../../assets/project-screenshots/incoming-movies-mobile.svg');

const Projects = () => {
    const [show, setShow] = useState(false);
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        image: '',
    });

    const projects = [
        {
            id: '1',
            title: 'SuiteApp',
            description: 'SuiteUp is a Rails React app which simulates a hotel booking system. It allows users to book a room, view their bookings, and cancel bookings. It also allows users to create a new room and view all rooms. It uses a PostgreSQL database to store the data, and RESTful API to communicate with the database.',
            image: suiteUpImage,
            languages_and_tools: ['Ruby on Rails', 'React', 'PostgreSQL', 'Bootstrap', 'Heroku', 'Vercel'],
        },
        {
            id: '2',
            title: 'Budget App',
            description: 'Budget App is a Ruby on Rails app which allows users to create a budget and track their expenses. It uses a PostgreSQL database to store the data, RESTful API to communicate with the database, Devise for user authentication, and Swagger for API documentation.',
            image: budgetAppImage,
            languages_and_tools: ['Ruby on Rails', 'PostgreSQL', 'Heroku', 'Swagger', 'Devise'],
        },
        {
            id: '3',
            title: 'Weather App',
            description: 'Weather App is a React app which allows users to search for a city and state and view the current weather conditions and a 5-day forecast. It uses the OpenWeatherMap API to get the weather data.',
            image: weatherAppImage,
            languages_and_tools: ['React', 'OpenWeatherMap API', 'Netlify', 'Bootstrap'],
        },
        {
            id: '4',
            title: 'Bookstore CMS',
            description: 'Bookstore CMS is a React app which allows users to add, remove, and edit books. It uses a PostgreSQL database to store the data, RESTful API to communicate with the database, and React Router to handle routing.',
            image: bookStoreAppImage,
            languages_and_tools: ['React', 'PostgreSQL', 'React Router', 'Netlify', 'Bootstrap'],
        },
        {
            id: '5',
            title: 'Math Magicians',
            description: 'Math Magicians is a React app which allows users to perform basic math operations. It uses React Router to handle routing.',
            image: mathMagiciansImage,
            languages_and_tools: ['React', 'React Router', 'Netlify', 'Bootstrap'],
        },
        {
            id: '6',
            title: 'Top-Rated Movies',
            description: 'Top-Rated Movies is a JavaScript app which allows users to view the 20 top-rated movies. It uses the TMDB API to get the movie data.',
            image: topRatedMoviesImage,
            languages_and_tools: ['JavaScript', 'TMDB API', 'Netlify', 'Bootstrap'],
        },
        {
            id: '7',
            title: 'Leaderboard',
            description: 'Leaderboard is a JavaScript app which allows users to view the players scores and add their own score. It uses the Webpack and ES6 modules to organize the code, and Microverse API to get the player data.',
            image: leaderboardImage,
            languages_and_tools: ['JavaScript', 'Webpack', 'ES6 modules', 'Microverse API', 'Netlify', 'Bootstrap'],
        },
        {
            id: '8',
            title: 'Awesome Books',
            description: 'Awesome Books is a JavaScript app which allows users to add and remove books. It uses the ES6 modules to organize the code.',
            image: awesomeBooksImage,
            languages_and_tools: ['HTML', 'JavaScript', 'ES6 modules', 'GitHub Pages', 'CSS'],
        },
        {
            id: '9',
            title: 'Incoming Movies Event',
            description: 'Incoming Movies Event is a JavaScript app which allows users to view an upcoming event about movies. It shows the event details, the speakers, and the schedule.',
            image: incomingMovieImage,
            languages_and_tools: ['HTML', 'JavaScript', 'GitHub Pages', 'CSS'],
        },
    ];
    const handleClick = (event) => {
        const project = projects.find((project) => project.id === event.target.id);
        console.log(project);
        setProjectData({
            title: project.title,
            description: project.description,
            image: project.image,
        });
        setShow(true);
    };
    return (
        <section id="projects" className="row m-0 pt-5 pb-5 mt-md-5 mb-md-5">
            <div className="col-md-9">
                <div className="d-flex mb-4">
                    <h2 className="secondary-color mb-3 fw-bold fs-4">Projects</h2>
                    <hr className="ms-3 w-25" />
                </div>
                <Carousel
                    fade
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y" />}
                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y" />}
                    className="carousel-div"
                >
                    {projects.map((project) => (
                        <Carousel.Item
                            key={project.id}
                            onClick={handleClick}
                        >
                            <img
                                className="d-block w-100 rounded shadow border border-2 border-dark"
                                style={{
                                    height: 'auto', objectFit: 'cover', objectPosition: 'center', cursor: 'pointer',
                                }}
                                src={project.image}
                                alt={project.title}
                            />
                            <Carousel.Caption
                                className="d-flex flex-column justify-content-end carousel-info"
                            >
                                <h3
                                    className="text-white fw-bold fs-5"
                                >
                                    {project.title}
                                </h3>
                                <button
                                    id={project.id}
                                    onClick={handleClick}
                                    className="btn btn-outline-light mt-1 fs-6 fw-bold rounded-pill">
                                    See Project
                                </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    animation
                    size="lg"
                    fullscreen="md-down"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {projectData.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={projectData.image} alt={projectData.title} className="img-fluid" />
                        <p>{projectData.description}</p>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center">
                <img src={projectsSvg} alt="Home" className="img-fluid" />
            </div>
        </section>
    );
};

export default Projects;
