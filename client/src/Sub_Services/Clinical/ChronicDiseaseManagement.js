import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer.js';
import './ChronicDiseaseManagement.css'; // Optional: for custom styles

function ChronicDiseaseManagement() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4"><b>Chronic Disease Management</b></h1>
        <p className="text-center mb-5">
          Our Chronic Disease Management program is designed to provide comprehensive care for patients with chronic conditions. 
          We focus on personalized treatment plans, regular monitoring, and support to help you manage your health effectively.
        </p>

        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <h3>Personalized Care</h3>
            <p>Our healthcare professionals work with you to create a tailored management plan that fits your needs.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Regular Monitoring</h3>
            <p>We provide ongoing assessments to track your progress and adjust your treatment as necessary.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Support & Education</h3>
            <p>We offer resources and support groups to help you understand your condition and connect with others.</p>
          </div>
        </div>

        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <ul className="list-unstyled text-center mb-5">
          <li>✔ Experienced healthcare providers</li>
          <li>✔ Comprehensive care approach</li>
          <li>✔ Access to the latest treatment options</li>
          <li>✔ Patient-centered focus</li>
        </ul>

        <h2 className="text-center mb-4">Patient Testimonials</h2>
        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <blockquote className="blockquote">
              <p>"The support I received was life-changing. I feel empowered to manage my condition!"</p>
              <footer className="blockquote-footer">Jane D.</footer>
            </blockquote>
          </div>
          <div className="col-md-4 text-center">
            <blockquote className="blockquote">
              <p>"The team was incredibly knowledgeable and caring. I highly recommend their services!"</p>
              <footer className="blockquote-footer">John S.</footer>
            </blockquote>
          </div>
          <div className="col-md-4 text-center">
            <blockquote className="blockquote">
              <p>"Thanks to their guidance, I have a much better understanding of my health!"</p>
              <footer className="blockquote-footer">Emily R.</footer>
            </blockquote>
          </div>
        </div>

        <h2 className="text-center mb-4">Get in Touch</h2>
        <form className="mb-5">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ChronicDiseaseManagement;