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
  FaHome,
  FaSmog,
  FaBan,
  FaStopCircle
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function OdorRemovalServices() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    odorType: '',
    propertyType: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const odorRemovalServices = [
    {
      id: 1,
      title: "Residential Odor Elimination",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      description: "Comprehensive odor removal for homes",
      features: [
        "Pet odor neutralization",
        "Smoke smell elimination",
        "Mold and mildew treatment",
        "Kitchen and bathroom odor removal",
        "Long-lasting freshness"
      ],
      pricing: {
        basic: "$249",
        standard: "$399",
        premium: "$549"
      },
      image: "/images/residential-odor.jpg"
    },
    {
      id: 2,
      title: "Commercial Odor Management",
      icon: <FaWind size={50} className="text-success mb-3" />,
      description: "Professional odor solutions for businesses",
      features: [
        "Restaurant kitchen odor control",
        "Office and workspace deodorization",
        "Industrial smell neutralization",
        "Comprehensive air purification",
        "Customized treatment plans"
      ],
      pricing: {
        basic: "$499",
        standard: "$749",
        premium: "$999"
      },
      image: "/images/commercial-odor.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Odor Neutralization",
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      description: "Green solution for natural odor removal",
      features: [
        "Organic odor elimination",
        "Zero-chemical approach",
        "Environmentally safe techniques",
        "Natural air purification",
        "Allergen and pollutant reduction"
      ],
      pricing: {
        basic: "$299",
        standard: "$449",
        premium: "$599"
      },
      image: "/images/eco-odor.jpg"
    }
  ];

  const odorRemovalTechniques = [
    {
      title: "Ozone Treatment",
      description: "Advanced oxidation process for deep odor elimination",
      icon: <FaSmog className="me-2" />
    },
    {
      title: "Thermal Fogging",
      description: "Penetrative deodorization technique",
      icon: <FaSprayCan className="me-2" />
    },
    {
      title: "HEPA Air Purification",
      description: "Advanced filtration to remove odor-causing particles",
      icon: <FaBan className="me-2" />
    }
  ];

  const odorExperts = [
    {
      id: 1,
      name: "Fresh Air Professionals",
      expertise: ["Residential Deodorization", "Smoke Odor"],
      rating: 4.9,
      location: "Atlanta, GA",
      contact: {
        phone: "(555) 234-5678",
        email: "contact@freshairpro.com"
      },
      image: "/images/odor-expert1.jpg"
    },
    {
      id: 2,
      name: "Green Odor Solutions",
      expertise: ["Commercial Treatments", "Eco-Friendly Methods"],
      rating: 4.7,
      location: "Portland, OR",
      contact: {
        phone: "(555) 876-5432",
        email: "info@greenodorsolutions.com"
      },
      image: "/images/odor-expert2.jpg"
    }
  ];

  const commonOdorTypes = [
    {
      title: "Pet Odors",
      description: "Specialized treatment for animal-related smells"
    },
    {
      title: "Smoke Odors",
      description: "Comprehensive neutralization of tobacco and fire smoke"
    },
    {
      title: "Mold and Mildew",
      description: "Elimination of musty and damp odors"
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
              <h1 className="display-4 mb-4">Professional Odor Removal Services</h1>
              <p className="lead">
                Breathe fresh, live clean with expert odor elimination
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Odor Removal
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {odorRemovalServices.map((service, index) => (
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

      {/* Odor Removal Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Odor Removal Services</h2>
        <Row>
          {odorRemovalServices.map((service) => (
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
                      <ListGroup. Item key={index}>
                        <FaStopCircle className="text-success me-2" />
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

      {/* Odor Removal Techniques */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Odor Removal Techniques</h2>
        <Row>
          {odorRemovalTechniques.map((technique, index) => (
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

      {/* Odor Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Odor Removal Experts</h2>
        <Row>
          {odorExperts.map((expert) => (
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

      {/* Common Odor Types Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Common Odor Types We Handle</h2>
        <Row>
          {commonOdorTypes.map((odor, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{odor.title}</Card.Title>
                  <Card.Text>{odor.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Odor Removal Service</Modal.Title>
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
              <Form.Label>Odor Type</Form.Label>
              <Form.Control 
                type="text" 
                name="odorType" 
                placeholder="Type of odor (e.g., pet, smoke)" 
                value={formData.odorType} 
                onChange={handleInputChange} 
                required 
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

export default OdorRemovalServices;