// client/src/components/BookingComponent.js
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import './BookingComponent.css'; // Import custom CSS for styling

const BookingComponent = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    serviceType: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      fetchServiceProviders(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const fetchServiceProviders = async (lat, lng) => {
    const response = await fetch(`/api/service-providers?lat=${lat}&lng=${lng}`);
    const data = await response.json();
    setServiceProviders(data);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking details to your backend
    console.log('Booking Details:', bookingDetails);
    alert('Booking submitted successfully!');
  };

  return (
    <Container className="booking-container">
      <h2 className="text-center mb-4">Book a Service</h2>
      <Row>
        <Col md={6}>
          <MapComponent 
            center={userLocation} 
            markers={serviceProviders.map(provider => ({
              position: { lat: provider.location.coordinates[1], lng: provider.location.coordinates[0] }
            }))} 
          />
        </Col>
        <Col md={6}>
          <Card className="booking-card">
            <Card.Body>
              <Form onSubmit={handleBookingSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    value={bookingDetails.name} 
                    onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={bookingDetails.phone} 
                    onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group controlId="formServiceType">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Select 
                    value={bookingDetails.serviceType} 
                    onChange={(e) => setBookingDetails({ ...bookingDetails, serviceType: e.target.value })} 
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    {/* Add more service options as needed */}
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit Booking
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingComponent;