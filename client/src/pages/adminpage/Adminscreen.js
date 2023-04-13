import { React, useState } from 'react'
import './adminscreen.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import { Layout } from "antd";
import Bookings from './bookings/Bookings'
import Rooms from './rooms/Rooms'
import Finance from './finance/Finance'
import Users from './users/Users'
import Sellers from './sellers/Sellers'
import Blogs from './blogs/Blogs'
import Footeradmin from '../../components/adminfooter/Footeradmin';




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
              {activeTab === "finance" && <Finance />}
              {activeTab === "users" && <Users />}
              {activeTab === "sellers" && <Sellers />}
              {activeTab === "blogs" && <Blogs />}
            </Layout.Content>
          </div>
        </div>  
      </div>
      <Footeradmin/>
    </div>
  )
}

export default Adminscreen
