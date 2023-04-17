import React, { useState, useEffect } from 'react';
import './payments.css'
import axios from 'axios'

function Payments() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('funds');

  const user = JSON.parse(localStorage.getItem("currentUser"))


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/users/getuserbyid', { userid: user._id });
        const data = response.data[0];
        setFname(data.fname);
        setLname(data.lname);
        setEmail(data.email)

      } catch (error) {
        console.log('error');
      }
    })();
  }, []);


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

        {/* modal for payment methods */}
        {activeTab === 'payments methods' && (
          
          <div className='seller-central-payments-methods-box-container'>
            <div className="seller-central-top-payment">
              <span className='payout-profile'>Payout Profile</span>
            </div>
           
             <div className='payment-box'>
              <div className="payments-box-container">
                <div className='payment-container-name'>
                  <p className='payment-container-stripe'>Stripe Account Name</p>
                </div>
                <div className='payment-stripe-account-name'>
                  <p className='payment-stripe-account-fname'>{fname} {lname}</p>
                </div>
                <div className='payment-edit-popup1'>
                  <p className='payment-edit-popup1'>Edit</p>
                </div>
              </div>

              <div className="payments-box-container">
                <div className='payment-container-email'>
                  <p className='payment-container-stripe-email'>Stripe Account Email</p>
                </div>
                <div className='payment-stripe-email'>
                  <p className='payment-email'>{email}</p>
                </div>
                <div className='payment-edit-popup2'>
                  <p className='payment-edit-popup2'>Edit</p>
                </div>
              </div>
            </div> 
          </div>
        )
        }

      </div>
    </div>
  )
}

export default Payments