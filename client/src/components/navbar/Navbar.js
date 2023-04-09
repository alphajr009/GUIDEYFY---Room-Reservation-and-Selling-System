import React from 'react';
import './navbar.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationArrow, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
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
          < div className='search'>
              <div className='searchItem'>
                <FontAwesomeIcon icon={faLocationArrow} className='searchIcon' />
                <input
                  type="text"
                  placeholder="Where's your destination ?"
                  className="searchInput" />
              </div>
      
            <div className='searchItem'>
                <FontAwesomeIcon icon={faPerson} className='searchIcon' />
                <span className='searchText'>0 childern 1 adult 0 room</span>
            </div>

            <div className='searchItem'>
                <FontAwesomeIcon icon={faCalendar} className='searchIcon' />
                <span className='searchText'>date to date</span>
            </div>

            <div className='searchItem'>
                <FontAwesomeIcon icon={faSearch} className='searchIcon' />
              </div>
           
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
