import React from 'react';
import aboutSvg from '../../assets/svgs/about-page.svg';

const About = () => (
    <section id="about" className="row m-0 pt-5 pb-5 h-100">
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={aboutSvg} alt="About" className="img-fluid" />
        </div>
        <div className="col-md-8">
            <h2 className="secondary-color mb-4 fw-bold fs-5">About Me</h2>
        </div>
    </section>
);

export default About;
