import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo purposes, just navigate to dashboard
      // In a real app, you would validate credentials with your backend
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      setIsLoading(true);
      // This would be replaced with actual social login logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Logging in with ${provider}`);
      navigate('/dashboard');
    } catch (error) {
      console.error(`${provider} login error:`, error);
      setError(`Failed to login with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login to Skytup</title>
        <meta name="description" content="Sign in to your Skytup account to access personalized tech tutorials, coding resources, and connect with the developer community." />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Login to Skytup" />
        <meta property="og:description" content="Sign in to access your Skytup account" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Login to Skytup" />
        <meta name="twitter:description" content="Sign in to access your Skytup account" />
      </Helmet>

      <div className="auth-container">
        <div className="auth-card">
          <h2>Welcome Back</h2>
          <p className="auth-subtitle">Please login to your account</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button 
              className="social-button google"
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading}
            >
              <FaGoogle className="social-icon" />
              <span>Google</span>
            </button>
            <button 
              className="social-button facebook"
              onClick={() => handleSocialLogin('Facebook')}
              disabled={isLoading}
            >
              <FaFacebook className="social-icon" />
              <span>Facebook</span>
            </button>
            
          </div>

          <p className="auth-redirect">
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;