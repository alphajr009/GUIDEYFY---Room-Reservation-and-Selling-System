import React from 'react';
import './property.css';

function Property() {
  return (
    <div className="wrapper">
      <div className="title">
        Create New Property
      </div>
      <div className="form">
        <div className="inputfield">
          <label htmlFor="roomName">Room Name</label>
          <input type="text" id="firstName" placeholder="Please Enter Room Name"className="input" />
        </div>  
        <div className="inputfield">
          <label htmlFor="rentperday">Rent Perday</label>
          <input type="text" id="lastName" placeholder="What is daily Rentel Amount?" className="input" />
        </div>  
        <div className="inputfield">
          <label htmlFor="MaxCount">Max Count</label>
          <input type="text" id="MaxCount"placeholder="How Many Guest Count?" className="input" />
        </div>  
        <div className="inputfield">
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input type="text" id="PhoneNumber" placeholder="What is your Prefrred phone number?" className="input" />
        </div> 
        <div className="inputfield">
          <label htmlFor="type">Type</label>
          <div className="custom_select">
            <select id="Type">
              <option value="">Choose the Type of Room</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Non-Deluxe">Non-Deluxe</option>
            </select>
          </div>
      </div>
        <div className="inputfield">
          <input type="submit" value="Continue" className="btn" />
        </div>
      </div>
    </div>
  );
}

export default Property;