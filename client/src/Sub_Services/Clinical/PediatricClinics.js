import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { FaChild, FaStethoscope, FaCalendarCheck, FaUserMd } from 'react-icons/fa';

function PediatricClinics() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    contactNumber: '',
    email: '',
    appointmentDate: '',
    serviceType: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaChild size={50} color="#3498db" />,
      title: "Well-Child Check-ups",
      description: "Comprehensive health assessments for children at all developmental stages."
    },
    {
      icon: <FaStethoscope size={50} color="#2ecc71" />,
      title: "Vaccination Programs",
      description: "Complete immunization schedules and tracking for infants and children."
    },
    {
      icon: <FaCalendarCheck size={50} color="#e74c3c" />,
      title: "Developmental Screenings",
      description: "Early detection and monitoring of potential developmental challenges."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log(formData);
    alert('Appointment Request Submitted!');
    setShowModal(false);
  };

  return (
    <Container className="pediatric-clinics py-5">
      <h1 className="text-center mb-4">
        <FaUserMd /> Pediatric Clinics
      </h1>

      <Row className="mb-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                {service.icon}
                <Card.Title className="mt-3">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <Button 
          variant="primary" 
          size="lg" 
          onClick={() => setShowModal(true)}
        >
          Book Pediatric Consultation
        </Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Pediatric Consultation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="parentName"
                placeholder="Parent/Guardian Name"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="childName"
                placeholder="Child's Name"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="age"
                placeholder="Child's Age"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                name="appointmentDate"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select 
                name="serviceType"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Service Type</option>
                <option value="checkup">Well-Child Check-up</option>
                <option value="vaccination">Vaccination</option>
                <option value="screening">Developmental Screening</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Request Appointment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default PediatricClinics;