import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import {
  DiCss3, DiJavascript1, DiReact, DiRuby, DiHeroku, DiGithubBadge, DiGit,
} from 'react-icons/di';

import { FaBootstrap, FaSass, FaNpm } from 'react-icons/fa';

import {
  SiRubyonrails, SiPostgresql, SiNetlify, SiPostman, SiGitlab, SiJest,
} from 'react-icons/si';

import { BsSlack } from 'react-icons/bs';
import aboutSvg from '../../assets/svgs/about-page.svg';

const About = () => (
  <section id="about" className="row m-0 mt-md-3 mb-md-3">
    <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
      <img src={aboutSvg} alt="About" className="img-fluid" />
    </div>
    <div className="col-md-8">
      <div className="d-flex mb-4">
        <h2 className="secondary-color mb-3 fw-bold fs-4">About Me</h2>
        <hr className="ms-3 w-25" />
      </div>
      <div>
        <p className="fw-bold">
          &gt; Zamir.email =
          {' '}
          <span className="quaternary-color">
            [&apos;
            <a href="mailto:ahmadzamiryousofi1397@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none p-2 quaternary-color">ahmadzamiryousofi1397@gmail</a>
            &apos;]
          </span>
          ;
        </p>
      </div>
      <div>
        <p className="fw-bold">
          &gt; Zamir.resume =
          {' '}
          <span>
            [&apos;
            <a href="https://drive.google.com/file/d/15K-DfNZOZJAPTowgqT5ptugnX96kt7yT/view?usp=sharing" target="_blank" rel="noreferrer" className="text-decoration-none p-2 quaternary-color">Resume</a>
            &apos;]
          </span>
          ;
        </p>
      </div>
      <div>
        <p className="fw-bold">
          &gt; Zamir.profeesional_skills =
          {' '}
          <span className="quaternary-color">[&apos;Pair Programming&apos;, &apos;Code Review&apos;, &apos;Test-Driven Development&apos;, &apos;Responsive Web Design&apos;, &apos;Clean Code&apos;, &apos;Version Control&apos;, &apos;Object-Oriented Programming&apos;, &apos;Problem Solving&apos;, &apos;Teamwork&apos;, &apos;Communication&apos;, &apos;Time Management&apos;]</span>
          ;
        </p>
      </div>
      <div>
        <p className="fw-bold">
          &gt; Zamir.interests =
          {' '}
          <span className="quaternary-color">[&apos;Design&apos;, &apos;Reading Books&apos;, &apos;Movies&apos;, &apos;Travel&apos;, &apos;Workout&apos;]</span>
          ;
        </p>
      </div>
      <div>
        <p className="fw-bold">
          &gt; Zamir.skills =
          {' '}
          <span className="quaternary-color">[</span>
          <span className="quaternary-color">
            HTML5
            <i style={{ color: '#f35321' }}><AiOutlineHtml5 /></i>
            ,
            {' '}
            CSS3
            <i style={{ color: '#0e83cd' }}><DiCss3 /></i>
            ,
            {' '}
            JavaScript
            <i style={{ color: '#f0db4f' }}><DiJavascript1 /></i>
            ,
            {' '}
            React
            <i style={{ color: '#61dafb' }}><DiReact /></i>
            ,
            {' '}
            Bootstrap
            <i style={{ color: '#563d7c' }}><FaBootstrap /></i>
            ,
            {' '}
            SASS
            <i style={{ color: '#cc6699' }}><FaSass /></i>
            ,
            {' '}
            Npm
            <i style={{ color: '#cb3837' }}><FaNpm /></i>
            ,
            {' '}
            Ruby
            <i style={{ color: '#cc342d' }}><DiRuby /></i>
            ,
            {' '}
            Ruby on Rails
            <i style={{ color: '#cc0000' }}><SiRubyonrails /></i>
            ,
            {' '}
            PostgreSQL
            <i style={{ color: '#336791' }}><SiPostgresql /></i>
            ,
            {' '}
            Netlify
            <i style={{ color: '#00c7b7' }}><SiNetlify /></i>
            ,
            {' '}
            Postman
            <i style={{ color: '#ff6c37' }}><SiPostman /></i>
            ,
            {' '}
            GitLab
            <i style={{ color: '#fca326' }}><SiGitlab /></i>
            ,
            {' '}
            Jest
            <i style={{ color: '#c21325' }}><SiJest /></i>
            ,
            {' '}
            Heroku
            <i style={{ color: '#430098' }}><DiHeroku /></i>
            ,
            {' '}
            Slack
            <i style={{ color: '#4a154b' }}><BsSlack /></i>
            ,
            {' '}
            GitHub
            <i style={{ color: 'white' }}><DiGithubBadge /></i>
            ,
            {' '}
            Git
            <i style={{ color: '#f05032' }}><DiGit /></i>
          </span>
          <span className="quaternary-color">]</span>
          ;
        </p>
      </div>
    </div>
  </section>
);

export default About;
