import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
  const [isSpeaking, setIsSpeaking] = useState(false);

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

  const handleSpeak = () => {
    if (!isSpeaking) {
      const text = "Hello there! I'm Akash, the creator of this website. I hope you're finding our services helpful and enjoying your experience. If you have any questions, need assistance, or want to share feedback, we're here to help.";
      const utterance = new SpeechSynthesisUtterance(text);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Skytup</title>
        <meta name="description" content="Reach out to Skytup, founded in 2021 by Akash. Discover more about our services and products, and learn how to get in touch with our team for inquiries, support, or partnership opportunities. We're here to help you!" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Contact Us | Skytup" />
        <meta property="og:description" content="Reach out to Skytup, founded in 2021 by Akash. Get in touch with our team for inquiries, support, or partnership opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://skytup.com/contact-preview.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Skytup" />
        <meta name="twitter:description" content="Reach out to Skytup, founded in 2021 by Akash. Get in touch with our team for inquiries, support, or partnership opportunities." />
        <meta name="twitter:image" content="https://skytup.com/contact-preview.jpg" />
      </Helmet>

      <button 
        className="speak-button"
        onClick={handleSpeak}
        aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
      >
        <i className={`fas fa-volume-${isSpeaking ? 'down' : 'up'}`}></i>
      </button>

      <div className="contact-container">
        <div className="contact-header animate__animated animate__fadeInDown">
          <div className="header-content">
            <h1>Contact Us</h1>
            <div className="header-text">
              <p>
                Hello there! I'm Akash, the creator of this website. I hope you're finding our services helpful and enjoying your experience.
              </p>
              <p>
                If you have any questions, need assistance, or want to share feedback, we're here to help. You can reach out to us through the contact form below, or for business inquiries, please email us at <a href="mailto:support@skytup.com">support@skytup.com</a>.
              </p>
              <p>
                Your feedback is valuable and helps us improve. If you've encountered any issues or have suggestions, please let us know. We're committed to providing the best possible experience for you.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-content">
          
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
                
                <div className="form-grid">
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

        {/* <div className="faq-section animate__animated animate__fadeIn">
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
        </div> */}
      </div>
    </>
  );
}

export default Contact;