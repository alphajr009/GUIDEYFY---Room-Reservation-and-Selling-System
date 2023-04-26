import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Loader from '../components/Loader'
// import Error from '../components/Error'
import { Space, Table, Tag, Button, Form, Input, Select } from 'antd';
import Swal from 'sweetalert2'

function Currentpromotion() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [promotions, setpromotions] = useState([])

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
                const data = (await axios.get("/api/promotions/getallpromotion")).data
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
            const res = (await axios.patch('/api/promotions/deletepromotion', { promotion_id })).data;
            console.log("Promotion code Deleted Successfully");
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }



    return (

        <div className='promotion-row'>
            {/* {loading && (<Loader />)} */}
            <div className='promotion-col-md-12'>
                <h1>Current Promotion</h1>
                <Table bordered={true} dataSource={promotions} columns={columns}
                    pagination={{ pageSize: 15 }}
                    footer={() => <div className="promotion-footer-number">{`Total ${promotions.length} items`}</div>} />
            </div>
        </div>
    )
}

export default Currentpromotion