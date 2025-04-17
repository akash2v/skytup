import { useEffect } from 'react';

export const useDocumentMeta = ({ title, description, ogTitle, ogDescription, ogImage, type = 'website' }) => {
  useEffect(() => {
    // Update basic meta tags
    document.title = title ? `${title} | Skytup` : 'Skytup';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || '');

    // Update OpenGraph tags
    const ogTags = {
      'og:title': ogTitle || title,
      'og:description': ogDescription || description,
      'og:type': type,
      'og:image': ogImage,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Cleanup function
    return () => {
      document.title = 'Skytup';
    };
  }, [title, description, ogTitle, ogDescription, ogImage, type]);
};