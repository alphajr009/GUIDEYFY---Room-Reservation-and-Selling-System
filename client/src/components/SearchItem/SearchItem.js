import React from 'react'
import hotelsPhoto from '../../images/hotelImage/hotelsPhoto.png';

const SearchItems = () => {
  return (
    <div className='hotelList'>
     <img className="hotelImg1" src= {hotelsPhoto} alt='mirissa' />

      <div className='descHotel'>
        <h2 className='hotelName'> Villa at the lake </h2>
        <div className='descriptionHotel'>
          <span>A hotel is a commercial establishment that provides lodging, meals, and other services to guests, traveler's, and tourists. Hotels can range from small family-run businesses to large international chains. Most hotels list a variety of services, such as room service,laundry, and concierge.</span>
        </div>
        <div className='reviewHotel'>
          <span>Super</span>
          <span>17 Review</span>
        </div>
      </div>

    </div>
  )
}

export default SearchItems