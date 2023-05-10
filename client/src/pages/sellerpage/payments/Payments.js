import React, { useState, useEffect } from 'react';
import './payments.css'
import axios from 'axios'
import { Modal, Form, Input, notification, } from 'antd';
import {
  CheckCircleOutlined,
} from '@ant-design/icons';


function Payments() {

  const [stripename, setStripename] = useState('');
  const [stripeemail, setstripeemail] = useState('');
  const [activeTab, setActiveTab] = useState('funds');


  const [open, setOpen] = useState(false);
  const [openemail, setOpenemail] = useState(false);
  const [loading, setloading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formRef = React.useRef(null);



  const user = JSON.parse(localStorage.getItem("currentUser"))

  const showModal = () => {
    setOpen(true);
  };


  const showEmailModal = () => {
    setOpenemail(true);
  };



  const handleOk = () => {
    changeUserDetails(formRef.current.getFieldValue("Name"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Account Name is updated',
      description: '',
      placement: 'topRight',
      icon: <CheckCircleOutlined />,
      className: "styles-notification"
    });
  };


  const handleEmailOk = () => {
    changeUserEmailDetails(formRef.current.getFieldValue("Email"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenemail(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Account Email is updated',
      description: '',
      placement: 'topRight',
      icon: <CheckCircleOutlined />,
      className: "styles-notification"
    });
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleEmailCancel = () => {
    console.log('Clicked cancel button');
    setOpenemail(false);
  }


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/sellers/getsellerbyid', { userid: user._id });
        const data = response.data[0];
        setStripename(data.stripename);
        setstripeemail(data.stripeemail)

      } catch (error) {
        console.log('error');
      }
    })();
  }, []);



  async function changeUserDetails(stripename) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/sellers/editseller', { _id, stripename })).data;
      console.log("User details updated successfully");

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        stripename: stripename ? stripename : currentUser.stripename,


      }));


    } catch (error) {
      console.log(error)
      setloading(false)
    }
    window.location.href = '/seller/payments'
  }

  const validateName = (rule, value) => {
    const regex = /^[A-Za-z\s]{2,}$/; 
    if (!regex.test(value)) {
      return Promise.reject('Please enter a two names');
    }
    return Promise.resolve();
  };
  

  async function changeUserEmailDetails(stripeemail) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/sellers/editseller', { _id, stripeemail })).data;
      console.log("User details updated successfully");

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        stripeemail: stripeemail ? stripeemail : currentUser.stripeemail

      }));


    } catch (error) {
      console.log(error)
      setloading(false)
    }
    window.location.href = '/seller'
  }

  const validateStripeEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }



  return (
    // container for tab,funds,payments methods
    <div className='seller-central-payments-container'>

      {/* container for payment tab */}
      <div className='seller-payment-tab-container'>

        {/* container for payment funds tab */}
        <div className={`seller-central-funds-tab
          ${activeTab === 'funds' ? 'active' : ''}`}
          onClick={() => setActiveTab('funds')}
        >
          <span className="seller-central-funds-tab-text" >Funds</span>
        </div>


        {/* container for payment methods */}
        <div className={`seller-central-payments-tab
          ${activeTab === 'payments methods' ? 'active' : ''}`}
          onClick={() => setActiveTab('payments methods')}
        >
          <span className='seller-central-payments-tab-text'>Payments Methods</span>
        </div>


          {/* container for total funds */}
          <div className={`seller-central-total-funds-tab
          ${activeTab === 'total funds' ? 'active' : ''}`}
          onClick={() => setActiveTab('total funds')}
        >
          <span className='seller-central-payments-tab-text'>Total funds</span>
        </div>
      </div>

      {/* both funds and modal container */}
      <div className='funds-and-payments-methods'>
        {/* modal for funds */}
        {activeTab === 'funds' && (
          <div className='funds-box-container'>
            <div className='seller-central-funds-box-container'>
              <div className='total-box'>
                <div className='total-box-1'>
                  <span className='total-box-text-1'>Your Total Funds</span>
                </div>
                <div className='total-box-2'>
                  <span className='total-box-text-2'>470000</span>
                </div>
              </div>
            </div>
            <button className='btn-btn-review-payment' type="primary" htmlType="submit">Review Payment</button>
          </div>

        )
        }

      </div>
      {/* modal for payment methods */}
      {activeTab === 'payments methods' && (

        <div className='seller-central-payments-methods-box-container'>
          <div className="seller-central-top-payment">Payout Profile</div>
          <div className='payment-box'>

            <div className="payments-box-container">
              <div className="payment-box-texts-1">
                <div className='payment-container-name'>
                  <p className='payment-container-stripe'>Stripe Account Name</p>
                </div>
                <div className='payment-stripe-account-name'>
                  <p className='payment-stripe-account-fname'>{stripename}</p>
                </div>
                <div className='payment-edit-popup-1'>
                  <p className='payment-edit-popup1' onClick={showModal} >Edit</p>

                  <Modal
                    title="Enter Your Stripe Account Name"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    width="500px"
                    className="payment-modal"
                    onCancel={handleCancel}
                  >
                    <Form ref={formRef} stripename="control-ref" onFinish={(values) => changeUserDetails(values.Name)}
                      size='large'
                      initialValues={{ Name: user.stripename }}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please Enter a Stripe Name"
                          },
                          {
                            validator: validateName,
                          },
                        ]}
                      
                        className='form-name'
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}

                        name="Name"
                        label="Name"
                      >
                        <Input placeholder={user.stripename} />
                      </Form.Item>

                    </Form>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="payments-box-container">
              <div className="payment-box-texts-2">
                <div className='payment-container-email'>
                  <p className='payment-container-stripe-email'>Stripe Account Email</p>
                </div>
                <div className='payment-stripe-email'>
                  <p className='payment-email'>{stripeemail}</p>
                </div>
                <div className='payment-edit-popup-2'>
                  <p className='payment-edit-popup2' onClick={showEmailModal} >Edit</p>

                  <Modal
                    title="Enter Your Stripe Account Email"
                    open={openemail}
                    onOk={handleEmailOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleEmailCancel}
                    width="500px"
                    className="payment-modal"
                    bodyStyle={{ borderRadius: '17px' }}

                  >
                    <Form ref={formRef} stripeemail="control-ref" onFinish={(values) => changeUserEmailDetails(values.Email)}
                      size='large'
                      initialValues={{ Email: user.stripeemail }}>
                      <Form.Item
                        rules={[{ required: true, message: "Please Enter a Valid Stripe Email" }, { validator: (_, value) => validateStripeEmail(value) ? Promise.resolve() : Promise.reject("Invalid stripe email address"), },]}
                        className='form-email'
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        name="Email"
                        label="Email"
                      >
                        <Input placeholder={user.stripeemail} />
                      </Form.Item>

                    </Form>
                  </Modal>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
                 {activeTab === 'total funds' && (
                <div className='summary-of-payment-seller'>
                    <div className='summary-of-payment-boxes-container-seller'>
                        <div className='summary-of-payment-box-1-seller'>
                            <span className='summary-of-total-funds-seller'>
                                Total Funds
                            </span>
                            <span className='total-funds-of-payment-summary-seller'>
                                Rs.600000
                            </span>
                        </div>
                        <div className='summary-of-payment-box-2-seller'>
                            <span className='summary-of-total-fees-seller'>
                                Your salary fees
                            </span>
                            <span className='total-fees-of-payment-summary-seller'>
                                Rs6000
                            </span>
                        </div>

                        <div className='summary-of-payment-box-3-seller'>
                            <span className='summary-of-payout-fees-seller'>
                                Payout Amount
                            </span>
                            <span className='total-fees-of-payment-fee-seller'>
                                Rs6000
                            </span>
                        </div>

                    </div>
                </div>
            )}

    </div>
  )
}

export default Payments