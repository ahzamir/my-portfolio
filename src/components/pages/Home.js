import React from 'react';
import homeSvg from '../../assets/svgs/home-page.svg';

const Home = () => (
    <section id="home" className="row m-0 pt-5 pb-5 h-100">
        <div className="col-md-8">
            <h2 className='secondary-color mb-3 fw-bold fs-5'>Hi there!</h2>
            <h1 className='quaternary-color fs-1 fw-bold mb-5'>I'm Ahmad Zamir Yousufi<br />Full Stack Web Developer.</h1>
            <p className='tertiary-color fs-5'>Full-stack software engineer with a love for <span className='secondary-color'>clean code</span>, <span className='secondary-color'>responsive web design</span>, and <span className='secondary-color'>test-driven development</span>. Able to work effectively on independent projects and collaborate as part of a productive team. <span className='secondary-color'>Ideas</span>, <span className='secondary-color'>teamwork</span>, and the <span className='secondary-color'>code quality</span> of the projects are very important to me. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={homeSvg} alt="Home" className="img-fluid" />
        </div>
    </section>
);

export default Home;