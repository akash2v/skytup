import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Hero from "./Components/header/Hero";
import "./App.css";
import ConstructionModal from "./Components/modals/ConstructionModal";
import Home from "./Components/home/Home";

function App() {
  // Mock user data - replace with actual user data from your auth system
  const [user] = useState(null);
  // const [construction, setConstruction] = useState(true)

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} title="Skytup" />
       
        {/* <ConstructionModal /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route
            path="/"
            element={
             <Home />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
