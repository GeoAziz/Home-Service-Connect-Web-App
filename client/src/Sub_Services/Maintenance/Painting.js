// src/Sub_Services/Painting.js
import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Modal, 
  Form, 
  Accordion 
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function Painting() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paintingServices = [
    {
      title: "Interior Painting",
      description: "Professional interior wall painting and transformation",
      price: "$299 - $799",
      benefits: [
        "Color consultation",
        "Premium paint selection",
        "Detailed surface preparation",
        "Clean and precise application"
      ]
    },
    {
      title: "Exterior Painting",
      description: "Comprehensive exterior home painting services",
      price: "$1,499 - $3,999",
      benefits: [
        "Weather-resistant coatings",
        "Surface protection",
        "Color matching",
        "Long-lasting finish"
      ]
    },
    {
      title: "Commercial Painting",
      description: "Professional painting for business and commercial spaces",
      price: "$999 - $4,999",
      benefits: [
        "Minimal business disruption",
        "Quick turnaround",
        "Commercial-grade materials",
        "Comprehensive project management"
      ]
    },
    {
      title: "Specialty Finishes",
      description: "Custom decorative and textured painting techniques",
      price: "$499 - $1,499",
      benefits: [
        "Accent walls",
        "Faux finishes",
        "Murals",
        "Specialized texture techniques"
      ]
    }
  ];

  const paintingProcess = [
    "Initial consultation and color selection",
    "Comprehensive surface preparation",
    "Professional priming",
    "Precise paint application",
    "Quality inspection",
    "Final cleanup and presentation"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Painting service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Painting Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/painting-hero.jpg" 
              alt="Painting Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Painting?</h2>
            <ul>
              <li>Certified Professional Painters</li>
              <li>High-Quality Materials</li>
              <li>Comprehensive Warranty</li>
              <li>Detailed Prep and Cleanup</li>
              <li>Color Consultation Included</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Painting Service
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Painting Services</h2>
          {paintingServices.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text className="text-primary fw-bold">
                    {service.price}
                  </Card.Text>
                  <h5>Service Benefits:</h5>
                  <ul>
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleBookService(service.title)}
                  >
                    Book Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="bg-light p-4 rounded mb-5">
          <Col>
            <h2>Our Painting Process</h2>
            <Accordion defaultActiveKey="0">
              {paintingProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive painting service.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How long does a typical painting project take?</Accordion.Header>
                <Accordion.Body>
                  Project duration varies, but most interior rooms are completed in 1-2 days, while exterior painting can take 3-5 days.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide paint and materials?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide high-quality paints and all necessary materials. We offer premium brand selections and can accommodate specific client preferences.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What warranty do you offer?</Accordion.Header>
                <Accordion.Body>
                  We provide a 2-year warranty on workmanship and use premium paints with manufacturer warranties.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedService} Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Painting Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Commercial Painting</option>
                <option>Specialty Finishes</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Details </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your project" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Painting Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default Painting;