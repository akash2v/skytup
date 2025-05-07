import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from "../../assets/ic_launcher.png";
import { Link } from 'react-router-dom';
import ProfileMenu from '../modals/ProfileMenu';

function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
            if (isProfileMenuOpen && !event.target.closest('.profile-menu') && !event.target.closest('.profile-button')) {
                setIsProfileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen, isProfileMenuOpen]);

    return (
        <nav>
            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
            </div>
            
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="akash" />
                    {props.title}
                </Link>
            </div>

            <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}><i className="fas fa-home"></i>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}><i className="fas fa-info-circle"></i>About</Link></li>
                <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}><i className="fas fa-code"></i>Projects</Link></li>
                <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}><i className="fas fa-briefcase"></i>Blog</Link></li>
                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}><i className="fas fa-envelope"></i>Contact</Link></li>
            </ul>
            
            <div className="auth-buttons">
                {props.user ? (
                    <button 
                        className="profile-button" 
                        aria-label="Profile"
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    >
                        <i className="fas fa-user"></i>
                    </button>
                ) : (
                    <>
                        <Link to="/login"><button>Log In</button></Link>
                        <Link to="/register"><button className="signup-button">Sign Up</button></Link>
                    </>
                )}
            </div>
            
            <ProfileMenu isLoggedIn={!!props.user} isOpen={isProfileMenuOpen} onClose={() => setIsProfileMenuOpen(false)} />
        </nav>
    );
}

export default Navbar;