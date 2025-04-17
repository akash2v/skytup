import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import './Blog.css';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

function BlogInfinite() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFilter = searchParams.get('category');
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);
  const [categories, setCategories] = useState([]);

  const loadData = useCallback(async (pageNum, limitCount) => {
    try {
      setIsLoading(true);
      const url = new URL(`${API_ENDPOINT}/api/posts`);
      url.searchParams.append('page', pageNum);
      url.searchParams.append('limit', limitCount);
      if (categoryFilter) {
        url.searchParams.append('category', categoryFilter);
      }
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.data.length === 0) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      setPosts(prevPosts => [...prevPosts, ...data.data]);
      setTotalPosts(data.total || 0);
      setHasMore(pageNum < data.totalPages);
      
      // Extract unique categories
      const uniqueCategories = new Set(data.data.map(post => post.category).flat());
      setCategories(Array.from(uniqueCategories));
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading posts:', error);
      setIsLoading(false);
    }
  }, [categoryFilter]);

  // Reset posts when category changes
  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
  }, [categoryFilter]);

  useEffect(() => {
    if (hasMore) {
      loadData(page, limit);
    }
  }, [page, hasMore, limit, categoryFilter, loadData]);

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

  const getPageMetaDescription = () => {
    if (categoryFilter) {
      return `Explore our ${categoryFilter} articles and tutorials. Find comprehensive guides, tips, and insights about ${categoryFilter} on Skytup Blog.`;
    }
    if (posts.length === 0) {
      return "Explore our collection of tech articles, tutorials, and insights on programming, development, and digital innovation.";
    }
    const recentTopics = posts.slice(0, 3)
      .map(post => post.category)
      .filter((value, index, self) => self.indexOf(value) === index)
      .join(', ');
    return `Latest articles on ${recentTopics} and more. Stay updated with the latest tech trends and tutorials on Skytup Blog.`;
  };

  const getPageTitle = () => {
    if (categoryFilter) {
      return `${categoryFilter} Articles & Tutorials - ${totalPosts} Posts | Skytup Blog`;
    }
    return `Tech Blog - ${totalPosts} Articles on Programming & Development | Skytup`;
  };

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <div
        className="post"
        key={post.id}
        onClick={() => navigate(`/blog/${post.alias}`)}
      >
        <div className="thumbnail-container">
          <img src={post.thumbnail} alt={post.title} />
        </div>
        <div className="post-toolbar">
          <div className="date">{new Date(post.date).toLocaleDateString()}</div>
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
          <div className="share" onClick={(e) => sharePost(e, post)}>
            <i className="fas fa-share-alt"></i> Share
          </div>
        </div>
      </div>
    ));
  };

  const sharePost = (event, post) => {
    event.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: `${window.location.origin}/blog/${post.alias}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.alias}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageMetaDescription()} />
        <meta name="keywords" content={`${categories.join(',')},${categoryFilter || 'programming,development'},tutorials,tech blog,skytup`} />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageMetaDescription()} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={categoryFilter ? `/images/categories/${categoryFilter.toLowerCase()}.jpg` : "/path/to/blog-featured-image.jpg"} />
        <meta property="og:site_name" content="Skytup Blog" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageMetaDescription()} />
        <meta name="twitter:image" content={categoryFilter ? `/images/categories/${categoryFilter.toLowerCase()}.jpg` : "/path/to/blog-featured-image.jpg"} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": categoryFilter ? `${categoryFilter} - Skytup Tech Blog` : "Skytup Tech Blog",
            "description": getPageMetaDescription(),
            "url": window.location.href,
            "publisher": {
              "@type": "Organization",
              "name": "Skytup",
              "logo": {
                "@type": "ImageObject",
                "url": "https://skytup.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="blog">
        <div className="container">
          <aside className="sidebar">
            <h2>Categories</h2>
            <ul>
              <li>
                <Link to="/blog" className={!categoryFilter ? 'active' : ''}>
                  All Categories
                </Link>
              </li>
              {categories.map(category => (
                <li key={category}>
                  <Link 
                    to={`/blog?category=${encodeURIComponent(category)}`}
                    className={categoryFilter === category ? 'active' : ''}
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </aside>
          
          <div className="main-content">
            {categoryFilter && (
              <div className="category-header">
                <h1>{categoryFilter} Articles</h1>
                <p>Explore our collection of {categoryFilter.toLowerCase()} articles and tutorials</p>
              </div>
            )}
            
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
    </>
  );
}

export default BlogInfinite;