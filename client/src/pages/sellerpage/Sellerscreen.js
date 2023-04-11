import { React, useState } from 'react'
import { Layout } from "antd";
import Sellernavbar from '../../components/sellernavbar/Sellernavbar'
import Blog from './Blog'
import Home from './Home'
import Payments from './Payments'
import Promotion from './Promotion'
import Reservations from './Reservations'
import Property from './Property'
import Analytics from './Analytics'
import Reviews from './Reviews'


function Sellerscreen() {

  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className='admincontainer'>
      <Sellernavbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="seller">

        <div className="seller_main">
          <Layout.Content>
            {activeTab === "home" && <Home />}
            {activeTab === "reservations" && <Reservations />}
            {activeTab === "property" && <Property />}
            {activeTab === "promotions" && <Promotion />}
            {activeTab === "blog" && <Blog />}
            {activeTab === "reviews" && <Reviews />}
            {activeTab === "payments" && < Payments/>}
            {activeTab === "analytics" && <Analytics />}


          </Layout.Content>
        </div>
      </div>

    </div>
  )
}

export default Sellerscreen