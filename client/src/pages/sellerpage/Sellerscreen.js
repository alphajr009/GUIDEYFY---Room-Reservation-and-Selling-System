import { React, useState } from 'react'
import './sellerscreen.css'
import { Layout } from "antd";
import Sellernavbar from '../../components/SELLER/sellernavbar/Sellernavbar'
import Footerseller from '../../components/SELLER/sellerFooter/Footerseller';
import Home from './homes/Home';
import Reservations from './reservation/Reservations';
import Reviews from './reviewss/Reviews';
import Property from './property/Property';
import Payments from './payments/Payments'
import Blog from './blog/Blog'
import Analytics from './analytics/Analytics'
import Promotion from './promotion/Promotion'

function Sellerscreen() {

  const [activeTab, setActiveTab] = useState("home");


  return (
    <div className='sellerscreen'>
    <div className='sellercontainer'>
      <Sellernavbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="seller">
        <div className="seller_main">
          <Layout.Content>
            {activeTab === "home" && <Home />}
            {activeTab === "reservations" && <Reservations/>}
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
    <Footerseller/>
  </div>
  )
}

export default Sellerscreen