import React from 'react';
import aboutSvg from '../../assets/svgs/about-page.svg';
// import skills icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiRuby } from "react-icons/di";
// import { DiRails } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";

const About = () => (
    <section id="about" className="row m-0 pt-5 pb-5 h-100">
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img src={aboutSvg} alt="About" className="img-fluid" />
        </div>
        <div className="col-md-8">
            <div className="d-flex mb-4">
                <h2 className="secondary-color mb-3 fw-bold fs-4">About Me</h2>
                <hr className="ms-3 w-25" />
            </div>
            <div>
                <p>&gt; Zamir.location = <span className="secondary-color">['Kabul, Afghanistan]</span>;</p>
            </div>
            <div>
                <p>&gt; Zamir.email = <span className="secondary-color">['<a href="mailto:ahmadzamiryousofi1397@gmail.com" target="_blank">ahmadzamiryousofi1397@gmail</a>']</span>;</p>
            </div>
            <div>
                <p>&gt; Zamir.resume = <span>['<a href='https://drive.google.com/file/d/15K-DfNZOZJAPTowgqT5ptugnX96kt7yT/view?usp=sharing' target='_blank'>Resume</a>']</span>;</p>
            </div>
            <div>
                <p>&gt; Zamir.profeesional_skills = <span className="secondary-color">['Pair Programming', 'Code Review', 'Test-Driven Development', 'Responsive Web Design', 'Clean Code', 'Version Control', 'Object-Oriented Programming', 'Problem Solving', 'Teamwork', 'Communication', 'Time Management']</span>;</p>
            </div>
            <div>
                <p>&gt; Zamir.intereests = <span className="secondary-color">['Design', 'Reading Books', 'Movies', 'Travel', 'Workout']</span>;</p>
            </div>
            <div>
                <p>&gt; Zamir.skills = <span className="secondary-color">{'{'}</span></p>
                <div className="ms-5">
                    <p>Frontend: <span className="secondary-color">[<i><AiOutlineHtml5 /></i>, <i><DiCss3 /></i>, <i><DiJavascript1 /></i>, <i><DiReact /></i>]</span>,</p>
                    <p>Backend: <span className="secondary-color">[<i><DiRuby /></i>]</span>,</p>
                    <p>Database: <span className="secondary-color">[<i><DiPostgresql /></i>]</span>,</p>
                    <p>Deployment: <span className="secondary-color">[<i><DiHeroku /></i>]</span>,</p>
                    <p>Version Control: <span className="secondary-color">[<i><DiGithubBadge /></i>]</span>,</p>
                </div>
                <p><span className="secondary-color">{'}'}</span>;</p>
            </div> 

        </div>
    </section>
);

export default About;
