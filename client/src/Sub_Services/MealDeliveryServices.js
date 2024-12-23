import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const MealDeliveryServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    deliveryType: '',
    mealPlan: '',
    dietaryPreferences: [],
    allergies: [],
    portionSize: '',
    deliveryFrequency: '',
    startDate: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const deliveryTypes = [
    'Individual Meals',
    'Family Meal Plan',
    'Corporate Meal Delivery',
    'Event Catering Delivery',
    'Bulk Meal Preparation'
  ];

  const mealPlans = [
    'Healthy Balanced',
    'Weight Loss',
    'Muscle Gain',
    'Vegetarian',
    'Vegan',
    'Keto',
    'Paleo',
    'Gluten-Free'
  ];

  const dietaryPreferences = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Flexitarian',
    'Low-Carb',
    'High-Protein'
  ];

  const allergies = [
    'Nuts',
    'Dairy',
    'Gluten',
    'Shellfish',
    'Eggs',
    'Soy',
    'Wheat'
  ];

  const portionSizes = [
    'Small (300-400 calories)',
    'Medium (400-500 calories)',
    'Large (500-600 calories)',
    'Extra Large (600+ calories)'
  ];

  const deliveryFrequencies = [
    'One-Time Delivery',
    'Weekly',
    'Bi-Weekly',
    'Monthly',
    'Custom Schedule'
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

    // Delivery Address Validation
    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required';
    }

    // Delivery Type Validation
    if (!formData.deliveryType) {
      newErrors.deliveryType = 'Please select a delivery type';
    }

    // Meal Plan Validation
    if (!formData.mealPlan) {
      newErrors.mealPlan = 'Please select a meal plan';
    }

    // Start Date Validation
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    } else {
      const selectedDate = new Date(formData.startDate);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.startDate = 'Start date must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'dietaryPreferences' || name === 'allergies') {
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
        const response = await axios.post('/api/meal-delivery-consultation', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Meal delivery consultation request submitted successfully! Our team will contact you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          deliveryAddress: '',
          deliveryType: '',
          mealPlan: '',
          dietaryPreferences: [],
          allergies: [],
          portionSize: '',
          deliveryFrequency: '',
          startDate: '',
          specialInstructions: ''
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
          <h1 className="text-center mb-4">Professional Meal Delivery Services</h1>
        </motion.div>

        <div className="row">
          {/* Service Description Section */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Our Meal Delivery Offerings</h2>
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {[
                      'Customized Meal Planning',
                      'Nutritionist-Approved Menus',
                      'Fresh Ingredient Sourcing',
                      'Dietary Accommodation',
                      'Flexible Delivery Options',
                      'Contactless Delivery',
                      'Eco-Friendly Packaging',
                      'Transparent Nutritional Information'
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
                <h3>Meal Delivery Pricing Packages</h3>
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$100 - $200', 
                      features: ['5 Meals per Week', 'Standard Menu'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$200 - $400', 
                      features: ['10 Meals per Week', 'Gourmet Options', 'Dietary Customization'] 
                    },
                    { 
                      name: 'Family Package', 
                      price: '$400 - $600', 
                      features: ['20 Meals per Week', 'Family-Friendly Options', 'Bulk Discounts'] 
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
                  Request Meal Delivery Consultation
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
                      <input 
                        type="text" 
                        className={`form-control ${errors.deliveryAddress ? 'is-invalid' : ''}`}
                        placeholder="Delivery Address"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleInputChange}
                      />
                      {errors.deliveryAddress && <div className="invalid-feedback">{errors.deliveryAddress}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.deliveryType ? 'is-invalid' : ''}`}
                        name="deliveryType"
                        value={formData.deliveryType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Delivery Type</option>
                        {deliveryTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.deliveryType && <div className="invalid-feedback">{errors.deliveryType}</div>}
                    </div>

                    <div className="mb-3">
                      <select 
                        className={`form-select ${errors.mealPlan ? 'is-invalid' : ''}`}
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Meal Plan</option>
                        {mealPlans.map((plan, index) => (
                          <option key={index} value={plan}>{plan}</option>
                        ))}
                      </select>
                      {errors.mealPlan && <div className="invalid-feedback">{errors.mealPlan}</div>}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Dietary Preferences</label>
                      {dietaryPreferences.map((option, index) => (
                        <div key={index} className="form-check">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            name="dietaryPreferences"
                            value={option}
                            checked={formData.dietaryPreferences.includes(option)}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Allergies</label>
                      {allergies.map((option, index) => (
                        <div key={index} className="form-check">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            name="allergies"
                            value={option}
                            checked={formData.allergies.includes(option)}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <select 
                        className="form-select"
                        name="portionSize"
                        value={formData.portionSize}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Portion Size</option>
                        {portionSizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <select 
                        className="form-select"
                        name="deliveryFrequency"
                        value={formData.deliveryFrequency}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Delivery Frequency</option>
                        {deliveryFrequencies.map((frequency, index) => (
                          <option key={index} value={frequency}>{frequency}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <input 
                        type="date" 
                        className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                      {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
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

export default MealDeliveryServices;