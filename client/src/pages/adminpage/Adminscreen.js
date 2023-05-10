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
import { useNavigate, useLocation } from 'react-router-dom';





function Adminscreen() {

  const navigate = useNavigate();
  const location = useLocation();

  // Extract the active tab from the location pathname
  const initialActiveTab = location.pathname.split('/').pop();


    // Set the initial state of activeTab
    const [activeTab, setActiveTab] = useState(initialActiveTab || "booking");

    
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    navigate(`/admin/${newTab}`);
  };

  return (
    <div className='adminscreen'>
      <div className='admincontainer'>
        <AdminNavbar setActiveTab={handleTabChange} activeTab={activeTab} />
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
