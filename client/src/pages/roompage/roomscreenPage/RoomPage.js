import React from 'react'
import './roompage.css'
import Blogpagenavbar from '../../../components/BLOG/BlogPageNavbar/Blogpagenavbar'
import Footer from '../../../components/USER/footer/Footer'
import { useParams } from 'react-router-dom'




function RoomPage() {
    let params = useParams();


    return (
        <div className="roompage">
            <Blogpagenavbar />
            <div className="roompage-container">
                <div className="roompage-container-1">
                    <div className="roompage-c1-img1">
                        <img className='roompage-c1-img1-photo-sub' src={`http://localhost:5000/uploads/${params.roomid}-1.jpg`} />
                    </div>
                    <div className="roompage-c1-img1">
                        <img className='roompage-c1-img1-photo-sub' src={`http://localhost:5000/uploads/${params.roomid}-2.jpg`} />
                    </div>
                    <div className="roompage-c1-img1">
                        <div className="image-container">
                            <img
                                className="image"
                                src={`http://localhost:5000/uploads/${params.roomid}-2.jpg`}
                                alt="Your Image"
                            />
                            <div className="overlay">
                                <div className="overlay-text"><p>+more</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roompage-container-2">
                    <div className="roompage-c1-img1">
                        <img className='roompage-c1-img1-photo-main' src={`http://localhost:5000/uploads/${params.roomid}-0.jpg`} />
                    </div>

                    <div className="roompage-c2-reservetab">
                    <div className="roompage-c2-reservetab-container"><p>Room Details</p></div>
                        <div className="roompage-c2-reservetab-container1"></div>
                        <div className="roompage-c2-reservetab-container2"></div>
                        <div className="roompage-c2-reservetab-container3"><p>Total fee Rs.120000.00</p></div>
                        <div className="roompage-c2-reservetab-container3"></div>

                    </div>

                </div>
                <div className="roompage-container-3"></div>

            </div>
            <Footer />
        </div>
    )
}

export default RoomPage