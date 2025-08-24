// Newsletter.js
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-header"></div>
      
      <div className="newsletter-content">
        <h2 className="newsletter-title">Finora Newsletter</h2>
        <p className="newsletter-subtitle">
          {`{ Stay up-to-date with the latest on `}
          <strong>Finance</strong> and <strong>AI</strong>
          {` }`}
        </p>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
