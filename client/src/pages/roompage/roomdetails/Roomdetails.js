import React from 'react'
import './roomdetails.css'
import Footer from '../../../components/USER/footer/Footer'
import Navbarroom from '../../../components/USER/navbarroom/Navbarroom'
import image1 from '../../../images/image1.png'


function Roomdetails() {
  return (
    <div className='room-details-container'> 
      <Navbarroom/>
      <div className='room details-boxes'>
      <div className="hsc-pla-tile-1-3">
              <div className="hsc-pla-tile1">
                <img src={image1} className="hsc-pla-tile1-img"  alt="Yala" />
              </div> 
            </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Roomdetails