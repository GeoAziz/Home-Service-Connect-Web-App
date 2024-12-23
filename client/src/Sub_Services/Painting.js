// src/Sub_Services/Painting.js
import React from 'react';
import './Service.css';

const Painting = () => {
  return (
    <div className="service-container">
      <h1>Painting Services</h1>
      <p>
        Transform your space with our professional painting services. We offer both interior and exterior painting, ensuring high-quality finishes and attention to detail.
      </p>
      <ul>
        <li>Interior and exterior painting</li>
        <li>Color consultation available</li>
        <li>Eco-friendly paints used</li>
        <li>Free estimates and consultations</li>
      </ul>
      <button className="btn btn-primary">Get a Quote</button>
    </div>
  );
};

export default Painting;