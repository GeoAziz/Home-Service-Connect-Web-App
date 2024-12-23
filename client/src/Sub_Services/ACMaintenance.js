// src/Sub_Services/AC_Maintenance.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Ensure this is only imported once
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './ACMaintenance.css'; // Import custom CSS for card styles

function ACMaintenance() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Your request has been submitted!");
    navigate('/'); // Redirect to home or another page after submission
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" data-aos="fade-up"><b>AC Maintenance Service</b></h1>
      <p className="text-center" data-aos="fade-up" data-aos-delay="200">
        Connect with our trusted AC maintenance service providers.
      </p>

      {/* Service Features Section with Cards */}
      <div className="features mt-5" data-aos="fade-up">
        <h2 className="text-center">Why Choose Our AC Maintenance Service?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card hover-card">
              <img src="/images/proffesional HVAC.png" className="card-img-top" alt="Expert Technicians" />
              <div className="card-body">
                <h5 className="card-title">Expert Technicians</h5>
                <p className="card-text">Our team consists of certified and experienced technicians who ensure quality service.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card">
              <img src="/images/Affordable.png" className="card-img-top" alt="Affordable Pricing" />
              <div className="card-body">
                <h5 className="card-title">Affordable Pricing</h5>
                <p className="card-text">We offer competitive pricing without compromising on quality.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card">
              <img src="/images/24HR.png" className="card-img-top" alt="24/7 Support" />
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">Our customer support is available around the clock to assist you with any queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Cards */}
      <div className="testimonials mt-5" data-aos="fade-up">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card hover-card">
              <div className="card-body">
                <blockquote>
                  <p>"The service was excellent! My AC is running like new again!"</p>
                  <footer>- John Doe</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card">
              <div className="card-body">
                <blockquote>
                  <p>"Quick response and very professional technicians. Highly recommend!"</p>
                  <footer>- Jane Smith</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card">
              <div className="card-body">
                <blockquote>
                  <p>"Affordable and reliable service. I will definitely use them again!"</p>
                  <footer>- Mark Johnson</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="faqs mt-5" data-aos=" fade-up">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h5>How often should I service my AC?</h5>
          <p>It is recommended to service your AC at least once a year to ensure optimal performance.</p>
        </div>
        <div className="faq-item">
          <h5>What does the maintenance service include?</h5>
          <p>Our maintenance service includes cleaning, inspection, and necessary repairs to keep your AC running efficiently.</p>
        </div>
        <div className="faq-item">
          <h5>Do you offer emergency services?</h5>
          <p>Yes, we provide 24/7 emergency services for urgent AC issues.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action mt-5 text-center">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to schedule your AC maintenance service!</p>
        <button className="btn btn-success" onClick={() => navigate('/contact')}>Contact Us</button>
      </div>

      {/* Existing Form Section */}
      <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Connect with Service Provider</button>
      </form>
    </div>
  );
}

export default ACMaintenance;