import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const FoodStationsAndFoodTrucks = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    expectedGuests: '',
    eventLocation: '',
    eventDuration: '',
    foodStationType: '',
    cuisinePreferences: [],
    dietaryRestrictions: [],
    additionalServices: [],
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Festival',
    'Private Party',
    'Community Gathering',
    'Graduation',
    'Fundraiser',
    'Sports Event'
  ];

  const foodStationTypes = [
    'Single Food Truck',
    'Multiple Food Trucks',
    'Food Station Setup',
    'Mixed Food Stations',
    'Gourmet Food Truck Experience',
    'Interactive Cooking Stations'
  ];

  const cuisinePreferences = [
    'American',
    'Mexican',
    'Italian',
    'Asian Fusion',
    'BBQ',
    'Vegan',
    'Vegetarian',
    'Seafood',
    'Mediterranean',
    'Street Food',
    'Dessert Stations'
  ];

  const dietaryRestrictions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Kosher',
    'Halal'
  ];

  const additionalServices = [
    'Bar Service',
    'Dessert Station',
    'Late Night Snacks',
    'Custom Menu Design',
    'Chef Interaction',
    'Equipment Rental',
    'Staff Service',
    'Beverage Packages'
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

    // Expected Guests Validation
    if (!formData.expectedGuests) {
      newErrors.expectedGuests = 'Number of guests is required';
    } else if (isNaN(formData.expectedGuests) || parseInt(formData.expectedGuests) <= 0) {
      newErrors.expectedGuests = 'Invalid number of guests';
    }

    // Event Location Validation
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = 'Event location is required';
    }

    // Food Station Type Validation
    if (!formData.foodStationType) {
      newErrors.foodStationType = 'Please select a food station type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'cuisinePreferences' || name === 'dietaryRestrictions' || name === 'additionalServices') {
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
        const response = await axios.post('/api/food-stations-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Food stations consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          expectedGuests: '',
          eventLocation: '',
          eventDuration: '',
          foodStationType: '',
          cuisinePreferences: [],
          dietaryRestrictions: [],
          additionalServices: [],
          specialRequirements: ''
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
          <h1 className="text-center mb-4">Food Stations & Food Trucks Catering</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Food Stations & Trucks Services</h2>
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {[
                      'Diverse Cuisine Options',
                      'Customizable Menus',
                      'Professional Food Truck Catering',
                      'Interactive Food Stations',
                      'Flexible Event Solutions',
                      'On-Site Cooking',
                      'Experienced Staff',
                      'Eco-Friendly Practices'
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
                <h3>Food Stations & Food Trucks Pricing Packages</h3>
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$500 - $1000', 
                      features: ['1 Food Truck', 'Up to 50 Guests', 'Standard Menu'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$1000 - $2000', 
                      features: ['2 Food Trucks', 'Up to 100 Guests', 'Custom Menu Options'] 
                    },
                    { 
                      name: 'Deluxe Package', 
                      price: '$2000 - $3000', 
                      features: ['3 Food Trucks', 'Unlimited Guests', 'Gourmet Options'] 
                    }
                  ].map((packageItem, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-header bg-success text-white">
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
                  Request Food Stations & Food Trucks Consultation
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
                        type="number" 
                        className={`form-control ${errors.expectedGuests ? 'is-invalid' : ''}`}
                        placeholder="Expected Number of Guests"
                        name="expectedGuests"
                        value={formData.expectedGuests}
                        onChange={handleInputChange}
                      />
                      {errors.expectedGuests && <div className="invalid-feedback">{errors.expectedGuests}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className={`form-control ${errors.eventLocation ? 'is-invalid' : ''}`}
                        placeholder="Event Location"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                      />
                      {errors.eventLocation && <div className="invalid-feedback">{errors.eventLocation}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.foodStationType ? 'is-invalid' : ''}`}
                        name="foodStationType"
                        value={formData.foodStationType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Food Station Type</option>
                        {foodStationTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.foodStationType && <div className="invalid-feedback">{errors.foodStationType}</div>}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Cuisine Preferences</label>
                      {cuisinePreferences.map((option, index) => (
                        <div key={index} className="form-check">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            name="cuisinePreferences"
                            value={option}
                            checked={formData.cuisinePreferences.includes(option)}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Dietary Restrictions</label>
                      {dietaryRestrictions.map((option, index) => (
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
                      <label className="form-label">Additional Services</label>
                      {additionalServices.map((option, index) => (
                        <div key={index} className="form-check">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            name="additionalServices"
                            value={option}
                            checked={formData.additionalServices.includes(option)}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <textarea 
                        className="form-control"
                        placeholder="Special Requirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
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

export default FoodStationsAndFoodTrucks;