import React from 'react'
import './security.css';

function Security() {
  return (
    <div>
      <div className='bs_security_js' >
        <div className='bs_security_js_1' >


          <div className='label_security_js'>
            <label for="name">Password:</label>
            <button className='btn_security_password_js'>Rest</button>
          </div>

        </div>
        <div className='bs_security_js_2' >

          <div className='label_security_js'>
            <label for="name">Active session:</label>
            <button className='btn_security_active_js'>Sign Out</button>

          </div>
        </div>

        <div className='bs_security_js_3' >

          <div className='label_js'>
            <label for="name">Delete account:</label>
            <button className='btn_security_delete_js'>Delete Account</button>

          </div>


        </div>



      </div></div>
  )
}

export default Security