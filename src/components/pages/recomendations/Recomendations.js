import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaExternalLinkAlt } from 'react-icons/fa';
import recomendationsSvg from '../../../assets/svgs/recomendation-page.svg';
import recommendations from './recomendations_data';

const Recomendations = () => (
  <section id="recommendations" className="row m-0 mt-md-5 mb-md-5">
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
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-main-color rounded-circle border border-3 border-white p-3 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-main-color rounded-circle border border-3 border-white p-3 m-2 fs-4 fw-bold text-white d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y" />}
        className="recommendation-div"
      >
        {recommendations.map((recommendation) => (
          <Carousel.Item
            key={recommendation.id}
            className="d-flex"
          >
            <div>
              <img
                className="recommendation-image"
                src={recommendation.image}
                alt={recommendation.name}
              />
            </div>
            <div className="p-3 p-md-5 h-100">
              <div className="rounded-3 h-100 recommendation-info">
                <a
                  className="fs-6 fw-bold text-decoration-none quaternary-color fs-md-3"
                  href={recommendation.profile}
                >
                  {recommendation.name}
                  <i
                    className="ms-2 fs-6"
                  >
                    <FaExternalLinkAlt />
                  </i>
                </a>
                <p className="fw-bold secondary-color mb-4">{recommendation.about}</p>
                <p className="tertiary-color">{recommendation.recommendation}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);

export default Recomendations;
