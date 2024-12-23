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
  FaWater, 
  FaShieldAlt, 
  FaStar,
  FaHandSparkles,
  FaBroom,
  FaLeaf,
  FaSprayCan,
  FaTh,
  //FaFloor,
  FaTools
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function SpecialityFloorResponse() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    floorType: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floorServices = [
    {
      id: 1,
      title: "Hardwood Floor Restoration",
      icon: <FaTh size={50} className="text-primary mb-3" />,
      description: "Comprehensive hardwood floor renewal and protection",
      features: [
        "Deep cleaning and sanitization",
        "Scratch and scuff removal",
        "Protective coating application",
        "Color restoration",
        "Moisture barrier treatment"
      ],
      pricing: {
        basic: "$199",
        standard: "$299",
        premium: "$399"
      },
      image: "/images/hardwood-restoration.jpg"
    },
    {
      id: 2,
      title: "Marble and Stone Floor Care",
      icon: <FaShieldAlt size={50} className="text-success mb-3" />,
      description: "Professional stone floor maintenance and protection",
      features: [
        "Deep cleaning and polishing",
        "Stain and etching removal",
        "Sealing and protection",
        "Grout restoration",
        "Specialized stone treatment"
      ],
      pricing: {
        basic: "$249",
        standard: "$349",
        premium: "$449"
      },
      image: "/images/marble-floor.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Floor Renewal",
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      description: "Sustainable and chemical-free floor restoration",
      features: [
        "Organic cleaning solutions",
        "Zero-chemical process",
        "Natural protective treatments",
        "Environmentally safe techniques",
        "Allergen and bacteria elimination"
      ],
      pricing: {
        basic: "$179",
        standard: "$279",
        premium: "$379"
      },
      image: "/images/eco-floor.jpg"
    }
  ];

  const floorTreatmentTechniques = [
    {
      title: "Steam Cleaning",
      description: "High-temperature deep cleaning for thorough sanitization",
      icon: <FaWater className="me-2" />
    },
    {
      title: "Dry Restoration",
      description: "Low-moisture technique for delicate floor surfaces",
      icon: <FaBroom className="me-2" />
    },
    {
      title: "Protective Coating",
      description: "Advanced sealant application for long-lasting protection",
      icon: <FaSprayCan className="me-2" />
    }
  ];

  const floorExperts = [
    {
      id: 1,
      name: "Elite Floor Solutions",
      expertise: ["Hardwood Restoration", "Stone Care"],
      rating: 4.9,
      location: "Chicago, IL",
      contact: {
        phone: "(555) 123-4567",
        email: "contact@elitefloors.com"
      },
      image: "/images/floor-expert1.jpg"
    },
    {
      id: 2,
      name: "Green Surface Specialists",
      expertise: ["Eco-Friendly Treatments", "Floor Protection"],
      rating: 4.7,
      location: "Seattle, WA",
      contact: {
        phone: "(555) 987-6543",
        email: "info@greensurface.com"
      },
      image: "/images/floor-expert2.jpg"
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
              <h1 className="display-4 mb-4">Specialized Floor Restoration</h1>
              <p className="lead">
                Expert solutions for every floor type and surface
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Schedule Floor Assessment
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {floorServices.map((service, index) => (
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

      {/* Floor Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Specialized Floor Services</h2>
        <Row>
          {floorServices.map((service) => (
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
                        <h5 className="text-center ">{service.pricing.standard}</h5>
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

      {/* Floor Treatment Techniques */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Floor Treatment Techniques</h2>
        <Row>
          {floorTreatmentTechniques.map((technique, index) => (
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

      {/* Floor Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Floor Experts</h2>
        <Row>
          {floorExperts.map((expert) => (
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
          <Modal.Title>Book a Floor Service</Modal.Title>
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
              <Form.Label>Floor Type</Form.Label>
              <Form.Control 
                type="text" 
                name="floorType" 
                placeholder="Type of floor (e.g., hardwood, marble)" 
                value={formData.floorType} 
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

export default SpecialityFloorResponse;