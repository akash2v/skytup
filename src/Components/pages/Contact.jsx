import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-header animate__animated animate__fadeInDown">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info animate__animated animate__fadeInLeft">
          <div className="info-card">
            <div className="icon-circle">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>123 Tech Street, Cyber City, Digital State, 12345</p>
          </div>
          
          <div className="info-card">
            <div className="icon-circle">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>contact@skytup.com</p>
            <p>support@skytup.com</p>
          </div>
          
          <div className="info-card">
            <div className="icon-circle">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+1 (123) 456-7890</p>
            <p>+1 (987) 654-3210</p>
          </div>
          
          <div className="social-connect">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100030124935456" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/skythecoder" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/developer_akash/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/skytup" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container animate__animated animate__fadeInRight">
          {submitted ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <h2>Thank you for your message!</h2>
              <p>We have received your inquiry and will get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className="btn-primary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Get In Touch</h2>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="map-container animate__animated animate__fadeInUp">
        <h2>Find Us Here</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1659012478168!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Skytup Location"
          ></iframe>
        </div>
      </div>
      
      <div className="faq-section animate__animated animate__fadeIn">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>How can I join Skytup as a developer?</h3>
            <p>You can join Skytup by registering on our platform and completing your developer profile. Once verified, you can start contributing to our community.</p>
          </div>
          <div className="faq-item">
            <h3>What technologies do you specialize in?</h3>
            <p>Our experts specialize in a wide range of technologies including web development, mobile app development, AI/ML, data science, cloud computing, and more.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer training programs?</h3>
            <p>Yes, we offer various training programs for beginners and professionals. Check our blog section for free tutorials and contact us for premium courses.</p>
          </div>
          <div className="faq-item">
            <h3>How can I request a custom project?</h3>
            <p>You can request a custom project by filling out the contact form above with your project details, and our team will get back to you with a quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 