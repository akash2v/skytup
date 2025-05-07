import React from 'react';
import { useNavigate } from 'react-router-dom';
import './modals.css';

const ProfileMenu = ({ isLoggedIn, isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onClose();
      navigate('/login');
    }
  };

  const handleNavigation = (path) => {
    onClose();
    navigate(path);
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    const pageTitle = document.title;
    
    window.dispatchEvent(new CustomEvent('open-share-modal', {
      detail: {
        url: currentUrl,
        title: pageTitle
      }
    }));
    onClose();
  };

  // Define all possible menu items
  const menuItems = [
    {
      title: 'Share',
      icon: 'fa-share-alt',
      onClick: handleShare,
      show: true
    },
    {
      title: 'Notifications',
      icon: 'fa-bell',
      onClick: () => handleNavigation('/notifications'),
      show: true
    },
    {
      title: 'Settings',
      icon: 'fa-cog',
      onClick: () => handleNavigation('/settings'),
      show: true
    },
    {
      title: 'Dashboard',
      icon: 'fa-tachometer-alt',
      onClick: () => handleNavigation('/dashboard'),
      show: isLoggedIn
    },
    {
      title: 'My Profile',
      icon: 'fa-user',
      onClick: () => handleNavigation('/profile'),
      show: isLoggedIn
    },
    {
      title: 'My Posts',
      icon: 'fa-file-alt',
      onClick: () => handleNavigation('/my-posts'),
      show: isLoggedIn
    },
    {
      title: 'Bookmarks',
      icon: 'fa-bookmark',
      onClick: () => handleNavigation('/bookmarks'),
      show: isLoggedIn
    },
    {
      title: 'Logout',
      icon: 'fa-sign-out-alt',
      onClick: handleLogout,
      show: isLoggedIn,
      className: 'logout-item'
    }
  ];

  return (
    <div className={`profile-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        {isLoggedIn ? (
          <div className="user-info">
            <i className="fas fa-user-circle"></i>
            <span>My Account</span>
          </div>
        ) : (
          <div className="menu-title">
            <i className="fas fa-shapes"></i>
            <span>Sky Panel</span>
          </div>
        )}
      </div>
      <div className="menu-content">
        {menuItems
          .filter(item => item.show)
          .map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`menu-item ${item.className || ''}`}
              title={item.title}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.title}</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProfileMenu;