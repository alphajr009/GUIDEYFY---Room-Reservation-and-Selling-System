import React from 'react'
import './help.css'
import {Input, Form} from 'antd';


function Help() {
  return (
    <div className='userp-help'>
      <div className="userp-help-boxall">
        {/*Name Box */}
        <div className="userp-help-namebox">
          <div className="userp-help-namebox-container">
            <Form.Item
              className='userp-help-namebox-conatiner-p'
              label="Name:"
              name="name"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input className="userp-help-custom-input"/>
            </Form.Item>

          </div>
        </div>
        {/*Email Box */}
        <div className="userp-help-emailbox">
        <div className="userp-help-namebox-container">
            <Form.Item
              className='userp-help-namebox-conatiner-p'
              label="Email:"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input className="userp-help-custom-input"/>
            </Form.Item>

          </div>
        </div>
        {/*Message Box */}
        <div className="userp-help-messagebox">
        <div className="userp-help-namebox-container">
            <Form.Item
              className='userp-help-namebox-conatiner-p'
              label="Message:"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea  style={{ height: "245px",width:"626px" }} showCount maxLength={2000} className="userp-helpmsg-custom-input" />
            </Form.Item>
          </div>
        </div>

        <div className='userp-help-btn-container'>
              <button className='user-help-bc-send-btn' type="primary" htmlType="submit">
                Send
              </button>
            </div>

      </div>
    </div>
  )
}

export default Help