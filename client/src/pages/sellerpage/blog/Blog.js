import { React, useState } from 'react'
import './blog.css'
import { Table} from 'antd';

function Blog() {

  const [activeTab, setActiveTab] = useState('create blog');
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
        key:<button className='btn-edit-blogs-by-seller'>Edit</button>,
    },
    {
        title: 'Delete',
        dataIndex: 'delete',
        key:<button className='btn-delete-blogs-by-seller'>Delete</button>,
    }
  
];

const blogs = [
  {
    title: "AAA",
    _id: "Deluxe Room",
    roomname: "sdfdafs",
    edit:<button className='btn-edit-blogs-by-seller'>Edit</button>,
    delete:  <button className='btn-delete-blogs-by-seller'>Delete</button>,
    
  }
];


  return (
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
            <h1>Blog</h1>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className='seller-central-table-blogs-sellers'>
             <Table  dataSource={blogs} columns={columns} className='seller-cental-table-for-blog'/>
          </div>
        )}

      </div>
  )
}

export default Blog
