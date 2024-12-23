import React, { useState } from 'react';
import './ConnectPage.css'; // Optional: for custom styles

const ConnectPage = () => {
  const [locationAccess, setLocationAccess] = useState(false);
  const [error, setError] = useState('');

  const handleConnectClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAccess(true);
          console.log('Location Access Granted:', position);
          // Proceed to connect with the provider
        },
        (err) => {
          setError('Unable to retrieve your location. Please allow location access.');
          console.error('Location Access Denied:', err);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="connect-page">
      <h1 className="page-title">Connect with Your Provider</h1>
      <p className="page-description">Click the button below to connect with a service provider.</p>
      <div className="button-container">
        <button className="connect-button" onClick={handleConnectClick}>
          Connect with Provider
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {locationAccess && (
        <div className="alert alert-success">
          Location access granted! You can now connect with your provider.
        </div>
      )}
    </div>
  );
};

export default ConnectPage;