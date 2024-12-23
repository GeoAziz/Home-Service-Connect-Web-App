// src/Sub_Services/HomeInspect.js
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

function HomeInspect() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inspectionServices = [
    {
      title: "Standard Home Inspection",
      description: "Comprehensive property evaluation for home buyers and sellers",
      price: "$299 - $499",
      coverageAreas: [
        "Structural integrity",
        "Electrical systems",
        "Plumbing assessment",
        "HVAC evaluation",
        "Roof condition"
      ]
    },
    {
      title: "Pre-Listing Inspection",
      description: "Detailed inspection to prepare your home for sale",
      price: "$249 - $399",
      coverageAreas: [
        "Identify potential issues",
        "Increase property value",
        "Smooth sales process",
        "Comprehensive report",
        "Repair recommendations"
      ]
    },
    {
      title: "New Construction Inspection",
      description: "Thorough inspection of newly built homes",
      price: "$349 - $599",
      coverageAreas: [
        "Foundation assessment",
        "Workmanship evaluation",
        "Code compliance check",
        "System functionality",
        "Detailed punch list"
      ]
    },
    {
      title: "Specialized Inspection",
      description: "Targeted inspections for specific home concerns",
      price: "$199 - $449",
      coverageAreas: [
        "Pest inspection",
        "Mold assessment",
        "Radon testing",
        "Chimney evaluation",
        "Specialized diagnostic"
      ]
    }
  ];

  const inspectionProcess = [
    "Initial property assessment",
    "Comprehensive visual examination",
    "Detailed system and structure testing",
    "Photographic documentation",
    "Comprehensive written report",
    "Follow-up consultation"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Home inspection request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Home Inspection Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/home-inspect-hero.jpg" 
              alt="Home Inspection Services" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Home Inspections?</h2>
            <ul>
              <li>Certified Professional Inspectors</li>
              <li>Comprehensive Reporting</li>
              <li>Advanced Diagnostic Tools</li>
              <li>Detailed Property Analysis</li>
              <li>Quick Turnaround Time</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Home Inspection
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Inspection Services</h2>
          {inspectionServices.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text className="text-primary fw-bold">
                    {service.price}
                  </Card.Text>
                  <h5>Coverage Areas:</h5>
                  <ul>
                    {service.coverageAreas.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleBookService(service.title)}
                  >
                    Book Inspection
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="bg-light p-4 rounded mb-5">
          <Col>
            <h2>Our Inspection Process</h2>
            <Accordion defaultActiveKey="0">
              {inspectionProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive home inspection service.
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
                <Accordion.Header>How long does a home inspection take?</Accordion.Header>
                <Accordion.Body>
                  Typically, a standard home inspection takes 2-3 hours depending on the property size and complexity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide a written report?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide a comprehensive written report with detailed findings, including photographs and recommendations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are your inspectors certified?</Accordion.Header>
                <Accordion.Body>
                  All our inspectors are fully certified and licensed professionals with extensive experience in home inspections.
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
              <Form.Label>Inspection Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Standard Home Inspection</option>
                <option>Pre-Listing Inspection</option>
                <option>New Construction Inspection</option>
                <option>Specialized Inspection</option>
                <option>Other</ option>
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
              Submit Inspection Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default HomeInspect;