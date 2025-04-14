import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="subtitle">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            At Skytup, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>
        
        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-user"></i>
              <h3>Personal Information</h3>
              <p>Name, email address, phone number, and other contact details you provide to us.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-cookie"></i>
              <h3>Usage Data</h3>
              <p>Information about how you use our website, including pages visited and time spent.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-laptop"></i>
              <h3>Device Information</h3>
              <p>Browser type, operating system, IP address, and other technical details.</p>
            </div>
          </div>
        </section>
        
        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>
        
        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You can also opt-out of certain 
            data collection and processing activities.
          </p>
          <div className="privacy-buttons">
            <a href="/contact" className="privacy-button">Contact Us</a>
            <a href="/account" className="privacy-button">Manage Account</a>
          </div>
        </section>
        
        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 