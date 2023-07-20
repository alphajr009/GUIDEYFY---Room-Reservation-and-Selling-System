import React from 'react'
import './sellernavbar.css';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../images/logo_admin.png';
import SellerListItems from '../sellerlistitems/Sellerlistitems'


function Sellernavbar({ setActiveTab, activeTab }) {
  return (
    <div className="seller_nav">
      <div className="seller_navbar">
        <div className='seller_navContainer'>
          <div className="seller_navbar-logo-container">
            <div className="seller_navbar-logo-and-text">
            <a href= '/'>
              <img className="seller_navbar-logo" src={logo} alt="Logo" />
              </a>
              <div className="seller_navbar-text">
                <h1>Seller Central</h1>
              </div>
              <div className="seller_icons">
                <FontAwesomeIcon icon={faBell} className='bell' />
                <FontAwesomeIcon icon={faCircleUser} className='user' />
              </div>
            </div >
            <SellerListItems setActiveTab={setActiveTab} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellernavbar