import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Skytup</h1>
        <p className="subtitle">Your trusted platform for seamless experiences</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Skytup, we're dedicated to providing innovative solutions that enhance your digital experience. 
            Our platform is designed to make your life easier, connecting you with the services and information you need.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-rocket"></i>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance you can count on</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure</h3>
              <p>Your data is safe with us</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Join our growing community</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-cog"></i>
              <h3>Customizable</h3>
              <p>Tailor your experience to your needs</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            We're a diverse team of passionate individuals working together to create the best possible platform for our users.
            Our expertise spans across various fields, ensuring we deliver comprehensive solutions.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to our support team or connect with us on social media.
          </p>
          <div className="contact-buttons">
            <a href="/contact" className="contact-button">Contact Support</a>
            <a href="https://twitter.com/skytup" className="social-button" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Follow Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 