import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span className="jawad">Joella</span><span className="com">com</span>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <button className="contact-btn"><a href="#contact">LET'S TALK</a></button>
    </header>
  );
};

export default Header;
