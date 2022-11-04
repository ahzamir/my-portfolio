import React from 'react';
import contactSvg from '../../assets/svgs/contact-page.svg';

const Contact = () => (
    <section id="contact" className="row m-0 mt-md-5 mb-md-5">
        <div className="col-md-8">
            <div className="d-flex mb-4">
                <h2 className="secondary-color mb-3 fw-bold fs-4">Contact Me</h2>
                <hr className="ms-3 w-25" />
            </div>
            <div>
                Contact
            </div>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={contactSvg} alt="Home" className="img-fluid" />
        </div>
    </section>
);

export default Contact;
