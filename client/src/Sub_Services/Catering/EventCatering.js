import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const EventCatering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    cateringStyle: '',
    dietaryRestrictions: [],
    menuPreference: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Graduation',
    'Retirement Party',
    'Holiday Celebration',
    'Fundraiser',
    'Other'
  ];

  const cateringStyles = [
    'Buffet',
    'Plated Dinner',
    'Cocktail Reception',
    'Family Style',
    'Food Stations',
    'BBQ',
    'Themed Cuisine'
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Kosher',
    'Halal',
    'Dairy-Free',
    'Nut-Free'
  ];

  const menuPreferences = [
    'Traditional',
    'International',
    'Gourmet',
    'Casual',
    'Healthy',
    'Fusion'
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

    // Event Type Validation
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    // Event Date Validation
    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.eventDate = 'Event date must be in the future';
      }
    }

    // Guest Count Validation
    if (!formData.guestCount) {
      newErrors.guestCount = 'Guest count is required';
    } else if (isNaN(formData.guestCount) || parseInt(formData.guestCount) <= 0) {
      newErrors.guestCount = 'Invalid guest count';
    }

    // Catering Style Validation
    if (!formData.cateringStyle) {
      newErrors.cateringStyle = 'Please select a catering style';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'dietaryRestrictions') {
      setFormData(prevState => ({
        ...prevState,
        dietaryRestrictions: checked
          ? [...prevState.dietaryRestrictions, value]
          : prevState.dietaryRestrictions.filter(item => item !== value)
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
        const response = await axios.post('/api/catering-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Catering consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          cateringStyle: '',
          dietaryRestrictions: [],
          menuPreference: '',
          additionalRequirements: ''
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
          <h1 className="text-center mb-4">Professional Event Catering Services</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Catering Services</h2>
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {[
                      'Custom Menu Planning',
                      'Professional Chef Services',
                      'Full-Service Catering',
                      'Diverse Cuisine Options',
                      'Flexible Packaging',
                      'Dietary Accommodation',
                      'Professional Staff',
                      'Event Styling and Presentation'
                    ].map((service, index) => (
                      <li key={index} className="list-group-item">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing Packages */}
              <div>
                <h3>Catering Packages</h3>
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$25/person', 
                      features: ['Standard Menu', 'Basic Service'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$45/person', 
                      features: ['G ourmet Menu', 'Full Service', 'Beverage Options'] 
                    },
                    { 
                      name: 'Deluxe Package', 
                      price: '$75/person', 
                      features: ['Custom Menu', 'Premium Service', 'Event Coordination'] 
                    }
                  ].map((packageItem, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-header bg-info text-white">
                          {packageItem.name}
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{packageItem.price}</h5>
                          <ul className="list-group list-group-flush">
                            {packageItem.features.map((feature, idx) => (
                              <li key={idx} className="list-group-item">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  Request Catering Consultation
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
                        className={`form-select ${errors.eventType ? 'is-invalid' : ''}`}
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Event Type</option>
                        {eventTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.eventType && <div className="invalid-feedback">{errors.eventType}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="date" 
                        className={`form-control ${errors.eventDate ? 'is-invalid' : ''}`}
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                      {errors.eventDate && <div className="invalid-feedback">{errors.eventDate}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className={`form-control ${errors.guestCount ? 'is-invalid' : ''}`}
                        placeholder="Guest Count"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                      />
                      {errors.guestCount && <div className="invalid-feedback">{errors.guestCount}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.cateringStyle ? 'is-invalid' : ''}`}
                        name="cateringStyle"
                        value={formData.cateringStyle}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Catering Style</option>
                        {cateringStyles.map((style, index) => (
                          <option key={index } value={style}>{style}</option>
                        ))}
                      </select>
                      {errors.cateringStyle && <div className="invalid-feedback">{errors.cateringStyle}</div>}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Dietary Restrictions</label>
                      {dietaryOptions.map((option, index) => (
                        <div key={index} className="form-check">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            name="dietaryRestrictions"
                            value={option}
                            checked={formData.dietaryRestrictions.includes(option)}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <select 
                        className="form-select"
                        name="menuPreference"
                        value={formData.menuPreference}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Menu Preference</option>
                        {menuPreferences.map((preference, index) => (
                          <option key={index} value={preference}>{preference}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <textarea 
                        className="form-control"
                        placeholder="Additional Requirements"
                        name="additionalRequirements"
                        value={formData.additionalRequirements}
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

export default EventCatering;