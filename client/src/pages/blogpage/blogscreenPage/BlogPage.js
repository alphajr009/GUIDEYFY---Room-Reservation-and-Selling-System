import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Blogpagenavbar from '../../../components/BLOG/BlogPageNavbar/Blogpagenavbar';
import Footer from '../../../components/USER/footer/Footer';
import './blogpage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';





function formatDescription(description) {
  return description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}



function BlogPage() {

  let params = useParams();
  const [blog, setblog] = useState()
  const [blogs, setblogs] = useState([])

  useEffect(() => {

    (async () => {

      if (!localStorage.getItem('currentUser')) {
        window.location.reload = '/login'

      }

      try {
        const data = (await axios.post("/api/blogs/getblogbyid", { blogid: params.blogid })).data
        setblog(data.blog[0]);

      } catch (error) {
        console.log('error')

      }
    })();
  }, [params.blogid]);


  useEffect(() => {
    (async () => {
      try {
        const data = (await axios.get("/api/blogs/getallblogs")).data;
        const sortedBlogs = data.blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const latestFiveBlogs = sortedBlogs.slice(0, 5);
        setblogs(latestFiveBlogs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.blogid]);



  return (
    <div className='blogpage'>
      <Blogpagenavbar />
      <div className='blogpage-contain-all'>
        <div className="blogpage-container">
          {blog ? (
            <div className="bolgpage-container-wrapper">
              <div className="blogpage-title">
                <h1>{blog.title}</h1>
              </div>
              <div className="blogpage-description1">
                <div className='blog-img-wrapper'>
                  <img className='blogimage-photo4' src={`/uploads/${params.blogid}-0.jpg`} />
                </div>
                <p>{formatDescription(blog.description1)}</p>
              </div>
              <div className="blogpage-description1">
                <div className='blog-img-wrapper'>
                  <img className='blogimage-photo4' src={`/uploads/${params.blogid}-1.jpg`} />
                </div>
                <p>{formatDescription(blog.description1)}</p>
              </div>
              <div className="blogpage-description1">
                <div className='blog-img-wrapper'>
                  <img className='blogimage-photo4' src={`/uploads/${params.blogid}-2.jpg`} />
                </div>
                <p>{formatDescription(blog.description1)}</p>
              </div>
              <div className="blogpage-description1">
                <div className='blog-img-wrapper'>
                  <img className='blogimage-photo4' src={`/uploads/${params.blogid}-3.jpg`} />
                </div>
                <p>{formatDescription(blog.description1)}</p>
              </div>


            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="blogpage-contain-side-view">
          <div className="blogpage-container-slide1">
            <h2>Want to make this experience part of your itinerary?</h2>
            <hr className="blogpage-custom-hr3" />
            <p>We offer customized rooms to fit your unique needs and desires. Our rooms are designed to provide an immersive and unforgettable experience.
              Our rooms will allow you to relax, unwind, and connect with the
              world around you.So why wait? Book your room now and start your journey towards a truly unforgettable experience.
            </p>
            <div className='blog-page-booknowbtn-wrapper' >
              <button className="blog-page-booknowbtn">
                Book Now
              </button>
            </div>
          </div>
          <div className="blogpage-container-slide2">
            <h2>Recent Posts</h2>
            <hr className="blogpage-custom2-hr3" />
            {blogs.map((recentBlog, index) => (
              <Link to={`/blog/${recentBlog._id}`} className='nounderline-blogpage'>
                <div key={index} className="recent-post"  >
                  <img className='recentplog-photo' src={`/uploads/${recentBlog._id}-0.jpg`} />
                  <h3>{recentBlog.title}</h3>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage

