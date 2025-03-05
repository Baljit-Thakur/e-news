import React from 'react';
import './adminnavbar.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For icons
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Profile and search icons


const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">E-News</div>
      </div>
      <div className="navbar-right">
        {/* Nav Links moved to left side of icons */}
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/user">User</a></li>
          <li><a href="/messages">Messages</a></li>
        </ul>
        {/* Search Icon and Profile Icon */}
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </nav>
  );
};

export default AdminNavbar;