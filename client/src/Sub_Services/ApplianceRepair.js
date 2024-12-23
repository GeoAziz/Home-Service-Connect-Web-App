// src/Sub_Services/Appliance_Repair.js
import React from 'react';
import './Service.css';

const ApplianceRepair = () => {
  return (
    <div className="service-container">
      <h1>Appliance Repair Service</h1>
      <p>
        Our appliance repair service covers a wide range of household appliances including refrigerators, washing machines, ovens, and more. Our experienced technicians are equipped to diagnose and fix any issues promptly.
      </p>
      <ul>
        <li>Same-day service available</li>
        <li>Expert technicians with years of experience</li>
        <li>Affordable rates and transparent pricing</li>
        <li>Warranty on all repairs</li>
      </ul>
      <button className="btn btn-primary">Request a Repair</button>
    </div>
  );
};

export default ApplianceRepair;