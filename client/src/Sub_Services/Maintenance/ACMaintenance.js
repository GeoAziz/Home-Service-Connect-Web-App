import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ACMaintenance.css';
import { Modal, Form, Button } from 'react-bootstrap';

function ACMaintenance() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    alert("Your request has been submitted!");
    setShowModal(false);
    setIsSubmitting(false);
  };

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="hero-section text-center" data-aos="fade-up">
        <h1 className="display-4"><b>Reliable AC Maintenance Services</b></h1>
        <p className="lead">Keep your home cool and comfortable with our expert AC services.</p>
        <Button variant="primary" onClick={() => setShowModal(true)}>Get a Free Quote</Button>
      </div>

      {/* Service Highlights */}
      <div className="service-highlights mt-5" data-aos="fade-up">
        <h2 className="text-center">Our Key Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="../images/24HR.png" className="card-img-top" alt="Maintenance" />
              <div className="card-body">
                <h5 className="card-title">Regular Maintenance</h5>
                <p className="card-text">Scheduled maintenance to ensure your AC runs efficiently.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="../images/HVAC.png" className="card-img-top" alt="Repair" />
              <div className="card-body">
                <h5 className="card-title">Expert Repairs</h5>
                <p className="card-text">Fast and reliable repairs for all AC brands and models.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="../images/HVAC5.jpg" className="card-img-top" alt="Installation" />
              <div className="card-body">
                <h5 className="card-title">New Installations</h5>
                <p className="card-text">Professional installation of energy-efficient AC units.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Offers */}
      <div className="promotional-offers mt-5 text-center" data-aos="fade-up">
        <h2>Limited Time Offer!</h2>
        <p>Get 20% off on your first AC maintenance service!</p>
        <Button variant="success" onClick={() => setShowModal(true)}>Claim Offer</Button>
      </div>

      {/* Customer Testimonials */}
      <div className="testimonials mt-5" data-aos="fade-up">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className=" row">
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
      <div className="faqs mt-5" data-aos="fade-up">
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
        <Button variant="success" onClick={() => setShowModal(true)}>Contact Us</Button>
      </div>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Connect with Service Provider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Enter your phone number" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter your message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ACMaintenance;