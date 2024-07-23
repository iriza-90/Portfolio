import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Have An Awesome Project <br /> Idea? Let's Discuss</h2>
        </div>
        <div className="footer-top-right">
          <button className="start-project-btn">Start Project</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <span className="jawad">Joella</span><span className="com">.com</span>
          <p>I am a freelance full stack developer with experience of 2 years.<br /> In this 2 years I have worked on many projects & startups.</p>
        </div>
        <div className="footer-right">
          <nav>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Contact</a>
          </nav>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
