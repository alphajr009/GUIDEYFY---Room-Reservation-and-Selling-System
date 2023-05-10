import { React, useState } from 'react'
import './adminscreen.css'
import AdminNavbar from '../../components/ADMIN/adminNavbar/AdminNavbar'
import { Layout } from "antd";
import Bookings from './bookings/Bookings'
import Rooms from './rooms/Rooms'
import Users from './users/Users'
import Sellers from './sellers/Sellers'
import Blogs from './blogs/Blogs'
import Footeradmin from '../../components/ADMIN/adminfooter/Footeradmin';
import Payment from './payment/Payment';
import Report from './report/Report';




function Adminscreen() {

  const [activeTab, setActiveTab] = useState("booking");


  return (
    <div className='adminscreen'>
      <div className='admincontainer'>
        <AdminNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="admin">
          <div className="admin__main">
            <Layout.Content>
              {activeTab === "booking" && <Bookings />}
              {activeTab === "rooms" && <Rooms />}
              {activeTab === "payment" && <Payment />}
              {activeTab === "users" && <Users />}
              {activeTab === "sellers" && <Sellers />}
              {activeTab === "blogs" && <Blogs />}
              {activeTab === "reports" && <Report />}
            </Layout.Content>
          </div>
        </div>  
      </div>
      <Footeradmin/>
    </div>
  )
}

export default Adminscreen
