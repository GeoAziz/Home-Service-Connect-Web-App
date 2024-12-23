import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function GutterCleaning() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !phone || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    // Simulate form submission
    alert('Your request has been submitted successfully!');
    // Clear the form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <SubNavbar />
      <div className="container my-5">
        <h1 className="text-center mb-4"><b>Gutter Cleaning Services</b></h1>
        
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img 
              src="/images/gutter-cleaning.jpg" 
              alt="Gutter Cleaning" 
              className="img-fluid rounded" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3><b>Why Gutter Cleaning is Essential?</b></h3>
            <p>
              Gutters are an essential part of your home's drainage system, directing water away from the foundation to prevent water damage. 
              Over time, gutters collect leaves, twigs, and debris, causing them to clog and preventing water from flowing freely. 
              This can lead to a range of issues, including roof damage, water leaks, and foundation erosion.
            </p>
            <p>
              Regular gutter cleaning helps maintain your gutters and prevents these problems, ensuring the longevity of your home.
            </p>

            <h3><b>Our Professional Gutter Cleaning Service Includes:</b></h3>
            <ul className="list-unstyled">
              <li><i className="fas fa-check-circle"></i> Safe removal of debris from gutters and downspouts</li>
              <li><i className="fas fa-check-circle"></i> Inspection for damage and potential blockages</li>
              <li><i className="fas fa-check-circle"></i> Clearing of downspouts to ensure proper drainage</li>
              <li><i className="fas fa-check-circle"></i> Cleaning up the area after service completion</li>
            </ul>

            <p>
              Protect your home from costly water damage. Schedule a gutter cleaning today!
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center"><b>Contact Us for Gutter Cleaning Services</b></h2>
          <p className="text-center">Fill out the form below to request a free quote or to schedule a cleaning appointment.</p>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Phone Number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <textarea 
                  className="form-control" 
                  placeholder="Your Message or Additional Details" 
                  rows="4" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">Submit Request</button>
            </div>
          </form>
        </div>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-secondary">Back to Services</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GutterCleaning;
