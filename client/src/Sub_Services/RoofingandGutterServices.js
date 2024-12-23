// src/Sub_Services/Roofing_and_Gutter_Services.js
import React from 'react';
import './Service.css';

const RoofingAndGutterServices = () => {
  return (
    <div className="service-container">
      <h1>Roofing and Gutter Services</h1>
      <p>
        Our roofing and gutter services ensure that your home is protected from the elements. We offer quality roofing installations, repairs, and gutter maintenance to keep your property safe and dry.
      </p>
 <ul>
        <li>Roof installation and replacement</li>
        <li>Roof repairs and maintenance</li>
        <li>Gutter installation and cleaning</li>
        <li>Inspection and assessment of roofing systems</li>
        <li>Emergency roofing services available</li>
      </ul>
      <button className="btn btn-primary">Request a Quote</button>
    </div>
  );
};

export default RoofingAndGutterServices;