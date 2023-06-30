import React, { useRef } from 'react';
import './homescreen.css';
import { Carousel } from 'antd';
import Navbar from '../../components/USER/navbar/Navbar';
import Footer from '../../components/USER/footer/Footer';
import yalaPhoto from '../../images/yalaPhoto.png'
import mirissaPhoto from '../../images/mirissaPhoto.png'
import kandyPhoto from '../../images/kandyPhoto.png'
import colomboPhoto from '../../images/colomboPhoto.png'
import ellaPhoto from '../../images/ellaPhoto.png'
import sigiriyaPhoto from '../../images/sigiriyaPhoto.png'
import hotelsPhoto from '../../images/hotelsPhoto.png'
import apartmentsPhoto from '../../images/apartmentsPhoto.png'
import resortsPhoto from '../../images/resortsPhoto.png'
import villasPhoto from '../../images/villasPhoto.png'
import carouselBlog1 from '../../images/carouselBlog1.png'
import carouselBlog2 from '../../images/carouselBlog2.png'
import carouselBlog3 from '../../images/carouselBlog3.png'
import carouselBlog4 from '../../images/carouselBlog4.png'
import carouselBlog5 from '../../images/carouselBlog5.png'
import arrowRight from '../../images/arrowRight.png'
import arrowLeft from '../../images/arrowLeft.png'

