import React, { useState, useEffect } from 'react'
import './roompage.css'
import Blogpagenavbar from '../../../components/BLOG/BlogPageNavbar/Blogpagenavbar'
import Footer from '../../../components/USER/footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Modal, Input, Form } from 'antd';




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

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const goToSlide = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const [promocode, setpromocode] = useState('')


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
                    <div className="roompage-container-title">
                        <h2>{room.title}</h2>
                    </div>
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
                            <div className="roompage-c2-reservetab-container4">
                                <button className="blog-page-booknowbtn1"
                                    onClick={showModal}>
                                    Book Now
                                </button>
                            </div>
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

                    <Modal title="Reservation"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        wrapClassName="roompage-modal"

                    >
                        {activeSlide === 1 && (
                            <div className="modal-slide-1">
                                <div className="modal-slide1-booking-details">
                                    <div className="modal-slide1-booking-details-roomname">
                                        <div className="roompage-modal-slide-img">
                                            <img className='roompage-ms-rdetilas' src={`http://localhost:5000/uploads/${params.roomid}-0.jpg`} />
                                        </div>
                                        <div className="roompage-modal-slide-img-name">
                                            <p>{room.title}</p>
                                        </div>
                                    </div>

                                    <div className="modal-slide1-booking-details-roomdetails">
                                        <div className='msbd-roomdetails-all'>
                                            <div className='msbd-roomdetails-all-text'>
                                                <h4 className='roomdetailsh4'>From Date </h4>
                                                <h4 >:-</h4>
                                                <h4 className='roomdetailsh5'>05/10/2020</h4>
                                            </div>
                                            <div className='msbd-roomdetails-all-text'>
                                                <h4 className='roomdetailsh4'>To Date </h4>
                                                <h4 >:-</h4>
                                                <h4 className='roomdetailsh5'>05/10/2020</h4>
                                            </div>
                                            <div className='msbd-roomdetails-all-text'>
                                                <h4 className='roomdetailsh4'>Days Stay </h4>
                                                <h4 >:-</h4>
                                                <h4 className='roomdetailsh5'>05/10/2020</h4>
                                            </div>

                                            <div className='msbd-roomdetails-all-price'>
                                                <h5 className='roomdetailsh3'>Total Amount </h5>
                                                <h5 className='roomdetailsh7'>:-</h5>
                                                <h5 className='roomdetailsh6'>Rs.25000</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-slide1-booking-details-confrim-btn">
                                        <button className="modal-buttony" onClick={() => goToSlide(2)}>
                                            Confirm
                                        </button>
                                    </div>
                                </div>


                            </div>
                        )}
                        {activeSlide === 2 && (
                            <div className="modal-slide-2">
                                <div className="room-modal-slide2-title">Do you have a Promotion code ?</div>
                                <div className="room-modal-slide2-contain">
                                    <div className="room-modal-slide2-contain-input">

                                        <Input size="large"
                                            style={{ width: '200px' }}
                                            placeholder="Enter your Promotion Code "
                                            value={promocode}
                                        />

                                    </div>
                                    <div className="room-modal-slide2-contain-apply">
                                        <button className="modal-button2" >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                <div className="roompagemoda-slide2-agreemnet">
                                    <div className="roompagemoda-slide2-agreemnet-content">
                                        <div className="roompagemoda-slide2-agreemnet-Reservation">
                                            <div className='roompagemoda-slide2-agreemnet-Reservationh1'>Reservation Policy</div>
                                            <div className='roompagemoda-slide2-agreemnet-Reservationp'>All bookings must be made with a valid credit/debit card.
                                                We reserve the right to pre-authorize your card upon booking.</div>
                                        </div>

                                        <div className="roompagemoda-slide2-agreemnet-Reservation">
                                            <div className='roompagemoda-slide2-agreemnet-Reservationh1'>Payment Policy</div>
                                            <div className='roompagemoda-slide2-agreemnet-Reservationp'>Full payment required at booking. All major cards accepted.
                                                Booking may be cancelled for non-payment or insufficient funds.</div>
                                        </div>

                                        <div className="roompagemoda-slide2-agreemnet-Reservation">
                                            <div className='roompagemoda-slide2-agreemnet-Reservationh1'>Cancellation Policy</div>
                                            <div className='roompagemoda-slide2-agreemnet-Reservationp'> Full refund for cancellations up to 72 hours before check-in.
                                                Within 72 hours, a 50% fee applies. No-shows charged in full</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='modal-btn-finaldown'>
                                    <button className="modal-button2" onClick={() => goToSlide(1)}>
                                        Back
                                    </button>
                                    <button className="modal-button3" onClick={handleCancel}>
                                        Go to Payment
                                    </button>
                                </div>
                            </div>
                        )}
                    </Modal>

                </div>
            )}
            <Footer />
        </div>
    )
}

export default RoomPage