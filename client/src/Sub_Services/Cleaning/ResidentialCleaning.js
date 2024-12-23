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
  //Badge,
  //InputGroup,
  Tabs,
  Tab
} from 'react-bootstrap';
import { 
  FaHome, 
  FaStar, 
  //FaCleanDry, 
  FaShieldAlt, 
  //FaCalendarAlt,
  //FaHandsWash,
  //FaSearchDollar,
  //FaCommentDollar,
  FaBroom
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';
//import { FaBroom } from 'react-icons/fa';  // Combine all imports


function ResidentialCleaning() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  //const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cleaningServices = [
    {
      id: 1,
      title: "Standard Home Cleaning",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      description: "Comprehensive cleaning for every corner of your home",
      features: [
        "Thorough dusting and surface cleaning",
        "Vacuuming and mopping all floors",
        "Kitchen and bathroom deep clean",
        "Trash removal and bin sanitization",
        "2-3 hours service duration"
      ],
      pricing: {
        basic: "$89",
        standard: "$129",
        premium: "$179"
      },
      image: "/images/standard-cleaning.jpg"
    },
    {
      id: 2,
      title: "Deep Cleaning Package",
      icon: <FaStar size={50} className="text-success mb-3" />,
      description: "Intensive cleaning for a spotless and sanitized home",
      features: [
        "Comprehensive deep cleaning",
        "Inside appliance cleaning",
        "Baseboards and hard-to-reach areas",
        "Window sills and frames cleaning",
        "Detailed disinfection process"
      ],
      pricing: {
        basic: "$149",
        standard: "$199",
        premium: "$249"
      },
      image: "/images/deep-cleaning.jpg"
    },
    {
      id: 3,
      title: "Move-In/Move-Out Cleaning",
      icon: <FaBroom size={50} className="text-warning mb-3" />,
      description: "Specialized cleaning for property transitions",
      features: [
        "Complete property restoration",
        "Wall and baseboard cleaning",
        "Appliance and fixture detailing",
        "Carpet and floor deep cleaning",
        "Comprehensive sanitization"
      ],
      pricing: {
        basic: "$199",
        standard: "$279",
        premium: "$349"
      },
      image: "/images/move-cleaning.jpg"
    }
  ];

  const cleaningProviders = [
    {
      id: 1,
      name: "Sparkle Home Services",
      rating: 4.8,
      location: "New York, NY",
      specialties: ["Standard", "Deep Cleaning"],
      phone: "(555) 123-4567",
      image: "/images/provider1.jpg"
    },
    {
      id: 2,
      name: "Eco Clean Solutions",
      rating: 4.6,
      location: "Los Angeles, CA",
      specialties: ["Eco-Friendly", "Move-Out"],
      phone: "(555) 987-6543",
      image: "/images/provider2.jpg"
    }
  ];

  const cleaningPackages = [
    {
      title: "Basic Clean",
      price: "$89",
      features: [
        "Essential home cleaning",
        "1-2 rooms covered",
        "Basic surface cleaning",
        "Standard duration"
      ]
    },
    {
      title: "Standard Clean",
      price: "$129",
      features: [
        "Comprehensive home cleaning",
        "Full home coverage",
        "Detailed surface cleaning",
        "Extended service time"
      ]
    },
    {
      title: "Premium Clean",
      price: "$179",
      features: [
        "Ultimate home transformation",
        "Entire home deep cleaning",
        "Specialized detailing",
        "Eco-friendly products",
        "Guaranteed satisfaction"
      ]
    }
  ];

  const handleBookService = (service) => {
    setActiveService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking ${activeService.title} service`);
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
              <h1 className="display-4 mb-4">Professional Residential Cleaning</h1>
              <p className="lead">
                Transform your home with our expert cleaning solutions
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Book Cleaning Now
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {cleaningServices.map((service, index) => (
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

      {/* Cleaning Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Cleaning Services</h2>
        <Row>
          {cleaningServices.map((service) => (
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
                        <FaShieldAlt className="text-success me-2" />
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  <Card.Footer className="bg-transparent">
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
                      className="w-100 mt- 4" 
                      onClick={() => handleBookService(service)}
                    >
                      Book Now
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Cleaning Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Cleaning Providers Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Trusted Cleaning Providers</h2>
        <Row>
          {cleaningProviders.map((provider) => (
            <Col key={provider.id} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={provider.image} style={{height: '250px', objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{provider.name}</Card.Title>
                  <Card.Text>
                    <FaStar className="text-warning me-2" />
                    {provider.rating} - {provider.location}
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => alert(`Contacting ${provider.name}`)}>
                    Contact Provider
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ResidentialCleaning;