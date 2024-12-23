import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // For API calls
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const FlooringInstallation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    flooringType: '',
    roomSize: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const flooringTypes = [
    'Hardwood', 
    'Laminate', 
    'Vinyl', 
    'Tile', 
    'Carpet', 
    'Engineered Wood',
    'Cork',
    'Bamboo'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Comprehensive Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }

    // Flooring Type Validation
    if (!formData.flooringType) {
      newErrors.flooringType = 'Please select a flooring type';
    }

    // Room Size Validation
    if (formData.roomSize && isNaN(formData.roomSize)) {
      newErrors.roomSize = 'Room size must be a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous states
    setSubmitStatus(null);
    setIsSubmitting(true);

    // Validate Form
    if (validateForm()) {
      try {
        // Simulated API Call
        const response = await axios.post('/api/flooring-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        // Success Handling
        setSubmitStatus({
          type: 'success',
          message: 'Consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset Form
        setFormData({
          name: '',
          email: '',
          phone: '',
          flooringType: '',
          roomSize: '',
          additionalDetails: ''
        });
      } catch (error) {
        // Error Handling
        setSubmitStatus({
          type: 'error',
          message: error.response?.data?.message || 'Submission failed. Please try again.'
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <SubNavbar />
      <div className="container mt-5">
        {submitStatus && (
          <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
            {submitStatus.message}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center mb-4">Professional Flooring Installation Services</h1>
        </motion.div>

        <div className="row">
          {/* Previous content remains the same */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Input fields with error handling */}
              <div className="mb-3">
                <input 
                  type="text" 
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Similar error handling for other fields */}
              
              <button 
                type="submit" 
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlooringInstallation;