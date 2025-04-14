import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Skytup</span>
        </h1>
        <p className="hero-subtitle">
          We're here to help you in your coding journey
        </p>
        <div className="hero-search">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search here for Skytup blogs..."
            />
            <button className="search-button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
