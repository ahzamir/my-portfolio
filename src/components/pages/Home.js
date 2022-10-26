import React from 'react';
import homeSvg from '../../assets/svgs/home-page.svg';

const Home = () => (
    <section id="home" className="row m-0 pt-5 h-100">
        <div className="col-md-8">
            <h1>Home</h1>
            <p>Home content</p>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={homeSvg} alt="Home" className="img-fluid" />
        </div>
    </section>
);

export default Home;