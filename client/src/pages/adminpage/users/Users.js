import React, { useState } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faIdBadge, faListNumeric, faUser,faSearch} from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';

import './users.css'

function Users() {

  const [user, setuser] = useState('');
  const [customername, setcustomername] = useState('');
  const [customerid, setcustomerid] = useState('');
  const [isAdmin, setisAdmin] = useState('');
  


  const { Option } = Select;


  const handlecustomer = (e) => {
    setcustomername(e.target.value);
  };
  const handlecustomerid = (e) => {
    setcustomerid(e.target.value);
  };

  const handleuserposition = (value) => {
    setisAdmin(value);
  };
  const handlesearchbookings = () => {
    window.location.assign('/users');
  };


  const users = [
    {
      _id: "1",
      customerName: "Saaw",
      email: "p@gmail.com",
      isAdmin:<button className='admin-terminal-users-isAdmin-yes'>Yes</button>
    },
    {
      _id: "2",
      customerName: "Saa",
      email:"p@gmail.com",
      isAdmin:<button className='admin-terminal-isAdmin-users-no'>No</button>
    }


    
  ];
  
  const columns = [
    {
        title: 'Customer ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Customer Name',
        dataIndex: 'customerName',
        key: 'customerName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'IsAdmin',
        dataIndex: 'isAdmin',
        key: 'isAdmin',
        
    },
  
];
  return (
    // container for table and searchbar
    <div className="admin-terminal-users">
      {/* container for search bar */}
      <div className="admin-terminal-users-cname-isAdmin">
        {/* container for booking id */}
        <div className="admin-terminal-search-bar-users-cus-name">
          <FontAwesomeIcon icon={faUser} className="users-cus-name"/>
          <input
            type="text"
            placeholder="Customer Name"
            className="admin-terminal-users-cus-name"
            value={customername}
            onChange={handlecustomer}
          />
        </div>
       
        {/* container for customer id */}
        <div className="admin-terminal-users-cus-id">
          <FontAwesomeIcon icon={faIdBadge} className="users-cus-id" />
          <input
            type="text"
            placeholder="Customer ID"
            className="admin-users-cus-id"
            value={customerid}
            onChange={handlecustomerid}
          />
        </div>
  
        {/* container for booking status */}
        <div className="admin-terminal-users-isadmin">
          <FontAwesomeIcon icon={faListNumeric} className="users-isadmin" />
          <Select
            className="admin-terminal-IsAdmin"
            placeholder="IsAdmin"
            style={{ width: '125px' }}
            value={isAdmin}
            onChange={handleuserposition}
          >
            <Option key="isAdmin-yes">Yes</Option>
            <Option key="isAdmin-no">No</Option>

          </Select>
        </div>
        {/* container fors search*/}
        <div className='admin-users-filter-search'>
          <button className='btn-users-search-admin-terminal' onClick={handlesearchbookings}>
            <FontAwesomeIcon icon={faSearch} className="r-users-search" />
          </button>
        </div>
      </div>
      <div className='admin-users-table'>
        <Table  dataSource={users} columns={columns} className='admin-terminal-room-table'/>
      </div>
    </div>
  )
}

export default Users