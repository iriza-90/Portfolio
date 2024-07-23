import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-content">
        <h2>Services I Am <br /> Providing</h2>
        <p>I am giving all kinds of software development services you need with good price. I ensure quality with unlimited revisions. So <br /> you can get the best products.</p>
        <button className="get-in-touch">GET IN TOUCH</button>
      </div>
      <div className="service-list">
        <div className="service">
          WEB DESIGN
          <span className="service-icon">↗</span>
        </div>
        <div className="service">FRONT-END DEVELOPMENT</div>
        <div className="service">BACKEND DEVELOPMENT</div>
        <div className="service">DEPLOYMENT</div>
      </div>
    </section>
  );
};

export default Services;
