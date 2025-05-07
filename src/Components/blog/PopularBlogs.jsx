import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const PopularBlogs = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/api/posts?page=1&limit=10&sort=views`);
        const data = await response.json();
        setPopularPosts(data.data);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularPosts();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading popular posts...</div>;
  }

  return (
    <div className="popular-blogs">
      <h2>Popular Posts</h2>
      <div className="blog-grid">
        {popularPosts.map((post) => (
          <Link to={`/blog/${post.alias}`} key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.thumbnail} alt={post.title} />
              <div className="views-badge">
                <i className="far fa-eye"></i> {post.views}
              </div>
            </div>
            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span><i className="far fa-heart"></i> {post.likes} likes</span>
                <span><i className="far fa-comment"></i> {post.comments || 0} comments</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularBlogs;