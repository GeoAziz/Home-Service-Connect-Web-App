import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConnectWithProvider = () => {
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const [serviceType, setServiceType] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError('Unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!serviceType) {
      setError('Please select a service type.');
      return;
    }

    try {
      const response = await axios.post('/api/connect-provider', {
        location,
        serviceType,
      });
      setSuccessMessage('Connected with a provider successfully!');
    } catch (err) {
      setError('Failed to connect with a provider.');
    }
  };

  return (
    <div>
      <h2>Connect with Nearby Service Providers</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="serviceType">Select Service Type:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="cleaning">Cleaning</option>
            <option value="maintenance">Maintenance</option>
            <option value="gardening">Gardening</option>
            {/* Add more service types as needed */}
          </select>
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default ConnectWithProvider;