import React from 'react';
import './design.css';

const Design = () => {
  const items = [
    'Web Design',
    'App Design',
    'Dashboard',
    'Strategy',
    'Web Design',
    'App Design',
    'Dashboard',
    'Strategy',
    'Web Design',
    'App Design',
    'Dashboard',
    'Strategy'
  ];

  return (
    <div className="design-section">
      <div className="horizontal-section">
        <div className="oblique-section">
          {items.map((item, index) => (
            <div className="design-item" key={index}>
              <span className="sparkle">✨</span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;