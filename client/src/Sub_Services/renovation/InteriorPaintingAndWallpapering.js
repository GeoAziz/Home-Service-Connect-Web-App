import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const InteriorPaintingAndWallpapering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    roomType: '',
    squareFootage: '',
    colorPreference: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const serviceTypes = [
    'Interior Painting',
    'Wallpapering',
    'Combined Service',
    'Color Consultation'
  ];

  const roomTypes = [
    'Living Room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Home Office',
    'Entire Home',
    'Commercial Space'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
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
      newErrors.phone = 'Invalid phone number (10 digits)';
    }

    // Service Type Validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    // Room Type Validation
    if (!formData.roomType) {
      newErrors.roomType = 'Please select a room type';
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
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (validateForm()) {
      try {
        const response = await axios.post('/api/painting-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Consultation request submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          roomType: '',
          squareFootage: '',
          colorPreference: '',
          additionalDetails: ''
        });
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Submission failed. Please try again.'
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <SubNavbar />
      <div className="container mt-5">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center mb-4">Professional Interior Painting & Wallpapering</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Painting & Wallpapering Services</h2>
              <ul className="list-group">
                {[
                  'Professional Color Consultation',
                  'Premium Quality Paints and Wallpapers',
                  'Expert Surface Preparation',
                  'Detailed and Clean Execution',
                  'Residential and Commercial Solutions',
                  'Comprehensive Warranty',
                  'Custom Design Recommendations'
                ].map((service, index) => (
                  <li key={index} className="list-group-item">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Consultation Form */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="card">
                <div className="card-header bg-primary text-white">
                  Request Painting Consultation
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* Form Fields with Error Handling */}
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

                    <div className="mb-3">
                      <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="tel" 
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.serviceType ? 'is-invalid' : ''}`}
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Service Type</option>
                        {serviceTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.serviceType && <div className="invalid-feedback">{errors.serviceType}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.roomType ? 'is-invalid' : ''}`}
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Room Type</option>
                        {roomTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.roomType && <div className="invalid-feedback">{errors.roomType}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className={`form-control ${errors.squareFootage ? 'is-invalid' : ''}`}
                        placeholder="Square Footage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleInputChange}
                      />
                      {errors.squareFootage && <div className="invalid-feedback">{errors.squareFootage}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Color Preference"
                        name="colorPreference"
                        value={formData.colorPreference}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <textarea 
                        className="form-control"
                        placeholder="Additional Details"
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleInputChange}
                      />
                    </div>

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
            </motion.div>
          </div>
        </div>

        {submitStatus && (
          <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mt-4`}>
            {submitStatus.message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default InteriorPaintingAndWallpapering;