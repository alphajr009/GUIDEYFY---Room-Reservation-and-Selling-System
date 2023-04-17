import { React, useState } from 'react'
import './payments.css'
import { Table } from 'antd';

function Payments() {


  const [activeTab, setActiveTab] = useState('funds');

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
          <div className='seller-central-funds-box-container'>
            Funds
          </div>
        )
        }

        {/* modal for payment methods */}
        {activeTab === 'payments methods' && (
          <div className='seller-central-payments-methods-box-container'>
            Payment Methods
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Payments