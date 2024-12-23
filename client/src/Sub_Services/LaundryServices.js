import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const LaundryServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: [],
    clothingItems: [],
    additionalServices: [],
    pickupDate: '',
    pickupTime: '',
    deliveryPreference: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const serviceTypes = [
    {
      category: 'Wash & Fold',
      services: [
        'Standard Wash & Fold',
        'Delicate Wash & Fold',
        'Heavy Duty Wash & Fold'
      ]
    },
    {
      category: 'Dry Cleaning',
      services: [
        'Suits & Formal Wear',
        'Dress Shirts',
        'Coats & Jackets',
        'Delicate Fabrics'
      ]
    },
    {
      category: 'Specialty Services',
      services: [
        'Leather & Suede Cleaning',
        'Wedding Gown Preservation',
        'Alterations',
        'Stain Removal'
      ]
    }
  ];

  const clothingItems = [
    'T-Shirts', 'Jeans', 'Dress Shirts', 'Sweaters', 
    'Pants', 'Shorts', 'Underwear', 'Socks', 
    'Towels', 'Bedding', 'Jackets', 'Dresses'
  ];

  const additionalServices = [
    'Express Service',
    'Eco-Friendly Cleaning',
    'Hypoallergenic Wash',
    'Fabric Softener',
    'Starch Treatment',
    'Pickup & Delivery',
    'Hang Dry',
    'Color Protection'
  ];

  const deliveryPreferences = [
    'Standard Delivery (1-2 Days)',
    'Express Delivery (Same Day)',
    'Next Day Pickup',
    'Scheduled Recurring Service'
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

    if (formData.serviceType.length === 0) {
      newErrors.serviceType = 'Please select at least one service type';
    }

    if (formData.clothingItems.length === 0) {
      newErrors.clothingItems = 'Please select at least one clothing item';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Pickup time is required';
    }

    if (!formData.deliveryPreference) {
      newErrors.deliveryPreference = 'Delivery preference is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (['serviceType', 'clothingItems', 'additionalServices'].includes(name)) {
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
        await axios.post('/api/laundry-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Laundry Service booking submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          serviceType: [], clothingItems: [], 
          additionalServices: [], pickupDate: '',
          pickupTime: '', deliveryPreference: '',
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
          <h1 className="text-center mb-4">Professional Laundry Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Laundry Services
              </div>
              <div className="card-body">
                {serviceTypes.map((category, index) => (
                  <div key={index} className="mb-3">
                    <h5>{category.category}</h5>
                    <ul className="list-group">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="list-group-item">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
                    { name: 'Basic Wash & Fold', price: '$1.50-$2.50/lb', features: ['Standard Cleaning', 'Fold & Package', 'Basic Stain Treatment'] },
                    { name: 'Dry Cleaning', price: '$5-$15/item', features: ['Professional Cleaning', 'Pressed & Hung', 'Stain Removal'] },
                    { name: 'Specialty Services', price: '$20-$100/item', features: ['Leather Cleaning', 'Alterations', 'Wedding Gown Preservation'] }
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
                Book Your Laundry Service
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
                    <h6>Select Services</h6>
                    {serviceTypes.map((category, index) => (
                      <div key={index}>
                        <h6>{category.category}</h6>
                        {category.services.map((service, idx) => (
                          <div className="form-check" key={idx}>
                            <input 
                              type="checkbox"
                              className="form-check-input"
                              name="serviceType"
                              value={service}
                              checked={formData.serviceType.includes(service)}
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label">{service}</label>
                          </div>
                        ))}
                      </div>
                    ))}
                    {errors.serviceType && (
                      <div className="text-danger">
                        {errors.serviceType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Select Clothing Items</h6>
                    {clothingItems.map((item, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="clothingItems"
                          value={item}
                          checked={formData.clothingItems.includes(item)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    ))}
                    {errors.clothingItems && (
                      <div className="text-danger">
                        {errors.clothingItems}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Additional Services</h6>
                    {additionalServices.map((service, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
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
                    <input 
                      type="date"
                      className={`form-control ${errors.pickupDate ? 'is-invalid' : ''}`}
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                    />
                    {errors.pickupDate && (
                      <div className="invalid-feedback">
                        {errors.pickupDate}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="time"
                      className={`form-control ${errors.pickupTime ? 'is-invalid' : ''}`}
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                    />
                    {errors.pickupTime && (
                      <div className="invalid-feedback">
                        {errors.pickupTime}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-control ${errors.deliveryPreference ? 'is-invalid' : ''}`}
                      name="deliveryPreference"
                      value={formData.deliveryPreference}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Delivery Preference</option>
                      {deliveryPreferences.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.deliveryPreference && (
                      <div className="invalid-feedback">
                        {errors.deliveryPreference}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Special Instructions (Optional)"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {submitStatus && (
                    <div className={`alert alert-${submitStatus.type}`} role="alert">
                      {submitStatus.message}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LaundryServices;
