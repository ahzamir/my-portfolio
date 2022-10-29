import React from 'react';
import projectsSvg from '../../assets/svgs/projects-page.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
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
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 992, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
        },
    };
    return (
        <section id="projects" className="row m-0 pt-5 pb-5 mt-md-5 mb-md-5">
            <div className="col-md-8">
                <div className="d-flex mb-4">
                    <h2 className="secondary-color mb-3 fw-bold fs-4">Projects</h2>
                    <hr className="ms-3 w-25" />
                </div>
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    keyBoardControl
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container mb-5 mt-5 pt-5 pb-5 ps-5 pe-5 rounded-3"
                    deviceType={responsive.deviceType}
                    partialVisible
                    swipeable
                    showDots
                    renderDotsOutside
                    itemClass="carousel-item-padding-40-px ps-4 pe-2 rounded-5 w-100"
                    slidesToSlide={1}
                    arrows
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                >
                    {projects.map((project) => (
                        <a href="#about" key={project.id} className="text-decoration-none">
                            <div className="card border-0 shadow-sm rounded-5">
                                <img src={project.image} className="card-img-top rounded-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </Carousel>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
                <img src={projectsSvg} alt="Home" className="img-fluid" />
            </div>
        </section >
    );
};

export default Projects;