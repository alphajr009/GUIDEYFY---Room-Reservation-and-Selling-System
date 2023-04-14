import React from 'react';
import './userprofile.css';
import user_image from '../../../images/user_image.png'
import Personaldetails from '../personaldetails/Personaldetail'
import Security from '../securitys/Security';
import Help from '../help/Help';

function Userprofile({ setActiveButton, activeButton }) {
    return (
        <div>
            <div className='userprofile_container'>
                <div className='profile_container'>
                    <div className='user_services'>
                        <div className='user_box'>
                            <div className='user_image_and_name_wrapper'>
                                <div className='user_image_and_name'>
                                    <div className='user_image'>
                                        <img src={user_image} alt='user' className='user_img' />
                                    </div>
                                    <h1 className='user_name'>Sahan Mallesha</h1>
                                </div>
                            </div>
                            <div className='button_wrapper'>
                                <button className={`btn btn-person_details ${activeButton === 'personaldetails' ? 'active' : ''}`}
                                    onClick={() => setActiveButton('personaldetails')}>Person Details</button>

                                <button className={`btn btn-security ${activeButton === 'security' ? 'active' : ''}`}
                                    onClick={() => setActiveButton('security')}>Security</button>

                                <button className={`btn btn-help_and_contact ${activeButton === 'help' ? 'active' : ''}`}
                                    onClick={() => setActiveButton('help')}>Help and Contact us</button>

                            </div>
                        </div>
                    </div>

                    <div className='details_container'>
                        {activeButton === 'personaldetails' && <Personaldetails />}
                        {activeButton === 'help' && <Help />}
                        {activeButton === 'security' && <Security />}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userprofile
