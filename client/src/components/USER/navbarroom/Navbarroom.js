import React from 'react';
import './navbarroom.css';
import logo from '../../../images/logo.png';

function Navbarroom() {
  return (
    <div className="nav">
    <div className="navbar">
      <div className='navContainer'>
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="Logo" />

          <div className="navbar-text">
            <h1>Let’s start the Guide</h1>
            <p>Search best accommodation and much more.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbarroom



