import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faNewspaper, faSearch, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import './blogs.css'
import Swal from 'sweetalert2'
import axios from 'axios';
function Blogs() {


  const [blogid, setblogid] = useState('');
  const [sellerid, setsellerid] = useState('');
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()
  const [blogs, setblogs] = useState([])
  const [rooms, setRooms] = useState([]);
  const [title, settitle] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([])

  const handleblogid = (e) => {
    setblogid(e.target.value);
  };

  const handleblogname = (e) => {
    settitle(e.target.value);
  };


  const handlesellerid = (e) => {
    setsellerid(e.target.value);
  };



  const handleFilterBlogs = () => {
    let tempBlogs = [...blogs];
    if (title !== '') {
      tempBlogs = tempBlogs.filter(blog => blog.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (blogid !== '') {
      tempBlogs = tempBlogs.filter(blog => blog._id.includes(blogid));
    }
    if (sellerid !== '') {
      tempBlogs = tempBlogs.filter(seller => seller._id.includes(sellerid));
    }
    setFilteredBlogs(tempBlogs)
  }

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
      key: '_id',
      render: (text, record) => {
        return `${record.sellerid}`;
      }
    },
    {
      title: 'Room ID',
      dataIndex: 'roomid',
      key: 'roomid',
    },
    {
      title: 'Room Name',
      dataIndex: 'roomid',
      key: 'roomname',
      render: (roomId) => {
        const room = rooms.find((r) => r._id === roomId);
        return room ? room.title : '';
      },
    },
    {
      title: 'Delete',
      dataIndex: ' ',
      width: '9%',
      key: 'x',
      render: (_, blogs) => (
        <button className='btn-delete-blogs-by-seller' onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete the blog",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#4444AA',
            cancelButtonColor: '#B8252A',
            confirmButtonText: 'Yes, Blog is Deleted!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteBlog(blogs._id)
              Swal.fire(
                'Deleted!',
                'Blog has been deleted.',
                'success'
              ).then(result => {
                window.location.reload();
              })
            }
          })
        }}>Delete</button>
      )

    }
  ];



  async function deleteBlog(_id) {
    try {
      const res = (await axios.patch('http://localhost:5000/api/blogs/deleteblog', { _id })).data;
      console.log("Blog Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {

      try {

        setloading(true)
        const data = (await axios.get("http://localhost:5000/api/blogs/getallblogs")).data
        setblogs(data.blogs)
        setFilteredBlogs(data.blogs)
        setloading(false)


      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)

      }
    })();
  }, []);

  

  useEffect(() => {
    (async () => {

      try {

        setloading(true)
        const data = (await axios.get("http://localhost:5000/api/rooms/getallrooms")).data
        setRooms(data.rooms)
        setloading(false)


      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)

      }
    })();
  }, []);

  useEffect(() => {
    handleFilterBlogs();
  }, [title,blogid,sellerid])


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
            value={title}
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
          <button className='btn-blogs-search-admin-terminal' onClick={handleFilterBlogs}>
            <FontAwesomeIcon icon={faSearch} className="blogs-search" />
          </button>
        </div>
      </div>
      <div className='admin-blogs-table'>
        <Table  
        columns={columns} 
        className='admin-terminal-blogs-table'
        dataSource={filteredBlogs} />
      </div>
    </div>
  )
}

export default Blogs