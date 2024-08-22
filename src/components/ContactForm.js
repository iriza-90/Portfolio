import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Ensure this includes the enhanced CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for better UX

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsLoading(true);
    try {
      await axios.post('/api/contact', formData);
      setStatus('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email', error);
      setStatus('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="contact-form-outer-container">
      <div className="contact-form-container">
        <h2 className="contact-form-header">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit} method='post' action='api/contact'>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Get in Touch'}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
