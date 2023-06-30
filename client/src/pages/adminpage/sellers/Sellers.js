import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faUser, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';
import axios from 'axios'
import './sellers.css'
import Swal from 'sweetalert2'


function Sellers() {



  const [sellerid, setsellerrid] = useState('');
  const [displayName, setDisplayname] = useState('');
  const [sellerLevel, setsellerLevel] = useState('');
  const [users, setusers] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()

  const [filteredUsers, setFilteredUsers] = useState([])


  const { Option } = Select;

  const handleseller = (e) => {
    setDisplayname(e.target.value);
  };
  const handlesellerid = (e) => {
    setsellerrid(e.target.value);
  };

  const handlesellerLevel = (value) => {
    setsellerLevel(value);

  };


  const handleFilter = () => {
    let tempUsers = [...users];

    if (sellerid !== '') {
      tempUsers = tempUsers.filter(seller => seller._id.includes(sellerid));
    }

    if (displayName !== '') {
      tempUsers = tempUsers.filter(seller => (seller.fname + ' ' + seller.lname).toLowerCase().includes(displayName.toLowerCase()));
    }

    if (sellerLevel !== '') {
      tempUsers = tempUsers.filter(seller => seller.sellerLevel === sellerLevel);
    }

    setFilteredUsers(tempUsers);
  }



  const columns = [
    {
      title: 'Seller ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Seller Name',
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
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',

    },
    {
      title: 'Seller Level',
      dataIndex: 'sellerLevel',
      key: 'sellerLevel',
      render: (sellerLevel, users) => {
        if (sellerLevel === 'Silver') {
          return <button className='admin-terminal-sellers-as-silver'>Silver</button>;
        } else if (sellerLevel === 'Gold') {
          return <button className='admin-terminal-sellers-as-gold'>Gold</button>;
        } else {
          return <button className='admin-terminal-sellers-as-platinum'>Platinum</button>;
        }
      },
    },

    {
      title: 'isSuspend',
      dataIndex: 'isSuspend',
      key: 'isSuspend',
      render: (_, users) => {
        if (users.isSuspend) {
          return <button className='seller-is-suspend' onClick={() => {

            Swal.fire({
              title: 'Confirm making this user as Seller?',
              icon: "success",
              timer: 5000,
              showCancelButton: true,
              cancelButtonText: 'Cancel',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Do it!'
            }).then((result) => {
              if (result.isConfirmed) {

                updateAsSeller(users._id, false)
                Swal.fire(
                  'Suspended!',
                  `${users.fname} is now a seller.`
                ).then(result => {
                  window.location.href = 'http://localhost:3000/admin/sellers';
                })

              }
            })

          }}


          >Yes</button>
        } else {
          return <button className='seller-is-not-suspend' onClick={() => {

            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be suspend!",
              icon: 'warning',
              showCancelButton: true,
              cancelButtonText: 'Cancel',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Suspend Seller!'
            }).then((result) => {
              if (result.isConfirmed) {

                updateSuspend(users._id, true)
                Swal.fire(
                  'Suspended!',
                  `${users.fname} Suspended Successfully.`
                ).then(result => {
                  window.location.reload();
                })
              }
            })
          }}>No</button>
        }
      }
    }

  ];



  useEffect(() => {
    (async () => {

      try {
        setloading(true)
        const data = (await axios.get('/api/sellers/getallsellers')).data
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



  async function updateSuspend(_id, isSuspend) {

    try {
      const res = (await axios.patch('/api/sellers/changesuspend', { _id, isSuspend })).data;
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  async function updateAsSeller(_id, isSuspend) {

    try {
      const res = (await axios.patch('/api/sellers/changeasseller', { _id, isSuspend })).data;
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }




  useEffect(() => {
    handleFilter();
  }, [displayName, sellerid, sellerLevel])


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
            value={displayName}
            onChange={handleseller}
          />
        </div>

        {/* container for customer id */}
        {/* <div className="admin-terminal-sellers-id">
          <FontAwesomeIcon icon={faIdBadge} className="sellers-seller-id" />
          <input
            type="text"
            placeholder="Seller ID"
            className="admin-sellers-id"
            value={sellerid}
            onChange={handlesellerid}
          />
        </div> */}

        {/* container for bseller level */}
        <div className="admin-terminal-level-seller">
          <FontAwesomeIcon icon={faUsers} className="sellers-level" />
          <Select
            defaultValue='Seller Level'
            style={{ width: 180 }}
            onChange={handlesellerLevel}
            value={sellerLevel}
          >
            <Option value='Silver'>Silver</Option>
            <Option value='Gold'>Gold</Option>
            <Option value='Platinum'>Platinum</Option>
          </Select>
        </div>
        {/* container for search*/}
        <div className='admin-sellers-filter-search'>
          <button className='btn-sellers-search-admin-terminal' onClick={handleFilter}>
            <FontAwesomeIcon icon={faSearch} className="r-sellers-search" />
          </button>
        </div>
      </div>
      <div className='admin-sellers-table'>
        <Table
          dataSource={filteredUsers}
          columns={columns}
          rowKey='_id'
          className='admin-terminal-room-table'
          footer={() => <div className="no-of-sellers">{`Total  ${users.length} sellers `}</div>}
        />
      </div>
    </div>
  )
}

export default Sellers


