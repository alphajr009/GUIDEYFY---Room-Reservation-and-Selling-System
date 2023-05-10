
import React from 'react'
import './sellernavbar.css';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Space } from 'antd';
import logo from '../../../images/logo_admin.png';
import SellerListItems from '../sellerlistitems/Sellerlistitems'
import Personaldetail from '../../../pages/sellerpage/personaldetails/Personaldetails';
import Help from '../../../pages/sellerpage/help/Help'


function Sellernavbar({ setActiveTab, activeTab }) {

  const user = JSON.parse(localStorage.getItem('currentUser'));

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/home'
    }

  const items = [
    {
        key: '1',
        label: (
            <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "/sellerprofile"}>
                Manage Account
            </button>
        ),
    },
    {
        key: '2',
        label: (
            <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "../../../pages/sellerpage/help/Help"} >
                Help
            </button>
        ),
    },
    {
      key: '3',
      label: (
          <button className='nav-toggle-lits-btns'  onClick={logout}>
              Sign out
          </button>
      ),
  }
];

  return (
    <div className="seller_nav">
      <div className="seller_navbar">
        <div className='seller_navContainer'>
          <div className="seller_navbar-logo-container">
            <div className="seller_navbar-logo-and-text">
            <a href= '/home'>
              <img className="seller_navbar-logo" src={logo} alt="Logo" />
              </a>
              <div className="seller_navbar-text">
                <h1>Seller Central</h1>
              </div>
              <div className="seller_icons">
                <FontAwesomeIcon icon={faBell} className='bell' />
      
                <Space wrap>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomLeft"

                    >
                        <FontAwesomeIcon icon={faCircleUser} className='user' />
                    </Dropdown>
                </Space>
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