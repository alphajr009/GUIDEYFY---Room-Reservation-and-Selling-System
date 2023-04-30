import React, { useEffect, useState } from 'react'
import './rooms.css'
import axios from 'axios';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faListNumeric, faSearch } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


function Rooms() {


  const [roomid, setroomid] = useState('');
  const [rooms, setrooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [title, settitle] = useState('');
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()

  const handleroomname = (e) => {
    settitle(e.target.value);
  };

  const handleroomid = (e) => {
    setroomid(e.target.value);
  };



  const handleFilterRoom = () => {
    let tempRooms = [...rooms];
    if (title !== '') {
      tempRooms = tempRooms.filter(room => room.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (roomid !== '') {
      tempRooms = tempRooms.filter(room => room._id.includes(roomid));
    }
    setFilteredRooms(tempRooms)
  }

  const columns = [
    {
      title: 'Room ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Room Name ',
      dataIndex: 'title',
      key: 'title',
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
      dataIndex: '',
      width: '7%',
      key: 'x',
      render: (_, rooms) => (
        <button className='admin-terminal-rooms-delete' onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#30379B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete Room!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteRoom(rooms._id)
              Swal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
              ).then(result => {
                window.location.reload();
              })
            }
          })
        }}>Delete</button>
      )


    },
  ];

  useEffect(() => {
    (async () => {

      try {

        setloading(true)
        const data = (await axios.get("http://localhost:5000/api/rooms/getallrooms")).data
        setrooms(data.rooms)
        setFilteredRooms(data.rooms);
        setloading(false)


      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)

      }
    })();
  }, []);


  async function deleteRoom(_id) {


    try {
      const res = (await axios.patch('http://localhost:5000/api/rooms/deleteroom', { _id })).data;
      console.log("Room Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFilterRoom();
  }, [title, roomid])

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
            value={title}
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
          <button className='btn-search-rooms-admin-terminal' onClick={handleFilterRoom}>
            <FontAwesomeIcon icon={faSearch} className="rooms-search" />
          </button>
        </div>
      </div>
      {/* table container */}

      <div className='admin-rooms-table'>
        <Table
          dataSource={filteredRooms}
          columns={columns}
          className='admin-terminal-room-table'
          rowKey="_id"
          footer={() => <div className="no-of-rooms">{`Total  ${rooms.length} rooms `}</div>}
        />
      </div>
    </div>

  )
}

export default Rooms;
