import React, { useState, useEffect } from 'react';
import './modals.css';

const ShareModal = ({ isOpen, onClose, url, title }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    instagram: `https://instagram.com/share?url=${encodeURIComponent(url)}`
  };

  if (!isOpen) return null;

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Share with Friends</h2>
          <button className="close-button" onClick={onClose} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="share-options">
          <button 
            className={`uni-share-button copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopyLink}
            aria-label="Copy link"
          >
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            <span className="tooltip">{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          
          <a 
            href={shareLinks.facebook} 
            className="uni-share-button facebook" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <i className="fab fa-facebook-f"></i>
            <span className="tooltip">Facebook</span>
          </a>
          
          <a 
            href={shareLinks.whatsapp} 
            className="uni-share-button whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="tooltip">WhatsApp</span>
          </a>
          
          <a 
            href={shareLinks.twitter} 
            className="uni-share-button twitter" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <span className="tooltip">Twitter</span>
          </a>
          
          <a 
            href={shareLinks.linkedin} 
            className="uni-share-button linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
            <span className="tooltip">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;