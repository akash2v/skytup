import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './BlogPost.css';

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const decodeHtmlEntities = (text) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const BlogPost = () => {
  
  const { alias } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/api/blog/${alias}`);
        const data = await response.json();
        setBlog(data);
        setIsLoading(false);
        
        // Update view count
        if (data) {
          const updateViews = async () => {
            try {
              await fetch(`${API_ENDPOINT}/api/blog/view`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: data.id }),
              });
            } catch (error) {
              console.error('Error updating views:', error);
            }
          };
          updateViews();
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [alias]);

  const handleLike = async () => {
    if (!blog || liked) return;
    try {
      const response = await fetch(`${API_ENDPOINT}/api/blog/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blog.id }),
      });
      const data = await response.json();
      if (data.success) {
        setBlog(prev => ({ ...prev, likes: prev.likes + 1 }));
        setLiked(true);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.summary,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const getMetaImage = () => {
    if (!blog) return '';
    return blog.thumbnail || '/path/to/default-blog-image.jpg';
  };

  const getFormattedDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading Article... | Skytup Blog</title>
          <meta name="description" content="Please wait while we load this amazing article for you..." />
        </Helmet>
        <div className="blog-post-loading">
          <div className="loading-spinner"></div>
          <p>Loading amazing content...</p>
        </div>
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | Skytup Blog</title>
          <meta name="description" content="The requested article could not be found. Browse our other articles for great content." />
        </Helmet>
        <div className="blog-post-error">
          <h2>Blog not found</h2>
          <Link to="/blog" className="back-to-blog">Back to Blog</Link>
        </div>
      </>
    );
  }

  const metaDescription = blog.summary.length > 160 
    ? `${blog.summary.substring(0, 157)}...`
    : blog.summary;

  return (
    <>
        
      <Helmet>
        <title>{`${blog.title} | Skytup Blog`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${blog.category},${blog.tags?.join(',')},skytup,blog,tutorial`} />
        <meta name="author" content={blog.author || 'Skytup Team'} />
        <meta name="publish_date" content={blog.date} />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={getMetaImage()} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Skytup" />
        <meta property="og:published_time" content={blog.date} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={getMetaImage()} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={blog.author || 'Skytup Team'} />
        <meta name="twitter:label2" content="Published on" />
        <meta name="twitter:data2" content={getFormattedDate(blog.date)} />
        
        {/* Article specific meta tags */}
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:section" content={blog.category} />
        {blog.tags?.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "image": getMetaImage(),
            "datePublished": blog.date,
            "dateModified": blog.updatedAt || blog.date,
            "author": {
              "@type": "Organization",
              "name": blog.author || "Skytup Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Skytup",
              "logo": {
                "@type": "ImageObject",
                "url": "https://skytup.com/logo.png"
              }
            },
            "description": metaDescription
          })}
        </script>
      </Helmet>
      
      <div className="blog-post-container">
        <div className="blog-post-header" style={{ backgroundImage: `url(${blog.thumbnail})` }}>
          <div className="blog-post-header-overlay">
            <div className="blog-post-header-content">
              <div className="blog-post-category">{blog.category}</div>
              <h1 className="blog-post-title">{blog.title}</h1>
              <div className="blog-post-meta">
                <div className="blog-post-info">
                  <span className="blog-post-date">
                    <i className="far fa-calendar"></i>
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <span className="blog-post-views">
                    <i className="far fa-eye"></i>
                    {blog.views} Views
                  </span>
                  <span className="blog-post-likes">
                    <i className="far fa-heart"></i>
                    {blog.likes} Likes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-post-content">
          <div className="blog-post-summary">
            <p>{blog.summary}</p>
          </div>
          
          <div className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(blog.description) }}
          ></div>

          <div className="blog-post-actions">
            <button 
              className={`like-button ${liked ? 'liked' : ''}`}
              onClick={handleLike}
              disabled={liked}
            >
              <i className={`${liked ? 'fas' : 'far'} fa-heart`}></i>
              {liked ? 'Liked' : 'Like'}
            </button>
            <button className="share-button" onClick={handleShare}>
              <i className="fas fa-share-alt"></i>
              Share
            </button>
          </div>

          <div className="blog-post-navigation">
            <Link to="/blog" className="back-to-blog">
              <i className="fas fa-arrow-left"></i>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

    </>

  );
};

export default BlogPost;