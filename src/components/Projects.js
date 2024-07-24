import React from 'react';
import './Projects.css';
import pic3 from './6.png';
import pic1 from './4.png';
import pic2 from './5.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Client Projects</h2>
      <div className="project-list">
        <div className="project">
          <div className="project-text">
            <h3>CALM-CRAFT</h3>
            <p>I have worked on an AI-powered<br /> stress management platform <br /> with 5-star feedbacks.</p>
          </div>
          <img src={pic3} alt="Web Design" className="project-image" />
          <a href="https://github.com/your-github-repo-calm-craft" className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <div className="project-text">
            <h3>DREAM-DISCOVER</h3>
            <p>Did a tourism-based app with<br /> top touristic brands & startups.</p>
          </div>
          <img src={pic2} alt="App Design" className="project-image" />
          <a href="https://github.com/iriza-90/Dream-Discover" className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <div className="project-text">
            <h3>HEKTO</h3>
            <p>I have designed many complex<br /> dashboards , e-commerce & so on.</p>
          </div>
          <img src={pic1} alt="Dashboard" className="project-image" />
          <a href="https://github.com/iriza-90/Library-SpringBoot-webapp" className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
