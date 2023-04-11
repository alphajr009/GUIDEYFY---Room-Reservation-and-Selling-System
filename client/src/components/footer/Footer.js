import React from 'react'
import './footer.css'
import footer from '../../images/footer_h1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faPinterestSquare, faRedditSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className='footer'>
            <div className="logo-container">
                <img className="footer-logo" src={footer} alt="Logo" />
            </div>
            <div className='button-container'>
                <h1 className="button-txt">Join our network and
                    grow your business
                </h1>
                <button className='button-list'>List your property</button>
            </div>
            <div className="line">
                <hr />
            </div>
            <div className="footer-bottom">
                <div className="links">
                    <div className='textlinks'>About us</div>
                    <div className='textlinks'>Terms and Conditions</div>
                    <div className='textlinks'>Privacy Policy</div>
                    <div className='textlinks'>Payment Terms of Use</div>
                </div>
                <div className="socialmedia">
                    <FontAwesomeIcon icon={faInstagram} className='sicon' />
                    <FontAwesomeIcon icon={faFacebookSquare} className='sicon' />
                    <FontAwesomeIcon icon={faTwitterSquare} className='sicon' />
                    <FontAwesomeIcon icon={faRedditSquare} className='sicon' />
                    <FontAwesomeIcon icon={faPinterestSquare} className='sicon' />
                </div>
            </div>
            <div className="copyright">
                <p className='copywrite-txt'>Copyright © 20022-2023 GUIDEYFY Inc. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer