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
  FaCut, 
  FaShieldAlt, 
  FaStar,
  FaHandSparkles,
  FaLeaf,
  FaSprayCan,
  FaTools,
  FaHome,
  FaBroom
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function CurtainCleaning() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    curtainType: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const curtainServices = [
    {
      id: 1,
      title: "Standard Curtain Cleaning",
      icon: <FaCut size={50} className="text-primary mb-3" />,
      description: "Comprehensive cleaning for all fabric curtains",
      features: [
        "Deep fabric cleaning",
        "Stain and spot treatment",
        "Dust and allergen removal",
        "Color preservation",
        "Fabric softening"
      ],
      pricing: {
        basic: "$79",
        standard: "$129",
        premium: "$199"
      },
      image: "/images/standard-curtain.jpg"
    },
    {
      id: 2,
      title: "Delicate Fabric Restoration",
      icon: <FaShieldAlt size={50} className="text-success mb-3" />,
      description: "Specialized care for delicate and expensive curtains",
      features: [
        "Silk and lace treatment",
        "Gentle cleaning process",
        "Wrinkle reduction",
        "Fabric protection",
        "Professional hand finishing"
      ],
      pricing: {
        basic: "$129",
        standard: "$199",
        premium: "$279"
      },
      image: "/images/delicate-curtain.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Curtain Care",
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      description: "Sustainable curtain cleaning solution",
      features: [
        "Organic cleaning agents",
        "Zero-chemical process",
        "Environmentally safe techniques",
        "Natural fabric softening",
        "Allergen and bacteria elimination"
      ],
      pricing: {
        basic: "$99",
        standard: "$159",
        premium: "$229"
      },
      image: "/images/eco-curtain.jpg"
    }
  ];

  const cleaningTechniques = [
    {
      title: "Steam Cleaning",
      description: "High-temperature deep cleaning for thorough sanitization",
      icon: <FaSprayCan className="me-2" />
    },
    {
      title: "Dry Cleaning",
      description: "Low-moisture technique for delicate fabrics",
      icon: <FaBroom className="me-2" />
    },
    {
      title: "Protective Treatment",
      description: "Advanced fabric protection and stain resistance",
      icon: <FaShieldAlt className="me-2" />
    }
  ];

  const curtainExperts = [
    {
      id: 1,
      name: "Fabric Renewal Pros",
      expertise: ["Residential Cleaning", "Delicate Fabrics"],
      rating: 4.9,
      location: "New York, NY",
      contact: {
        phone: "(555) 234-5678",
        email: "contact@fabricrenewal.com"
      },
      image: "/images/curtain-expert1.jpg"
    },
    {
      id: 2,
      name: "Green Textile Solutions",
      expertise: ["Eco-Cleaning", "Fabric Protection"],
      rating: 4.7,
      location: "San Francisco, CA",
      contact: {
        phone: "(555) 876-5432",
        email: "info@greentextile.com"
      },
      image: "/images/curtain-expert2.jpg"
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
              <h1 className="display-4 mb-4">Professional Curtain Cleaning</h1>
              <p className="lead">
                Revitalize your home with expert curtain care and restoration
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Curtain Cleaning
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {curtainServices.map((service, index) => (
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

      {/* Curtain Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Curtain Cleaning Services</h2>
        <Row>
          {curtainServices.map((service) => (
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

      {/* Curtain Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Curtain Cleaning Experts</h2>
        <Row>
          {curtainExperts.map((expert) => (
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
          <Modal.Title>Book a Curtain Cleaning Service</Modal.Title>
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
              <Form.Label>Curtain Type</Form.Label>
              <Form.Control 
                type="text" 
                name="curtainType" 
                placeholder="Type of curtain (e.g., fabric, sheer)" 
                value={formData.curtainType} 
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
                value={formData.additionalNotes} onChange={handleInputChange} 
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

export default CurtainCleaning;