import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const InteractiveCulinaryServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    numberOfParticipants: '',
    cuisineStyle: '',
    cookingSkillLevel: '',
    selectedWorkshops: [],
    dietaryRestrictions: [],
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const eventTypes = [
    'Corporate Team Building',
    'Private Celebration',
    'Birthday Party',
    'Family Gathering',
    'Date Night',
    'Culinary Education',
    'Bachelor/Bachelorette Party',
    'Cooking Competition'
  ];

  const cuisineStyles = [
    'Italian',
    'French',
    'Asian Fusion',
    'Mediterranean',
    'Mexican',
    'Thai',
    'Indian',
    'Farm-to-Table',
    'Vegan & Plant-Based',
    'Molecular Gastronomy'
  ];

  const cookingSkillLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Professional'
  ];

  const workshops = [
    'Knife Skills Masterclass',
    'Pasta Making Workshop',
    'Sushi Rolling Techniques',
    'Bread Baking Basics',
    'Dessert & Pastry Crafting',
    'Wine and Food Pairing',
    'Molecular Gastronomy',
    'Vegetarian & Vegan Cooking',
    'BBQ and Grilling Techniques',
    'International Street Food'
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut Allergies',
    'Pescatarian',
    'Kosher',
    'Halal'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Validation logic
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

    if (!formData.eventType) {
      newErrors.eventType = 'Event type is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.numberOfParticipants) {
      newErrors.numberOfParticipants = 'Number of participants is required';
    }

    if (!formData.cuisineStyle) {
      newErrors.cuisineStyle = 'Cuisine style is required';
    }

    if (!formData.cookingSkillLevel) {
      newErrors.cookingSkillLevel = 'Cooking skill level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (['selectedWorkshops', 'dietaryRestrictions'].includes(name)) {
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

    // Clear errors
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
        await axios.post('/api/culinary-services-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Culinary Services consultation request submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          eventType: '', preferredDate: '', 
          numberOfParticipants: '', cuisineStyle: '', 
          cookingSkillLevel: '', selectedWorkshops: [], 
          dietaryRestrictions: [], specialRequirements: ''
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
          <h1 className="text-center mb-4">Interactive Culinary Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Interactive Culinary Experiences
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Hands-on Cooking Workshops',
                    'Professional Chef Guidance',
                    'Customized Culinary Experiences',
                    'Team Building Cooking Classes',
                    'Private Culinary Events'
                  ].map((service, index) => (
                    <li key={index} className="list-group-item">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Packages */}
            <div className="card">
              <div className="card-header bg-success text-white">
                Pricing Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$250-$500', 
                      features: ['2-Hour Workshop', 'Up to 10 Participants'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$500-$1000', 
                      features: ['4-Hour Advanced Workshop', 'Up to 20 Participants'] 
                    },
                    { 
                      name: 'Deluxe Package', 
                      price: '$1000-$2000 ', 
                      features: ['Full Day Workshop', 'Up to 30 Participants', 'Custom Menu Planning'] 
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

          {/* Right Side - Consultation Form */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Request a Culinary Consultation
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
                    {errors.eventType && (
                      <div className="invalid-feedback">
                        {errors.eventType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="date"
                      className={`form-control ${errors.preferredDate ? 'is-invalid' : ''}`}
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                    {errors.preferredDate && (
                      <div className="invalid-feedback">
                        {errors.preferredDate}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="number"
                      className={`form-control ${errors.numberOfParticipants ? 'is-invalid' : ''}`}
                      placeholder="Number of Participants"
                      name="numberOfParticipants"
                      value={formData.numberOfParticipants}
                      onChange={handleInputChange}
                    />
                    {errors.numberOfParticipants && (
                      <div className="invalid-feedback">
                        {errors.numberOfParticipants}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.cuisineStyle ? 'is-invalid' : ''}`}
                      name="cuisineStyle"
                      value={formData.cuisineStyle}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Cuisine Style</option>
                      {cuisineStyles.map((style, index) => (
                        <option key={index} value={style}>{style}</option>
                      ))}
                    </select>
                    {errors.cuisineStyle && (
                      <div className="invalid-feedback">
                        {errors.cuisineStyle}
                      </div>
                    )}
                    </div>
                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.cookingSkillLevel ? 'is-invalid' : ''}`}
                      name="cookingSkillLevel"
                      value={formData.cookingSkillLevel}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Cooking Skill Level</option>
                      {cookingSkillLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                      ))}
                    </select>
                    {errors.cookingSkillLevel && (
                      <div className="invalid-feedback">
                        {errors.cookingSkillLevel}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Select Workshops</label>
                    {workshops.map((workshop, index) => (
                      <div key={index} className="form-check">
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="selectedWorkshops"
                          value={workshop}
                          checked={formData.selectedWorkshops.includes(workshop)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{workshop}</label>
                      </div>
                    ))}
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

export default InteractiveCulinaryServices;