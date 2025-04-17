import React, { useEffect, useState } from 'react';
import './Blog.css';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

function BlogInfinite() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const loadData = async (pageNum, limitCount) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/api/posts?page=${pageNum}&limit=${limitCount}`);
      const data = await response.json();
      
      if (data.data.length === 0) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      setPosts(prevPosts => [...prevPosts, ...data.data]);
      setHasMore(pageNum < data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading posts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      loadData(page, limit);
    }
  }, [page, hasMore, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <div
        className="post"
        key={post.id}
        onClick={() => (window.location.href = `/blog/data/${post.id}`)}
      >
        <div className="thumbnail-container">
          <img src={post.thumbnail} alt={post.title} />
        </div>
        <div className="post-toolbar">
          <div className="date">{post.date}</div>
        </div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className="post-meta">
          <div className="views">
            <i className="fas fa-eye"></i> {post.views}
          </div>
          <div className="likes">
            <i className="fas fa-heart"></i> {post.likes}
          </div>
          <div className="share" onClick={(e) => sharePost(e, post.id)}>
            <i className="fas fa-share-alt"></i> Share
          </div>
        </div>
      </div>
    ));
  };

  const sharePost = (event, postId) => {
    event.stopPropagation();
    console.log(`Share post with ID: ${postId}`);
  };

  return (
    <div className="blog">
      <div className="container">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </aside>
        <div className="main-content">
          <div className="posts">{renderPosts(posts)}</div>
          {isLoading ? (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i> Loading...
            </div>
          ) : null}
          {!hasMore && posts.length > 0 && (
            <div className="no-more-posts">
              No more posts to load
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogInfinite;