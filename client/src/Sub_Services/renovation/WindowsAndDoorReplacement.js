import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Ensure this is imported correctly
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const WindowsAndDoorsReplacement = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    replacementType: '',
    windowCount: '',
    doorCount: '',
    homeAge: '',
    energyEfficiencyGoal: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const propertyTypes = [
    'Single Family Home',
    'Apartment',
    'Condo',
    'Commercial Property',
    'Townhouse'
  ];

  const replacementTypes = [
    'Full Window Replacement',
    'Partial Window Replacement',
    'Door Replacement',
    'Window and Door Combo',
    'Energy Efficiency Upgrade'
  ];

  const energyEfficiencyGoals = [
    'Reduce Energy Bills',
    'Improve Home Insulation',
    'Increase Property Value',
    'Enhance Comfort',
    'Environmental Sustainability'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Comprehensive Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
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
      newErrors.phone = 'Invalid phone number (10 digits)';
    }

    // Property Type Validation
    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    // Replacement Type Validation
    if (!formData.replacementType) {
      newErrors.replacementType = 'Please select a replacement type';
    }

    // Numeric Validations
    if (formData.windowCount && isNaN(formData.windowCount)) {
      newErrors.windowCount = 'Window count must be a number';
    }

    if (formData.doorCount && isNaN(formData.doorCount)) {
      newErrors.doorCount = 'Door count must be a number';
    }

    if (formData.homeAge && isNaN(formData.homeAge)) {
      newErrors.homeAge = 'Home age must be a number';
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
        const response = await axios.post('/api/windows-doors-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          replacementType: '',
          windowCount: '',
          doorCount: '',
          homeAge: '',
          energyEfficiencyGoal: '',
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
          <h1 className="text-center mb-4">Professional Windows & Doors Replacement</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Window and Door Services</h2>
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {[ 
                      'Energy-Efficient Window Installations', 
                      'Custom Door Design and Replacement', 
                      'Professional Measurement and Fitting', 
                      'Wide Range of Style and Material Options', 
                      'Energy Savings Assessment', 
                      'Comprehensive Warranty', 
                      'Expert Installation Team', 
                      'Post-Installation Support' 
                    ].map((service, index) => (
                      <li key={index} className="list-group-item">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mt-4">
                <h3>Benefits of Window & Door Replacement</h3>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {[
                        'Improved Energy Efficiency',
                        'Enhanced Home Value',
                        'Reduced Utility Bills',
                        'Better Sound Insulation',
                        'Increased Home Comfort',
                        'Modern Aesthetic Appeal'
                      ].map((benefit, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
                  Request Windows & Doors Consultation 
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

                    {/* Other form inputs remain the same */}

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

export default WindowsAndDoorsReplacement;
