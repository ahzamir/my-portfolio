/* eslint-disable max-len */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsSvg from '../../../assets/svgs/projects-page.svg';
import projects from './projects_data';

const Projects = () => {
  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    image: '',
    more_images: [],
    languages_and_tools: [],
    live_link: '',
    source_link: '',
  });

  const handleClick = (event) => {
    const project = projects.find((project) => project.id === event.target.id);
    setProjectData({
      title: project.title,
      description: project.description,
      image: project.image,
      more_images: project.more_images,
      languages_and_tools: project.languages_and_tools,
      live_link: project.live_link,
      source_link: project.source_link,
    });
    setShow(true);
  };

  const handleHover = () => {
    const projectDetails = document.querySelectorAll('.carousel-caption');
    projectDetails.forEach((projectDetail) => {
      projectDetail.classList.remove('d-flex');
      projectDetail.classList.add('d-none');
    }
    );
  };

  const handleLeave = () => {
    const projectDetails = document.querySelectorAll('.carousel-caption');
    projectDetails.forEach((projectDetail) => {
      projectDetail.classList.remove('d-none');
      projectDetail.classList.add('d-flex');
    }
    );
  };

  return (
    <section id="projects" className="row m-0 mt-md-5 mb-md-5">
      <div className="col-md-9">
        <div className="d-flex mb-4">
          <h2 className="secondary-color mb-3 fw-bold fs-4">Highlighted Projects</h2>
          <hr className="ms-3 w-25" />
        </div>
        <p
          className="text-white fs-6 fs-md-5"
        >
          Click on the project&apos;s image to see more details.
        </p>
        <Carousel
          fade
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y" />}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y" />}
          className="carousel-div"
        >
          {projects.map((project) => (
            <Carousel.Item
              key={project.title}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img
                className="d-block w-100 rounded shadow border border-2 border-white"
                style={{
                  height: 'auto', objectFit: 'cover', objectPosition: 'center', cursor: 'pointer',
                }}
                src={project.image}
                alt={project.title}
                id={project.id}
                onClick={handleClick}
              />
              <Carousel.Caption
                className="d-flex flex-column justify-content-end carousel-info"
              >
                <h3
                  className="text-white fw-bold fs-6 fs-md-5"
                >
                  {project.title}
                </h3>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                  {project.languages_and_tools.map((language) => (
                    <li
                      key={language}
                      className="badge text-wrap m-1 p-2 border border-1 border-white fw-bold bg-secondary-color main-color"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w modal-dialog-centered modal-dialog modal-lg"
          aria-labelledby="example-custom-modal-styling-title"
          animation
          fullscreen="md-down"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {projectData.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y" />}
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y" />}
              className="carousel-div"
            >
              {projectData.more_images.map((image) => (
                <Carousel.Item
                  key={image}
                >
                  <img
                    className="img-fluid border border-2 border-white rounded shadow project-images"
                    src={image}
                    alt={projectData.title}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="row m-0 mt-3">
              <p
                className="col-md-8 fs-6 fw-bold quaternary-color"
              >
                {projectData.description}
              </p>
              <div
                className="col-md-4 d-flex flex-column justify-content-center"
              >
                <ul className="list-unstyled d-flex flex-wrap">
                  {projectData.languages_and_tools.map((language) => (
                    <li
                      key={language}
                      className="badge text-wrap m-1 p-2 border border-1 border-white tertiary-color fw-bold"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between links">
                  <a
                    href={projectData.live_link}
                    className="text-decoration-none secondary-color p-2 rounded-pill d-flex align-items-center justify-content-center fw-bold me-2 project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2">
                      <FaExternalLinkAlt />
                    </i>
                    Live Link
                  </a>
                  <a
                    className="text-decoration-none secondary-color p-2 rounded-pill d-flex align-items-center justify-content-center fw-bold project-link"
                    href={projectData.source_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="me-2"
                    >
                      <FaGithub />
                    </i>
                    Source Link
                  </a>
                </div>
              </div>
            </div>
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
