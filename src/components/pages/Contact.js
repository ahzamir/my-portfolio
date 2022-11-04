import React from 'react';

const Contact = () => (
    <section id="contact" className="row m-0 mt-md-5 mb-md-5">
        <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center">
            <img src={recomendationsSvg} alt="Home" className="img-fluid" />
        </div>
        <div className="col-md-9">
            <div className="d-flex mb-4">
                <h2 className="secondary-color mb-3 fw-bold fs-4">Recomendations</h2>
                <hr className="ms-3 w-25" />
            </div>
            <div>
                Contact
            </div>
        </div>
    </section>
);

export default Contact;
