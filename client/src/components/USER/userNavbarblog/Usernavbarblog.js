import React from 'react'
import './usernavbarblog.css'
import logo from '../../../images/logo.png';
import Searchbar from '../searchbar/Searchbar';
import Registermodal from '../regsitermodal/Registermodal';
import Signinmodal from '../signinmodal/Signinmodal';
import NavbarToggler from '../navtoggler/NavbarToggler'


function Usernavbarblog() {
  const user = JSON.parse(localStorage.getItem('currentUser'));


  return (
    <div className='nav'>
      <div className="navbarblog">
        <div className='navContainer'>
          <div className="navbar-logo-container">
            <img className="navbar-logo" src={logo} alt="Logo" />
          </div>

          <div className="navbar-buttons">
            <button className='btn-list' onClick={() => window.location.href = "/registerseller"} >List your property</button>

            {user ? (<>
              <NavbarToggler />
            </>
            ) : (
              <>
                <Registermodal />
                <Signinmodal />

              </>
            )}

          </div>
        </div>
      </div>
    </div>


  );
}

export default Usernavbarblog