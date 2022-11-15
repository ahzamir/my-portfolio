import React from 'react';
import logoImg from '../assets/svgs/zamir-logo.svg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '#home',
      text: 'Home',
    },
    {
      id: 2,
      path: '#about',
      text: 'About',
    },
    {
      id: 3,
      path: '#projects',
      text: 'Projects',
    },
    {
      id: 4,
      path: '#recommendations',
      text: 'Recommendations',
    },
    {
      id: 5,
      path: '#contact',
      text: 'Contact',
    },
  ];
  return (
    <header className="bg-main-color d-flex justify-content-between align-items-center position-fixed w-100 z-index-1">
      <nav role="navigation" className="d-flex justify-content-between w-100">
        <div id="menuToggle" className="d-md-none pt-2">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#home"><img src={logoImg} alt="Zamir's logo" className="logo" /></a>
        <ul className="d-none d-md-flex justify-content-between align-items-center list-style-none mb-0 w-50 ps-5">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.path} className="text-decoration-none p-2 quaternary-color">{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
