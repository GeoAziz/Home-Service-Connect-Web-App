// src/Sub_Services/Home_Inspection.js
import React from 'react';
import './Service.css';

const HomeInspection = () => {
  return (
    <div className="service-container">
      <h1>Home Inspection Services</h1>
      <p>
        Our home inspection services provide a thorough evaluation of your property to identify any potential issues before they become costly repairs. We help you make informed decisions about your home.
      </p>
      <ul>
        <li>Comprehensive property assessments</li>
        <li>Detailed inspection reports</li>
        <li>Expert advice on maintenance and repairs</li>
        <li>Pre-purchase and pre-sale inspections</li>
        <li>Specialized inspections for mold, pests, and more</li>
      </ul>
      <button className="btn btn-primary">Book an Inspection</button>
    </div>
  );
};

export default HomeInspection;