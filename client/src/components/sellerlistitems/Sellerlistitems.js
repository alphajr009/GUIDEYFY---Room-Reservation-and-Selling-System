import React from 'react'
import './sellerlistitems.css'
import { faHotel, faNewspaper, faHouse, faBook,  faChartSimple,  faGift, faMoneyBillWave,  faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sellerlistitems({ setActiveTab, activeTab }) {
  return (
    <div className='seller_container'>
        <div className="selleritems">
            <div
                className={`sellerlistItem ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
            >
                <FontAwesomeIcon icon={faHouse} />
                <h1>Home</h1>
            </div>
            <div
                className={`sellerlistItem ${activeTab === 'reservations' ? 'active' : ''}`}
                onClick={() => setActiveTab('reservations')}
            >
                <FontAwesomeIcon icon={faBook} />
                <h1>Reservations</h1>
            </div>
            <div
                className={`sellerlistItem ${activeTab === 'property' ? 'active' : ''}`}
                onClick={() => setActiveTab('property')}
            >
                <FontAwesomeIcon icon={faHotel} />
                <h1>Property</h1>
            </div>
            <div
                className={`sellerlistItem ${activeTab === 'promotions' ? 'active' : ''}`}
                onClick={() => setActiveTab('promotions')}
            >
                <FontAwesomeIcon icon={faGift} />
                <h1>Promotions</h1>
            </div>
            <div
                className={`sellerlistItem ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => setActiveTab('blog')}
            >
                <FontAwesomeIcon icon={faNewspaper} />
                <h1>Blog</h1>
            </div>
            <div
                className={`sellerlistItem ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
            >
                <FontAwesomeIcon icon={faBookOpen} />
                <h1>Reviews</h1>
            </div>

            <div
                className={`sellerlistItem ${activeTab === 'payments' ? 'active' : ''}`}
                onClick={() => setActiveTab('payments')}
            >
                <FontAwesomeIcon icon={faMoneyBillWave} />
                <h1>Payments</h1>
            </div>

            <div
                className={`sellerlistItem ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
            >
                <FontAwesomeIcon icon={faChartSimple} />
                <h1>Analytics</h1>
            </div>
           

        </div>
    </div>
);
}

export default Sellerlistitems