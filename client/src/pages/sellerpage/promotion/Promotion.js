import React, { useState, useEffect } from 'react';
import './promotion.css'
import Createpromotion from './createpromotion/Createpromotion';
import { Table } from 'antd';
import Swal from 'sweetalert2'
import axios from 'axios';
import { update } from 'react-spring';

function Promotion() {

  const [activeTab, setActiveTab] = useState('Create Promotion');
  const [promotions, setpromotions] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()


  const columns = [
    {
      title: 'Promotion Code',
      dataIndex: 'promotioncode',
      key: 'promotioncode',
    },
    {
      title: 'Attemps to use',
      dataIndex: 'attemptUse',
      key: 'attemptUse',
    },
    {
      title: 'Reduse Value',
      dataIndex: 'maxAmount',
      key: 'maxAmount',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      width:'9%',
      key:'x',
      render: (_,promotions) => {
            return <button className='btn-edit-promotion-by-seller' onClick={() => {
                Swal.fire({
                    title: 'Are you sure you want to edit the promotion',
                    icon: 'question',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, do it!'
                })
                    .then((result) => {
                        if (result.isConfirmed) {

                            updatepromotion(promotions._id, true)
                            Swal.fire(
                                "Please waiting"
                            )
                                .then(result => {
                                  window.location.href ="/promotion"
                                })
                        }
                    })
            }}>Edit</button>
        
    }
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      width: '9%',
      key: 'x',
      render: (_, promotions) => (
        <button className='btn-delete-promotions-by-seller' onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete the promotion",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#4444AA',
            cancelButtonColor: '#B8252A',
            confirmButtonText: 'Yes, promotion is Deleted!'
          }).then((result) => {
            if (result.isConfirmed) {
              deletePromotion(promotions._id)
              Swal.fire(
                'Deleted!',
                'Promotion has been deleted.',
                'success'
              ).then(result => {
                window.location.href = 'http://localhost:3000/seller/promotion';
              })
            }
          })
        }}>Delete</button>
      )

    }

  ];

  //get  promotion details
  useEffect(() => {
    (async () => {

        try {
            setloading(true)
            const data = (await axios.get("http://localhost:5000/api/promotions/getallpromotion")).data
            setpromotions(data.promotions)

            setloading(false)

        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(error)

        }
    })();
}, []);

//delete promotion
async function deletePromotion(_id) {
  try {
    const res = (await axios.patch('http://localhost:5000/api/promotions/deletepromotion', { _id })).data;
    console.log("Promotion Deleted Successfully");
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='promotion-container'>

      <div className='promotion-container-tab'>

        <div className={`create-promotion-tab
     ${activeTab === 'Create Promotion' ? 'active' : ''}`}
          onClick={() => setActiveTab('Create Promotion')}
        >
          <span className='create-promotion-text'>Create Promotion</span>
        </div>

        <div className={`current-promotion-tab
    ${activeTab === 'Current Promotion' ? 'active' : ''}`}
          onClick={() => setActiveTab('Current Promotion')}
        >
          <span className="current-promotion-text">Current Promotion</span>
        </div>

      </div>

      {activeTab === 'Create Promotion' && (
        <div className='create promotion'>
          <Createpromotion />
        </div>

      )}

      {activeTab === 'Current Promotion' && (
        <div className='current-promotion-table'>
          <Table columns={columns} className='seller-cental-current-promotion' />
        </div>
      )}

    </div>
  )
}

async function updatepromotion(_id) {
  
}

export default Promotion

