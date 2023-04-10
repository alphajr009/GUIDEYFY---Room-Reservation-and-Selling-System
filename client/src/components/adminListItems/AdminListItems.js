import React from 'react'
import './adminListItems.css'
import {faBook, faHotel, faChartLine, faUser, faUsers, faUserGroup, faBlog, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleAdminItemClick = (itemName) => {
    let url = '/';
    if (itemName === 'booking') {
      url = '/booking';
    } else if (itemName === 'rooms') {
      url = '/rooms';
    } else if (itemName === 'finance') {
      url = '/finance';
    } else if (itemName === 'users') {
      url = '/users';
    } else if (itemName === 'sellers') {
      url = '/sellers';
    } else if (itemName === 'blogs') {
      url = '/blogs';
    }
    window.location.assign(url);
  };
  
function AdminListItems() {
    return (


            <div className='list_container'>
                <div className='listitem'>
                    <div className="adminlistItem" onClick={handleAdminItemClick}>
                        <FontAwesomeIcon icon={faBook} />
                        <h1>Boooking</h1>
                    </div>

                    <div className="adminlistItem"  onClick={handleAdminItemClick}>
                        <FontAwesomeIcon icon={faHotel} />
                        <h1>Rooms</h1>
                    </div>


                    <div className="adminlistItem"onClick={handleAdminItemClick}  >
                        <FontAwesomeIcon icon={faChartLine} />
                        <h1>Finance</h1>
                    </div>


                    <div className="adminlistItem" onClick={handleAdminItemClick} >
                        <FontAwesomeIcon icon={faUserGroup} />
                        <h1>Users</h1>
                    </div>


                    <div className="adminlistItem" onClick={handleAdminItemClick}>
                        <FontAwesomeIcon icon={faUsers} />
                        <h1>Sellers</h1>
                    </div>

                    <div className="adminlistItem" onClick={handleAdminItemClick}>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <h1>Blogs</h1>
                    </div>

                </div>
            </div>



    )
}

export default AdminListItems