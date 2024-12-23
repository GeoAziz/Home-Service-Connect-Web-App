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
  FaWind, 
  FaShieldAlt, 
  FaStar,
  FaLeaf,
  FaSprayCan,
  FaTools,
  FaHome,
  FaFilter
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function AirDuctCleaning() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    propertyType: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const airDuctServices = [
    {
      id: 1,
      title: "Residential Air Duct Cleaning",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      description: "Comprehensive cleaning for home HVAC systems",
      features: [
        "Complete duct network cleaning",
        "Dust and allergen removal",
        "Mold and bacteria elimination",
        "Improved air quality",
        "Energy efficiency boost"
      ],
      pricing: {
        basic: "$299",
        standard: "$449",
        premium: "$599"
      },
      image: "/images/residential-duct.jpg"
    },
    {
      id: 2,
      title: "Commercial Air Duct Maintenance",
      icon: <FaWind size={50} className="text-success mb-3" />,
      description: "Professional cleaning for large commercial spaces",
      features: [
        "Industrial-grade cleaning",
        "Comprehensive system inspection",
        "HVAC performance optimization",
        "Compliance certification",
        "Reduced operational costs"
      ],
      pricing: {
        basic: "$599",
        standard: "$849",
        premium: "$1,199"
      },
      image: "/images/commercial-duct.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Air Purification",
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      description: "Green solution for air duct sanitization",
      features: [
        "Organic cleaning agents",
        "Zero-chemical process",
        "Environmentally safe techniques",
        "Natural air purification",
        "Allergen and pollutant reduction"
      ],
      pricing: {
        basic: "$349",
        standard: "$499",
        premium: "$649"
      },
      image: "/images/eco-duct.jpg"
    }
  ];

  const cleaningTechniques = [
    {
      title: "High-Powered Vacuum Cleaning",
      description: "Advanced suction technique for thorough debris removal",
      icon: <FaFilter className="me-2" />
    },
    {
      title: "Sanitization Treatment",
      description: "Comprehensive disinfection of entire duct system",
      icon: <FaSprayCan className="me-2" />
    },
    {
      title: "Protective Air Filtration",
      description: "Advanced filtering to prevent future contamination",
      icon: <FaShieldAlt className="me-2" />
    }
  ];

  const airDuctExperts = [
    {
      id: 1,
      name: "Breath Clean Professionals",
      expertise: ["Residential Cleaning", "Air Quality"],
      rating: 4.9,
      location: "Houston, TX",
      contact: {
        phone: "(555) 234-5678",
        email: "contact@breathclean.com"
      },
      image: "/images/duct-expert1.jpg"
    },
    {
      id: 2,
      name: "Green Air Solutions",
      expertise: ["Commercial Maintenance", "Eco-Cleaning"],
      rating: 4.7,
      location: "Denver, CO",
      contact: {
        phone: "(555) 876-5432",
        email: "info@greenairsolutions.com"
      },
      image: "/images/duct-expert2.jpg"
    }
  ];

  const healthBenefits = [
    {
      title: "Allergen Reduction",
      description: "Removes dust, pollen, and other airborne irritants"
    },
    {
      title: "Improved Respiratory Health",
      description: "Reduces risk of respiratory issues and allergies"
    },
    {
      title: "Energy Efficiency",
      description: "Enhances HVAC system performance and reduces energy costs"
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
              <h1 className="display-4 mb-4">Professional Air Duct Cleaning</h1>
              <p className="lead">
                Breathe cleaner, live healthier with expert air duct maintenance
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Air Duct Cleaning
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {airDuctServices.map((service, index) => (
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

      {/* Air Duct Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Air Duct Cleaning Services</h2>
        <Row>
          {airDuctServices.map((service) => (
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

      {/* Air Duct Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Air Duct Cleaning Experts</h2>
        <Row>
          {airDuctExperts.map((expert) => (
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

      {/* Health Benefits Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Health Benefits of Air Duct Cleaning</h2>
        <Row>
          {healthBenefits.map((benefit, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Air Duct Cleaning Service</Modal.Title>
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
              <Form.Label>Property Type</Form.Label>
              <Form.Control 
                type="text" 
                name="propertyType" 
                placeholder="Type of property (e.g., house, office)" 
                value={formData.propertyType} 
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

export default AirDuctCleaning;