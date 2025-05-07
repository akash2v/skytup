import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const RandomFeeds = () => {
  const [randomPosts, setRandomPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/api/posts?page=1&limit=6&sort=random`);
        const data = await response.json();
        setRandomPosts(data.data);
      } catch (error) {
        console.error('Error fetching random posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomPosts();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading random feeds...</div>;
  }

  return (
    <div className="random-feeds">
      <h2>Discover More</h2>
      <div className="feeds-grid">
        {randomPosts.map((post) => (
          <Link to={`/blog/${post.alias}`} key={post.id} className="feed-card">
            <div className="feed-image">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="feed-content">
              <span className="feed-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="feed-excerpt">{post.summary.slice(0, 100)}...</p>
              <div className="feed-meta">
                <span><i className="far fa-calendar"></i> {new Date(post.date).toLocaleDateString()}</span>
                <span><i className="far fa-clock"></i> {post.readTime || '5 min'} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RandomFeeds;