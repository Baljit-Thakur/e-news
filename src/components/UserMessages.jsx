import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './UserMessages.css';

const UsersMessages = () => {
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

      {/* Added News Table */}
      <div className="added-news">
        <h1>Users Messages</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Images</th>
              <th>Message</th>
              <th>Subject</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asraf</td>
              <td>PM change</td>
              <td>7781826301</td>
              <td>mail692@rku.ac.in</td>
              <td></td>
              <td>.......</td>
              <td>Sources</td>
              <td>
                <button className="edit-button">
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
              </td>
              <td>
                <button className="delete-button">
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="go-back-button">GO BACK</button>
      </div>
    </div>
  );
};

export default UsersMessages;