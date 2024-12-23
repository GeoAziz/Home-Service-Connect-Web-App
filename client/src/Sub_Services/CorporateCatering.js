import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const CorporateCatering = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    expectedAttendees: '',
    cateringStyle: '',
    mealPreference: '',
    dietaryRestrictions: [],
    additionalRequirements: '',
    budget: '',
    venue: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const eventTypes = [
    'Business Meeting',
    'Conference',
    'Seminar',
    'Team Building',
    'Product Launch',
    'Annual Celebration',
    'Training Session',
    'Networking Event',
    'Client Presentation'
  ];

  const cateringStyles = [
    'Breakfast Buffet',
    'Lunch Buffet',
    'Plated Lunch',
    'Boxed Lunches',
    'Coffee and Snacks',
    'Full-Day Catering',
    'Reception Style'
  ];

  const mealPreferences = [
    'Continental',
    'American',
    'Mediterranean',
    'Asian Fusion',
    'Vegetarian Friendly',
    'Kosher',
    'Halal'
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Kosher',
    'Halal'
  ];

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Comprehensive Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Company Name Validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    // Contact Person Validation
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
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

    // Attendees Validation
    if (!formData.expectedAttendees) {
      newErrors.expectedAttendees = 'Number of attendees is required';
    } else if (isNaN(formData.expectedAttendees) || parseInt(formData.expectedAttendees) <= 0) {
      newErrors.expectedAttendees = 'Invalid number of attendees';
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
        const response = await axios.post('/api/corporate-catering-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Corporate catering consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          expectedAttendees: '',
          cateringStyle: '',
          mealPreference: '',
          dietaryRestrictions: [],
          additionalRequirements: '',
          budget: '',
          venue: ''
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
          <h1 className="text-center mb-4">Professional Corporate Catering Services</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Corporate Catering Offerings</h2>
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {[
                      'Customized Corporate Menu Planning',
                      'Professional Event Coordination',
                      'Flexible Catering Options',
                      'Dietary Accommodation',
                      'High-Quality Presentation',
                      'On-Time Delivery',
                      'Professional Staff',
                      'Corporate Event Styling'
                    ].map((service, index) => (
                      <li key={index} className="list-group-item">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Budget Packages */}
              <div>
                <h3>Catering Budget Packages</h3>
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$500 - $1,000', 
                      features: ['Standard Menu', 'Basic Service'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$1,000 - $2,500', 
                      features: ['Gourmet Menu', 'Full Service', 'Beverage Options'] 
                    },
                    { 
                      name: 'Deluxe Package', 
                      price: '$2,500 - $5,000', 
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
                  Request Corporate Catering Consultation
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* Form Fields with Error Handling */}
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                        placeholder="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                      {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className={`form-control ${errors.contactPerson ? 'is-invalid' : ''}`}
                        placeholder="Contact Person"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                      />
                      {errors.contactPerson && <div className="invalid-feedback">{errors.contactPerson}</div>}
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
                        className={`form-control ${errors.expectedAttendees ? 'is-invalid' : ''}`}
                        placeholder="Expected Attendees"
                        name="expectedAttendees"
                        value={formData.expectedAttendees}
                        onChange={handleInputChange}
                      />
                      {errors.expectedAttendees && <div className="invalid-feedback">{errors.expectedAttendees}</div>}
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
                          <option key={index} value={style}>{style}</option>
                        ))}
                      </select>
                      {errors.cateringStyle && <div className="invalid-feedback">{errors.cateringStyle}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className="form-select"
                        name="mealPreference"
                        value={formData.mealPreference}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Meal Preference</option>
                        {mealPreferences.map((preference, index) => (
                          <option key={index} value={preference}>{preference}</option>
                        ))}
                      </select>
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
                      <textarea 
                        className="form-control"
                        placeholder="Additional Requirements"
                        name="additionalRequirements"
                        value={formData.additionalRequirements}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <select 
                        className="form-select"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Budget Range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Venue"
                        name="venue"
                        value={formData.venue}
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

export default CorporateCatering;