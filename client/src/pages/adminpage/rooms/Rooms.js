import React, { useState } from 'react';
import './rooms.css'
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faListNumeric, faSearch } from '@fortawesome/free-solid-svg-icons'

function Rooms() {

  const [roomname, setroomname] = useState('');
  const [roomid, setroomid] = useState('');

  const handleroomname = (e) => {
    setroomname(e.target.value);
  };

  const handleroomid = (e) => {
    setroomid(e.target.value);
  };

  const handlesearchrooms = () => {
    window.location.assign('/rooms');
  };

  const rooms = [
    {
      _id: "1",
      name: "Deluxe Room",
      phonenumber: "+1 (555) 123-4567",
      rentperday: "$150",
      maxcount: "2",
      type: "Double",
      delete:<button className='admin-terminal-rooms-delete'>Delete</button>
    }
  ];
  

  const columns = [
    {
        title: 'Room ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Room Name ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone number',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
    },
    {
        title: 'Rent per day',
        dataIndex: 'rentperday',
        key: 'rentperday',
    },
    {
        title: 'Max Count',
        dataIndex: 'maxcount',
        key: 'maxcount',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Action',
        dataIndex: 'delete',
        key: 'delete',
       
    },
];


  return (
    <div className="admin-terminal-rooms">
      {/* room name and  id container */}
      <div className="admin-terminal-room-name-and-room-id">
        {/* room name container */}
        <div className="admin-terminal-search-bar-rooms-room-name">
          <FontAwesomeIcon icon={faHotel} className="rooms-hotelicon" />
          <input
            type="text"
            placeholder="Room Name"
            className="admin-terminal-rooms-room-name"
            value={roomname}
            onChange={handleroomname}
          />
        </div>
        {/* room id container */}
        <div className="admin-terminal-rooms-room-id">
          <FontAwesomeIcon icon={faListNumeric} className="rooms-listnumericicon" />
          <input
            type="text"
            placeholder="Room Id"
            className="admin-terminal-rooms-room-name"
            value={roomid}
            onChange={handleroomid}
          />
        </div>
        {/* room search icon container */}
        <div className='admin-rooms-filter-search'>
          <button className='btn-search-rooms-admin-terminal' onClick={handlesearchrooms}>
            <FontAwesomeIcon icon={faSearch} className="rooms-search" />
          </button>
        </div>
      </div>
      {/* table container */}

      <div className='admin-rooms-table'>
        <Table  dataSource={rooms} columns={columns} className='admin-terminal-room-table'/>
      </div>
    </div>

  )
}

export default Rooms;
