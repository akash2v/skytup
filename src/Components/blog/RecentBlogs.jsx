import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const RecentBlogs = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/api/posts?page=1&limit=10&sort=date`);
        const data = await response.json();
        setRecentPosts(data.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading recent posts...</div>;
  }

  return (
    <div className="recent-blogs">
      <h2>Recent Posts</h2>
      <div className="blog-grid">
        {recentPosts.map((post) => (
          <Link to={`/blog/${post.alias}`} key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span><i className="far fa-calendar"></i> {new Date(post.date).toLocaleDateString()}</span>
                <span><i className="far fa-eye"></i> {post.views} views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;