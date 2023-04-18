import { React, useState } from 'react'
import './property.css'

function Property() {

  
  const [activeTab, setActiveTab] = useState('create blog');
  return (

    <div className='seller-central-property-container'>
      {/* tab container */}
      <div className="seller-central-property-tab">
        {/* container for create blog */}
        <div
          className={`seller-central-property-tab-container ${activeTab === 'Create Property' ? 'active' : ''}`}
          onClick={() => setActiveTab('Create Property')}
        >
          <span className='seller-central-tab-text-create-property'>Create Property</span>
        </div>

        {/* container for Blogs tab */}
        <div
          className={`seller-central-tab-property-container ${activeTab === 'Current Property' ? 'active' : ''}`}
          onClick={() => setActiveTab('Current Property')}
        >
          <span className='seller-central-tab--text-property'>Current Property</span>
        </div>
      </div>

        {activeTab === 'Create Property' && (
          <div className='seller-central-create-properties-sellers'>
            <h1>properties</h1>
          </div>
        )}

      

      </div>
  )
}

export default Property