// src/Sub_Services/Handyman_Service.js
import React from 'react';
import './Service.css';

const HandymanService = () => {
  return (
    <div className="service-container">
      <h1>Handyman Services</h1>
      <p>
        Our handyman services cover a variety of home repairs and improvements. Whether you need help with installations, repairs, or general maintenance, our skilled handymen are here to help.
      </p>
      <ul>
        <li>Furniture assembly</li>
        <li>Minor electrical and plumbing work</li>
        <li>Home improvements and repairs</li>
        <li>Flexible scheduling to fit your needs</li>
      </ul>
      <button className="btn btn-primary">Schedule a Visit</button>
    </div>
  );
};

export default HandymanService;