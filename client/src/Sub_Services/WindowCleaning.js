import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const WindowCleaning = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    windowTypes: [],
    additionalServices: [],
    windowCount: '',
    serviceDate: '',
    serviceTime: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const propertyTypes = [
    'Residential Home',
    'Apartment',
    'Condo',
    'Commercial Office',
    'Retail Space',
    'Industrial Building',
    'Multi-Story Building'
  ];

  const windowTypes = [
    'Standard Windows',
    'Bay Windows',
    'Picture Windows',
    'Sliding Windows',
    'Casement Windows',
    'Skylights',
    'French Windows',
    'Stained Glass Windows'
  ];

  const additionalServices = [
    'Exterior Pressure Washing',
    'Screen Cleaning',
    'Frame Detailing',
    'Hard Water Stain Removal',
    'Interior Window Cleaning',
    'High-Rise Window Cleaning',
    'Solar Panel Cleaning',
    'Gutter Cleaning'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Validation rules
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Property type is required';
    }

    if (formData.windowTypes.length === 0) {
      newErrors.windowTypes = 'Please select at least one window type';
    }

    if (!formData.windowCount) {
      newErrors.windowCount = 'Number of windows is required';
    }

    if (!formData.serviceDate) {
      newErrors.serviceDate = 'Service date is required';
    }

    if (!formData.serviceTime) {
      newErrors.serviceTime = 'Service time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (['windowTypes', 'additionalServices'].includes(name)) {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

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
        await axios.post('/api/window-cleaning-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Window Cleaning service booking submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          propertyType: '', windowTypes: [], 
          additionalServices: [], windowCount: '',
          serviceDate: '', serviceTime: '',
          specialInstructions: ''
        });
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Booking submission failed. Please try again.'
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
          <h1 className="text-center mb-4">Professional Window Cleaning Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Window Cleaning Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Residential Window Cleaning',
                    'Commercial Window Cleaning',
                    'High-Rise Window Cleaning',
                    'Exterior and Interior Cleaning',
                    'Screen and Frame Detailing',
                    'Hard Water Stain Removal',
                    'Eco-Friendly Cleaning Solutions'
                  ].map((service, index) => (
                    <li key={index} className="list-group-item">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="card">
              <div className="card-header bg-success text-white">
                Pricing Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$99-$199', 
                      features: ['Up to 10 Windows', 'Exterior Cleaning', 'Standard Solution'] 
                    },
                    { 
                      name: 'Standard Package', 
                      price: '$199-$299', 
                      features: ['Up to 20 Windows', 'Interior & Exterior', 'Screen Cleaning'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$299-$499', 
                      features: ['Unlimited Windows', 'Deep Cleaning', 'Hard Water Stain Removal'] 
                    }
                  ].map((packageInfo, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{packageInfo.name}</h5>
                          <p className="card-text">{packageInfo.price}</p>
                          <ul className="list-group">
                            {packageInfo.features.map((feature, idx) => (
                              <li key={idx} className="list-group-item">{feature}</li>
                            ))}
                          </ul>
                        </div>
                 </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Book Your Window Cleaning Service
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Form Fields */}
                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
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
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.propertyType ? 'is-invalid' : ''}`}
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Property Type</option>
                      {propertyTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <div className="invalid-feedback">
                        {errors.propertyType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Select Window Types</h6>
                    {windowTypes.map((type, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="windowTypes"
                          value={type}
                          checked={formData.windowTypes.includes(type)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{type}</label>
                      </div>
                    ))}
                    {errors.windowTypes && (
                      <div className="text-danger">
                        {errors.windowTypes}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="number"
                      className={`form-control ${errors.windowCount ? 'is-invalid' : ''}`}
                      placeholder="Number of Windows"
                      name="windowCount"
                      value={formData.windowCount}
                      onChange={handleInputChange}
                    />
                    {errors.windowCount && (
                      <div className="invalid-feedback">
                        {errors.windowCount}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="date"
                      className={`form-control ${errors.serviceDate ? 'is-invalid' : ''}`}
                      name="serviceDate"
                      value={formData.serviceDate}
                      onChange={handleInputChange}
                    />
                    {errors.serviceDate && (
                      <div className="invalid-feedback">
                        {errors.serviceDate}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="time"
                      className={`form-control ${errors.serviceTime ? 'is-invalid' : ''}`}
                      name="serviceTime"
                      value={formData.serviceTime}
                      onChange={handleInputChange}
                    />
                    {errors.serviceTime && (
                      <div className="invalid-feedback">
                        {errors.serviceTime}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Additional Services</h6>
                    {additionalServices.map((service, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className=" form-check-input"
                          name="additionalServices"
                          value={service}
                          checked={formData.additionalServices.includes(service)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{service}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <textarea 
                      className="form-control"
                      placeholder="Special Instructions"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Status Message */}
        {submitStatus && (
          <div 
            className={`alert ${
              submitStatus.type === 'success' 
                ? 'alert-success' 
                : 'alert-danger'
            } mt-3`}
          >
            {submitStatus.message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default WindowCleaning;