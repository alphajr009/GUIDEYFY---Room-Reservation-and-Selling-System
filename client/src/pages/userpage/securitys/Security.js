import React from 'react'
import './security.css'
import axios from 'axios'
import Swal from 'sweetalert2'


function Security() {

  const user = JSON.parse(localStorage.getItem("currentUser"))

  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/home'
}


async function deleteUser() {

   const _id = user._id;
  try {
      const res = (await axios.patch('http://localhost:5000/api/users/deleteuser', { _id })).data;
      console.log("User Deleted Successfully");
      logout();
      window.location.href = '/home'
  } catch (error) {
      console.log(error)
      
  }
}

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
              <button className='user-psecure-bc-password-btn' onClick={logout}>
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
              <button  className='user-psecure-bc-password-btn' onClick={() => {
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            cancelButtonText: 'Cancel',
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete User!'
                        }).then((result) => {
                            if (result.isConfirmed) {

                                deleteUser(user._id)
                                Swal.fire(
                                    'Deleted!',
                                    'User has been deleted.',
                                    'success'
                                )
                                .then(result => {
                                    localStorage.clear();
                                    window.location.href = '/home'
                                })
                            }
                        })
                    } }  >
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