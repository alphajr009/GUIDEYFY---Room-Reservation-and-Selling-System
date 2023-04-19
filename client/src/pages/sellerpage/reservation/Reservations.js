import React, { useState } from 'react';
import { Table } from 'antd';
import './reservation.css';

function Reservations() {
  const [activeTab, setActiveTab] = useState('Review Reservations');
  const [confirmedReservations, setConfirmedReservations] = useState([]);
  const [canceledReservations, setCanceledReservations] = useState([]);


  const columns = [
    {
      title: 'Room ID',
      dataIndex: '_id',
      key: '_id'
    },


    {
      title: 'Room Name',
      dataIndex: 'roomname',
      key: 'roomname'
    },

    {
      title: 'From Date',
      dataIndex: 'fromdate',
      key: 'fromdate'
    },

    {
      title: 'To Date',
      dataIndex: 'todate',
      key: 'todate'
    },

    {
      title: 'Total Days',
      dataIndex: 'totaldays',
      key: 'totaldays'
    },

    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'

    },
    {
      title: 'Confirm',
      dataIndex: 'confirm',
      render: (text, record) => (
        <button className='btn-seller-reservation-confirm'
          // onClick={() => confirmReservation(record._id)}
          >
          Confirm
        </button>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (text, record) => (
        <button className='btn-seller-reservation-cancel'
          // onClick={() => cancelReservation(record._id)}
          >
          Delete
        </button>
      ),
    },
  ];


  const confirmedReservationsColumns =
    [
      {
        title: 'Room ID',
        dataIndex: '_id',
        key: '_id'
      },


      {
        title: 'Room Name',
        dataIndex: 'roomname',
        key: 'roomname'
      },

      {
        title: 'From Date',
        dataIndex: 'fromdate',
        key: 'fromdate'
      },

      {
        title: 'To Date',
        dataIndex: 'todate',
        key: 'todate'
      },

      {
        title: 'Total Days',
        dataIndex: 'totaldays',
        key: 'totaldays'
      },

      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount'

      },
    ];



  const canceledReservationsColumns =
    [
      {
        title: 'Room ID',
        dataIndex: '_id',
        key: '_id'
      },


      {
        title: 'Room Name',
        dataIndex: 'roomname',
        key: 'roomname'
      },

      {
        title: 'From Date',
        dataIndex: 'fromdate',
        key: 'fromdate'
      },

      {
        title: 'To Date',
        dataIndex: 'todate',
        key: 'todate'
      },

      {
        title: 'Total Days',
        dataIndex: 'totaldays',
        key: 'totaldays'
      },

      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount'

      },
    ];


  // const confirmReservation = (id) => {
  //   const newData = [...data];
  //   const index = newData.findIndex((item) => id === item._id);
  //   newData[index].status = 'confirmed';
  //   setData(newData);
  //   setConfirmedReservations([...confirmedReservations, newData[index]]);
  //   cancelReservation(id);
  // };

  // const cancelReservation = (id) => {
  //   const newData = data.filter((item) => id !== item._id);
  //   setData(newData);
  //   const canceledReservation = data.find((item) => id === item._id);
  //   if (canceledReservation.status !== 'confirmed') {
  //     setCanceledReservations([...canceledReservations, canceledReservation]);
  //   }
  // };


  return (

    //tab and table continer
    <div className='seller-central-reservation-container'>
      {/* tab container */}
      <div className="seller-central-reservation-tab">
        
        {/* continer for Review Reservation */}
        <div
          className={`seller-central-review-reservation
         ${activeTab === 'Review Reservations' ? 'active' : ''}`}
         onClick={() => setActiveTab('Review Reservations')}
         >  
          <span className='seller-central-tab-review-reservation'>Review Reservations</span>
        </div>


        {/* continer for Confirmed Reservation */}
        <div 
        className={`seller-central-confirm-reservation
         ${activeTab === 'Confirmed Reservations' ? 'active' : ''}`} 
         onClick={() => setActiveTab('Confirmed Reservations')}
         >
          <span className='seller-central-tab-confirm-reservation'>Confirmed Reservations</span>
        </div>



        {/* continer for Cancel Reservation */}
        <div className=
        {`seller-central-cancel-reservation
        ${activeTab === 'Cancel Reservations' ? 'active' : ''}`}
        onClick={() => setActiveTab('Cancel Reservations')}
        >
          <span className='seller-central-tab-cancel-reservation'>Cancel Reservations</span>
        </div>
      </div>


      {/* container for table */}
      <div className='seller-central-reservation-table'>
          {activeTab === 'Review Reservations' && (
              <div className='seller-central-review-reservation-table'>
            <Table columns={columns}  pagination={false} />
        </div>
           )}
        
          {activeTab === 'Confirmed Reservations' && (
            <div className='seller-central-confirm-table'>
            <Table columns={confirmedReservationsColumns}  pagination={false} />
        </div>
          )}
          {activeTab === 'Cancel Reservations' && (
             <div className='seller-central-cancel-table'>
            <Table columns={canceledReservationsColumns}  pagination={false} />
             </div>
          )}
       
      </div>
    </div>
  );
}


export default Reservations;

//dataSource={canceledReservations}
//dataSource={confirmedReservations}
