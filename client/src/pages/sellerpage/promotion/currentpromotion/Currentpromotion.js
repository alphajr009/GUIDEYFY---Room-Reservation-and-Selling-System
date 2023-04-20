import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Space, Table, Tag, Button, Form, Input, Select } from 'antd';
import Swal from 'sweetalert2'
import './currrentpromotion.css'

function Currentpromotion() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [promotions, setpromotions] = useState([])

    const data =[
        {
            "promotionuse": "25% off all products",
            "date": "2023-05-01",
            "type": "discount",
            "value": "25%",
            "action": "apply_discount",
            "createdAt": "2023-04-20T12:00:00.000Z",
            "updatedAt": "2023-04-20T12:01:00.000Z"
          }
          
    ]

    const columns = [
        {
            title: 'Promotion Code',
            dataIndex: 'promotion_id',
            key: 'promotion_id',
        },
        {
            title: 'Attemps to use',
            dataIndex: 'promotionuse',
            key: 'promotionuse',
        },
        {
            title: 'Date Range',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Reduse Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'Reduse Value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: '7%',
            key: 'x',
            render: (_, promotions) => {

                return <button className='promotion-adelete' onClick={() => {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        cancelButtonText: 'Cancel',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete Room!'
                    }).then((result) => {
                        if (result.isConfirmed) {

                            deletePromotion(promotions.promotion_id)
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                                .then(result => {
                                    window.location.reload();
                                })
                        }
                    })
                }}>Delete</button>
            }
        },
    ];


    useEffect(() => {
        (async () => {

            try {
                setloading(true)
                const data = (await axios.get("'http://localhost:5000/api/promotions/getallpromotion")).data
                setpromotions(data.promotions)
                setloading(false)



            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }
        })();
    }, []);

    async function deletePromotion(promotion_id) {


        try {
            const res = (await axios.patch('http://localhost:5000/api/promotions/deletepromotion', { promotion_id })).data;
            console.log("Promotion code Deleted Successfully");
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }



    return (

            <div className='promotion-seller-cental-table'>
                <Table bordered={true} dataSource={promotions} columns={columns}
                    className='promotion-table'
                    footer={() => <div className="promotion-footer-number">{`Total ${promotions.length} items`}</div>} />
            </div>
        
    )
}

export default Currentpromotion