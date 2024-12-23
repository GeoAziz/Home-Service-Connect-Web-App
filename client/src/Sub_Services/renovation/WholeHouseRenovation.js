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
  FaHome, 
  FaPaintRoller, 
  FaTools, 
  FaLightbulb,
  FaRulerCombined,
  FaHardHat,
  FaStar,
  FaCheckCircle,
  FaPlug,
  FaWater
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function WholeHouseRenovation() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    renovationType: '',
    budget: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renovationServices = [
    {
      id: 1,
      title: "Complete Home Transformation",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      description: "Full-scale renovation from concept to completion",
      features: [
        "Comprehensive design consultation",
        "Structural modifications",
        "Interior and exterior upgrades",
        "Custom finish selections",
        "Project management"
      ],
      pricing: {
        basic: "$50,000",
        standard: "$100,000",
        premium: "$250,000+"
      },
      image: "/images/whole-house-renovation.jpg"
    },
    {
      id: 2,
      title: "Modern Interior Remodeling",
      icon: <FaPaintRoller size={50} className="text-success mb-3" />,
      description: "Contemporary design and functional upgrades",
      features: [
        "Open concept redesign",
        "Smart home integration",
        "Custom cabinetry",
        "Lighting and electrical upgrades",
        "High-end finishes"
      ],
      pricing: {
        basic: "$35,000",
        standard: "$75,000",
        premium: "$150,000+"
      },
      image: "/images/interior-renovation.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Sustainable Renovation",
      icon: <FaLightbulb size={50} className="text-warning mb-3" />,
      description: "Green living and energy-efficient upgrades",
      features: [
        "Energy-efficient systems",
        "Sustainable materials",
        "Solar integration",
        "Water conservation solutions",
        "Green certification support"
      ],
      pricing: {
        basic: "$45,000",
        standard: "$90,000",
        premium: "$200,000+"
      },
      image: "/images/eco-renovation.jpg"
    }
  ];

  const renovationProcess = [
    {
      title: "Initial Consultation",
      description: "Detailed project assessment and vision planning",
      icon: <FaRulerCombined className="me-2" />
    },
    {
      title: "Design Development",
      description: "Comprehensive design and 3D visualization",
      icon: <FaTools className="me-2" />
    },
    {
      title: "Execution & Management",
      description: "Professional project management and implementation",
      icon: <FaHardHat className="me-2" />
    }
  ];

  const renovationExperts = [
    {
      id: 1,
      name: "Elite Home Transformations",
      expertise: ["Luxury Renovations", "Modern Design"],
      rating: 4.9,
      location: "Los Angeles, CA",
      contact: {
        phone: "(555) 123-4567",
        email: "contact@elitehome.com"
      },
      image: "/images/renovation-expert1.jpg"
    },
    {
      id: 2,
      name: "Sustainable Living Designs",
      expertise: ["Eco Renovations", "Energy Efficiency"],
      rating: 4.7,
      location: "San Francisco, CA",
      contact: {
        phone: "(555) 987-6543",
        email: "info@sustainabledesigns.com"
      },
      image: "/images/renovation-expert2.jpg"
    }
  ];

  const specialtyUpgrades = [
    {
      title: "Smart Home Integration",
      description: "Advanced technology and automation solutions",
      icon: <FaPlug />
    },
    {
      title: "Plumbing & Electrical Upgrades",
      description: "Modern systems and efficiency improvements",
      icon: <FaWater />
    },
    {
      title: "Custom Finishes",
      description: "Personalized design and high-end materials",
      icon: <FaCheckCircle />
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
    alert('Renovation consultation request submitted successfully!');
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
              <h1 className="display-4 mb-4">Whole House Renovation Experts</h1>
              <p className="lead">
                Transform your living space with comprehensive renovation solutions
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
                {renovationServices.map((service, index) => (
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

      {/* Renovation Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Renovation Services</h2>
        <Row>
          {renovationServices.map((service) => (
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

      {/* Renovation Process */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Renovation Process</h2>
        <Row>
          {renovationProcess.map((step, index) => (
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

      {/* Renovation Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Renovation Experts</h2>
        <Row>
          {renovationExperts.map((expert) => (
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

      {/* Specialty Upgrades Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Specialty Upgrades</h2>
        <Row>
          {specialtyUpgrades.map((upgrade, index) => (
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
          <Modal.Title>Request a Renovation Consultation</Modal.Title>
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
              <Form type="email" 
                name="email" 
                placeholder="Your email address" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Property Type</Form.Label>
              <Form.Control 
                type="text" 
                name="propertyType" 
                placeholder="Type of property (e.g., house, apartment)" 
                value={formData.propertyType} 
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

export default WholeHouseRenovation;