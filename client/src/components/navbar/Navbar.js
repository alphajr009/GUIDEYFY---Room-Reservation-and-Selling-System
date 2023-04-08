import React from 'react';
import './navbar.css';
import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className='navContainer'>
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="Logo" />
          <div className="navbar-text">
            <h1>Let’s start the Guide</h1>
            <p>Search best accommodation and much more.</p>
          </div>
        </div>
        <div className="navbar-buttons">
          <button className='btn-list'>List your property</button>
          <button className='btn-reg'>Register</button>
          <button className='btn-sign'>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
