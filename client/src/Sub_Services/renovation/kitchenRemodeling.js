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
  //FaUtensils, 
  FaHome, 
  FaPaintRoller, 
  FaLightbulb,
  FaTools,
  FaStar,
  FaCheckCircle,
  FaPlug,
  //FaKitchen
} from 'react-icons/fa';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function KitchenRemodeling() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    kitchenSize: '',
    renovationType: '',
    budget: '',
    additionalNotes: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kitchenServices = [
    {
      id: 1,
      title: "Complete Kitchen Transformation",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      description: "Full-scale kitchen renovation from concept to completion",
      features: [
        "Custom cabinetry design",
        "High-end appliance integration",
        "Countertop selection and installation",
        "Lighting and electrical upgrades",
        "Flooring and backsplash design"
      ],
      pricing: {
        basic: "$25,000",
        standard: "$50,000",
        premium: "$100,000+"
      },
      image: "/images/complete-kitchen-renovation.jpg"
    },
    {
      id: 2,
      title: "Modern Kitchen Makeover",
      icon: <FaHome size={50} className="text-success mb-3" />,
      description: "Contemporary design and functional upgrades",
      features: [
        "Open concept redesign",
        "Smart kitchen technology",
        "Ergonomic layout planning",
        "Custom storage solutions",
        "Energy-efficient appliances"
      ],
      pricing: {
        basic: "$20,000",
        standard: "$40,000",
        premium: "$75,000+"
      },
      image: "/images/modern-kitchen-makeover.jpg"
    },
    {
      id: 3,
      title: "Eco-Friendly Kitchen Design",
      icon: <FaLightbulb size={50} className="text-warning mb-3" />,
      description: "Sustainable and environmentally conscious renovation",
      features: [
        "Sustainable materials selection",
        "Energy-efficient appliances",
        "Water-saving fixtures",
        "Recycled and eco-friendly materials",
        "Green certification support"
      ],
      pricing: {
        basic: "$22,000",
        standard: "$45,000",
        premium: "$85,000+"
      },
      image: "/images/eco-kitchen-design.jpg"
    }
  ];

  const kitchenRenovationProcess = [
    {
      title: "Design Consultation",
      description: "Personalized kitchen design and vision planning",
      icon: <FaTools className="me-2" />
    },
    {
      title: "3D Visualization",
      description: "Detailed rendering of proposed kitchen design",
      icon: <FaPaintRoller className="me-2" />
    },
    {
      title: "Implementation",
      description: "Professional renovation and project management",
      icon: <FaHome className="me-2" />
    }
  ];

  const kitchenExperts = [
    {
      id: 1,
      name: "Elite Kitchen Transformations",
      expertise: ["Luxury Kitchens", "Modern Design"],
      rating: 4.9,
      location: "New York, NY",
      contact: {
        phone: "(555) 123-4567",
        email: "contact@elitekitchen.com"
      },
      image: "/images/kitchen-expert1.jpg"
    },
    {
      id: 2,
      name: "Sustainable Kitchen Solutions",
      expertise: ["Eco Renovations", "Smart Kitchen Design"],
      rating: 4.7,
      location: "San Francisco, CA",
      contact: {
        phone: "(555) 987-6543",
        email: "info@sustainablekitchens.com"
      },
      image: "/images/kitchen-expert2.jpg"
    }
  ];

  const specialtyKitchenUpgrades = [
    {
      title: "Smart Kitchen Technology",
      description: "Advanced automation and connected appliances",
      icon: <FaPlug />
    },
    {
      title: "Custom Cabinetry",
      description: "Personalized storage solutions and design",
      icon: <FaCheckCircle />
    },
    {
      title: "Luxury Appliance Integration",
      description: "High-end, professional-grade kitchen equipment",
      icon: <FaHome />
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
    alert('Kitchen remodeling consultation request submitted successfully!');
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
              <h1 className="display-4 mb-4">Kitchen Remodeling Experts</h1>
              <p className="lead">
                Transform your kitchen with innovative design and functionality
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
                {kitchenServices.map((service, index) => (
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

      {/* Kitchen Remodeling Services */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Kitchen Remodeling Services</h2>
        <Row>
          {kitchenServices.map((service) => (
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

      {/* Kitchen Renovation Process */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Kitchen Renovation Process</h2>
        <Row>
          {kitchenRenovationProcess.map((step, index) => (
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

      {/* Kitchen Experts Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Kitchen Experts</h2>
        <Row>
          {kitchenExperts.map((expert) => (
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

      {/* Specialty Kitchen Upgrades Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Specialty Kitchen Upgrades</h2>
        <Row>
          {specialtyKitchenUpgrades.map((upgrade, index) => (
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
          <Modal.Title>Request a Kitchen Remodeling Consultation</Modal.Title>
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
              <Form.Label>Kitchen Size</Form.Label>
              <Form.Control 
                type="text" 
                name="kitchenSize" 
                placeholder="Size of your kitchen (e.g., small, medium, large)" 
                value={formData.kitchenSize} 
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

export default KitchenRemodeling;