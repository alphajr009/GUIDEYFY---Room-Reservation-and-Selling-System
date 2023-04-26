import React, { useEffect, useState } from 'react'
import './blog.css'
import axios from 'axios';
import { Table } from 'antd';
import CreateBlog from './CreateBlog';
import Swal from 'sweetalert2'

function Blog() {

  const [activeTab, setActiveTab] = useState('create blog');
  const [blogs, setblogs] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()

  const columns = [
    {
      title: 'Blog Title',
      dataIndex: 'title',
      key: 'blogtitle',
    },
    {
      title: 'Room ID ',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Room Name',
      dataIndex: 'roomname',
      key: 'roomname',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      width:'5%',
      key:'x',
      render: (_,blogs) => {
            return <button className='btn-edit-blogs-by-seller' onClick={() => {
                Swal.fire({
                    title: 'Are you sure you want to edit the blog',
                    icon: 'question',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, do it!'
                })
                    .then((result) => {
                        if (result.isConfirmed) {

                            updateBlog(blogs._id, true)
                            Swal.fire(
                                "Please waiting"
                            )
                                .then(result => {
                                  window.location.href ="/blog"
                                })
                        }
                    })
            }}>Edit</button>
        
    }
      

    },
    {
      title: 'Delete',
      dataIndex: ' ',
      width: '5%',
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

  useEffect(() => {
    (async () => {

      try {

        setloading(true)
        const data = (await axios.get("http://localhost:5000/api/blogs/getallblogs")).data
        setblogs(data.blogs)
     
        setloading(false)


      } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)

      }
    })();
  }, []);

  async function updateBlog(_id) {
  



  }



  async function deleteBlog(_id) {


    try {
      const res = (await axios.patch('http://localhost:5000/api/blogs/deleteblog', { _id })).data;
      console.log("Blog Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='seller-central-blogs'>
      <div className='seller-central-blogs-container'>
        {/* tab container */}
        <div className="seller-central-blogs-tab">
          {/* container for create blog */}
          <div
            className={`seller-central-create-blog-tab-container ${activeTab === 'create blog' ? 'active' : ''}`}
            onClick={() => setActiveTab('create blog')}
          >
            <span className='seller-central-tab-text-create-blog'>Create Blog</span>
          </div>
          {/* container for Blogs tab */}
          <div
            className={`seller-central-blogs-tab-container ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog')}
          >
            <span className='seller-central-tab--text-blogs'>Blogs</span>
          </div>
        </div>
        {activeTab === 'create blog' && (
          <div className='seller-central-create-blogs-sellers'>
            <CreateBlog />
          </div>
        )}
        {activeTab === 'blog' && (
          <div className='seller-central-table-blogs-sellers'>
            <Table
              columns={columns}
              dataSource={blogs}
              className='seller-cental-table-for-blog' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
