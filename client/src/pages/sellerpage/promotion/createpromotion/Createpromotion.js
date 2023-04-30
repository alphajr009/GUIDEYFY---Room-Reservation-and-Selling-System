import React, { useState } from 'react';
import './createpromotion.css'

import { Input, Form, DatePicker, Radio } from 'antd';

function Createpromotion() {

  const [reduceType, setReduceType] = React.useState("amount");
  const [promotioncode, setpromotioncode] = useState('');
  const [attemptUse, setattemptUse] = useState('');
  const [reduceamount, setreduceamount] = useState('');
  const [percentage, setpercentage] = useState('');
  const [maximumAmount, setmaximunAmount] = useState('');

  const handleReduceTypeChange = e => {
    setReduceType(e.target.value);
  };


  const { RangePicker } = DatePicker;

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

        {/* date range form */}
        <div className='data-range-form'>
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter a Date Range"
                }
              ]}
              label="Date Range"
              name="attempttouse"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            >
              <RangePicker
                format='DD-MM-YYYY'
                placeholder={['From Date', 'To Date']}
                className="promotionDatePicker"
              />
            </Form.Item>
          </Form>
        </div>

        {/* container for radio buttons */}
        <div className='radio-container'>
          <Form>
            <Form.Item

              rules={[
                {
                  required: true,
                  message: "Please enter a Reduce Type"
                }
              ]}
              label="Reduce Type"
              name="reduceType"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 10 }}
              labelAlign="left"

            >
              <div className='radio-buttons'>
                <Radio.Group onChange={handleReduceTypeChange} defaultValue="amount">

                  <Radio value="amount">Amount</Radio>
                  <Radio value="percentage">Percentage</Radio>
                </Radio.Group>
              </div>
            </Form.Item>

            {/* radio buttons container */}
            <div className='radio-input-container'>
              {reduceType === "percentage" && (
                <Form.Item

                  rules={[
                    {
                      required: true,
                      message: "Please enter a percentage"
                    }
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}

                >
                  <Input
                    size="large"
                    style={{ width: "130%" }}
                    className="input-promotion-percentage"
                    placeholder="%"
                    value={percentage}
                    onChange={(e) => { setpercentage(e.target.value) }}
                  />
                </Form.Item>
              )}
              {reduceType === "amount" && (
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please enter an amount"
                    }
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                >
                  <Input
                    size="large"
                    style={{ width: "130%" }}
                    className="input-promotion-amount"
                    placeholder="Rs"
                    value={reduceamount}
                    onChange={(e) => { setreduceamount(e.target.value) }}
                  />
                </Form.Item>
              )}
            </div>
          </Form>
        </div>
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
              placeholder="Maximum Amount"
              value={maximumAmount}
              onChange={(e) => { setmaximunAmount(e.target.value) }}
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

