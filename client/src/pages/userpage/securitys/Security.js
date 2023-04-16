import React from 'react'
import './security.css'

function Security() {
  return (
    <div className='user-p-security'>
      <div className="user-p-boxall">
        {/* Password Change Box */}
        <div className="user-p-password-box">
          <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp'>Password</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>Change your password regularly to keep
                your account secure</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' type="primary" htmlType="submit">
                Change
              </button>
            </div>
          </div>
        </div>
        {/*Active Session Box Container */}
        <div className="user-p-activesession-box">
        <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp-activesession'>Active session</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>Selecting 'Sign Out' will end your current session 
              and sign you out from all devices.</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' type="primary" htmlType="submit">
                Sign out
              </button>
            </div>
          </div>
        </div>
        {/* Delete Account Box Container */}
        <div className="user-p-deleteacc-box">
        <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp-deleteacc'>Delete Account</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>This action will permanently remove your account and all associated data, 
              including your personal information and history. This cannot be undone. Please proceed with caution.</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' type="primary" htmlType="submit">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security