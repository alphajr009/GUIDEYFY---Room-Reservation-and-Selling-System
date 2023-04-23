import { React, useState } from "react";
import "./booking.css";
import Navbar from "../../components/USER/navbar/Navbar";
import Footer from "../../components/USER/footer/Footer";
import SearchItem from "../../components/SearchItem/SearchItem";


function Booking() {
  return (
    <div>
      <Navbar />
      <div className="booking">
      <header className="List" />
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListFilter">
            <h1 className="listTitle"> Filter by : </h1>
            <h4 className="lsItem1Topic"> popular</h4>
            <div className="listItem1">
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
            
            </div>
            <h4 className="lsItem1Topic"> popular</h4>
            <div className="listItem1">
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
            
            </div>
            <h4 className="lsItem1Topic"> popular</h4>
            <div className="listItem1">
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
              <input type="checkbox"/> pool facilities <br/>
            
            </div>
           
           <button>
            Filter
          </button> 
          
          </div>
          <div className="ListResult">

          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Booking;
