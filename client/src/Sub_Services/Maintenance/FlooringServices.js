// src/Sub_Services/FlooringService.js
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

function FlooringService() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flooringServices = [
    {
      title: "Hardwood Flooring",
      description: "Premium hardwood floor installation and refinishing",
      price: "$8 - $15 per sq ft",
      benefits: [
        "Multiple wood species",
        "Professional installation",
        "Sanding and refinishing",
        "Custom staining",
        "Long-lasting durability"
      ]
    },
    {
      title: "Laminate Flooring",
      description: "Affordable and stylish flooring solutions",
      price: "$3 - $8 per sq ft",
      benefits: [
        "Cost-effective option",
        "Wide design range",
        "Easy maintenance",
        "Quick installation",
        "Scratch-resistant"
      ]
    },
    {
      title: "Luxury Vinyl Flooring",
      description: "High-end vinyl flooring with premium finishes",
      price: "$5 - $12 per sq ft",
      benefits: [
        "Water-resistant",
        "Realistic wood/stone look",
        "Durability",
        "Easy cleaning",
        "Commercial-grade options"
      ]
    },
    {
      title: "Tile Flooring",
      description: "Professional ceramic and porcelain tile installation",
      price: "$10 - $25 per sq ft",
      benefits: [
        "Multiple design options",
        "Bathroom/kitchen specialists",
        "Custom patterns",
        "Durable materials",
        "Professional grouting"
      ]
    }
  ];

  const flooringProcess = [
    "Initial consultation and measurement",
    "Material selection and design planning",
    "Subfloor preparation",
    "Precise flooring installation",
    "Finishing and detailing",
    "Final inspection and cleanup"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Flooring service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Flooring Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/flooring-service-hero.jpg" 
              alt="Flooring Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Flooring Services?</h2>
            <ul>
              <li>Expert Installation Professionals</li>
              <li>Premium Quality Materials</li>
              <li>Comprehensive Design Consultation</li>
              <li>Transparent Pricing</li>
              <li>Satisfaction Guaranteed</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Flooring Service
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Flooring Services</h2>
          {flooringServices.map((service, index) => (
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
            <h2>Our Flooring Service Process</h2>
            <Accordion defaultActiveKey="0">
              {flooringProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive flooring service.
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
                <Accordion.Header>How long does flooring installation take?</Accordion.Header>
                <Accordion.Body>
                  Installation time varies by room size and flooring type, typically ranging from 1-5 days.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you offer warranty on flooring services?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide a comprehensive 5-year warranty on materials and installation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can you help with material selection?</Accordion.Header>
                <Accordion.Body>
                  Our experts provide complete design consultation and help you choose the best flooring for your space.
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
              <Form.Label>Flooring Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Hardwood Flooring</option>
                <option>Laminate Flooring</option>
                <option>Luxury Vinyl Flooring</ option>
                <option>Tile Flooring</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Property Address</Form.Label>
              <Form.Control type="text" placeholder="Enter the property address" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your project" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Flooring Service Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default FlooringService;