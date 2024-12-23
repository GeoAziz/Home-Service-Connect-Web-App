// src/Sub_Services/HandymanService.js
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

function HandymanService() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handymanServices = [
    {
      title: "Home Repairs",
      description: "Comprehensive home repair and maintenance",
      price: "$99 - $499",
      benefits: [
        "Wall and ceiling repairs",
        "Door and window fixes",
        "Furniture assembly",
        "Minor plumbing repairs",
        "Painting touch-ups"
      ]
    },
    {
      title: "Furniture Assembly",
      description: "Professional furniture assembly services",
      price: "$79 - $249",
      benefits: [
        "IKEA furniture assembly",
        "Office furniture setup",
        "Bedroom and living room furniture",
        "Quick and efficient service",
        "Expert handling"
      ]
    },
    {
      title: "Home Improvement",
      description: "Custom home improvement solutions",
      price: "$299 - $1,999",
      benefits: [
        "Deck and fence repairs",
        "Tile and flooring work",
        "Basic carpentry",
        "Home modification",
        "Custom installations"
      ]
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting",
      price: "$199 - $899",
      benefits: [
        "Room painting",
        "Accent wall creation",
        "Exterior touch-ups",
        "Primer and preparation",
        "Professional finish"
      ]
    }
  ];

  const handymanProcess = [
    "Initial consultation and assessment",
    "Detailed project planning",
    "Comprehensive service preparation",
    "Precise service execution",
    "Quality control and inspection",
    "Final cleanup and project completion"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Handyman service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Handyman Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/handyman-service-hero.jpg" 
              alt="Handyman Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Handyman Services?</h2>
            <ul>
              <li>Experienced Professionals</li>
              <li>Comprehensive Service Range</li>
              <li>Quality Guaranteed</li>
              <li>Transparent Pricing</li>
              <li>Timely Completion</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Handyman Service
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Handyman Services</h2>
          {handymanServices.map((service, index) => (
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
            <h2>Our Handyman Service Process</h2>
            <Accordion defaultActiveKey="0">
              {handymanProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive handyman service.
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
                <Accordion.Header>How quickly can you respond to service requests?</Accordion.Header>
                <Accordion.Body>
                  We offer quick response times, typically scheduling services within 24-48 hours of your request.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide warranty on your services?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide a 30-day warranty on all handyman services to ensure complete customer satisfaction.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are your handymen professionally trained?</Accordion.Header>
                <Accordion.Body>
                  All our handymen are professionally trained, background-checked, and experienced in multiple home repair disciplines.
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
              <Form.Label>Handyman Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Home Repairs</option>
                <option>Furniture Assembly</option>
                <option>Home Improvement</option>
                <option>Painting Services</option>
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
              Submit Handyman Service Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default HandymanService;