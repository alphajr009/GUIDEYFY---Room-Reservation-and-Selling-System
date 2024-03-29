import React from 'react';
import './adminListItems.css';
import { faBook, faHotel, faChartLine, faUserGroup, faUsers, faNewspaper, faReceipt, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminListItems({ setActiveTab, activeTab }) {
    return (
        <div className='list_container'>
            <div className="listitem">
                <div
                    className={`adminlistItem ${activeTab === 'booking' ? 'active' : ''}`}
                    onClick={() => setActiveTab('booking')}
                >
                    <FontAwesomeIcon icon={faBook} />
                    <h1>Booking</h1>
                </div>
                <div
                    className={`adminlistItem ${activeTab === 'rooms' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rooms')}
                >
                    <FontAwesomeIcon icon={faHotel} />
                    <h1>Rooms</h1>
                </div>
                <div
                    className={`adminlistItem ${activeTab === 'payment' ? 'active' : ''}`}
                    onClick={() => setActiveTab('payment')}
                >
                    <FontAwesomeIcon icon={faChartLine} />
                    <h1>Payments</h1>
                </div>
                <div
                    className={`adminlistItem ${activeTab === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveTab('users')}
                >
                    <FontAwesomeIcon icon={faUserGroup} />
                    <h1>Users</h1>
                </div>
                <div
                    className={`adminlistItem ${activeTab === 'sellers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sellers')}
                >
                    <FontAwesomeIcon icon={faUsers} />
                    <h1>Sellers</h1>
                </div>
                <div
                    className={`adminlistItem ${activeTab === 'blogs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('blogs')}
                >
                    <FontAwesomeIcon icon={faNewspaper} />
                    <h1>Blogs</h1>
                </div>

                <div
                    className={`adminlistItem ${activeTab === 'reports' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reports')}
                >
                    <FontAwesomeIcon icon={faFile} />
                    <h1>Reports</h1>
                </div>
               

            </div>
        </div>
    );
}

export default AdminListItems;
