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
  Carousel,
  Tab,
  Tabs
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function PetRelocation() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const petRelocationServices = [
    {
      title: "Domestic Pet Relocation",
      description: "Comprehensive moving solutions for pets within the country",
      image: "/images/domestic-pet-move.png",
      features: [
        "Door-to-door transportation",
        "Veterinary health certification",
        "Comfortable pet carriers",
        "Professional handling",
        "Tracking and updates"
      ],
      priceRange: "$250 - $500"
    },
    {
      title: "International Pet Transport",
      description: "Expert handling of pet relocation across international borders",
      image: "/images/international-pet-move.png",
      features: [
        "Customs documentation",
        "Quarantine arrangement",
        "Specialized travel crates",
        "Veterinary coordination",
        "Comprehensive insurance"
      ],
      priceRange: "$750 - $1500"
    },
    {
      title: "Special Needs Pet Relocation",
      description: "Customized moving solutions for pets with medical or behavioral needs",
      image: "/images/special-needs-pet.png",
      features: [
        "Medical transport support",
        "Specialized care during transit",
        "Medication management",
        "Comfort-focused transportation",
        "Veterinary escort option"
      ],
      priceRange: "$350 - $750"
    }
  ];

  const petTravelPackages = [
    {
      title: "Basic Care Package",
      price: "$299",
      duration: "Standard Transport",
      features: [
        "Basic health check",
        "Standard carrier",
        "Basic tracking",
        "Limited insurance"
      ]
    },
    {
      title: "Premium Care Package",
      price: "$599",
      duration: "Comprehensive Transport",
      features: [
        "Detailed health screening",
        "Climate-controlled transport",
        "Real-time GPS tracking",
        "Comprehensive insurance",
        "Veterinary consultation"
      ]
    },
    {
      title: "Luxury Care Package",
      price: "$899",
      duration: "White Glove Service",
      features: [
        "Full medical escort",
        "Luxury pet transport",
        "Door-to-door service",
        "Premium insurance",
        "Post-move veterinary check-up"
      ]
    }
  ];

  const petRelocationProcess = [
    {
      step: "Initial Consultation",
      description: "Comprehensive assessment of pet's travel requirements and health status"
    },
    {
      step: "Documentation Preparation",
      description: "Gathering and processing necessary travel and health documentation"
    },
    {
      step: "Pre-Travel Health Check",
      description: "Veterinary examination and required vaccinations"
    },
    {
      step: "Travel Preparation",
      description: "Custom carrier selection and comfort preparation"
    },
    {
      step: "Transportation",
      description: "Safe and monitored pet transportation"
    },
    {
      step: "Post-Move Support",
      description: "Follow-up and settling-in assistance"
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      alert(`Booking pet relocation service for: ${selectedService.title}`);
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
              <h1 className="display-4 mb-4">Pet Relocation Services</h1>
              <p className="lead">
                Safe, comfortable, and stress-free transportation for your beloved pets
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Book Pet Relocation
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {petRelocationServices.map((service, index) => (
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
        <h2 className="text-center mb-4">Pet Relocation Services</h2>
        <Row>
          {petRelocationServices.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ListGroup variant="flush">
                    {service.features.map((feature, i) => (
                      <ListGroup.Item key={i}>{feature}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Card.Footer>
                    <small className="text-muted">
                      Price Range: {service.priceRange}
                    </small>
                  </Card.Footer>
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
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
        <h2 className="text-center mb-4">Travel Packages</h2>
        <Row>
          {petTravelPackages.map((pkg, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4">
                <Card.Header as="h3">{pkg.title}</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">{pkg.price}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {pkg.duration}
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    {pkg.features.map((feature, i) => (
                      <ListGroup.Item key={i}>{feature}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button 
                    variant="primary" 
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
        <h2 className="text-center mb-4">Relocation Process</h2>
         <Accordion>
          {petRelocationProcess.map((process, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>Step {index + 1}: {process.step}</Accordion.Header>
              <Accordion.Body>{process.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedService 
              ? `Book ${selectedService.title}` 
              : "Pet Relocation Booking"}
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
              <Form.Label>Pet Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your pet and any special needs" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default PetRelocation;