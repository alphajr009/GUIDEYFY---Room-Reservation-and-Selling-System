import React, { useState } from 'react';
import './createpromotion.css';
import axios from 'axios';
// import { Modal, Input, Form, Select } from 'antd';
// import Link from 'antd/es/typography/Link';
import { Form, Input } from 'antd';
import Swal from 'sweetalert2'

function Createpromotion() {
    const [reductionType, setReductionType] = useState('amount');

    const [promotion_id, setpromotion_id] = useState('')
    const [promotionuse, setpromotionuse] = useState()
    const [date, setdate] = useState()
    const [type, settype] = useState()
    const [minamount, setminamount] = useState()

    const [promotions, setpromotions] = useState()

    const handleReductionTypeChange = (event) => {
        setReductionType(event.target.value);
    };

    async function addPromotion() {
        const newpromotion = {
            promotion_id,
            promotionuse,
            date,
            type,
            minamount
        }
        try {
            // setloading(true)
                const data = (await axios.get("/api/promotions/addpromotion", newpromotion)).data
                setpromotions(data.promotions)
                // setloading(false)
            Swal.fire('Congratulations', 'Your new promotion has been added successfully', 'success').then(result => {
                window.location.href = '/home'
            })
        } catch (error) {
            console.log(error)
            // setloading(false);
            Swal.fire('Oops', 'Something went wrong', 'error')
        }
    }

    return (
        <div>

            <div className="PromotionForm">
                <div className="PF-title">
                    Create New Promotion
                </div>
                <div className="createPromotionForm">
                    <div className="promotion-form-input">
                        <Form.Item
                            label="Promotion Code"
                            name="P-code"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            rules={[{ required: true, message: 'Please input promotion code!' }]}
                        >
                            <input type="text" id="pro-code" placeholder="Enter the unique promotion code" className="pro-input"
                                value={promotion_id} onChange={(e) => { setpromotion_id(e.target.value) }} />
                        </Form.Item>
                    </div>

                    <div className="promotion-form-input">
                        <Form.Item
                            label="Attemps to use"
                            name="P-attemps"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            rules={[{ required: true, message: 'Please input promotion code!' }]}
                        >
                            <input type="text" id="pro-attemps" placeholder="Attemps to use promotion code" className="pro-input"
                                value={promotionuse} onChange={(e) => { setpromotionuse(e.target.value) }} />
                        </Form.Item>
                    </div>
                    <div className="promotion-form-input">
                        <label className='P-daterange'>Date Range</label>
                        <input type="text" id="pro-MaxCount1" placeholder="From Date" className="pro-input-2" />
                        <input type="text" id="pro-MaxCount2" placeholder="To Date" className="pro-input-2" />
                    </div>
                    <div className="promotion-form-input">
                        <label className='P-redusetype'>Reduse Type</label>

                        <label>
                            <input
                                type="radio"
                                value="amount"
                                checked={reductionType === 'amount'}
                                onChange={handleReductionTypeChange}
                                className='pro-input-radioB'
                            />
                            Amount
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="percentage"
                                checked={reductionType === 'percentage'}
                                onChange={handleReductionTypeChange}
                                className='pro-input-radioB'
                            />
                            Percentage
                        </label>
                    </div>
                    <div className="promotion-form-input">
                        <Form.Item
                            className="promotion-form-input"
                            label="Minimum Amount"
                            name="promotion-form-input"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            rules={[{ required: true, message: 'Please input minimum amount!' }]}
                        >
                            <input type="text" id="pro-MinAmount" placeholder="Minimum Amount" className="pro-input"
                                value={minamount} onChange={(e) => { setminamount(e.target.value) }} />
                        </Form.Item>
                    </div>
                    <p className='promotion-charge'>You will be charged Rs.200</p>

                    <div className="promotion-form-input">
                        <input type="submit" value="Create Promotion" className='pro-submit-btn' />
                    </div>
                    <p className='promotion-terms-con'>By signing in or creating an account,</p>
                    <p className='promotion-terms-con'>you agree with our</p>
                    <p className='promotion-terms-con'>Terms & conditions and Privacy statement</p>
                </div>
            </div>
        </div>

    )
}

export default Createpromotion