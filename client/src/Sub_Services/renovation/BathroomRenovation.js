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
  FaShower, 
  FaHome, 
  FaPaintRoller, 
  FaLightbulb,
  FaTools,
  FaStar,
  FaCheckCircle,
  FaPlug,
  FaBath
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function BathroomRenovation() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bathroomSize: '',
    renovationType: '',
    budget: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bathroomServices = [
    {
      id: 1,
      title: "Complete Bathroom Transformation",
      icon: <FaBath size={50} className="text-primary mb-3" />,
      description: "Full-scale bathroom renovation from concept to completion",
      features: [
        "Custom tile design",
        "High-end fixture selection",
        "Vanity and storage solutions",
        "Lighting and electrical upgrades",
        "Accessibility modifications"
      ],
      pricing: {
        basic: "$15,000",
        standard: "$30,000",
        premium: "$60,000+"
      },
      image: "/images/complete-bathroom-renovation.jpg"
    },
    {
      id: 2,
      title: "Modern Bathroom Makeover",
      icon: <FaShower size={50} className="text-success mb-3" />,
      description: "Contemporary design and functional upgrades",
      features: [
        "Spa-like design",
        "Smart bathroom technology",
        "Ergonomic layout planning",
        "Custom shower and tub solutions",
        "Energy-efficient fixtures"
      ],
      pricing: {
        basic: "$12,000",
        standard: "$25,000",
        premium: "$50,000+"
      },
      image: "/images/modern-bathroom-makeover.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Bathroom Design",
      icon: <FaLightbulb size={50} className="text-warning mb-3" />,
      description: "Sustainable and environmentally conscious renovation",
      features: [
        "Water-saving fixtures",
        "Sustainable materials selection",
        "Energy-efficient lighting",
        "Recycled and eco-friendly materials",
        "Green certification support"
      ],
      pricing: {
        basic: "$14,000",
        standard: "$28,000",
        premium: "$55,000+"
      },
      image: "/images/eco-bathroom-design.jpg"
    }
  ];

  const bathroomRenovationProcess = [
    {
      title: "Design Consultation",
      description: "Personalized bathroom design and vision planning",
      icon: <FaTools className="me-2" />
    },
    {
      title: "3D Visualization",
      description: "Detailed rendering of proposed bathroom design",
      icon: <FaPaintRoller className="me-2" />
    },
    {
      title: "Implementation",
      description: "Professional renovation and project management",
      icon: <FaHome className="me-2" />
    }
  ];

  const bathroomExperts = [
    {
      id: 1,
      name: "Elite Bathroom Transformations",
      expertise: ["Luxury Bathrooms", "Modern Design"],
      rating: 4.9,
      location: "Miami, FL",
      contact: {
        phone: "(555) 234-5678",
        email: "contact@elitebathroom.com"
      },
      image: "/images/bathroom-expert1.jpg"
    },
    {
      id: 2,
      name: "Sustainable Bathroom Solutions",
      expertise: ["Eco Renovations", "Smart Bathroom Design"],
      rating: 4.7,
      location: "Seattle, WA",
      contact: {
        phone: "(555) 876-5432",
        email: "info@sustainablebathrooms.com"
      },
      image: "/images/bathroom-expert2.jpg"
    }
  ];

  const specialtyBathroomUpgrades = [
    {
      title: "Smart Bathroom Technology",
      description: "Advanced automation and connected fixtures",
      icon: <FaPlug />
    },
    {
      title: "Custom Shower Design",
      description: "Personalized shower solutions and layouts",
      icon: <FaCheckCircle />
    },
    {
      title: "Luxury Fixture Integration",
      description: "High-end, designer bathroom equipment",
      icon: <FaShower />
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
      renovationType: activeService ? activeService.title : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking logic here
    console.log(formData);
    alert('Bathroom remodeling consultation request submitted successfully!');
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
              <h1 className="display-4 mb-4">Bathroom Renovation Experts</h1>
              <p className="lead">
                Transform your bathroom with innovative design and functionality
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Consultation
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {bathroomServices.map((service, index) => (
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

      {/* Bathroom Remodeling Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Bathroom Remodeling Services</h2>
        <Row>
          {bathroomServices.map((service) => (
            <Col key={service.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {service.icon}
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  
                  <ListGroup variant="flush">
                    {service.features. map((feature, index) => (
                      <ListGroup.Item key={index}> <FaCheckCircle className="text-success me-2" />
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

      {/* Bathroom Renovation Process */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Bathroom Renovation Process</h2>
        <Row>
          {bathroomRenovationProcess.map((step, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {step.icon}
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text>{step.description}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bathroom Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Bathroom Experts</h2>
        <Row>
          {bathroomExperts.map((expert) => (
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

      {/* Specialty Bathroom Upgrades Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Specialty Bathroom Upgrades</h2>
        <Row>
          {specialtyBathroomUpgrades.map((upgrade, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {upgrade.icon}
                    <Card.Title>{upgrade.title}</Card.Title>
                    <Card.Text>{upgrade.description}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Bathroom Remodeling Consultation</Modal.Title>
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
                required />
            </Form.Group>
            <Form.Group className ="mb-3">
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
              <Form.Label>Bathroom Size</Form.Label>
              <Form.Control 
                type="text" 
                name="bathroomSize" 
                placeholder="Size of your bathroom (e.g., small, medium, large)" 
                value={formData.bathroomSize} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Renovation Type</Form.Label>
              <Form.Control 
                type="text" 
                name="renovationType" 
                value={activeService ? activeService.title : ''} 
                readOnly 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Budget</Form.Label>
              <Form.Control 
                type="text" 
                name="budget" 
                placeholder="Estimated budget" 
                value={formData.budget} 
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
              Submit Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default BathroomRenovation;