import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faListNumeric, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';
import axios from 'axios'
import Swal from 'sweetalert2'
import './users.css'

function Users() {

  const [customerid, setcustomerid] = useState('');
  const [isAdmin, setisAdmin] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [users, setusers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()


  const { Option } = Select;

  const handlecustomer = (e) => {
    setDisplayname(e.target.value);
  };
  const handlecustomerid = (e) => {
    setcustomerid(e.target.value);
  };

  const handleuserposition = (value) => {
    setisAdmin(value);
  };

  const handleFilter = () => {
    let tempUsers = [...users];

    if (customerid !== '') {
      tempUsers = tempUsers.filter(user => user._id.includes(customerid));
    }

    if (displayname !== '') {
      tempUsers = tempUsers.filter(user => user.displayName.toLowerCase().includes(displayname.toLowerCase()));
    }

    if (isAdmin !== null) {
      tempUsers = tempUsers.filter(user => user.isAdmin === (isAdmin === 'true'));
    }

    setFilteredUsers(tempUsers);
  }


  const columns = [
    {
      title: 'Customer ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Customer Name',
      dataIndex: 'displayName',
      key: 'displayName',
      render: (text, record) => {
        return `${record.fname} ${record.lname}`;
      }
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
      render: (_, users) => {
        if (users.isAdmin) {
          return <button className='admin-terminal-users-isAdmin-yes'>Yes</button>
        } else {
          return <button className='admin-terminal-isAdmin-users-no' onClick={() => {
            Swal.fire({
              title: 'Confirm making this user an Admin?',
              icon: 'question',
              showCancelButton: true,
              cancelButtonText: 'Cancel',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, do it!'
            })
              .then((result) => {
                if (result.isConfirmed) {

                  updateAdmin(users._id, true)
                  Swal.fire(
                    'Updated!',
                    `${users.fname} is now an Admin`,
                    'success'
                  )
                    .then(result => {
                      window.location.reload();
                    })
                }
              })
          }}>No</button>
        }
      }

    },

  ];

  useEffect(() => {
    (async () => {

      try {
        setloading(true)
        const data = (await axios.get('http://localhost:5000/api/users/getallusers')).data
        setusers(data.users)
        setFilteredUsers(data.users);
        setloading(false)


      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)

      }
    })();
  }, []);



  async function updateAdmin(_id, isAdmin) {


    try {
      const res = (await axios.patch('http://localhost:5000/api/users/changeadmin', { _id, isAdmin })).data;
      console.log("Admin update Successfully");
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  useEffect(() => {
    handleFilter();
  }, [displayname, customerid, isAdmin])

  return (
    // container for table and searchbar
    <div className="admin-terminal-users">
      {/* container for search bar */}
      <div className="admin-terminal-users-cname-isAdmin">
        {/* container for booking id */}
        <div className="admin-terminal-search-bar-users-cus-name">
          <FontAwesomeIcon icon={faUser} className="users-cus-name" />
          <input
            type="text"
            placeholder="Customer Name"
            className="admin-terminal-users-cus-name"
            value={displayname}
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
          <button className='btn-users-search-admin-terminal' onClick={handleFilter}>
            <FontAwesomeIcon icon={faSearch} className="r-users-search" />
          </button>
        </div>
      </div>
      <div className='admin-users-table'>
        <Table
          columns={columns}
          dataSource={filteredUsers}
          pagination={{ pageSize: 10 }}
          rowKey="_id"
          className='admin-terminal-room-table'
          footer={() => <div className="no-of-users">{`Total  ${users.length} users `}</div>} />
      </div>
    </div>


  )
}

export default Users