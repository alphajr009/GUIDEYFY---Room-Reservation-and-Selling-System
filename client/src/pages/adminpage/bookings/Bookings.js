import React, { useState } from 'react';
import './bookings.css'
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faIdBadge, faListNumeric, faMagnifyingGlass, faP, faPerson,faRestroom,faSearch, faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';

function Bookings() {


  const [bookings, setbookings] = useState('');
  const [customername, setcustomername] = useState('');
  const [customerid, setcustomerid] = useState('');
  const [bookingstatus, setbookigstatus] = useState('');
  const [roomname, setroomname] = useState('');

  const { Option } = Select;

  const handlebookings = (e) => {
    setbookings(e.target.value);
  };

  const handlecustomer = (e) => {
    setcustomername(e.target.value);
  };
  const handlecustomerid = (e) => {
    setcustomerid(e.target.value);
  };

  const handleBookingStatus = (value) => {
    setbookigstatus(value);
  };
  const handlesearchbookings = () => {
    window.location.assign('/booking');
  };

const handleroomname = (e) => {
    setroomname(e.target.value);
  };
  const booking = [
    {
      _id: "1",
      name: "Deluxe Room",
      customerid: "33",
      roomname: "SS",
      fromdate: "2022.2.2",
      tpdate: "2002.2.2",
      status:<button className='admin-terminal-booking-confirm'>Confirm</button>
    },
    {
      _id: "2",
      name: "Deluxe Room",
      customerid: "33",
      roomname: "SS",
      fromdate: "2022.2.2",
      tpdate: "2002.2.2",
      status:<button className='admin-terminal-booking-cancel'>Cancel</button>
    }


    
  ];
  

  const columns = [
    {
        title: 'Booking ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Customer Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Customer ID',
        dataIndex: 'customerid',
        key: 'customerid',
    },
    {
        title: 'Room Name',
        dataIndex: 'roomname',
        key: 'roomname',
    },
    {
        title: 'From Date',
        dataIndex: 'fromdate',
        key: 'fromdate',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        
    },
  
];

  return (
    // container for table and searchbar
    <div className="admin-terminal-bookings">
      {/* container for search bar */}
      <div className="admin-terminal-bookid-cname-cid-roomname">
        {/* container for booking id */}
        <div className="admin-terminal-search-bar-bookings-bookingid">
          <FontAwesomeIcon icon={faSearch} className="bookings-magnifyinglass" />
          <input
            type="text"
            placeholder="Booking ID"
            className="admin-terminal-bookings-booking-id"
            value={bookings}
            onChange={handlebookings}
          />
        </div>
        {/* container for customer name */}
        <div className="admin-terminal-bookings-cname">
          <FontAwesomeIcon icon={faPerson} className="bookings-cperson" />
          <input
            type="text"
            placeholder="Customer Name"
            className="admin-terminal-bookings-c-name"
            value={customername}
            onChange={handlecustomer}
          />
        </div>
          {/* container for customer id */}
        <div className="admin-terminal-bookings-cid">
          <FontAwesomeIcon icon={faIdBadge} className="bookings-cid" />
          <input
            type="text"
            placeholder="Customer ID"
            className="admin-terminal-bookings-cusid"
            value={customerid}
            onChange={handlecustomerid}
          />
        </div>
           {/* container for room name */}
        <div className="admin-terminal-bookings-roomname">
          <FontAwesomeIcon icon={faHotel} className="bookings-roomname" />
          <input
            type="text"
            placeholder="Room Name"
            className="admin-terminal-bookings-room"
            value={roomname}
            onChange={handleroomname}
          />
        </div>
      
          {/* container for booking status */}
        <div className="admin-terminal-bookings-status">
          <FontAwesomeIcon icon={faListNumeric} className="bookings-bstatus" />
          <Select
                className="bookings-status-admin-terminal"
                placeholder="Booking Status"
                style={{ width: '125px' }}
                value={bookingstatus}
                onChange={handleBookingStatus}
              >
                <Option key="b-confirm">Confirm</Option>
                <Option key="b-cancel">Cancel</Option>
               
              </Select>
        </div>
        {/* container fors search*/}
        <div className='admin-bookings-filter-search'>
          <button className='btn-bookingsearch-admin-terminal' onClick={handlesearchbookings}>
            <FontAwesomeIcon icon={faSearch} className="bookings-search" />
          </button>
        </div>
      </div>
      <div className='admin-rooms-table'>
        <Table  dataSource={booking} columns={columns} className='admin-terminal-room-table'/>
      </div>
    </div>
  )
}

export default Bookings