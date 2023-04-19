import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/a076d05399.js';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);

function Home() {
  return (
    <div>
      <table className="SellerDiscriptionBarAvi">
        <tbody>
          <tr>
            <th>Reservations</th>
            <th>Sales (30 Days)</th>
            <th>Properties</th>
            <th>Seller Level</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Rs.150000</td>
            <td>45</td>
            <td>Platinum</td>
          </tr>
        </tbody>
      </table>
      <div className="CreateBlogButtonContainerAvi">
        <Link to="/blog" className="CreateBlogButtonAvi">
          <span>Create a Blog</span>
          <i class='fab fa-blogger-b'></i>
        </Link>
      </div>
      <div>
        <table className="GetStartedAvi">
          <tbody>
            <tr>
              <th>Get Started</th>
            </tr>
            <tr>
              <td><Link to="/blog">New Business Seller Guide</Link></td>
            </tr>
            <tr>
              <td><Link to="/blog">Learn How To Create Promotion</Link></td>
            </tr>
            <tr>
              <td><Link to="/blog">Learn How To Blogging</Link></td>
            </tr>
            <tr>
              <td><Link to="/blog">Property Listing Best Practices</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;