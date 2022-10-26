import React from 'react';
import { FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

const SidePanels = () => (
  <div className="h-100">
    <ul className="h-50 d-flex flex-column justify-content-end align-items-center list-style-none">
      <li><i className="fa fa-github"><FaGithub /></i></li>
      <li><i className="fa fa-linkedin"><FaLinkedin /></i></li>
      <li><i className="fa fa-angellist"><FaAngellist /></i></li>
    </ul>
    <hr className="d-none d-md-flex" id="hr" />
  </div>
);

export default SidePanels;
