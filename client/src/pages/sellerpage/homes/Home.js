import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/a076d05399.js';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home