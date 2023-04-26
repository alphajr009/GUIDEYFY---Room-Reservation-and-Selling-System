import { React, useState } from 'react'
import './promotion.css';
import { Layout } from "antd";
import Createpromotion from '../promotion/createpromotion/Createpromotion';
import Currentpromotion from '../promotion/currentpromotion/Currentpromotion';


function Promotion() {

  const [activeTab, setActiveTab] = useState('Create Promotion')

  return (
    <div className='seller-central-promotion-container'>
      {/* tab container */}
      <div className="seller-central-promotion-tab">
        {/* container for create promotion */}
        <div
          className={`seller-central-promotion-tab-container ${activeTab === 'Create Promotion' ? 'active' : ''}`}
          onClick={() => setActiveTab('Create Promotion')}
        >
          <span className='seller-central-tab-text-create-promotion'>Create Promotion</span>
        </div>

        {/* container for Current Promotion tab */}
        <div
          className={`seller-central-current-promotion-container ${activeTab === 'Current Promotion' ? 'active' : ''}`}
          onClick={() => setActiveTab('Current Promotion')}
        >
          <span className='seller-central-tab--text-current-promotion'>Current Promotion</span>
        </div>
      </div>

      <div className='create-promotion-and-current-promotion'>
        {activeTab === 'Create Promotion' && (
          <div className='seller-central-create-promotion-sellers'>
            <Createpromotion />
          </div>
        )}

        {activeTab === 'Current Promotion' && (
          <div className='seller-central-current-promotion-sellers'>
            <Currentpromotion />
          </div>
        )}

      </div>
    </div>
  )
}

export default Promotion