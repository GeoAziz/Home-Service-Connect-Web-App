// src/Sub_Services/ElectricService.js
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

function ElectricService() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const electricalServices = [
    {
      title: "Electrical Inspection",
      description: "Comprehensive electrical system evaluation",
      price: "$199 - $399",
      benefits: [
        "Detailed system assessment",
        "Safety compliance check",
        "Identify potential hazards",
        "Recommend upgrades",
        "Comprehensive report"
      ]
    },
    {
      title: "Residential Wiring",
      description: "Professional home electrical wiring services",
      price: "$499 - $1,999",
      benefits: [
        "New circuit installations",
        "Panel upgrades",
        "Rewiring services",
        "Code compliance",
        "Energy efficiency"
      ]
    },
    {
      title: "Commercial Electrical Services",
      description: "Advanced electrical solutions for businesses",
      price: "$999 - $4,999",
      benefits: [
        "Large-scale wiring",
        "Electrical system design",
        "Industrial equipment setup",
        "Maintenance contracts",
        "24/7 emergency support"
      ]
    },
    {
      title: "Smart Home Electrical",
      description: "Advanced home automation and electrical solutions",
      price: "$599 - $2,499",
      benefits: [
        "Smart lighting installation",
        "Home automation setup",
        "Security system wiring",
        "Energy management",
        "Custom integration"
      ]
    }
  ];

  const electricalProcess = [
    "Initial electrical system assessment",
    "Detailed diagnostic evaluation",
    "Comprehensive safety inspection",
    "Precise electrical work execution",
    "Quality and compliance verification",
    "Final system testing and documentation"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Electrical service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Electrical Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/electric-service-hero.jpg" 
              alt="Electrical Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Electrical Services?</h2>
            <ul>
              <li>Licensed and Certified Electricians</li>
              <li>Advanced Diagnostic Equipment</li>
              <li>Comprehensive Safety Checks</li>
              <li>Transparent Pricing</li>
              <li>Guaranteed Workmanship</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Electrical Service
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Electrical Services</h2>
          {electricalServices.map((service, index) => (
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
            <h2>Our Electrical Service Process</h2>
            <Accordion defaultActiveKey="0">
              {electricalProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive electrical service.
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
                <Accordion.Header>How quickly can you respond to electrical emergencies?</Accordion.Header>
                <Accordion.Body>
                  We offer 24/7 emergency electrical services with a typical response time of 1-2 hours.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide warranty on your electrical work?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide a comprehensive 2-year warranty on all electrical installations and repairs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are your electricians licensed?</Accordion.Header>
                <Accordion.Body>
                  All our electricians are fully licensed, insured, and regularly trained on the latest electrical technologies and safety standards.
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
              <Form.Label>Electrical Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Electrical Inspection</option>
                <option>Residential Wiring</option>
                <option>Commercial Electrical Services</option>
                <option>Smart Home Electrical</option>
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
              Submit Electrical Service Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default ElectricService;