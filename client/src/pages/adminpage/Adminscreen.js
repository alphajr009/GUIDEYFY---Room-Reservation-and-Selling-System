import { React, useState } from 'react'
import './adminscreen.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import { Layout } from "antd";
import Bookings from './Bookings'
import Rooms from './Rooms'
import Finance from './Finance'
import Users from './Users'
import Sellers from './Sellers'
import Blogs from './Blogs'
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
