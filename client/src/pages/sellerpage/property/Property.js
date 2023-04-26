import { React, useState } from 'react'
import './property.css';
import CreateProperty from './CreateProperty'

function Property() {

  const [activeTab, setActiveTab] = useState('create property');
  return (
    <div className='seller-central-properties'>
    <div className='seller-central-properties-container'>
      {/* tab container */}
      <div className="seller-central-property-tab">
        {/* container for create property */}
        <div
          className={`seller-central-create-property-tab-container ${activeTab === 'create property' ? 'active' : ''}`}
          onClick={() => setActiveTab('create property')}
        >
          <span className='seller-central-create-property-text-tab'>Create Property</span>
        </div>
        {/* container for current property */}
        <div
          className={`seller-central-current-property-tab-container ${activeTab === 'current property' ? 'active' : ''}`}
          onClick={() => setActiveTab('current property')}
        >
          <span className='seller-central-current-property-text-tab'>Current Property</span>
        </div>
      </div>
        {activeTab === 'create property' && (
          <div className='seller-central-create-property'>
            <CreateProperty/>
          </div>
        )}
        {activeTab === 'current property' && (
          <div className='seller-central-current-property'>
              current property
          </div>
        )}
      </div>
  </div>
  );
}

export default Property;