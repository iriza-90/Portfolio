import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
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
          <p>Email: <a href="mailto:irizajll45@gmail.com" className="email-link">irizajll45@gmail.com</a></p>
        </div>
        <div className="footer-right">
          <nav>
            <a href="#home">Home</a>
            <a href="#services">About Me</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/joella-iriza-4a9052260/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/iriza-90" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/i_r_i_z_a/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
