import React from 'react'
import './navbartoggler.css'
import { Dropdown, Space } from 'antd';
import userNavToggleicon from '../../../images/userNavToggleicon.png'


function NavbarToggler() {

    const user = JSON.parse(localStorage.getItem('currentUser'));

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/home'
    }

    const items = [
        {
            key: '1',
            label: (
                <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "/profile"}>
                    Manage Account
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "/bookings"}>
                    Bookings
                </button>
            ),
        },
        {
            key: '3',
            label: (
                <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "/registerseller"}>
                    Selling
                </button>
            ),
        },
        {
            key: '4',
            label: (
                <button className='nav-toggle-lits-btns' onClick={() => window.location.href = "/help"} >
                    Help
                </button>
            ),
        },
        {
            key: '5',
            label: (
                <button className='nav-toggle-lits-btns'  onClick={logout}>
                    Sign out
                </button>
            ),
        }
    ];



    return (

        <div className='navbar-togglerbtn-xx-margin'>
            <div><img className="nt-userNavToggle-icon" src={userNavToggleicon} alt="Logo" /></div>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomLeft"

                    >
                        <button className="navbar-dropdown-toggle-btn">
                        
                            {user.fname} {user.lname}
                        </button>
                    </Dropdown>
                </Space>
            </Space>
        </div>
    )
}

export default NavbarToggler













// <div className='navbar-dropdown-toggle'>
// <button className="navbar-dropdown-toggle-btn"
//     type="button"
//     id="dropdownMenuButton1"
//     data-bs-toggle="dropdown"
//     aria-expanded="false">
//     <i className='fa fa-user' ></i> {user.fname}{user.lname}
// </button>
// </div>