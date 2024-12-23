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
  Tabs,
  Tab,
  Accordion
} from 'react-bootstrap';
import { 
  FaLeaf, 
  FaTree, 
  FaClipboardList,
  FaStar
} from 'react-icons/fa'; // No longer using FaCleanDry, replaced by valid icons like FaLeaf
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function GardenCleaning() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gardenServices = [
    {
      id: 1,
      title: "Basic Garden Maintenance",
      icon: <FaLeaf size={50} className="text-success mb-3" />, // Replaced FaCleanDry with FaLeaf
      description: "Essential care for a healthy, vibrant garden",
      features: [
        "Lawn mowing and edging",
        "Weed removal",
        "Basic pruning",
        "Debris clearing",
        "Seasonal clean-up"
      ],
      pricing: {
        basic: "$79",
        standard: "$129",
        premium: "$179"
      },
      image: "/images/basic-garden.jpg"
    },
    {
      id: 2,
      title: "Comprehensive Garden Transformation",
      icon: <FaTree size={50} className="text-primary mb-3" />,
      description: "Complete garden redesign and professional maintenance",
      features: [
        "Advanced landscaping",
        "Plant health assessment",
        "Soil conditioning",
        "Irrigation system check",
        "Comprehensive plant care"
      ],
      pricing: {
        basic: "$199",
        standard: "$279",
        premium: "$349"
      },
      image: "/images/garden-transformation.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Garden Care",
      icon: <FaLeaf size={50} className="text-warning mb-3" />, // Replaced FaCleanDry with FaLeaf
      description: "Sustainable and environmentally conscious garden management",
      features: [
        "Organic pest control",
        "Native plant integration",
        "Water-wise landscaping",
        "Composting setup",
        "Biodiversity enhancement"
      ],
      pricing: {
        basic: "$149",
        standard: "$229",
        premium: "$299"
      },
      image: "/images/eco-garden.jpg"
    }
  ];

  const gardenExperts = [
    {
      id: 1,
      name: "Green Thumb Gardens",
      expertise: ["Landscape Design", "Sustainable Gardening"],
      rating: 4.9,
      location: "San Francisco, CA",
      contact: {
        phone: "(555) 123-4567",
        email: "info@greenthumbgardens.com"
      },
      image: "/images/garden-expert1.jpg"
    },
    {
      id: 2,
      name: "Urban Oasis Landscaping",
      expertise: ["Urban Gardens", "Vertical Gardening"],
      rating: 4.7,
      location: "New York, NY",
      contact: {
        phone: "(555) 987-6543",
        email: "contact@urbanoasis.com"
      },
      image: "/images/garden-expert2.jpg"
    }
  ];

  const gardenCareProcess = [
    {
      title: "Initial Consultation",
      description: "Comprehensive garden assessment and client consultation",
      duration: "1-2 hours"
    },
    {
      title: "Customized Garden Plan",
      description: "Detailed strategy for garden transformation and maintenance",
      duration: "3-5 days"
    },
    {
      title: "Professional Implementation",
      description: "Expert execution of garden design and maintenance plan",
      duration: "1-3 days"
    },
    {
      title: "Ongoing Maintenance",
      description: "Regular check-ups and seasonal garden care",
      duration: "Monthly/Quarterly"
    }
  ];

  const handleBookService = (service) => {
    setActiveService(service);
    setShowModal(true);
  };

  return (
    <>
      <SubNavbar />
      
      {/* Hero Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 mb-4">Professional Garden Cleaning & Care</h1>
              <p className="lead">
                Transform your outdoor space with expert garden maintenance
              </p>
              <Button 
                variant="success" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Get Garden Assessment
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {gardenServices.map((service, index) => (
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

      {/* Garden Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Garden Services</h2>
        <Row>
          {gardenServices.map((service) => (
            <Col key={service.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {service.icon} {/* This uses the updated FaLeaf icon */}
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  
                  <ListGroup variant="flush">
                    {service.features.map((feature, index) => (
                      <ListGroup.Item key={index}>
                        <FaClipboardList className="text-success me-2" />
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
                      variant="outline-success" 
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

      {/* Garden Care Process */}
      <Container className="my-5 ">
        <h2 className="text-center mb-4">Our Garden Care Process</h2>
        <Accordion defaultActiveKey="0">
          {gardenCareProcess.map((step, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{step.title}</Accordion.Header>
              <Accordion.Body>
                <p>{step.description}</p>
                <small>Duration: {step.duration}</small>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      {/* Garden Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Garden Experts</h2>
        <Row>
          {gardenExperts.map((expert) => (
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
                  <Button variant="outline-success" onClick={() => alert(`Contacting ${expert.name}`)}>
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
          <Modal.Title>Book a Garden Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Your phone number" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control type="text" value={activeService ? activeService.title : ''} readOnly />
            </Form.Group>
            <Button variant="success" type="submit">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default GardenCleaning;
