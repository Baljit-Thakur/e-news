import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import './profilepage.css';

const ProfilePage = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">E-News</div>
          <ul className="nav-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/messages">Messages</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </nav>

      {/* Profile Page Content */}
      <div className="profile-page">
        {/* Profile Picture, Username, and Edit Button */}
        <div className="profile-header">
          <div className="profile-info">
            <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
            <h1 className="user-name">MD ASRAF ALI</h1>
          </div>
          <button className="edit-button">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        </div>

        {/* Combined Section for About Us and Profile Details */}
        <section className="combined-section sky-blue">
          <h1>About Us</h1>
          <h2>Profile Details</h2>
          <p>Learn your about at email commentary regarding all. Algo! All you can express our details supports.</p>

          <div className="profile-details">
            <div className="detail">
              <h4>Profile Details</h4>
              <p>First Name: MD ASRAF ALI</p>
              <p>Email: mail@profile.ac.cn</p>
              <p>HID: TYRRS2000</p>
            </div>
            <div className="detail">
              <h4>Middle Name</h4>
              <p>ASRAF:</p>
              <p>Phone: 7781826301</p>
            </div>
            <div className="detail">
              <h4>Last Name</h4>
              <p>ALI:</p>
              <p>IDEA: 30-Jr.-2020</p>
            </div>
            <div className="detail">
              <h4>Login Details</h4>
              <p>Email: mail@profile.ac.cn</p>
              <p>Phone: TYRRS5000</p>
            </div>
            <div className="detail">
              <h4>Password</h4>
              <p>………..</p>
              <button>Change Password</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h2>About</h2>
          <p>We aim to provide high-quality promotional and timely promotion of consumers in accordance with the requirements set forth on an appendix.</p>
        </div>
        <div className="footer-section">
          <h2>Get In Touch</h2>
          <p>3/4/2019, Kazakhstanism, Russia, Galatria, superengineered.com</p>
          <p>+00 111 222 3353</p>
        </div>
        <div className="footer-section">
          <h2>Pages</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Subscriber</h2>
          <p>Subscriber is our mailing list to get the latest results.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;