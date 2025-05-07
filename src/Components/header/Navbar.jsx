import React, { useEffect } from "react";
import './Navbar.css';
import logo from "../../assets/ic_launcher.png";
import {Link } from 'react-router-dom';

function Navbar(props) {
    useEffect(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        const handleMenuToggle = () => {
            menu.classList.toggle('active');
            const menuToggleSpans = menuToggle.querySelectorAll('span');
            menuToggleSpans.forEach(span => span.classList.toggle('active'));
        };

        menuToggle.addEventListener('click', handleMenuToggle);

        return () => {
            menuToggle.removeEventListener('click', handleMenuToggle);
        };
    }, []);
    return (
        <nav>
            <div className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo" >
                <Link to="/">
                    <img src={logo} alt="akash" />
                    {props.title}</Link>
            </div>
            <ul className="menu">
                {/* <li><a href="#"><i className="fas fa-home"></i>Home</a></li> */}
                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                <li><Link to="/about"><i className="fas fa-info-circle"></i>About</Link></li>
                <li><Link to="/projects"><i className="fas fa-code"></i>Projects</Link></li>
                <li><Link to="/blog"><i className="fas fa-briefcase"></i>Blog</Link></li>
                <li><Link to="/contact"><i className="fas fa-envelope"></i>Contact</Link></li>
            </ul>
            
                <div className="auth-buttons">
                    <Link to="/login"><button> Log In</button> </Link>
                    <Link to="/register"><button className="signup-button"> Sign Up </button></Link>
                </div>
            
        </nav >
    );

}

export default Navbar;