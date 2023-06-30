import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { Table } from 'antd';

function CurrentProperty() {

  const [rooms, setrooms] = useState([])

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
      title: 'Edit',
      dataIndex: 'edit',
      width: '9%',
      key: 'x',
      render: (_, blogs) => {
        return <button className='btn-edit-blogs-by-seller' onClick={() => {
          Swal.fire({
            title: 'Are you sure you want to edit the room',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
          })
            .then((result) => {
              if (result.isConfirmed) {

                updateRoom(blogs._id, true)
                Swal.fire(
                  "Please waiting"
                )
                  .then(result => {
                    window.location.href = "/room"
                  })
              }
            })
        }}>Edit</button>

      }


    },
    {
      title: 'Delete',
      dataIndex: ' ',
      width: '9%',
      key: 'x',
      render: (_, rooms) => (
        <button className='btn-delete-blogs-by-seller' onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete the room",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#4444AA',
            cancelButtonColor: '#B8252A',
            confirmButtonText: 'Yes, Room is Deleted!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteRoom(rooms._id)
              Swal.fire(
                'Deleted!',
                'Blog has been deleted.',
                'success'
              ).then(result => {
                window.location.href = 'http://localhost:3000/seller/property';
              })
            }
          })
        }}>Delete</button>
      )

    }
  ];

  async function deleteRoom(_id) {


    try {
      const res = (await axios.patch('/api/rooms/deleteroom', { _id })).data;
      console.log("Room Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {

      try {


        const data = (await axios.get("/api/rooms/getallrooms")).data
        setrooms(data.rooms)



      } catch (error) {
        console.log(error)


      }
    })();
  }, []);


  async function updateRoom(_id) {

  }

  return (
    <div className='seller-central'>
      <div className='seller-rooms-table'>
        <Table
          dataSource={rooms}
          columns={columns}
          className='seller-central-room-table'
          rowKey="_id"
          footer={() => <div className="no-of-rooms">{`Total  ${rooms.length} rooms `}</div>}
        />
      </div>
    </div>
  )
}

export default CurrentProperty