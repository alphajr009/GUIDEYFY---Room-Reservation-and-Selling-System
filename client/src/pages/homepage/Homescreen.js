import React from 'react';
import './homescreen.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/USER/footer/Footer';

function Homescreen() {
  return (
    <div className="homescreen">
      <Navbar />

      <div className="homescreen-content">
        {/* Add your main content here */}
      </div>

      <Footer />
    </div>
  );
}

export default Homescreen;
