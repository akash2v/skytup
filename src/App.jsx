import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/footer/Footer";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import ForgotPassword from "./Components/auth/ForgotPassword";
import About from "./Components/pages/About";
import Privacy from "./Components/pages/Privacy";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/blog/Blog";
import BlogPost from "./Components/blog/BlogPost";
import NotFound from "./Components/pages/NotFound";
import Projects from "./Components/pages/Projects";
import ScrollToTop from "./Components/utils/ScrollToTop";
import "./App.css";
import ConstructionModal from "./Components/modals/ConstructionModal";
import Home from "./Components/home/Home";

function App() {
  const [user] = useState(null);
  const isDevelopmentMode = import.meta.env.VITE_DEVELOPMENT_MODE === "true";

  return (
    <Router>
      <div className="app-container">
        <Helmet defaultTitle="Skytup" titleTemplate="%s | Skytup">
          <meta charSet="utf-8" />
          <title>Skytup - Empowering Your Tech Journey</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0066cc" />
          <meta name="description" content="Discover tutorials, articles, and insights on technology, programming, and digital innovation at Skytup." />
          <meta name="keywords" content="skytup,technology,programming,tutorials,blog" />
          
          {/* Default OpenGraph tags */}
          <meta property="og:site_name" content="Skytup" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Skytup - Empowering Your Tech Journey" />
          <meta property="og:description" content="Discover tutorials, articles, and insights on technology, programming, and digital innovation at Skytup." />
          <meta property="og:image" content="https://skytup.com/social-preview.jpg" />
          
          {/* Default Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@skythecoder" />
          <meta name="twitter:title" content="Skytup - Empowering Your Tech Journey" />
          <meta name="twitter:description" content="Discover tutorials, articles, and insights on technology, programming, and digital innovation at Skytup." />
          <meta name="twitter:image" content="https://skytup.com/social-preview.jpg" />
          
          {/* PWA meta tags */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Skytup" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          
          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Helmet>

        <Navbar user={user} title="Skytup" />
        
        {isDevelopmentMode && <ConstructionModal />}
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/:alias" element={<BlogPost />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
