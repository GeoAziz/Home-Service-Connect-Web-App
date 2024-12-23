import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Modal, 
  Form, 
  Carousel,
  ListGroup,
  Badge,
  Tabs,
  Tab,
  Accordion,
  Alert
} from 'react-bootstrap';
import { 
  FaWater, 
  FaShieldAlt, 
  FaStar,
  FaLeaf,
  FaSprayCan,
  FaWrench,
  FaTint,
  FaFlask,
  FaTools
} from 'react-icons/fa';
import{
  FaDroplet,
  FaTools as FaToolsFa6
}from 'react-icons/fa6'
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function WaterTankClean() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    tankType: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waterTankServices = [
    {
      id: 1,
      title: "Residential Water Tank Cleaning",
      icon: <FaWater size={50} className="text-primary mb-3" />,
      description: "Comprehensive home water tank sanitization",
      features: [
        "Complete interior cleaning",
        "Sediment removal",
        "Disinfection treatment",
        "Water quality testing",
        "Bacterial contamination check"
      ],
      pricing: {
        basic: "$149",
        standard: "$249",
        premium: "$349"
      },
      image: "/images/residential-tank.jpg"
    },
    {
      id: 2,
      title: "Commercial Water Tank Maintenance",
      icon: <FaShieldAlt size={50} className="text-success mb-3" />,
      description: "Professional cleaning for large-scale water storage",
      features: [
        "Industrial-grade sanitization",
        "Comprehensive water analysis",
        "Biofilm removal",
        "Advanced disinfection",
        "Compliance certification"
      ],
      pricing: {
        basic: "$299",
        standard: "$499",
        premium: "$699"
      },
      image: "/images/commercial-tank.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Tank Purification",
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      description: "Sustainable water tank cleaning solution",
      features: [
        "Organic cleaning agents",
        "Zero-chemical process",
        "Environmentally safe techniques",
        "Natural disinfection",
        "Mineral balance restoration"
      ],
      pricing: {
        basic: "$179",
        standard: "$279",
        premium: "$379"
      },
      image: "/images/eco-tank.jpg"
    }
  ];

  const cleaningTechniques = [
    {
      title: "High-Pressure Cleaning",
      description: "Advanced technique for thorough interior cleaning",
      icon: <FaSprayCan className="me-2" />
    },
    {
      title: "Water Quality Testing",
      description: "Comprehensive analysis of water purity and safety",
      icon: <FaFlask className="me-2" />
    },
    {
      title: "Disinfection Treatment",
      description: "Advanced sanitization to eliminate harmful microorganisms",
      icon: <FaDroplet className="me-2" />
    }
  ];

  const waterTankExperts = [
    {
      id: 1,
      name: "Aqua Pure Solutions",
      expertise: ["Residential Cleaning", "Water Quality"],
      rating: 4.9,
      location: "Dallas, TX",
      contact: {
        phone: "(555) 234-5678",
        email: "contact@aquapure.com"
      },
      image: "/images/water-expert1.jpg"
    },
    {
      id: 2,
      name: "Green Water Specialists",
      expertise: ["Commercial Maintenance", "Eco-Cleaning"],
      rating: 4.7,
      location: "San Francisco, CA",
      contact: {
        phone: "(555) 876-5432",
        email: "info@greenwatercare.com"
      },
      image: "/images/water-expert2.jpg"
    }
  ];

  const handleBookService = (service) => {
    setActiveService(service);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      serviceType: activeService ? activeService.title : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking logic here
    console.log(formData);
    alert('Booking submitted successfully!');
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      
      {/* Hero Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 mb-4">Professional Water Tank Cleaning</h1>
              <p className="lead">
                Ensuring clean, safe, and pure water for your home and business
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Tank Inspection
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {waterTankServices.map((service, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={service.image}
                      alt={service.title}
                      style={{height: '400px', objectFit: 'cover'}}
                    />
                    <Carousel.Caption>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Water Tank Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Water Tank Services</h2>
        <Row>
          {waterTankServices.map((service) => (
            <Col key={service.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {service.icon}
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  
                  <ListGroup variant="flush">
                    {service.features.map((feature, index) => (
                      <ListGroup.Item key={index}>
                        <FaTools className="text-success me-2" />
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  <Card.Footer>
                    <Tabs defaultActiveKey="basic" className="mb-3">
                      <Tab eventKey="basic" title="Basic">
                        <h5 className="text-center">{service.pricing.basic}</h5>
                      </Tab>
                      <Tab eventKey="standard" title="Standard">
                        <h5 className="text-center">{service.pricing.standard}</h5>
                        </Tab>
                      <Tab eventKey="premium" title="Premium">
                        <h5 className="text-center">{service.pricing.premium}</h5>
                      </Tab>
                    </Tabs>
                    <Button 
                      variant="outline-primary" 
                      className="w-100" 
                      onClick={() => handleBookService(service)}
                    >
                      Book Service
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Cleaning Techniques */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Cleaning Techniques</h2>
        <Row>
          {cleaningTechniques.map((technique, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {technique.icon}
                    <Card.Title>{technique.title}</Card.Title>
                    <Card.Text>{technique.description}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Water Tank Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Water Tank Experts</h2>
        <Row>
          {waterTankExperts.map((expert) => (
            <Col key={expert.id} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={expert.image} style={{height: '250px', objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{expert.name}</Card.Title>
                  <Card.Text>
                    Expertise: {expert.expertise.join(', ')} <br />
                    <FaStar className="text-warning me-2" />
                    {expert.rating} - {expert.location}
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => alert(`Contacting ${expert.name}`)}>
                    Contact Expert
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Water Tank Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone" 
                placeholder="Your phone number" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control 
                type="text" 
                name="serviceType" 
                value={activeService ? activeService.title : ''} 
                readOnly 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tank Type</Form.Label>
              <Form.Control 
                type="text" 
                name="tankType" 
                placeholder="Type of tank (e.g., residential, commercial)" 
                value={formData.tankType} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control 
                as="textarea" 
                name="additionalNotes" 
                rows={3} 
                value={formData.additionalNotes} 
                onChange={handleInputChange} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default WaterTankClean;