import React from 'react';
import logo from '../../../images/logo.png';
import Registermodal from '../../USER/regsitermodal/Registermodal';
import Signinmodal from '../../USER/signinmodal/Signinmodal';
import NavbarToggler from '../../USER/navtoggler/NavbarToggler'
import './Blogpagenavbar.css'


function Blogpagenavbar() {

  const user = JSON.parse(localStorage.getItem('currentUser'));


  return (
    <div className="nav">
      <div className="bloscreenavbar">
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

export default Blogpagenavbar;