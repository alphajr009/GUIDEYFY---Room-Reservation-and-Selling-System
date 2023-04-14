import React from 'react'
import './personaldetails.css';
function Personaldetail() {
  return (

    <div className='user-profile-personaldetails'>
      <div className="user-profile-mainh1txt">Personal Details</div>
      <div className='user-profile-boxesall'>

        {/* Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container">
            <p className='user-profile-box-containerp'>Name</p>
            <div className='userp-bc-namec'>
              <p className='user-profile-bc-fname'>Sahan</p>
              <p className='user-profile-bc-lname'>Maleesha</p>
            </div>
            <p className='userpro-bc-editpopup'>Edit</p>
          </div>
        </div>
        {/* Display Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-displayn">
            <p className='user-profile-box-containerp'>Display Name</p>
            <div className='userp-bc-namec'>
              <p className='user-profile-bc-fname'>Alpha</p>
            </div>
            <p className='userpro-bc-editpopup-displayn'>Edit</p>
          </div>
        </div>
        {/* Email Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container">
            <p className='user-profile-box-containerp'>Email</p>
            <div className='userp-bc-namec'>
              <p className='user-profile-bc-fname'>sahanmaleesha234@gmail.com </p>
            </div>
            <p className='userpro-bc-editpopup-email'>Edit</p>
          </div>
        </div>
        {/* Address Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-address">
            <p className='user-profile-box-containerp'>Address</p>
            <div className='userp-bc-address'>
              <p className='user-profile-bc-address'>34/6, Wellawatta Road,Malabe</p>
            </div>
            <p className='userpro-bc-editpopup-address'>Edit</p>
          </div>
        </div>
        {/* Name Box Container */}
        <div className="user-profile-box2">5</div>
        {/* Name Box Container */}
        <div className="user-profile-box2">6</div>
        {/* Name Box Container */}
        <div className="user-profile-box2">7</div>
      </div>
      {/* Name Box Container */}
      <div className="user-profile-btn-container"></div>
    </div>
  );
}

export default Personaldetail