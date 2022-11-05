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
                <p className="tertiary-color mb-3 fw-bold fs-6">I'm always interested in hearing about new projects, so if you'd like to chat
                    please get in touch.</p>
                <form action="https://formspree.io/f/xayvdjzb" method="post">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" name="message" placeholder="Enter your message" required></textarea>
                    <button type="submit" value="send" className="btn bg-main border-white secondary-color mt-3">Submit</button>
                </form>
            </div>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={contactSvg} alt="Home" className="img-fluid" />
        </div>
    </section >
);

export default Contact;
