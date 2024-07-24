import React from 'react';
import './HeroSection.css';
import joella from './3.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, <span className="highlight">I'm Joella</span>,<br/> full-stack developer <br/> based in Rwanda.</h1>
        <p>I am a freelancer full-stack developer with experience of 2 years. In this 2 years I <br/> have worked with many big companies & startups</p>
        <div className="hero-buttons">
        <a href="#contact" className="get-in-touch">GET IN TOUCH</a>
          <a href="#projects" className="btn secondary">VIEW ALL WORKS</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={joella} alt="Joella" />
        <div className="irregular-border"></div>
      </div>
      {/* <div className="horizontal-section">
        <div className="content">
          <div className="item">Web Design</div>
          <div className="item-icon">✦</div>
          <div className="item">App Design</div>
          <div className="item-icon">✦</div>
          <div className="item">Dashboard</div>
          <div className="item-icon">✦</div>
          <div className="item">Strategy</div>
          <div className="item-icon">✦</div>
          <div className="item">Web Design</div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
