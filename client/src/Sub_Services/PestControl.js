import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Modal, 
  Form, 
  Accordion,
  ListGroup,
  Carousel,
  Badge
} from 'react-bootstrap';
import { 
  FaBug, 
  FaShieldAlt, 
  FaHome, 
  FaCheckCircle 
} from 'react-icons/fa';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function PestControl() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pestControlServices = [
    {
      title: "Residential Pest Protection",
      description: "Comprehensive home pest elimination and prevention",
      icon: <FaHome size={50} className="text-primary mb-3" />,
      image: "/images/residential-pest-control.png",
      features: [
        "Complete home perimeter treatment",
        "Interior and exterior pest elimination",
        "Quarterly maintenance plans",
        "Family and pet-safe treatments",
        "100% satisfaction guarantee"
      ],
      priceRange: "$199 - $499",
      guaranteeText: "Pest-Free Home Guarantee"
    },
    {
      title: "Commercial Pest Management",
      description: "Professional pest control for businesses and facilities",
      icon: <FaShieldAlt size={50} className="text-primary mb-3" />,
      image: "/images/commercial-pest-control.png",
      features: [
        "Customized business pest solutions",
        "Compliance with health regulations",
        "Discreet and minimal business disruption",
        "Advanced monitoring systems",
        "Comprehensive reporting"
      ],
      priceRange: "$499 - $1,499",
      guaranteeText: "Business Protection Warranty"
    },
    {
      title: "Specialized Pest Elimination",
      description: "Advanced treatment for complex pest infestations",
      icon: <FaBug size={50} className="text-primary mb-3" />,
      image: "/images/specialized-pest-control.png",
      features: [
        "Termite and wood-destroying insect treatment",
        "Bed bug complete eradication",
        "Wildlife and rodent removal",
        "Eco-friendly treatment options",
        "Scientific approach to pest management"
      ],
      priceRange: "$299 - $2,499",
      guaranteeText: "Complete Elimination Commitment"
    }
  ];

  const treatmentPackages = [
    {
      title: "Basic Protection",
      price: "$199",
      coverage: "Standard Home Defense",
      features: [
        "Initial comprehensive inspection",
        "Perimeter treatment",
        "Basic interior spray",
        "30-day limited warranty",
        "Single pest type focus"
      ]
    },
    {
      title: "Advanced Shield",
      price: "$399",
      coverage: "Comprehensive Pest Defense",
      features: [
        "Detailed property assessment",
        "Multi-pest treatment",
        "Interior and exterior protection",
        "90-day warranty",
        "Follow-up inspection",
        "Preventative barrier treatment"
      ]
    },
    {
      title: "Premium Guardian",
      price: "$599",
      coverage: "Total Property Protection",
      features: [
        "Quarterly maintenance program",
        "Complete home pest elimination",
        "Advanced monitoring technology",
        "Unlimited service calls",
        "Eco-friendly treatments",
        "Wildlife exclusion",
        "Annual comprehensive report"
      ]
    }
  ];

  const pestControlProcess = [
    {
      step: "Comprehensive Inspection",
      description: "Detailed property evaluation to identify pest vulnerabilities",
      duration: 25
    },
    {
      step: "Customized Treatment Plan",
      description: "Develop targeted strategy based on specific pest challenges",
      duration: 20
    },
    {
      step: "Professional Treatment",
      description: "Precise and safe pest elimination using advanced techniques",
      duration: 35
    },
    {
      step: "Prevention and Monitoring",
      description: "Ongoing protection and periodic follow-up inspections",
      duration: 20
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking pest control service: ${selectedService.title}`);
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 mb-4">Professional Pest Control Solutions</h1>
              <p className="lead">
                Protect your home and business from unwanted invaders with our expert pest management services
              </p>
              <Button 
                variant="danger" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Get Free Inspection
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {pestControlServices.map((service, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={service.image}
                      alt={service.title}
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

      <Container className="my-5">
        <h2 className="text-center mb-4">Our Pest Control Services</h2>
        <Row>
          {pestControlServices.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center">
                    {service.icon}
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </div>
                  
                  <ListGroup variant="flush">
                    {service.features.map((feature, i) => (
                      <ListGroup.Item key={i}>
                        <FaCheckCircle className="text-success me-2" />
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  <Card.Footer className="bg-transparent text-center">
                    <Badge bg="warning" className="mb-2">
                      {service.guaranteeText}
                    </Badge>
                    <div className="text-muted">
                      Price Range: {service.priceRange}
                    </div>
                  </Card.Footer>
                  
                  <Button 
                    variant="outline-danger" 
                    className="mt-3 w-100"
                    onClick={() => handleBookService(service)}
                  >
                    Book Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Treatment Packages</h2>
        <Row>
          {treatmentPackages.map((pkg, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4 shadow-sm">
                <Card.Header as="h3">{pkg.title}</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">{pkg.price}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {pkg.coverage}
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    {pkg.features.map((feature, i) => (
                      <ListGroup.Item key={i}>
                        <FaCheckCircle className="text-success me-2" />
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button 
                    variant="danger" 
                    className="mt-3"
                    onClick={() => handleBookService(pkg)}
                  >
                    Select Package
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Our Pest Control Process</h2>
        <Accordion>
          {pestControlProcess.map((process, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                Step {index + 1}: {process.step}
              </Accordion.Header>
              <Accordion.Body>
                {process.description} <strong>Duration: {process.duration} mins</strong>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedService 
              ? `Book ${selectedService.title}` 
              : "Pest Control Booking"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Property Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your property address" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Additional Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your pest issues and any special requests" required />
            </Form.Group>
            <Button variant="danger" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default PestControl;
