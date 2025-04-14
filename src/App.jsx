import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/header/Navbar'
import Footer from './Components/footer/Footer'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import ForgotPassword from './Components/auth/ForgotPassword'
import About from './Components/pages/About'
import Privacy from './Components/pages/Privacy'
import Contact from './Components/pages/Contact'
import Blog from './Components/blog/Blog'
import BlogPost from './Components/blog/BlogPost'
import Hero from './Components/header/Hero'
import './App.css'

function App() {
  // Mock user data - replace with actual user data from your auth system
  const [user] = useState(null)

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} title="Skytup" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/" element={
            <main className="main-content">
              <Hero />
              
              <section className="trending-section animate__animated animate__fadeIn">
                <h2 className="section-title">Trending Now</h2>
                <div className="trending-container">
                  <div className="trending-post">
                    <div className="trending-image">
                      <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Trending post" />
                      <div className="post-category">Tech</div>
                    </div>
                    <div className="trending-content">
                      <h3>The Future of AI Development in 2024</h3>
                      <p className="post-meta">
                        <span><i className="far fa-calendar"></i> June 12, 2024</span>
                        <span><i className="far fa-eye"></i> 1.2K Views</span>
                      </p>
                      <p className="post-excerpt">Discover the latest trends in artificial intelligence and how they're shaping the future of technology...</p>
                      <a href="/blog/1" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                  
                  <div className="trending-post">
                    <div className="trending-image">
                      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Trending post" />
                      <div className="post-category">Code</div>
                    </div>
                    <div className="trending-content">
                      <h3>10 React Best Practices You Should Know</h3>
                      <p className="post-meta">
                        <span><i className="far fa-calendar"></i> June 8, 2024</span>
                        <span><i className="far fa-eye"></i> 956 Views</span>
                      </p>
                      <p className="post-excerpt">Learn how to write cleaner, more efficient React code with these expert tips and best practices...</p>
                      <a href="/blog/2" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="blogs-section">
                <h2 className="section-title">Popular Topics</h2>
                <div className="feature-cards">
                  <div className="feature-card">
                    <i className="fas fa-code"></i>
                    <h3>TOP-RATED BLENDER</h3>
                    <p>Discover the best Blender tips and tricks</p>
                    <a href="/blog?category=blender" className="card-link">View Articles <i className="fas fa-chevron-right"></i></a>
                  </div>
                  <div className="feature-card">
                    <i className="fab fa-linux"></i>
                    <h3>Linux Tutorials</h3>
                    <p>Master Linux with our comprehensive guides</p>
                    <a href="/blog?category=linux" className="card-link">View Articles <i className="fas fa-chevron-right"></i></a>
                  </div>
                  <div className="feature-card">
                    <i className="fas fa-laptop-code"></i>
                    <h3>C++ STL</h3>
                    <p>Learn the Standard Template Library</p>
                    <a href="/blog?category=cpp" className="card-link">View Articles <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </section>
              
              <section className="recent-articles-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Articles</h2>
                  <a href="/blog" className="view-all-link">View All <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="recent-articles-grid">
                  <div className="article-card">
                    <div className="article-image">
                      <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Python article" />
                    </div>
                    <div className="article-content">
                      <span className="article-tag">Python</span>
                      <h3>Getting Started with Python for Data Science</h3>
                      <p>Learn the basics of Python programming for data analysis and visualization</p>
                      <div className="article-meta">
                        <span><i className="far fa-calendar"></i> June 5, 2024</span>
                        <span><i className="far fa-clock"></i> 5 min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="article-card">
                    <div className="article-image">
                      <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="JavaScript article" />
                    </div>
                    <div className="article-content">
                      <span className="article-tag">JavaScript</span>
                      <h3>Understanding JavaScript Promises</h3>
                      <p>A deep dive into asynchronous programming with JavaScript Promises</p>
                      <div className="article-meta">
                        <span><i className="far fa-calendar"></i> June 3, 2024</span>
                        <span><i className="far fa-clock"></i> 8 min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="article-card">
                    <div className="article-image">
                      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Cloud Computing article" />
                    </div>
                    <div className="article-content">
                      <span className="article-tag">Cloud</span>
                      <h3>AWS vs Azure: Choosing the Right Cloud Provider</h3>
                      <p>Compare the top cloud platforms to find the best fit for your projects</p>
                      <div className="article-meta">
                        <span><i className="far fa-calendar"></i> May 29, 2024</span>
                        <span><i className="far fa-clock"></i> 10 min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="article-card">
                    <div className="article-image">
                      <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80" alt="Cybersecurity article" />
                    </div>
                    <div className="article-content">
                      <span className="article-tag">Security</span>
                      <h3>Essential Cybersecurity Practices for Developers</h3>
                      <p>Learn how to protect your applications from common security vulnerabilities</p>
                      <div className="article-meta">
                        <span><i className="far fa-calendar"></i> May 25, 2024</span>
                        <span><i className="far fa-clock"></i> 7 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="stats-section animate__animated animate__fadeIn">
                <div className="stats-container">
                  <div className="stat-item">
                    <i className="fas fa-users"></i>
                    <h3 className="counter">10K+</h3>
                    <p>Community Members</p>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-book-open"></i>
                    <h3 className="counter">500+</h3>
                    <p>Articles Published</p>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-laptop-code"></i>
                    <h3 className="counter">50+</h3>
                    <p>Tech Topics</p>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-project-diagram"></i>
                    <h3 className="counter">200+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </section>
              
              <section className="newsletter-section animate__animated animate__fadeIn">
                <div className="newsletter-container">
                  <div className="newsletter-content">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Stay updated with our latest articles, tutorials, and offers. We promise not to spam!</p>
                    <form className="newsletter-form">
                      <input type="email" placeholder="Enter your email address" required />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                  <div className="newsletter-image">
                    <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Newsletter" />
                  </div>
                </div>
              </section>
              
              <section className="testimonials-section animate__animated animate__fadeIn">
                <h2 className="section-title">What Our Users Say</h2>
                <div className="testimonials-container">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                    </div>
                    <div className="testimonial-content">
                      <p>"Skytup has been an invaluable resource for my coding journey. The tutorials are easy to follow and have helped me advance my skills significantly."</p>
                      <h3>John Doe</h3>
                      <p className="testimonial-title">Web Developer</p>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                    </div>
                    <div className="testimonial-content">
                      <p>"The community at Skytup is incredibly supportive. I've found answers to all my questions and made valuable connections with other developers."</p>
                      <h3>Jane Smith</h3>
                      <p className="testimonial-title">Software Engineer</p>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User" />
                    </div>
                    <div className="testimonial-content">
                      <p>"As a business owner, Skytup has helped me understand the technical aspects of my projects. Their explanations are clear and jargon-free."</p>
                      <h3>Robert Wilson</h3>
                      <p className="testimonial-title">Startup Founder</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
