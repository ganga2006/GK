// src/components/Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Optional, for additional custom styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p style={{ color:'#FFF225' }}>&copy; {new Date().getFullYear()} Rhyno pvt.Ltd. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <nav>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="/" className="" style={{ color:'#FFF225' }}>Privacy-Policy</a>
                </li>
                <li className="list-inline-item m-4">
                  <a href="/about" className=""  style={{ color:'#FFF225' }}>Refund-Policy</a>
                </li>
                <li className="list-inline-item ">
                  <a href="/contact" className=""  style={{ color:'#FFF225' }}>Website-Policy</a>
                </li>
                <li className="list-inline-item m-4">
                  <a href="https://www.linkedin.com" className="" target="" rel="" style={{ color:'#FFF225' }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com" className="" target="" rel="" style={{ color:'#FFF225' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

