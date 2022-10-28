import React from 'react';
import projectsSvg from '../../assets/svgs/projects-page.svg';

const Projects = () => (
    <section id="home" className="row m-0 pt-5 pb-5 mt-md-5 mb-md-5">
        <div className="col-md-8">
            <div className="d-flex mb-4">
                <h2 className="secondary-color mb-3 fw-bold fs-4">Projects</h2>
                <hr className="ms-3 w-25" />
            </div>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={projectsSvg} alt="Home" className="img-fluid" />
        </div>
    </section>
);

export default Projects;
