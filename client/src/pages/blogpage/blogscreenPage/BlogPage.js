import React from 'react'
import { useParams  } from 'react-router-dom'
import Blogpagenavbar from '../../../components/BLOG/BlogPageNavbar/Blogpagenavbar';
import Footer from '../../../components/USER/footer/Footer';
import './blogpage.css'


function BlogPage() {

    let params = useParams();



  return (
    <div className='blogpage'>
        <Blogpagenavbar/>
        <div className="blogpage-container">
        {params.blogid}
        </div>
        
        <Footer/>
        </div>
  )
}

export default BlogPage