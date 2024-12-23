import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSolarProviders } from '../../services/api'; // Adjust path as needed
import './SolarFinancingAndLeasing.css';

function SolarFinancingAndLeasing() {
  const [providers, setProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fetch providers when component mounts
  useEffect(() => {
    const loadProviders = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSolarProviders();
        setProviders(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Providers fetch error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadProviders();
  }, []);

  // Form handling methods
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement quote submission logic
      console.log('Submitting form:', formData);
      alert('Quote submitted successfully!');
      setShowForm(false);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit quote');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading solar providers...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger">
          <h2>Error Loading Providers</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Existing component content */}
      
      {/* Providers Section */}
      <h2 className="text-center mt-5 mb-4">Trusted Solar Service Providers</h2>
      <div className="row mt-4">
        {providers.length > 0 ? (
          providers.map((provider) => (
            <div className="col-md-4 mb-4" key={provider.id}>
              <div className="card">
                <img
                  src={provider.logo || '/default-logo.png'}
                  className="card-img-top"
                  alt={provider.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{provider.name}</h5>
                  <p className="card-text">{provider.description}</p>
                  <Link to={`/providers/${provider.id}`} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No providers found</p>
          </div>
        )}
      </div>

      {/* Rest of your existing component */}
    </div>
  );
}

export default SolarFinancingAndLeasing;