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
            <img src={avatar} alt="Ornella" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>Joella's AI-powered stress management platform is outstanding. Its intuitive design and personalized recommendations have greatly improved my stress levels. Highly recommended!</p>
            <h4>Ornella</h4>
          </div>
        </div>
        <div className="testimonial">
          <div className="avatar-wrapper">
            <img src={ava} alt="Elton" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>DREAM-DISCOVER is fantastic! The app's seamless design and top touristic recommendations made planning my trips effortless and enjoyable. A must-have for any traveler!</p>
            <h4>Elton</h4>
          </div>
        </div>
        <div className="testimonial">
          <div className="avatar-wrapper">
            <img src={ava} alt="Joyeuse" className="avatar" />
          </div>
          <div className="testimonial-content">
            <p>HEKTO transformed our online store with its sleek design and powerful features. It's user-friendly and highly effective—perfect for boosting sales and managing our inventory.</p>
            <h4>Joyeuse</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
