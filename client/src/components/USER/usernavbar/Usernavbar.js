import React from 'react';
import './usernavbar.css';
import logo from '../../../images/logo_admin.png';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Usernavbar() {
  return (
    <div className="user_nav">
      <div className="user_navbar">
        <div className="user_navContainer">
          <div className="user_navbar-logo-container">
            <div className="user_navbar-logo-and-icon">
              <img className="user_navbar-logo" src={logo} alt="Logo" />
              <div className="user_icon">
                <FontAwesomeIcon icon={faBell} className='bell' />
                <FontAwesomeIcon icon={faCircleUser} className='user' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usernavbar;
