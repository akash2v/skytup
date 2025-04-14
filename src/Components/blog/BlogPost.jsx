import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: parseInt(id),
    title: "Getting Started with Skytup",
    content: `
      <p>Welcome to Skytup! This comprehensive guide will help you get started with our platform and make the most of its features.</p>
      
      <h2>Creating Your Account</h2>
      <p>Getting started with Skytup is easy. Simply click the "Sign Up" button in the top right corner of our homepage and follow the registration process. You'll need to provide some basic information and verify your email address.</p>
      
      <h2>Exploring the Dashboard</h2>
      <p>Once you've created your account, you'll be taken to your personal dashboard. Here, you can see an overview of your activity, recent updates, and quick access to all the features Skytup has to offer.</p>
      
      <h2>Key Features</h2>
      <p>Skytup offers a wide range of features to enhance your experience:</p>
      <ul>
        <li><strong>Personalized Recommendations:</strong> Get tailored suggestions based on your interests and activity.</li>
        <li><strong>Advanced Search:</strong> Find exactly what you're looking for with our powerful search functionality.</li>
        <li><strong>Community Interaction:</strong> Connect with other users, share experiences, and learn from the community.</li>
        <li><strong>Customizable Settings:</strong> Adjust your preferences to make Skytup work the way you want it to.</li>
      </ul>
      
      <h2>Tips for Success</h2>
      <p>To get the most out of Skytup, we recommend:</p>
      <ol>
        <li>Complete your profile with accurate information</li>
        <li>Explore different features regularly</li>
        <li>Engage with the community</li>
        <li>Check for updates and new features</li>
      </ol>
      
      <h2>Need Help?</h2>
      <p>If you ever find yourself stuck or have questions, our support team is here to help. You can reach out to us through the contact page or check our FAQ section for quick answers to common questions.</p>
      
      <p>We're excited to have you join our community and can't wait to see how you'll use Skytup to achieve your goals!</p>
    `,
    category: "tutorials",
    author: "John Doe",
    authorRole: "Product Manager",
    authorImage: "/images/authors/john-doe.jpg",
    date: "2023-06-15",
    readTime: "5 min read",
    image: "/images/blog/getting-started.jpg",
    tags: ["getting started", "tutorial", "guide", "basics"]
  };
  
  // Mock related posts - in a real app, this would come from an API
  const relatedPosts = [
    {
      id: 6,
      title: "Tips for Power Users",
      excerpt: "Advanced techniques and shortcuts to help you become a Skytup power user.",
      category: "tutorials",
      image: "/images/blog/power-tips.jpg"
    },
    {
      id: 2,
      title: "New Features Released",
      excerpt: "Discover the latest features we've added to improve your experience on Skytup.",
      category: "updates",
      image: "/images/blog/new-features.jpg"
    },
    {
      id: 3,
      title: "Best Practices for Security",
      excerpt: "Keep your account safe with these essential security tips and best practices.",
      category: "security",
      image: "/images/blog/security.jpg"
    }
  ];
  
  return (
    <div className="blog-post-container">
      <div className="blog-post-header" style={{ backgroundImage: `url(${blogPost.image})` }}>
        <div className="blog-post-header-content">
          <div className="blog-post-category">{blogPost.category}</div>
          <h1 className="blog-post-title">{blogPost.title}</h1>
          <div className="blog-post-meta">
            <div className="blog-post-author">
              <img src={blogPost.authorImage} alt={blogPost.author} className="author-image" />
              <div>
                <span className="author-name">{blogPost.author}</span>
                <span className="author-role">{blogPost.authorRole}</span>
              </div>
            </div>
            <div className="blog-post-info">
              <span className="blog-post-date">{new Date(blogPost.date).toLocaleDateString()}</span>
              <span className="blog-post-read-time">{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="blog-post-content">
        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
        
        <div className="blog-post-tags">
          {blogPost.tags.map(tag => (
            <span key={tag} className="blog-post-tag">#{tag}</span>
          ))}
        </div>
        
        <div className="blog-post-share">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="share-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="share-button linkedin">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="related-posts">
        <h2>Related Articles</h2>
        <div className="related-posts-grid">
          {relatedPosts.map(post => (
            <div key={post.id} className="related-post-card">
              <div className="related-post-image" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="related-post-category">{post.category}</div>
              </div>
              <div className="related-post-content">
                <h3 className="related-post-title">{post.title}</h3>
                <p className="related-post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="related-post-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="blog-post-navigation">
        <Link to="/blog" className="back-to-blog">
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost; 