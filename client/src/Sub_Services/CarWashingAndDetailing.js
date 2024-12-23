import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const CarWashingAndDetailing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    serviceType: [],
    additionalServices: [],
    preferredDate: '',
    preferredTime: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const vehicleTypes = [
    'Sedan', 
    'SUV', 
    'Truck', 
    'Compact Car', 
    'Luxury Vehicle', 
    'Sports Car', 
    'Van', 
    'Hybrid/Electric'
  ];

  const serviceTypes = [
    {
      category: 'Basic Wash',
      services: [
        'Exterior Wash',
        'Interior Vacuum',
        'Tire Cleaning',
        'Window Cleaning'
      ]
    },
    {
      category: 'Detailing',
      services: [
        'Full Interior Detailing',
        'Exterior Polishing',
        'Paint Correction',
        'Ceramic Coating',
        'Engine Bay Cleaning'
      ]
    },
    {
      category: 'Premium Services',
      services: [
        'Deep Cleaning',
        'Leather Treatment',
        'Odor Removal',
        'Headlight Restoration',
        'Paint Sealant'
      ]
    }
  ];

  const additionalServices = [
    'Waxing',
    'Clay Bar Treatment',
    'Undercarriage Wash',
    'Pet Hair Removal',
    'Scratch Repair',
    'Windshield Treatment',
    'Interior Stain Removal'
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

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Vehicle type is required';
    }

    if (formData.serviceType.length === 0) {
      newErrors.serviceType = 'Please select at least one service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.vehicleMake) {
      newErrors.vehicleMake = 'Vehicle make is required';
    }

    if (!formData.vehicleModel) {
      newErrors.vehicleModel = 'Vehicle model is required';
    }

    if (!formData.vehicleYear) {
      newErrors.vehicleYear = 'Vehicle year is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (['serviceType', 'additionalServices'].includes(name)) {
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
        await axios.post('/api/car-wash-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Car Wash Booking submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          vehicleType: '', serviceType: [], 
          additionalServices: [], preferredDate: '',
          preferredTime: '', vehicleMake: '',
          vehicleModel: '', vehicleYear: '',
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
          <h1 className="text-center mb-4">Car Washing & Detailing Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Car Care Packages
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
                    { 
                      name: 'Basic Wash', 
                      price: '$25-$50', 
                      features: ['Exterior Wash', 'Interior Vacuum', 'Tire Cleaning'] 
                    },
                    { 
                      name: 'Detailed Cleaning', 
                      price: '$75-$150', 
                      features: ['Full Interior Detailing', 'Exterior Polishing', 'Paint Protection'] 
                    },
                    {  name: 'Premium Detailing', 
                      price: '$150-$300', 
                      features: ['Full Service Detailing', 'Ceramic Coating', 'Engine Bay Cleaning'] 
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
                Book Your Car Wash
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
                      className={`form-select ${errors.vehicleType ? 'is-invalid' : ''}`}
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Vehicle Type</option>
                      {vehicleTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.vehicleType && (
                      <div className="invalid-feedback">
                        {errors.vehicleType}
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
                      className={`form control ${errors.preferredDate ? 'is-invalid' : ''}`}
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
                      type="time"
                      className={`form-control ${errors.preferredTime ? 'is-invalid' : ''}`}
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    />
                    {errors.preferredTime && (
                      <div className="invalid-feedback">
                        {errors.preferredTime}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.vehicleMake ? 'is-invalid' : ''}`}
                      placeholder="Vehicle Make"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                    />
                    {errors.vehicleMake && (
                      <div className="invalid-feedback">
                        {errors.vehicleMake}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.vehicleModel ? 'is-invalid' : ''}`}
                      placeholder="Vehicle Model"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                    />
                    {errors.vehicleModel && (
                      <div className="invalid-feedback">
                        {errors.vehicleModel}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.vehicleYear ? 'is-invalid' : ''}`}
                      placeholder="Vehicle Year"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                    />
                    {errors.vehicleYear && (
                      <div className="invalid-feedback">
                        {errors.vehicleYear}
                      </div>
                    )}
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

export default CarWashingAndDetailing;