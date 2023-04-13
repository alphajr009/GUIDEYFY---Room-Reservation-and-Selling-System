import { React, useState } from 'react'
import { Layout } from "antd";
import './userscreen.css';
import Userprofile from '../../components/userprofile/Userprofile'


function Userscreen() {
  const [activeButton, setActiveButton] = useState("personaldetails");
  return (
    <div className='userscreen'>
    <div className='userrcontainer'>
      <Userprofile setActiveButton={setActiveButton} activeButton={activeButton} />
      <div className="userer">
      </div>
    </div>
  </div>
  )
}

export default Userscreen