import React, { useState, useEffect } from 'react'
import './blogscreen.css'
import Footer from '../../components/USER/footer/Footer'
import BlogNavbar from '../../components/BLOG/BlogNavbar/BlogNavbar'
import axios from 'axios'



function Blog({ blog }) {
  return (
    <div className="blogcontain-tile">
      <h3>{blog.title}</h3>
    </div>
  );
}

function Blogscreen() {

    const [blogs, setblogs] = useState([])

    
  useEffect(() => {

    (async () => {

      try {
        const data = (await axios.get("http://localhost:5000/api/blogs/getallblogs")).data

        setblogs(data.blogs)

      } catch (error) {
        console.log(error)


      }
    })();
  }, []);


   

  return (
    <div className="blogscreen">
        <BlogNavbar/>
      <div className="blogscreen-content">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}  />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Blogscreen;
