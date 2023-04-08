import React from 'react';
import './navbar.css';
import logo from '../../images/logo.png';


function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <div className="navbar-text">
        <h1>Let’s start the Guide</h1>
        <p>Search best accommodation and much more.</p>
      </div>
      <div className="navbar-buttons">
        <button>List your property</button>
        <button>Register</button>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;