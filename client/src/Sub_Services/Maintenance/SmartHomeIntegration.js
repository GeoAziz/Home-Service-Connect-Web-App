// src/Sub_Services/SmartHomeIntegration.js
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

function SmartHomeIntegration() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smartHomeServices = [
    {
      title: "Smart Lighting Systems",
      description: "Advanced lighting control and automation",
      price: "$299 - $999",
      benefits: [
        "Voice-controlled lighting",
        "Color-changing options",
        "Energy efficiency",
        "Remote smartphone control",
        "Scene and mood settings"
      ]
    },
    {
      title: "Home Security Integration",
      description: "Comprehensive smart security solutions",
      price: "$499 - $1,499",
      benefits: [
        "Smart camera systems",
        "Doorbell cameras",
        "Mobile alerts",
        "Remote monitoring",
        "AI-powered detection"
      ]
    },
    {
      title: "Smart Thermostat Setup",
      description: "Intelligent climate control systems",
      price: "$249 - $699",
      benefits: [
        "Energy consumption tracking",
        "Remote temperature control",
        "Learning algorithms",
        "Integration with smart assistants",
        "Cost-saving features"
      ]
    },
    {
      title: "Home Entertainment Integration",
      description: "Seamless smart entertainment setup",
      price: "$399 - $1,299",
      benefits: [
        "Multi-room audio systems",
        "Smart TV integration",
        "Voice-controlled entertainment",
        "Streaming service setup",
        "Custom home theater configurations"
      ]
    }
  ];

  const smartHomeProcess = [
    "Initial home technology assessment",
    "Customized smart home design consultation",
    "Equipment selection and compatibility check",
    "Professional installation and configuration",
    "System testing and optimization",
    "User training and ongoing support"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Smart Home Integration service request submitted!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Smart Home Integration Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/smart-home-hero.jpg" 
              alt="Smart Home Integration" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Smart Home Solutions?</h2>
            <ul>
              <li>Certified Technology Experts</li>
              <li>Comprehensive Home Automation</li>
              <li>Cutting-Edge Technology</li>
              <li>Custom Integration Solutions</li>
              <li>Ongoing Technical Support</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Smart Home Consultation
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Smart Home Services</h2>
          {smartHomeServices.map((service, index) => (
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
            <h2>Our Smart Home Integration Process</h2>
            <Accordion defaultActiveKey="0">
              {smartHomeProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive smart home integration service.
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
                <Accordion.Header>What smart home platforms do you support?</Accordion.Header>
                <Accordion.Body>
                  We support major platforms including Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you offer ongoing support?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide comprehensive technical support and system maintenance packages.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can you integrate existing smart devices?</Accordion.Header>
                <Accordion.Body>
                  Our experts can help integrate and optimize your existing smart home devices for seamless functionality.
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
              <Form.Label>Smart Home Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select Service</option>
                <option>Smart Lighting Systems</option>
                <option>Home Security Integration</option>
                <option>Smart Thermostat Setup</option>
                <option>Home Entertainment Integration</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className=" mb-3">
              <Form.Label>Property Address</Form.Label>
              <Form.Control type="text" placeholder="Enter the property address" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your project" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Smart Home Integration Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default SmartHomeIntegration;