import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import YouTubeIcon from '../../components/YouTubeIcon';
import './LocalResidentialMoving.css'; // Import custom CSS for styling

function LocalResidentialMoving() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1 className="page-title">Local Residential Moving Services</h1>
            <p className="lead">Smooth and Efficient Local Moving Solutions</p>
            <p className="intro-text">
              Moving can be a daunting task, but with our expert local moving services, you can rest assured that your belongings are in safe hands. We are dedicated to providing a seamless moving experience tailored to your needs.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="mb-4 service-card">
              <Card.Body>
                <Card.Title>Comprehensive Local Moving</Card.Title>
                <Card.Text>
                  Our local moving services cover everything from packing to transportation. We ensure that your move is tailored to your specific needs, making it as stress-free as possible.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4 service-card">
              <Card.Body>
                <Card.Title>Careful Handling</Card.Title>
                <Card.Text>
                  Our expert team ensures careful packing, transportation, and unpacking of your belongings. We treat your items as if they were our own.
                </Card.Text>
                <Button variant="primary">Get Quote</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to schedule a move, please fill out the form below:</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message or details about your move" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <h2>Our Moving Process</h2>
            <ol>
              <li>Initial Consultation: Discuss your moving needs and preferences.</li>
              <li>Free Estimate: Receive a detailed quote based on your requirements.</li>
              <li>Packing: Our team will carefully pack your belongings.</li>
              <li>Transportation: We will transport your items safely to your new location.</li>
              <li>Unpacking: We can help unpack and set up your new home.</li>
            </ol>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <h2>Why Choose Our Local Moving Services?</h2>
            <ul>
              <li>Experienced and Professional Team</li>
              <li>Customized Moving Plans to Fit Your Needs</li>
              <li>Affordable Pricing with No Hidden Fees</li>
              <li>Timely and Reliable Service</li>
              <li>Fully Licensed and Insured</li>
            </ul>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <h2>Customer Testimonials</h2>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>
                  "The team was fantastic! They made our move so easy and stress-free. Highly recommend!" - Sarah J.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>
                  "Professional and efficient service. They handled our belongings with care." - Mike T.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={12}>
            <h2> Frequently Asked Questions (FAQs)</h2>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>What should I do to prepare for my move?</Card.Title>
                <Card.Text>
                  Start by decluttering your home, packing non-essential items, and creating a moving checklist. This will help streamline the process and reduce stress.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How do you determine the cost of my move?</Card.Title>
                <Card.Text>
                  We provide a free quote based on the distance, size of your move, and any additional services you may need. Our pricing is transparent with no hidden fees.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
      <ScrollToTopButton />
      <WhatsAppIcon />
      <YouTubeIcon />
    </>
  );
}

export default LocalResidentialMoving;