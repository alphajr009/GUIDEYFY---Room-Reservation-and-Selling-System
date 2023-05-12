import React, { useState, useEffect } from 'react'
import './roomscreen.css'
import Navbar from '../../components/USER/navbar/Navbar'
import Footer from '../../components/USER/footer/Footer'
import { Radio, Pagination } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios'




function Room({ room }) {

  const shortDescription = room.description.substring(0, 350);



  return (
    <div className="roomcontain-tile">
      <div className="roomconatin-main-image-wrapper">
        <img className='room-contain-image-tile' src={`http://localhost:5000/uploads/${room._id}-0.jpg`} alt={room.title} />
      </div>
      <div className="roomconatintile-description-wrapper-up">
        <div className="roomconatintile-description-wrapper">
          <div className='roomcontain-button-wrapper-titlenaddescription'>
            <div className="roomconatintile-description-wrapper-title">
              <Link to={`/room/${room._id}`} style={{ textDecoration: 'none' }}>
                <h3 className='roomscrnh3'>{room.title}</h3>
              </Link>
            </div>
            <div className="roomconatintile-description-wrapper-description">
              <div className='roomcontain-tile-description-wrapper'>
                <p className='roomcontain-tile-description'>{shortDescription}...<a>Read More »</a></p>
              </div>
            </div>
          </div>
          <div className='roomcontain-button-and-review'>
            <div className="roomcontain-button-review"></div>
            <div className="roomcontain-button-wrapper">
              <button className="show-availabel-button">
              Check availability
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}



function Roomscreen() {



  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('')
  const [rooms, setrooms] = useState([])

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    if (value === e.target.value) {
      setValue('');

    } else {
      setValue(e.target.value);

    }
  };

  const onClearCategory = () => {
    setValue('');

  };

  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 25;


  const onPageChange = (page) => {
    setCurrentPage(page);
  };



  const types = [
    'Hotels',
    'Apartments',
    'Resorts',
    'Villas',

  ];


  useEffect(() => {
    (async () => {
      try {
        const data = (await axios.get("http://localhost:5000/api/rooms/getallrooms")).data;
        setrooms(data.rooms);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);



  return (

    <div className="roomscreen">
      <Navbar />
      <div className="roomscreen-content">
        <div className="roomscreen-filter-wrapper">
          <div className="roomscreen-filter-wrapper-box">
            <div className="roomscr-filter-header">
              Filter by:
              <hr />
            </div>

            <div className="roomscrn-filter-box-type">
              <h3>Type</h3>

              <div>
                <div className='radiobuttons-blogscreen'>
                  <Radio.Group onChange={onChange} value={value}>
                    {types.map((type, index) => (
                      <Radio key={index} value={type}>
                        {type}
                      </Radio>
                    ))}
                  </Radio.Group>
                  <div className='clear-cat-btn-container'>
                    <button onClick={onClearCategory} className="clear-category-button">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="roomscrn-filter-box-type">
              <h3>Price</h3>
              <div className="roomscrn-filter-input-wrapper">
                <div className='roomscreen-filter-input-wrapper'>
                  <p>Rs.</p>
                  <input type="text"
                    className="roomscreen-filter-price-input"
                    placeholder='Min'
                  />
                </div>

                <div className='rmscreen-filter-price-to'>to</div>

                <div className='roomscreen-filter-input-wrapper'>
                  <p>Rs.</p>
                  <input type="text"
                    className="roomscreen-filter-price-input"
                    placeholder='Max' />
                </div>
              </div>
              <div className='clear-cat-btn-container'>
                <button onClick={onClearCategory} className="go-price-button-roomscreen">
                  <FontAwesomeIcon icon={faArrowRight} className="searchIcon" />
                </button>
              </div>

              <div>
              </div>
            </div>

          </div>

        </div>
        <div className="roomscreen-property-wrapper">
        {rooms
            .slice((currentPage - 1) * roomsPerPage, currentPage * roomsPerPage)
            .map((room) => (
              <Room key={room.id} room={room} />
            ))}
        </div>

      </div>
      <div className='roomscrn-pagnition'>
        <Pagination
          current={currentPage}
          pageSize={roomsPerPage}
          total={rooms.length}
          onChange={onPageChange}
        />
      </div>
      
      <Footer />
    </div>





  )
}

export default Roomscreen