function Homescreen() {

  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrevious = () => {
    carouselRef.current.prev();
  };




  return (
    <div className="homescreen">
      <Navbar />

      <div className="homescreen-content">

        {/* Explore Sri Lanka */}

        <div className="hsc-p-location">
          <h1>Explore Sri Lanka</h1>

          <div className="hscpl-all-tiles">
            <div className="hsc-pla-tile-1-3">
              <div className="hsc-pla-tile1">
                <img className="hsc-pla-tile1-img" src={yalaPhoto} alt="Yala" />

              </div>
              <div className="hsc-pla-tile2">
                <img className="hsc-pla-tile2-img" src={mirissaPhoto} alt="Mirissa" />
              </div>
              <div className="hsc-pla-tile3">
                <img className="hsc-pla-tile3-img" src={kandyPhoto} alt="Mirissa" />
              </div>
            </div>

            <div className="hsc-pla-tile-4-6">
              <div className="hsc-pla-tile4">
                <img className="hsc-pla-tile4-img" src={colomboPhoto} alt="Mirissa" />
              </div>
              <div className="hsc-pla-tile5">
                <img className="hsc-pla-tile5-img" src={ellaPhoto} alt="Mirissa" />
              </div>
              <div className="hsc-pla-tile6">
                <img className="hsc-pla-tile6-img" src={sigiriyaPhoto} alt="Mirissa" />
              </div>
            </div>
          </div>
        </div>

        {/* Browse by property type */}

        <div className="hsc-browseby-property-t">
          <h1>Browse by property type</h1>
          <div className="hsc-brows-pro-wrapper">
            <div className="hsc-bbptw-tile1">
              <img className="hsc-bbptw-tile1-img" src={hotelsPhoto} alt="Hotels" />
              <h2> Hotels</h2>
              <h3>948 hotels</h3>
            </div>
            <div className="hsc-bbptw-tile2">
              <img className="hsc-bbptw-tile2-img" src={apartmentsPhoto} alt="Apartments" />
              <h2> Apartments</h2>
              <h3>48 apartments</h3>
            </div>
            <div className="hsc-bbptw-tile3">
              <img className="hsc-bbptw-tile3-img" src={resortsPhoto} alt="Resorts" />
              <h2> Resorts</h2>
              <h3>488 resorts</h3>
            </div>
            <div className="hsc-bbptw-tile4">
              <img className="hsc-bbptw-tile4-img" src={villasPhoto} alt="Villas" />
              <h2> Villas</h2>
              <h3>188 villas</h3>
            </div>
          </div>
        </div>

        {/* Get inspiration for your next accommodation */}

        <div className="hsc-getinsp-blog">
          <h1>Get inspiration for your next accommodation</h1>
          <div className="hsc-getinsp-b-carousel">
            <button className="hsc-getins-b-button-lft" onClick={handlePrevious} >
              <img className='hsc-getins-b-button-img-lft' src={arrowLeft} />
            </button>
            <Carousel ref={carouselRef} autoplaySpeed={90000} pauseOnHover={true} dots={false} autoplay className="homescreen-carousel">
              <div className="hsc-getins-b-carousel-wrapper">
                <img className="hsc-bbptw-b-cw-img" src={carouselBlog1} alt="Blog1" />
                <div>
                  <p className="hsc-bbptw-b-cw-para"> For its size, Sri Lanka is astonishingly diverse. Tropical beaches give way
                    to countryside dotted with paddy fields and plantations. National parks dominated by lush lakes and dense jungle
                    contrast with the mysterious Sinharaja Rainforest. The island’s central hill country is covered in an astonishing
                    array of flora. These varied landscapes provide a home for an astonishing array of wildlife.
                  </p>
                  <button className='hsc-bbptw-Read-More' onClick={() => window.location.href = "/blog"} >
                    Read More
                  </button>
                </div>
              </div>
              <div className="hsc-getins-b-carousel-wrapper">
                <img className="hsc-bbptw-b-cw-img" src={carouselBlog2} alt="Blog2" />
                <div>
                  <p className="hsc-bbptw-b-cw-para">For years, Jaffna was not included in a typical tour of Sri Lanka. This was partly
                    due to the region’s remote location, and also its importance in the island’s long-fought civil war. Jaffna is also
                    aligned with the north-eastern monsoon pattern and receives  its annual deluge between December and March when the
                    popular south-west coast and central hills are enjoying the stable sunshine of peak season.   </p>
                  <button className='hsc-bbptw-Read-More' onClick={() => window.location.href = "/blog"} >
                    Read More
                  </button>
                </div>
              </div>
              <div className="hsc-getins-b-carousel-wrapper">
                <img className="hsc-bbptw-b-cw-img" src={carouselBlog3} alt="Blog3" />
                <div>
                  <p className="hsc-bbptw-b-cw-para">Who doesn’t love a beach? If you are seeking sun, sea, look no further than Tangalle.
                    This town on the south coast is known as the most romantic destination in the island due to its picture-perfect beaches
                    lined with swaying coconut palms. Choose between charming boutique hotels like luxury villas. You can either stay right
                    on the edge of the ocean or further inland in idyllic rural countryside.</p>
                  <button className='hsc-bbptw-Read-More' onClick={() => window.location.href = "/blog"} >
                    Read More
                  </button>
                </div>
              </div>
              <div className="hsc-getins-b-carousel-wrapper">
                <img className="hsc-bbptw-b-cw-img" src={carouselBlog4} alt="Blog4" />
                <div>
                  <p className="hsc-bbptw-b-cw-para">One of the most notable expeditions in Sri Lanka only came
                    into being in recent years. The Pekoe Trail extends across the entirety of the island’s central tea country, from
                    the mist-shrouded mountains on the outskirts of Kandy to the vast valleys on Ella on the south-eastern fringes.
                    Spend a holiday hiking the whole route, or choose to do a selection of sections which best fit your itinerary. </p>
                  <button className='hsc-bbptw-Read-More' onClick={() => window.location.href = "/blog"} >
                    Read More
                  </button>
                </div>
              </div>
              <div className="hsc-getins-b-carousel-wrapper">
                <img className="hsc-bbptw-b-cw-img" src={carouselBlog5} alt="Blog4" />
                <div>
                  <p className="hsc-bbptw-b-cw-para">Despite its small size, Sri Lanka is one of the best places in the world for a
                    birdwatching holiday. Almost 500 species call this island home Two monsoon seasons and a flourishing central hill
                    country mean that there are opportunities for birdwatching in Sri Lanka , nesting in the
                    southern national parks to spotting  species of birds of prey in north-west Wilpattu.</p>
                  <button className='hsc-bbptw-Read-More' onClick={() => window.location.href = "/blog"} >
                    Read More
                  </button>
                </div>
              </div>
            </Carousel>
            <button className="hsc-getins-b-button" onClick={handleNext} >
              <img className='hsc-getins-b-button-img' src={arrowRight} />
            </button>


          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homescreen;
