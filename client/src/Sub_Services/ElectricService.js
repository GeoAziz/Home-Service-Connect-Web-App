// src/Sub_Services/Electric_Services.js
import React from 'react';
import './Service.css';

const ElectricServices = () => {
  return (
    <div className="service-container">
      <h1>Electric Services</h1>
      <p>
        Our electric services ensure that your home’s electrical systems are safe and efficient. From installations to repairs, our licensed electricians are ready to assist you with all your electrical needs.
      </p>
      <ul>
        <li>Lighting installation and repairs</li>
        <li>Electrical panel upgrades</li>
        <li>Wiring and rewiring services</li>
        <li>Emergency electrical services available</li>
        <li>Safety inspections and code compliance</li>
      </ul>
      <button className="btn btn-primary">Contact Us</button>
    </div>
  );
};

export default ElectricServices;