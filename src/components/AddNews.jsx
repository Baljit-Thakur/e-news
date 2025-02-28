import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './AddNews.css';

const AddNews = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        {/* Left Side: Logo */}
        <div className="navbar-logo">
          <div className="logo">E-News</div>
        </div>

        {/* Middle: Navigation Links */}
        <div className="navbar-middle">
          <ul className="nav-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/messages">Messages</a></li>
          </ul>
        </div>

        {/* Right Side: Search and Profile Icons */}
        <div className="navbar-right">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </nav>

      <div>
        <h1> ADD NEWS</h1>
      </div>

      {/* Add News Form */}
      <div className="add-news-container">
        <h2>News Title</h2>
        <input type="text" placeholder="Enter news title" className="news-input" />
        
        <h2>News Content</h2>
        <textarea placeholder="Enter news content" className="news-textarea"></textarea>
        
        <h2>Your Name</h2>
        <input type="text" placeholder="Enter your name" className="news-input" />
        
        <h2>Category</h2>
        <select className="news-select">
          <option value="product">Product</option>
          <option value="product">Technology</option>
          <option value="product">Politics</option>
          <option value="product">Robotics</option>

          {/* Add more options as needed */}
        </select>
        
        <h2>Choose your picture</h2>
        <input type="file" className="news-file" />
        
        {/* Buttons */}
        <div className="buttons-container">
          <button className="publish-button">Publish News</button>
          <button className="go-back-button">GO BACK</button>
        </div>
      </div>
    </div>
  );
};

export default AddNews;