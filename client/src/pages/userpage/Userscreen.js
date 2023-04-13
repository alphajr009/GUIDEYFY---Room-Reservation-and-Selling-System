import { React, useState } from 'react'
import { Layout } from "antd";
import './userscreen.css';
import Userprofile from './userprofile/Userprofile'
import Footer from '../../components/USER/footer/Footer'


function Userscreen() {
  const [activeButton, setActiveButton] = useState("personaldetails");
  return (
    <div className='userscreen'>
    <div className='userrcontainer'>
      <Userprofile setActiveButton={setActiveButton} activeButton={activeButton} />
      <div className="userer">
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Userscreen