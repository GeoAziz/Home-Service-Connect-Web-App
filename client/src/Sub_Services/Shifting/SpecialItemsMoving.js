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
  Alert,
  Table
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function SpecialItemsMoving() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialItemServices = [
    {
      title: "Piano Moving",
      description: "Expert handling of delicate musical instruments",
      image: "/images/piano.png",
      details: [
        "Specialized piano moving equipment",
        "Climate-controlled transportation",
        "Trained piano moving specialists",
        "Comprehensive insurance coverage",
        "Precise tuning and setup services"
      ]
    },
    {
      title: "Artwork and Antique Transportation",
      description: "Delicate handling of valuable and fragile items",
      image: "/images/artwork.png",
      details: [
        "Custom crating and packaging",
        "White-glove handling",
        "Specialized padding and protection",
        "Climate-controlled storage options",
        "Expert art handling professionals"
      ]
    },
    {
      title: "Vintage and Luxury Vehicle Transport",
      description: "Safe and secure transportation of high-value vehicles",
      image: "/images/luxury-car.png",
      details: [
        "Enclosed transportation",
        "GPS tracking",
        "Specialized loading and unloading",
        "Comprehensive insurance",
        "Climate-controlled carriers"
      ]
    }
  ];

  const pricingTiers = [
    {
      title: "Basic Protection",
      price: "$99",
      features: [
        "Standard packing materials",
        "Basic insurance coverage",
        "Local transportation"
      ]
    },
    {
      title: "Premium Protection",
      price: "$249",
      features: [
        "Custom crating",
        "Comprehensive insurance",
        "Climate-controlled transport",
        "White-glove service"
      ]
    },
    {
      title: "Luxury Protection",
      price: "$499",
      features: [
        "Full-service packing",
        "Maximum insurance coverage",
        "Dedicated transportation",
        "Expert handling",
        "Post-move setup"
      ]
    }
  ];

  const movingProcessSteps = [
    {
      title: "Initial Consultation",
      description: "Detailed assessment of special item moving requirements"
    },
    {
      title: "Custom Packaging",
      description: "Specialized packing tailored to each unique item"
    },
    {
      title: "Secure Transportation",
      description: "Carefully planned and executed transportation strategy"
    },
    {
      title: "Delivery and Setup",
      description: "Precise placement and setup at the destination"
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      alert(`Booking special item moving service for: ${selectedService.title}`);
    }
    setShowModal(false);
  };

  return (
    <>
      <SubNavbar />
      
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 mb-4">Special Items Moving Solutions</h1>
              <p className="lead">
                Expert handling and transportation of your most valuable and delicate possessions
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Get Specialized Quote
              </Button>
            </Col>
            <Col md={6}>
              <img 
                src="/images/special-items-hero.jpg" 
                alt="Special Items Moving" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Our Specialized Moving Services</h2>
        <Row>
          {specialItemServices.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ListGroup variant="flush">
                    {service.details.map((detail, i) => (
                      <ListGroup.Item key={i}>{detail}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
                    onClick={() => handleBookService(service)}
                  >
                    Book This Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Our Moving Process</h2>
        <Accordion defaultActiveKey="0">
          {movingProcessSteps.map((step, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>Step {index + 1}: {step.title}</Accordion.Header>
              <Accordion.Body>{step.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Pricing Tiers</h2>
        <Row>
          {pricingTiers.map((tier, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4">
                <Card.Header as="h3">{tier.title}</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">{tier.price}</Card.Title>
                  <ListGroup variant="flush">
                    {tier.features.map((feature, i) => (
                      <ListGroup.Item key={i}>{feature}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button 
                    variant="primary" 
                    className="mt-3"
                    onClick={() => handleBookService(tier)}
                  >
                    Select Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <Alert variant="warning">
          <Alert.Heading>Important Moving Guidelines</Alert.Heading>
          <p>
            For special items, early consultation and precise planning are crucial. 
            Contact our specialists to ensure safe and secure transportation.
          </p>
        </Alert>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedService 
              ? `Book ${selectedService.title}` 
              : "Special Items Moving Booking"}
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
              <Form.Label>Moving Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your moving requirements" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default SpecialItemsMoving;