import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const PrimaryCareServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    medicalHistory: [],
    insuranceProvider: '',
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const serviceTypes = [
    'Annual Physical Examination',
    'Chronic Disease Management',
    'Preventive Health Screening',
    'Vaccination and Immunization',
    'Mental Health Consultation',
    'Pediatric Wellness Check',
    'Senior Health Assessment',
    'Women\'s Health Screening',
    'Men\'s Health Screening'
  ];

  const genderOptions = [
    'Male', 
    'Female', 
    'Non-Binary', 
    'Prefer Not to Say'
  ];

  const medicalHistoryOptions = [
    'Diabetes',
    'Hypertension',
    'Heart Disease',
    'Asthma',
    'Allergies',
    'Cancer History',
    'Thyroid Disorders',
    'Mental Health Conditions',
    'Autoimmune Diseases'
  ];

  const insuranceProviders = [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Medicare',
    'Medicaid',
    'Kaiser Permanente',
    'Other'
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

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 0 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Service type is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.insuranceProvider) {
      newErrors.insuranceProvider = 'Insurance provider is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'medicalHistory') {
      setFormData(prevState => ({
        ...prevState,
        medicalHistory: checked
          ? [...prevState.medicalHistory, value]
          : prevState.medicalHistory.filter(item => item !== value)
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
        await axios.post('/api/primary-care-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Primary Care service booking submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          age: '', gender: '', serviceType: '',
          preferredDate: '', preferredTime: '',
          medicalHistory: [], insuranceProvider: '',
          specialRequirements: ''
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
          <h1 className="text-center mb-4">Primary Care Medical Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Primary Care Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Comprehensive Health Assessments',
                    'Chronic Disease Management',
                    'Preventive Care Screenings',
                    'Personalized Treatment Plans',
                    'Vaccination and Immunization',
                    'Mental Health Support',
                    'Lifestyle Counseling',
                    'Referral to Specialists'
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
                Service Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Consultation', 
                      price: '$99-$199', 
                      features: ['Standard Check-up', 'Basic Screening', 'Initial Assessment'] 
                    },
                    { 
                      name: 'Comprehensive Wellness', 
                      price: '$199-$299', 
                      features: ['Detailed Health Evaluation', 'Advanced Screening', 'Personalized Consultation'] 
                    },
                    { 
                      name: 'Premium Health Management', 
                      price: '$299-$499', 
                      features: ['Comprehensive Diagnostic', 'Specialist Referral', 'Ongoing Monitoring'] 
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
                Book Your Primary Care Service
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
                    <input 
                      type="number"
                      className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                      placeholder="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                    {errors.age && (
                      <div className="invalid-feedback">
                        {errors.age}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      {genderOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.gender && (
                      <div className="invalid-feedback">
                        {errors.gender}
                      </div>
                    )}
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
                    {errors.serviceType && (
                      <div className="invalid-feedback">
                        {errors.serviceType}
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
                    <h6>Medical History</h6>
                    {medicalHistoryOptions.map((condition, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="medicalHistory"
                          value={condition}
                          checked={formData.medicalHistory.includes(condition)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{condition}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.insuranceProvider ? 'is-invalid' : ''}`}
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Insurance Provider</option>
                      {insuranceProviders.map((provider, index) => (
                        <option key={index} value={provider}>{provider}</option>
                      ))}
                    </select>
                    {errors.insuranceProvider && (
                      <div className="invalid-feedback">
                        {errors.insuranceProvider}
                      </div>
                    )}
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

export default PrimaryCareServices;