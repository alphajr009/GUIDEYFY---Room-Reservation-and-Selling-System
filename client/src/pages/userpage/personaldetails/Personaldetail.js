import React from 'react'
import './personaldetails.css';

function Personaldetail() {
  return (

    <div className='bs_js' >
      <div className='bs_person_js_1' >

        <div className='label_js'>
          <label for="name">First Name :</label>
        </div>

      </div>
      <div className='bs_person_js_2' >

        <div className='label_js'>
          <label for="name">Display Name :</label>

        </div>
      </div>

      <div className='bs_person_js_3' >
        <div className='label_js'>

          <label for="name">Email:</label>

        </div>
      </div>

      <div className='bs_person_js_4' >
        <div className='label_js'>
          <label for="name">Address:</label>

        </div>
      </div>
      <div className='bs_person_js_5' >
        <div className='label_js'>
          <label for="name">Natianality:</label>

        </div>
      </div>

      <div className='bs_person_js_6' >
        <div className='label_js'>
          <label for="name">Gender:</label>

        </div>
      </div>

      <div className='bs_person_js_7' >
        <div className='label_js'>
          <label for="name">Birthday:</label>

        </div>
      </div>

      <button className='btn_person_js'>Save change</button>

    </div>




  );
}

export default Personaldetail