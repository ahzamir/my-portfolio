import React from 'react';
import { FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

const SidePanels = () => (
  <div className="h-100">
    <ul className="h-50 d-flex flex-column justify-content-end align-items-center list-style-none">
      <a href="https://github.com/ahzamir" target="_blank" rel="noopener noreferrer">
        <li><i className="fa fa-github"><FaGithub className="quaternary-color side-panels" /></i></li>
      </a>
      <a href="https://www.linkedin.com/in/ahzamir/" target="_blank" rel="noopener noreferrer">
        <li><i className="fa fa-linkedin"><FaLinkedin className="quaternary-color side-panels" /></i></li>
      </a>
      <a href="https://angel.co/u/ahzamir" target="_blank" rel="noopener noreferrer">
        <li><i className="fa fa-angellist"><FaAngellist className="quaternary-color side-panels" /></i></li>
      </a>
    </ul>
    <hr className="d-none d-md-flex" id="hr" />
  </div>
);

export default SidePanels;
