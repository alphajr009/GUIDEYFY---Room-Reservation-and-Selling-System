import React, { useState } from 'react';
import './createpromotion.css'
import { useParams  } from 'react-router-dom'
import { Input, Form, DatePicker, Radio } from 'antd';
import moment from 'moment'
import axios from 'axios'


function Createpromotion() {



  const [promotioncode, setpromotioncode] = useState('');
  const [attemptUse, setattemptUse] = useState('');
  const [maxAmount, setmaxAmount] = useState('');
  const [fromdate, setFromdate] = useState('');
  const [todate, setTodate] = useState('');

  const [percentage, setpercentage] = useState('');


  async function addpromotion(){
    const promotion = {
      promotioncode,
      attemptUse,
      percentage,
      maxAmount,
      fromdate,
      todate
    }


    try{
      const result = await axios.post("http://localhost:5000/api/promotions/addpromotion", promotion).data
      console.log(result)
    
  
    }catch(error){
      console.log(error)
   
 }
  }


  return (
    <div className="create-promotion-container">
      <div className='create-new-promotion-text'>
        <span className="create-promotion-text">Create New Promotion</span>
      </div>
      <div className='create-promotion-box'>

        {/* container for promotion code */}
        <div className='promotion-code-form'>
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter a Promotion code"
                }
              ]}
              label="Promotion code"
              name="promoCode"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            >
              <Input size="large"
                style={{ width: '70%' }}
                className='input-promotion-code'
                placeholder="Enter your promotion code"
                value={promotioncode}
                onChange={(e) => { setpromotioncode(e.target.value) }}
              />
            </Form.Item>
          </Form>
        </div>

        {/* promotion code for attempt to use */}
        <div className='attempt-to-use-form'>
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter a Attempt to use"
                }
              ]}
              label="Attempt to use"
              name="attempttouse"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            >
              <Input size="large"
                style={{ width: '70%' }}
                className='input-attempt'
                placeholder="Attempts to use promotion code"
                value={attemptUse}
                onChange={(e) => { setattemptUse(e.target.value) }}
              />
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* container for percentage */}
      <div className='promotion-code-form'>
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter a Reduce Type"
                }
              ]}
              label="Percentage"
              name="percentage"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            >
              <Input size="large"
                style={{ width: '70%' }}
                className='input-promotion-percentage'
                placeholder="Enter your percentage"
                value={promotioncode}
                onChange={(e) => { setpercentage(e.target.value) }}
              />
            </Form.Item>
          </Form>
        </div>


      {/* container for maximum amount */}
      <div className='max-amount-form'>
        <Form>
          <Form.Item
           rules={[
            {
              required: true,
              message: "Please enter a Maximum Amount"
            }
          ]}
            label="Maximum Amount"
            name="maxamount"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}

            labelAlign="left"
          >
            <Input size="large"
              style={{ width: '70%' }}
              className='input-maximum-amount'
              placeholder={("Rs")}
              value={ maxAmount}
              onChange={(e) => { setmaxAmount(e.target.value) }}
            />
          </Form.Item>
        </Form>

      </div>
      <div className='text-left'>
        <span className='charge'>You will be charged Rs.200 </span>
      </div>

      {/* create button */}
      <Form.Item className="modal-create-promotion-button">
        <div className="create-promotion-button-container">
          <button
            className='create-pro-btn'
            type="primary"
            htmlType="submit"
            onClick={addpromotion}
          >
            Create Promotion
          </button>
        </div>
      </Form.Item>

      <p className="create-pro-text">
        By signing in or creating an account,<br />
        you agree with our<br />
        <span className='terms-and-conditions'>Terms & conditions</span> and
        <span className="privacy-statement">Privacy statement</span>
      </p>
    </div>

  )
}

export default Createpromotion