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
  Alert
} from 'react-bootstrap';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function LocalResidentialLiving() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Local Residential Moving",
      description: "Comprehensive moving solutions for local relocations",
      image: "/images/shift.png",
      details: [
        "Professional packing services",
        "Safe and secure transportation",
        "Trained moving experts",
        "Affordable pricing",
        "Fully insured moves"
      ]
    },
    {
      title: "Specialty Item Moving",
      description: "Expert handling of delicate and valuable items",
      image: "/images/piano.png",
      details: [
        "Piano moving specialists",
        "Artwork and antique transportation",
        "Custom crating services",
        "Specialized equipment",
        "White-glove handling"
      ]
    },
    {
      title: "Furniture Rental Services",
      description: "Temporary furniture solutions during transitions",
      image: "/images/sofay.png",
      details: [
        "Flexible rental periods",
        "Wide range of furniture styles",
        "Delivery and setup included",
        "Short-term and long-term options",
        "Competitive pricing"
      ]
    }
  ];

  const movingProcessSteps = [
    {
      title: "Initial Consultation",
      description: "Comprehensive assessment of your moving needs and requirements"
    },
    {
      title: "Detailed Planning",
      description: "Custom moving strategy tailored to your specific situation"
    },
    {
      title: "Packing and Preparation",
      description: "Professional packing of your belongings using high-quality materials"
    },
    {
      title: "Safe Transportation",
      description: "Secure and efficient transportation of your items"
    },
    {
      title: "Unloading and Setup",
      description: "Careful unloading and placement of items in your new location"
    },
    {
      title: "Post-Move Support",
      description: "Follow-up and assistance to ensure complete satisfaction"
    }
  ];

  const frequentlyAskedQuestions = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking at least 4-6 weeks in advance, especially during peak moving seasons (summer months)."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide local residential moving services across major metropolitan areas and surrounding regions."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, all our moves come with comprehensive insurance coverage to protect your belongings."
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      alert(`Booking service for: ${selectedService.title}`);
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
              <h1 className="display-4 mb-4">Local Residential Moving Solutions</h1>
              <p className="lead">
                PoaFix offers comprehensive moving services designed to make your 
                local relocation smooth, efficient, and stress-free.
              </p>
              <Button variant="primary" size="lg" onClick={() => setShowModal(true)}>
                Get Moving Quote
              </Button>
            </Col>
            <Col md={6}>
              <img 
                src="/images/moving-hero.jpg" 
                alt="Moving Services" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Our Specialized Moving Services</h2>
        <Row>
          {services.map((service, index) => (
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
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {frequentlyAskedQuestions.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <Container className="my-5">
        <Alert variant="info">
          <Alert.Heading>Special Offer!</Alert.Heading>
          <p>
            Book your move today and get 20% off on packing services. 
            Limited time offer for new customers.
          </p>
        </Alert>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedService 
              ? `Book ${selectedService.title}` 
              : "Moving Service Booking"}
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
               ```jsx
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

export default LocalResidentialLiving;