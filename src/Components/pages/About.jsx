import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="subtitle">
          Dive into the story of Skytup and its founder, Akash, as we showcase the innovative technology shaping our journey.
        </p>
      </div>
      
      <div className="about-content">
        <div className="content-section">
          <p>
            Welcome to Skytup, your premier destination for cutting-edge educational content. 
            We are dedicated to delivering top-tier tech information, ensuring you remain at 
            the forefront of the educational landscape.
          </p>
          <p>
            Founded in 2021 by Akash, Skytup has undergone significant growth and evolution 
            since its inception in the vibrant landscape of India. Akash's profound passion 
            for coding and programming laid the foundations for this venture.
          </p>
          <p>
            We invite you to immerse yourself in our comprehensive services, meticulously crafted 
            to empower and enrich your educational journey. We trust you'll find our offerings as 
            gratifying as we find creating them. Should you have any inquiries or feedback, 
            please feel free to reach out. Your satisfaction is our utmost priority.
          </p>
          <div className="youtube-subscribe">
            <h3>Subscribe to Our Channel</h3>
            <div 
              className="g-ytsubscribe" 
              data-channelid="UC6vrqOqpd8_92ldIhlXpw1g" 
              data-layout="full" 
              data-theme="dark" 
              data-count="hidden">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;