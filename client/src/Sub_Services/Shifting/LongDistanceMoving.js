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
  Tabs,
  Badge,
  ProgressBar
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';
import { FaBoxOpen, FaTruck, FaMapMarkedAlt, FaShieldAlt } from 'react-icons/fa';

function LongDistanceMoving() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const longDistanceServices = [
    {
      title: "Interstate Residential Moving",
      description: "Comprehensive long-distance moving solutions for homes",
      image: "/images/interstate-move.png",
      features: [
        "Full packing and unpacking services",
        "Professional loading and unloading",
        "Dedicated moving coordinator",
        "Climate-controlled storage options",
        "Comprehensive insurance coverage"
      ],
      priceRange: "$2,500 - $5,000"
    },
    {
      title: "Corporate Relocation",
      description: "Seamless moving solutions for businesses and employees",
      image: "/images/corporate-move.png",
      features: [
        "Office and employee relocation",
        "Inventory management",
        "Specialized equipment handling",
        "Minimal business disruption",
        "Customized moving plans"
      ],
      priceRange: "$5,000 - $15,000"
    },
    {
      title: "Specialty Item Transport",
      description: "Expert handling of fragile and valuable items",
      image: "/images/specialty-move.png",
      features: [
        "Custom crating for delicate items",
        "White-glove handling",
        "Art and antique moving",
        "Piano and large instrument transport",
        "High-value item tracking"
      ],
      priceRange: "$1,500 - $7,500"
    }
  ];

  const movingPackages = [
    {
      title: "Basic Move",
      price: "$2,499",
      coverage: "Standard Protection",
      features: [
        "Basic packing materials",
        "Standard loading/unloading",
        "Limited insurance",
        "Basic tracking",
        "1-2 weeks delivery window"
      ]
    },
    {
      title: "Premium Move",
      price: "$4,999",
      coverage: "Comprehensive Protection",
      features: [
        "Full professional packing",
        "Priority loading/unloading",
        "Comprehensive insurance",
        "Real-time tracking",
        "Guaranteed delivery date",
        "Temporary storage options"
      ]
    },
    {
      title: "Luxury Move",
      price: "$7,999",
      coverage: "White Glove Service",
      features: [
        "Full-service packing/unpacking",
        "Dedicated moving team",
        "Premium insurance",
        "Concierge moving coordination",
        "Custom crating",
        "Furniture assembly",
        "Post-move cleanup"
      ]
    }
  ];

  const movingProcess = [
    {
      step: "Initial Consultation",
      description: "Detailed assessment of moving requirements and inventory",
      icon: <FaBoxOpen />
    },
    {
      step: "Customized Planning",
      description: "Develop personalized moving strategy and timeline",
      icon: <FaMapMarkedAlt />
    },
    {
      step: "Professional Packing",
      description: "Careful and systematic packing of household or office items",
      icon: <FaTruck />
    },
    {
      step: "Safe Transportation",
      description: "Secure long-distance transportation with real-time tracking",
      icon: <FaShieldAlt />
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      alert(`Booking long-distance moving service: ${selectedService.title}`);
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
              <h1 className="display-4 mb-4">Long Distance Moving Solutions</h1>
              <p className="lead">
                Professional, reliable, and stress-free long-distance moving services
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Get Moving Quote
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {longDistanceServices.map((service, index) => (
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
        <h2 className="text-center mb-4">Long Distance Moving Services</h2>
        <Row>
          {longDistanceServices.map((service, index) => (
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
                  
                  <Card.Footer className="bg-transparent">
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
        <h2 className="text-center mb-4">Moving Packages</h2>
        <Row>
          {movingPackages.map((pkg, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4">
                <Card.Header as="h3">{pkg.title}</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">{pkg.price}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {pkg.coverage}
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
        <h2 className="text-center mb-4">Moving Process</h2>
        <Accordion>
          {movingProcess.map((process, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                {process.icon} Step {index + 1}: {process.step}
              </Accordion.Header>
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
              : "Long Distance Moving Booking"}
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
              <Form.Control as="textarea" rows={3} placeholder="Describe your moving needs and any special requests" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default LongDistanceMoving;