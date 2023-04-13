import React from 'react'
import './footerseller.css'
import footer from '../../../images/footer_h1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faPinterestSquare, faRedditSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footerseller() {
  return (
    <div className='footerseller'>
    <div className="sellerlogo-container">
        <img className="sellerfooter-logo" src={footer} alt="Logo" />
    </div>
    <div className="sellerline">
        <hr />
    </div>
    <div className="sellerfooter-bottom">
        <div className="sellerlinks">
            <div className='sellertextlinks'>About us</div>
            <div className='sellertextlinks'>Terms and Conditions</div>
            <div className='sellertextlinks'>Privacy Policy</div>
            <div className='sellertextlinks'>Payment Terms of Use</div>
        </div>
        <div className="sellersocialmedia">
            <FontAwesomeIcon icon={faInstagram} className='sellericon' />
            <FontAwesomeIcon icon={faFacebookSquare} className='sellericon' />
            <FontAwesomeIcon icon={faTwitterSquare} className='sellericon' />
            <FontAwesomeIcon icon={faRedditSquare} className='sellericon' />
            <FontAwesomeIcon icon={faPinterestSquare} className='sellericon' />
        </div>
    </div>
    <div className="sellercopyright">
        <p className='sellercopywrite-txt'>Copyright © 20022-2023 GUIDEYFY Inc. All Rights Reserved.</p>
    </div>

</div>
  )
}

export default Footerseller