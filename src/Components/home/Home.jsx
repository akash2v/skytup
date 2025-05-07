import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../header/Hero';
import RecentBlogs from '../blog/RecentBlogs';
import PopularBlogs from '../blog/PopularBlogs';
import RandomFeeds from '../blog/RandomFeeds';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="home">
      <Helmet>
        <title>Skytup - Learn Programming & Technology</title>
        <meta name="description" content="Explore tutorials, articles, and resources on programming, development, and technology. Join our community of developers and tech enthusiasts." />
        <meta name="keywords" content="programming,tutorials,technology,development,coding,learn to code" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Skytup - Learn Programming & Technology" />
        <meta property="og:description" content="Explore tutorials, articles, and resources on programming, development, and technology. Join our community of developers and tech enthusiasts." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Skytup - Learn Programming & Technology" />
        <meta name="twitter:description" content="Explore tutorials, articles, and resources on programming, development, and technology. Join our community of developers and tech enthusiasts." />
      </Helmet>

      <main className="main-content">
        <Hero onSearch={handleSearch} />
        
        <section className="blog-sections animate__animated animate__fadeIn">
          <div className="section-container">
            <RecentBlogs searchQuery={searchQuery} />
            <PopularBlogs searchQuery={searchQuery} />
            <RandomFeeds />
          </div>
        </section>


        <section className="keywords-section animate__animated animate__fadeIn">
          <div className="keywords-container">
            <h2>Popular Topics</h2>
            <div className="keywords-list">
              {['JavaScript', 'Python', 'React', 'Node.js', 'CSS', 'HTML', 'TypeScript', 'Git', 'Docker', 'AWS'].map(keyword => (
                <a key={keyword} href={`/blog/?k=${encodeURIComponent(keyword)}`} className="keyword">
                  {keyword}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section animate__animated animate__fadeIn">
          <div className="contact-form-container">
            <h2>Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;