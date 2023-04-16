import React, { useState } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faPerson, faUser, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';
import './sellers.css'
function Sellers() {


  const [seller, setseller] = useState('');
  const [sellername, setsellername] = useState('');
  const [sellerid, setsellerrid] = useState('');
  const [isAdmin, setisAdmin] = useState('');


  const { Option } = Select;


  const handleseller = (e) => {
    setsellername(e.target.value);
  };
  const handlesellerid = (e) => {
    setsellerrid(e.target.value);
  };

  const handleuserposition = (value) => {
    setisAdmin(value);
  };
  const handlesearchsellers = () => {
    window.location.assign('/sellers');
  };


  const sellers = [
    {
      _id: "1",
      sellerName: "Saaw",
      email: "p@gmail.com",
      phonenumber: "323",
      sellerlevel: <button className='admin-terminal-sellers-as-gold'>Gold</button>
    },
    {
      _id: "2",
      sellerName: "Saa",
      email: "p@gmail.com",
      phonenumber: "323",
      sellerlevel: <button className='admin-terminal-sellers-as-silver'>Silver</button>
    },

    {
      _id: "2",
      sellerName: "Saa",
      email: "p@gmail.com",
      phonenumber: "323",
      sellerlevel: <button className='admin-terminal-sellers-as-platinum'>Platinum</button>

    }


  ];

  const columns = [
    {
      title: 'Seller ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Seller Name',
      dataIndex: 'sellerName',
      key: 'sellerName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',

    },
    {
      title: 'Seller Level',
      dataIndex: 'sellerlevel',
      key: 'sellerlevel',

    },
    {
      title: 'isSuspend',
      dataIndex: 'isSuspend',
      key: 'isSuspend'
    }


  ];
  return (
    // container for table and searchbar
    <div className="admin-terminal-sellers">
      {/* container for search bar */}
      <div className="admin-terminal-sellersname-sid-level">
        {/* container for booking id */}
        <div className="admin-terminal-search-bar-sellers-seller-name">
          <FontAwesomeIcon icon={faUser} className="seller-name" />
          <input
            type="text"
            placeholder="Seller Name"
            className="admin-terminal-sellers-name"
            value={sellername}
            onChange={handleseller}
          />
        </div>

        {/* container for customer id */}
        <div className="admin-terminal-sellers-id">
          <FontAwesomeIcon icon={faIdBadge} className="sellers-seller-id" />
          <input
            type="text"
            placeholder="Seller ID"
            className="admin-sellers-id"
            value={sellerid}
            onChange={handlesellerid}
          />
        </div>

        {/* container for booking status */}
        <div className="admin-terminal-level-seller">
          <FontAwesomeIcon icon={faUsers} className="sellers-level" />
          <Select
            className="admin-terminal-seller-level"
            placeholder="Seller Level"
            style={{ width: '125px' }}
            value={isAdmin}
            onChange={handleuserposition}
          >
            <Option key="seller-level-gold">Gold</Option>
            <Option key="seller-level-platinum">Platinum</Option>
            <Option key="seller-level-silver">Silver</Option>

          </Select>
        </div>
        {/* container fors search*/}
        <div className='admin-sellers-filter-search'>
          <button className='btn-sellers-search-admin-terminal' onClick={handlesearchsellers}>
            <FontAwesomeIcon icon={faSearch} className="r-sellers-search" />
          </button>
        </div>
      </div>
      <div className='admin-sellers-table'>
        <Table dataSource={sellers} columns={columns} className='admin-terminal-room-table' />
      </div>
    </div>
  )
}

export default Sellers