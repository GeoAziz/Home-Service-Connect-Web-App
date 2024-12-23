// src/Sub_Services/ApplianceRepair.js
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
import axios from 'axios'; // Import axios
import SubNavbar from '../../components/SubNavbar.js';
import Footer from '../../components/Footer.js';

function ApplianceRepair() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    applianceType: '',
    problemDescription: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applianceServices = [
    {
      title: "Refrigerator Repair",
      description: "Comprehensive diagnosis and repair for all refrigerator types",
      price: "$129",
      commonIssues: [
        "Not cooling properly",
        "Ice maker malfunction",
        "Strange noises",
        "Water leakage"
      ]
    },
    {
      title: "Washing Machine Repair",
      description: "Expert repair services for all washing machine brands",
      price: "$99",
      commonIssues: [
        "Not spinning",
        "Water drainage problems",
        "Excessive vibration",
        "Electrical issues"
      ]
    },
    {
      title: "Dryer Repair",
      description: "Professional repair for electric and gas dryers",
      price: "$109",
      commonIssues: [
        "Not heating",
        "Tumbling issues",
        "Loud noises",
        "Overheating"
      ]
    },
    {
      title: "Dishwasher Repair",
      description: "Comprehensive dishwasher diagnostic and repair services",
      price: "$89",
      commonIssues: [
        "Not cleaning dishes",
        "Water leakage",
        "Drainage problems",
        "Electronic control issues"
      ]
    }
  ];

  const repairProcess = [
    "Detailed diagnostic assessment",
    "Comprehensive problem identification",
    "Transparent cost estimation",
    "Precision repair techniques",
    "Quality parts replacement",
    "Thorough post-repair testing"
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Debugging: Log form data to check if it's being captured correctly
    console.log('Form data submitted:', formData);

    // Ensure all form fields are filled
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.applianceType ||
      !formData.problemDescription
    ) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      if (response.data.success) {
        alert('Repair request submitted!');
        setShowModal(false);
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting repair request:', error);
      alert('There was an error submitting your request.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Professional Appliance Repair Services</h1>
        
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="/images/appliance-repair-hero.jpg" 
              alt="Appliance Repair" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Why Choose PoaFix Appliance Repair?</h2>
            <ul>
              <li>Certified Technicians</li>
              <li>All Brands and Models Supported</li>
              <li>90-Day Repair Warranty</li>
              <li>Transparent Pricing</li>
              <li>Same-Day Service Available</li>
            </ul>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Book Appliance Repair
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="text-center mb-4">Our Appliance Repair Services</h2>
          {applianceServices.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text className="text-primary font-weight-bold">
                    Starting at {service.price}
                  </Card.Text>
                  <h5>Common Issues:</h5>
                  <ul>
                    {service.commonIssues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleBookService(service.title)}
                  >
                    Book Repair
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="bg-light p-4 rounded mb-5">
          <Col>
            <h2>Our Repair Process</h2>
            <Accordion defaultActiveKey="0">
              {repairProcess.map((step, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Step {index + 1}: {step}</Accordion.Header>
                  <Accordion.Body>
                    Detailed explanation of the {step.toLowerCase()} stage in our comprehensive appliance repair service.
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
                <Accordion.Header>How long does a typical repair take?</Accordion.Header>
                <Accordion.Body>
                  Most appliance repairs are completed within 1-2 hours, depending on the complexity of the issue.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide warranty on repairs?</Accordion.Header>
                <Accordion.Body>
                  Yes, we offer a 90-day warranty on all repair services and replaced parts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What brands do you service?</Accordion.Header>
                <Accordion.Body>
                  We service all major brands including Samsung, LG, Whirlpool, GE, Maytag, and more.
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
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                required 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Enter your phone number" 
                required 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                required 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Appliance Type</Form.Label>
              <Form.Select 
                required 
                name="applianceType"
                value={formData.applianceType}
                onChange={handleChange}
              >
                <option value="">Select Appliance</option>
                <option>Refrigerator</option>
                <option>Washing Machine</option>
                <option>Dryer</option>
                <option>Dishwasher</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Brief Problem Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Describe the issue" 
                required 
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Repair Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default ApplianceRepair;
