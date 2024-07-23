import React from 'react';
import './Testimonials.css';
import avatar from '../joella.jpg';
import ava from './3.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>EXPLORE OUR CLIENTS FEEDBACKS</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <div className="avatar-wrapper">
            <img src={avatar} alt="John Smith" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            <h4>John Smith</h4>
            <span>Basic Company</span>
          </div>
        </div>
        <div className="testimonial">
          <div className="avatar-wrapper">
            <img src={ava} alt="Rowhan Smith" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            <h4>Rowhan Smith</h4>
            <span>Cebria Company</span>
          </div>
        </div>
        <div className="testimonial">
          <div className="avatar-wrapper">
            <img src={ava} alt="Shavia Doe" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            <h4>Shavia Doe</h4>
            <span>Ukeaa Company</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
