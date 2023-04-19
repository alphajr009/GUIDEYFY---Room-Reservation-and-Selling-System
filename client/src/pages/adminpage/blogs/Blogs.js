import React, { useState } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faNewspaper, faSearch, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import './blogs.css'

function Blogs() {


  const [blogid, setblogid] = useState('');
  const [blogname, setblogname] = useState('');
  const [sellerid, setsellerid] = useState('');



  const handleblogid = (e) => {
    setblogid(e.target.value);
  };

  const handleblogname = (e) => {
    setblogname(e.target.value);
  };


  const handlesellerid = (e) => {
    setsellerid(e.target.value);
  };

  const handlesearchbookings = () => {
    window.location.assign('/blogs');
  };


  const columns = [
    {
      title: 'Blog ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Blog Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Seller ID',
      dataIndex: '_id',
      key: 'sellerid',
    },
    {
      title: 'Room ID',
      dataIndex: 'roomid',
      key: 'roomid',
    },
    {
      title: 'Room Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',

    },

  ];
  return (
    // container for table and searchbar
    <div className="admin-terminal-blogs">
      {/* container for search bar */}
      <div className="admin-terminal-blog-id-blog-name-seller-id">
        {/* container for booking id */}
        <div className="admin-terminal-search-bar-blogs-blog-id">
          <FontAwesomeIcon icon={faPenSquare} className="blogs-blogid-icon" />
          <input
            type="text"
            placeholder="Blog ID"
            className="admin-terminal-blogs-blog-id"
            value={blogid}
            onChange={handleblogid}
          />
        </div>
        {/* container for customer name */}
        <div className="admin-terminal-blogs-bname">
          <FontAwesomeIcon icon={faNewspaper} className="blogs-name" />
          <input
            type="text"
            placeholder="Blog Name"
            className="admin-terminal-blogs-b-name"
            value={blogname}
            onChange={handleblogname}
          />
        </div>
        {/* container for customer id */}
        <div className="admin-terminal-blogs-seller-id">
          <FontAwesomeIcon icon={faIdBadge} className="blogs-sid" />
          <input
            type="text"
            placeholder="Seller ID"
            className="admin-terminal-blogs-sid"
            value={sellerid}
            onChange={handlesellerid}
          />
        </div>

        {/* container fors search*/}
        <div className='admin-blogs-filter-search'>
          <button className='btn-blogs-search-admin-terminal' onClick={handlesearchbookings}>
            <FontAwesomeIcon icon={faSearch} className="blogs-search" />
          </button>
        </div>
      </div>
      <div className='admin-blogs-table'>
        <Table  columns={columns} className='admin-terminal-blogs-table' />
      </div>
    </div>
  )
}

export default Blogs