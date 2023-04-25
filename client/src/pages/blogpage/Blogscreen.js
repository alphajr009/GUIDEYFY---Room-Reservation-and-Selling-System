import React, { useState, useEffect } from 'react'
import './blogscreen.css'
import Footer from '../../components/USER/footer/Footer'
import BlogNavbar from '../../components/BLOG/BlogNavbar/BlogNavbar'
import axios from 'axios'
import { Radio, Pagination } from 'antd';
import { Link } from 'react-router-dom';





function Blog({ blog }) {

  const shortDescription = blog.description1.substring(0, 700);



  return (
    <div className="blogcontain-tile">
      <Link to={`/blog/${blog._id}`}>
        <h3>{blog.title}</h3>
        <img className='blog-contain-image-tile' src={`http://localhost:5000/uploads/${blog._id}-0.jpg`} alt={blog.title} />
        <div className='blogcontain-tile-description-wrapper'>
          <p className='blogcontain-tile-description'>{shortDescription}...<a>Read More »</a></p>
        </div>
      </Link>
    </div>
  );
}






function Blogscreen() {

  const [blogs, setblogs] = useState([])
  const [value, setValue] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'Accommodation',
    'Activities',
    'Arts and Culture',
    'Culture & Heritage',
    'Destinations',
    'Food & Drink',
    'General',
    'Guest Contributors',
    'Politics',
    'Transport',
    'Weather',
    'Wildlife',
  ];

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    if (value === e.target.value) {
      setValue('');
      filterBlogs('', searchTerm);
    } else {
      setValue(e.target.value);
      filterBlogs(e.target.value, searchTerm);
    }
  };


  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterBlogs(value, e.target.value);
  };

  const filterBlogs = (category, search) => {
    const filtered = blogs.filter(blog =>
      (!category || blog.category === category) &&
      (!search || blog.title.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredBlogs(filtered);
  };

  const onClearCategory = () => {
    setValue('');
    filterBlogs('', searchTerm);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = (await axios.get("http://localhost:5000/api/blogs/getallblogs")).data;
        setblogs(data.blogs);
        setFilteredBlogs(data.blogs); 
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);





  return (
    <div className="blogscreen">
      <BlogNavbar />
      <div className='blogscreen-wrapper'>
        <div className="blogscreen-filters-wrapper">
          <div className="blogscreen-filterwrapper">
            <div className="blogscreen-search-bar-blogs-blog-id">
              <input
                type="text"
                placeholder="Search Blogs"
                className="admin-terminal-blogs-blog-id"
                value={searchTerm}
                onChange={onSearchChange}
              />
            </div>
            <div className="blgscr-filter-header">
              Categories
              <hr />
            </div>
            <div>
              <div className='radiobuttons-blogscreen'>
                <Radio.Group onChange={onChange} value={value}>
                  {categories.map((category, index) => (
                    <Radio key={index} value={category}>
                      {category}
                    </Radio>
                  ))}
                </Radio.Group>
                <div className='clear-cat-btn-container'>
                  <button onClick={onClearCategory} className="clear-category-button">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogscreen-content">
          {filteredBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogscreen;
