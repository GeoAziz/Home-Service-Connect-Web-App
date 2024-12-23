// src/Sub_Services/Flooring_Services.js
import React from 'react';
import './Service.css';

const FlooringServices = () => {
  return (
    <div className="service-container">
      <h1>Flooring Services</h1>
      <p>
        Our flooring services provide professional installation and repair for a variety of flooring types. Whether you need hardwood, laminate, tile, or carpet, we have the expertise to enhance your space.
      </p>
      <ul>
        <li>Hardwood floor installation and refinishing</li>
        <li>Laminate and vinyl flooring options</li>
        <li>Tile installation for kitchens and bathrooms</li>
        <li>Carpet installation and repair</li>
        <li>Flooring consultations and estimates</li>
      </ul>
      <button className="btn btn-primary">Get a Quote</button>
    </div>
  );
};

export default FlooringServices;