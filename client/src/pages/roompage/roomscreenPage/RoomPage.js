import React, { useState, useEffect } from 'react'
import './roompage.css'
import Blogpagenavbar from '../../../components/BLOG/BlogPageNavbar/Blogpagenavbar'
import Footer from '../../../components/USER/footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';



function formatDescription(description) {
    return description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}


function RoomPage() {
    let params = useParams();
    const [room, setroom] = useState()



    useEffect(() => {

        (async () => {

            if (!localStorage.getItem('currentUser')) {
                window.location.reload = '/login'

            }

            try {
                const data = (await axios.post("http://localhost:5000/api/rooms/getroombyid", { roomid: params.roomid })).data
                setroom(data.room[0]);

            } catch (error) {
                console.log('error')

            }
        })();
    }, [params.roomid]);


    return (
        <div className="roompage">
            <Blogpagenavbar />
            {room && (
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
                                    src={`http://localhost:5000/uploads/${params.roomid}-3.jpg`}
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
                            <div className="roompage-c2-reservetab-container1">
                                <div className='roompage-c2-reservetab-container1-wrapper'>
                                    <div className="reservetab-container1-cin">
                                        <div className="reservetab-container1-cin-label">
                                            <p>Check in</p>
                                            <h4>2017/05/22</h4>
                                        </div>
                                        <div className="reservetab-container1-cin-datecin"></div>
                                    </div>
                                    <hr />
                                    <div className="reservetab-container1-cout">
                                        <p>Check out</p>
                                        <h4>2017/05/25</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="roompage-c2-reservetab-container2">
                                <div className="reservetab-container1-cin">
                                    <div className="reservetab-container1-cin-label">
                                        <p>Rent per day</p>
                                        <h4>Rs.{(room.rentperday)}</h4>
                                    </div>
                                    <div className="reservetab-container1-cin-datecin"></div>
                                </div>
                                <hr />
                                <div className="reservetab-container1-cout">
                                    <p>Days of Staying</p>
                                    <h4>10</h4>
                                </div>
                            </div>
                            <div className="roompage-c2-reservetab-container3"><p>Total fee Rs.120000.00</p></div>
                            <div className="roompage-c2-reservetab-container4"><button className="blog-page-booknowbtn">
                                Book Now
                            </button></div>
                        </div>

                    </div>
                    <div className="roompage-container-3" >
                        <div className="roompage-container3-header">
                            <h1>About this Space</h1>
                            <p>{formatDescription(room.description)}</p>

                            <h2>Services</h2>
                        </div>
                        <div className="roompage-container-services-map">
                            {room.services.map((service, index) => (
                                <div className="service-item" key={index}>
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default RoomPage