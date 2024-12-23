// src/Sub_Services/RoofingAndGutterServices.js
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

function RoofingAndGutterServices() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roofingServices = [
    {
      title: "Roof Inspection",
      description: "Comprehensive roof condition assessment",
      price: "$199 - $499",
      benefits: [
        "Detailed damage evaluation",
        "Moisture and leak detection",
        "Structural integrity check",
        "Comprehensive report",
        "Professional recommendations"
      ]
    },
    {
      title: "Roof Repair",
      description: "Professional roof repair and restoration",
      price: "$499 - $2,999",
      benefits: [
        "Leak repair",
        "Shingle replacement",
        "Flashing repair",
        "Structural reinforcement",
        "Water damage mitigation"
      ]
    },
    {
      title: "Gutter Installation",
      description: "Advanced gutter system solutions",
      price: "$799 - $3,499",
      benefits: [
        "Custom gutter sizing",
        "Seamless gutter options",
        "Leaf guard installation",
        "Multiple material choices",
        "Drainage optimization"
      ]
    },
    {
      title: "Full Roof Replacement",
      description: "Complete roof system overhaul",
      price: "$5,999 - $15,999",
      benefits: [
        "Complete roof removal",
        "New roof installation",
        "Material selection",
        "Enhanced home protection",
        "Long-term warranty"
      ]
    }
  ];

  const roofingProcess = [
    "Initial property and roof assessment",
    "Detailed project planning",
    "Material selection and preparation",
    "Professional installation/repair",
    "Quality control inspection",
    "Final cleanup and project completion"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Roofing and Gutter service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Roofing and Gutter Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/roofing-hero.jpg" 
              alt="Roofing and Gutter Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Roofing Solutions?</h2>
            <ul>
              <li>Certified Roofing Professionals</li>
              <li>Comprehensive Roof Care</li>
              <li>Advanced Diagnostic Tools</li>
              <li>Quality Material Selection</li>
              <li>Satisfaction Guaranteed</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Roof Inspection
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Roofing Services</h2>
          {roofingServices.map((service, index) => (
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
            <h2>Our Roofing Service Process</h2>
            <Accordion defaultActiveKey="0">
              {roofingProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive roofing service.
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
                <Accordion.Header>How often should I have my roof inspected?</Accordion.Header>
                <Accordion.Body>
                  We recommend professional roof inspections at least once every 2-3 years, or after major storm events.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide warranty on roofing services?</Accordion.Header>
                <Accordion.Body>
                  Yes, we offer comprehensive warranties ranging from 5-25 years depending on the service and materials used.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How long does a roof replacement take?</Accordion.Header>
                <Accordion.Body>
                  A typical roof replacement takes 2-5 days, depending on the size of your home and complexity of the project.
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
              <Form.Label>Roofing Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Roof Inspection</option>
                <option>Roof Repair</option>
                <option>Gutter Installation</option>
                <option>Full Roof Replacement</option>
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
              Submit Roofing and Gutter Service Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default RoofingAndGutterServices;