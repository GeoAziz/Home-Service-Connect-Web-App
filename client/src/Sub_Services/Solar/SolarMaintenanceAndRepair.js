import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const SolarMaintenanceAndRepair = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    preferredDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [providers, setProviders] = useState([]);

  // Predefined service types for solar maintenance
  const serviceTypes = [
    'Panel Cleaning',
    'System Diagnostic',
    'Inverter Repair',
    'Performance Optimization',
    'Electrical Connection Check',
    'General Maintenance'
  ];

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Simulated fetch of service providers (replace with actual API call)
    const mockProviders = [
      {
        id: 1,
        name: 'SolarTech Solutions',
        rating: 4.8,
        expertise: ['Panel Cleaning', 'System Diagnostic'],
        location: 'City Center'
      },
      {
        id: 2,
        name: 'Green Energy Experts',
        rating: 4.6,
        expertise: ['Inverter Repair', 'Performance Optimization'],
        location: 'Downtown'
      }
    ];

    setProviders(mockProviders);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (Object.values(formData).every(field => field !== '')) {
      // Simulate service request submission
      console.log('Service Request:', formData);
      setSubmitted(true);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <>
      <SubNavbar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Solar Maintenance & Repair Services</h1>
        
        {submitted ? (
          <Alert variant="success">
            Your service request has been submitted successfully!
          </Alert>
        ) : (
          <Row>
            <Col md={7}>
              <Card>
                <Card.Body>
                  <Card.Title>Request Maintenance Service</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Service Type</option>
                        {serviceTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Describe Your Solar Maintenance Issue"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                      Submit Service Request
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={5}>
              <Card>
                <Card.Body>
                  <Card.Title>Recommended Providers</Card.Title>
                  {providers.map(provider => (
                    <Card key={provider.id} className="mb-3">
                      <Card.Body>
                        <Card.Subtitle>{provider.name}</Card.Subtitle>
                        <div>Rating: {provider.rating}/5</div>
                        <div>Expertise: {provider.expertise.join(', ')}</div>
                        <div>Location: {provider.location}</div>
                      </Card.Body>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default SolarMaintenanceAndRepair;