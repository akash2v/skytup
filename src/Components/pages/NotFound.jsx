import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './NotFound.css';

const NotFound = ({ 
  code = '404',
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved."
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>{code} - {title}</title>
        <meta name="description" content={message} />
      </Helmet>
      
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-number">{code}</div>
          <h2>{title}</h2>
          <p>{message}</p>
          <button onClick={handleGoBack} className="go-back-button">
            <i className="fas fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;