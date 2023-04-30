import React, { useState, useEffect } from 'react';
import './promotion.css'
import Createpromotion from './createpromotion/Createpromotion';
import { Table} from 'antd';

function Promotion() {

  const [activeTab, setActiveTab] = useState('Create Promotion');


  const columns = [
    {
        title: 'Promotion Code',
        dataIndex: 'promotioncode',
        key: 'promotioncode',
    },
    {
        title: 'Attempt to use ',
        dataIndex: 'attemptToUse',
        key: 'attemptToUse',
    },
    {
        title: 'Data Range',
        dataIndex: 'dataRange',
        key: 'dataRange',
    },
    {
        title: 'Reduce Value',
        dataIndex: 'reduceValue',
        key:'reduceValue',
    },
    {
        title: 'Delete',
        dataIndex: 'delete',
        key:<button className='btn-delete-blogs-by-seller'>Delete</button>,
    }

]


  return (
<div className='promotion-container'>

  <div className='promotion-container-tab'>

    <div className={`create-promotion-tab
     ${activeTab === 'Create Promotion' ? 'active' : ''}`}
     onClick={() => setActiveTab('Create Promotion')}
     >
      <span className='create-promotion-text'>Create Promotion</span>
    </div>

    <div className={`current-promotion-tab
    ${activeTab === 'Current Promotion' ? 'active' : ''}`}
    onClick={() => setActiveTab('Current Promotion')}
    >
      <span className="current-promotion-text">Current Promotion</span>
    </div>

  </div>

  {activeTab === 'Create Promotion' && (
      <div className='create promotion'>
          <Createpromotion/>
      </div>

  )}

{activeTab === 'Current Promotion' && (
      <div className='current-promotion-table'>
         <Table columns={columns} className='seller-cental-current-promotion'/>
      </div>

  )}

</div>
  )
}

export default Promotion

