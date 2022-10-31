import React from 'react';
import projectsSvg from '../../assets/svgs/projects-page.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            image: 'https://picsum.photos/200/300'
        }
    ];
    return (
        <section id="projects" className="row m-0 pt-5 pb-5 mt-md-5 mb-md-5">
            <div className="col-md-8">
                <div className="d-flex mb-4">
                    <h2 className="secondary-color mb-3 fw-bold fs-4">Projects</h2>
                    <hr className="ms-3 w-25" />
                </div>
                <Slider {...settings}>
                    {projects.map(project => (
                        <div key={project.id} className="card mb-3">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <h1 className="card-title">{project.title}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
                <img src={projectsSvg} alt="Home" className="img-fluid" />
            </div>
        </section >
    );
};

export default Projects;