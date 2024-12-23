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
  Badge
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function VehicleTransport() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vehicleTransportServices = [
    {
      title: "Car Transportation",
      description: "Secure and reliable car moving services",
      image: "/images/car-transport.png",
      vehicleTypes: [
        "Sedans",
        "SUVs",
        "Luxury Vehicles",
        "Classic Cars"
      ],
      features: [
        "Enclosed and open transport options",
        "GPS tracking",
        "Comprehensive insurance",
        "Door-to-door service",
        "Professional handling"
      ],
      priceRange: "$500 - $1500"
    },
    {
      title: "Motorcycle Transport",
      description: "Specialized motorcycle moving solutions",
      image: "/images/motorcycle-transport.png",
      vehicleTypes: [
        "Sport Bikes",
        "Cruisers",
        "Touring Motorcycles",
        "Vintage Motorcycles"
      ],
      features: [
        "Custom bike cradles",
        "Secure strapping systems",
        "Climate-controlled options",
        "Lift gate loading",
        "Comprehensive protection"
      ],
      priceRange: "$300 - $800"
    },
    {
      title: "Heavy Vehicle Transport",
      description: "Professional transport for large vehicles",
      image: "/images/heavy-vehicle-transport.png",
      vehicleTypes: [
        "RVs",
        "Boats",
        "Commercial Trucks",
        "Construction Equipment"
      ],
      features: [
        "Specialized heavy-duty trailers",
        "Permit management",
        "Route optimization",
        "Oversize load handling",
        "Comprehensive logistics support"
      ],
      priceRange: "$1000 - $5000"
    }
  ];

  const transportPackages = [
    {
      title: "Basic Transport",
      price: "$499",
      coverage: "Standard Protection",
      features: [
        "Open carrier transport",
        "Basic insurance",
        "Standard tracking",
        "Estimated delivery window"
      ]
    },
    {
      title: "Premium Transport",
      price: "$799",
      coverage: "Comprehensive Protection",
      features: [
        "Enclosed carrier transport",
        "Full insurance coverage",
        "Real-time GPS tracking",
        "Guaranteed delivery date",
        "White-glove service"
      ]
    },
    {
      title: "Luxury Transport",
      price: "$1299",
      coverage: "Elite Protection",
      features: [
        "Premium enclosed transport",
        "Comprehensive insurance",
        "Dedicated transport team",
        "Concierge service",
        "Detailed condition report",
        "Climate-controlled transport"
      ]
    }
  ];

  const transportProcess = [
    {
      step: "Initial Consultation",
      description: "Detailed assessment of vehicle transportation requirements"
    },
    {
      step: "Vehicle Inspection",
      description: "Comprehensive pre-transport vehicle condition documentation"
    },
    {
      step: "Custom Preparation",
      description: "Vehicle-specific preparation and secure loading"
    },
    {
      step: "Transportation",
      description: "Safe and monitored vehicle transit"
    },
    {
      step: "Delivery",
      description: "Careful unloading and final condition verification"
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      alert(`Booking vehicle transport service for: ${selectedService.title}`);
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
              <h1 className="display-4 mb-4">Vehicle Transport Services</h1>
              <p className="lead">
                Professional, secure, and reliable vehicle transportation solutions
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Get Transport Quote
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {vehicleTransportServices.map((service, index) => (
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
        <h2 className="text-center mb-4">Vehicle Transport Services</h2>
        <Row>
          {vehicleTransportServices.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  
                  <h5>Vehicle Types:</h5>
                  <div>
                    {service.vehicleTypes.map((type, i) => (
                      <Badge key={i} bg="secondary" className="me-2 mb-2">
                        {type}
                      </Badge>
                    ))}
                  </div>

                  <ListGroup variant="flush" className="mt-3">
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
                    Book Transport
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Transport Packages</h2>
        <Row>
          {transportPackages.map((pkg, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4">
                <Card.Header as="h3">{pkg.title}</Card.Header>
                <Card.Body>
                  <Card.Title className="display-4">{pkg.price}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {pkg.coverage}
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    {pkg.features.map(( feature, i) => (
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
        <h2 className="text-center mb-4">Transport Process</h2>
        <Accordion>
          {transportProcess.map((process, index) => (
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
              : "Vehicle Transport Booking"}
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
              <Form.Label>Vehicle Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your vehicle and any special needs" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default VehicleTransport;