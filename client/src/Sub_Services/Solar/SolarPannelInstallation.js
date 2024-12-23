import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SolarPanelInstallation.css'; // Assume you will create a custom CSS for styling

function SolarPanelInstallation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to send the form data (e.g., an API call or email)
    console.log('Form submitted:', formData);
    alert('Your inquiry has been submitted successfully! Our team will get back to you soon.');
  };

  return (
    <div className="solar-panel-installation-page">
      <div className="container py-5">
        <h1 className="text-center mb-4"><strong>Solar Panel Installation</strong></h1>
        <p className="text-center mb-4">Transform your property with solar energy! Our expert team designs and installs top-quality solar panel systems that are efficient, reliable, and cost-effective. Whether for residential or commercial purposes, we make your transition to clean energy seamless.</p>
        
        <div className="row">
          <div className="col-lg-6">
            <h3>Why Choose Us for Solar Panel Installation?</h3>
            <ul>
              <li><strong>Expert Installation:</strong> Our certified installers ensure a hassle-free, quick, and professional setup.</li>
              <li><strong>Efficiency Guaranteed:</strong> We use the latest technology to maximize your energy savings.</li>
              <li><strong>Affordable Financing Options:</strong> Flexible payment plans to make solar energy accessible to everyone.</li>
              <li><strong>Top-Quality Panels:</strong> We only install the highest quality, durable solar panels for long-lasting results.</li>
              <li><strong>Full Maintenance Support:</strong> Our services don’t end after installation. We provide ongoing maintenance to keep your system running smoothly.</li>
            </ul>
            <img
              src="/images/solar-panel-installation.jpg"
              alt="Solar Panel Installation"
              className="img-fluid mt-3"
            />
          </div>

          <div className="col-lg-6">
            <h3>Get in Touch with Our Experts</h3>
            <p>Fill out the form below to connect with our team of experts for a free consultation and personalized quote.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarPanelInstallation;
