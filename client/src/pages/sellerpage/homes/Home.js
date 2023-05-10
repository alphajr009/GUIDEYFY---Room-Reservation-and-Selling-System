import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div>
      <div className="BlogButtonContainerAvi">
        <Link to="/create-blog" className="BlogButtonAvi">
          Create a Blog <FontAwesomeIcon icon={faBloggerB} style={{ color: "#ffffff" }} />
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
  )
}

export default Home