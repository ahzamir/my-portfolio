import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import recomendationsSvg from '../../assets/svgs/recomendation-page.svg';

const Recomendations = () => (
  <section id="projects" className="row m-0 pt-5 pb-5 mt-md-5 mb-md-5">
    <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center">
      <img src={recomendationsSvg} alt="Home" className="img-fluid" />
    </div>
    <div className="col-md-9">
      <div className="d-flex mb-4">
        <h2 className="secondary-color mb-3 fw-bold fs-4">Recomendations</h2>
        <hr className="ms-3 w-25" />
      </div>
      <Carousel
        fade
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle border border-2 border-dark p-2 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y" />}
        className="carousel-div"
      >
        <Carousel.Item>
          <h1>Carousel</h1>
          <Carousel.Caption
            className="d-flex flex-column justify-content-end carousel-info"
          >
            <h3 className="text-white fw-bold fs-6 fs-md-5">Carousel</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </section>
);

export default Recomendations;
