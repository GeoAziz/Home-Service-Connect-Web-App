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
  Carousel
} from 'react-bootstrap';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

function FurnitureRentalServices() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFurniture, setSelectedFurniture] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const furnitureCategories = [
    {
      title: "Living Room Packages",
      description: "Complete living room furniture sets for temporary living spaces",
      image: "/images/living-room.png",
      options: [
        "Sofa and loveseat",
        "Coffee and side tables",
        "Area rug",
        "Decorative accessories",
        "Accent lighting"
      ],
      priceRange: "$150 - $300 per month"
    },
    {
      title: "Bedroom Collections",
      description: "Fully furnished bedroom solutions for short-term needs",
      image: "/images/bedroom.png",
      options: [
        "Bed frame and mattress",
        "Dresser",
        "Nightstands",
        "Bedding package",
        "Wardrobe options"
      ],
      priceRange: "$200 - $400 per month"
    },
    {
      title: "Home Office Setup",
      description: "Comprehensive workspace furniture rental",
      image: "/images/home-office.png",
      options: [
        "Ergonomic desk",
        "Comfortable office chair",
        "Bookshelf",
        "Filing cabinet",
        "Desk accessories"
      ],
      priceRange: "$100 - $250 per month"
    }
  ];

  const rentalPackages = [
    {
      title: "Short-Term Rental",
      duration: "1-3 Months",
      features: [
        "Flexible rental period",
        "Delivery and setup included",
        "Basic maintenance support",
        "Easy return process"
      ],
      price: "$199/month"
    },
    {
      title: "Extended Rental",
      duration: "4-6 Months",
      features: [
        "Discounted monthly rates",
        "Comprehensive delivery",
        "Free maintenance",
        "Flexibility to change items",
        "Priority customer support"
      ],
      price: "$149/month"
    },
    {
      title: "Long-Term Rental",
      duration: "7-12 Months",
      features: [
        "Lowest monthly rates",
        "Full white-glove service",
        "Unlimited maintenance",
        "Furniture upgrade options",
        "Personalized consultation"
      ],
      price: "$99/month"
    }
  ];

  const rentalProcess = [
    {
      step: "Consultation",
      description: "Discuss your specific furniture needs and requirements"
    },
    {
      step: "Selection",
      description: "Choose from our extensive furniture collection"
    },
    {
      step: "Customization",
      description: "Personalize your furniture package"
    },
    {
      step: "Delivery",
      description: "Professional delivery and setup of your selected items"
    },
    {
      step: "Support",
      description: "Ongoing customer support throughout your rental period"
    }
  ];

  const handleBookFurniture = (furniture) => {
    setSelectedFurniture(furniture);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFurniture) {
      alert(`Booking furniture rental for: ${selectedFurniture.title}`);
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
              <h1 className="display-4 mb-4">Furniture Rental Solutions</h1>
              <p className="lead">
                Flexible, convenient, and stylish furniture rentals for every need
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
              >
                Explore Rentals
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                {furnitureCategories.map((category, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={category.image}
                      alt={category.title}
                    />
                    <Carousel.Caption>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Furniture Rental Categories</h2>
        <Row>
          {furnitureCategories.map((category, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <ListGroup variant="flush">
                    {category.options.map((option, i) => (
                      <ListGroup.Item key={i}>{option}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Card.Footer>
                    <small className="text-muted">
                      Price Range: {category.priceRange}
                    </small>
                  </Card.Footer>
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
                    onClick={() => handleBookFurniture(category)}
                  >
                    Rent Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Rental Packages</h2>
        <Row>
          {rentalPackages.map((pkg, index) => (
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
                    onClick={() => handleBookFurniture(pkg)}
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
        <h2 className="text-center mb-4">Rental Process</h2>
        <Accordion>
          {rentalProcess.map((process, index) => ( <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>Step {index + 1}: {process.step}</Accordion.Header>
              <Accordion.Body>{process.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedFurniture 
              ? `Book ${selectedFurniture.title}` 
              : "Furniture Rental Booking"}
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
              <Form.Label>Rental Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your rental requirements" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Booking</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default FurnitureRentalServices;