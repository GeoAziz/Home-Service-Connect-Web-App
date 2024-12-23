import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const TelemedicineServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    medicalConditions: [],
    currentMedications: '',
    communicationPreference: '',
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const consultationTypes = [
    'General Health Consultation',
    'Mental Health Counseling',
    'Chronic Disease Management',
    'Prescription Refill',
    'Follow-up Consultation',
    'Specialist Referral',
    'Sexual Health Consultation',
    'Pediatric Consultation',
    'Geriatric Care'
  ];

  const genderOptions = [
    'Male', 
    'Female', 
    'Non-Binary', 
    'Prefer Not to Say'
  ];

  const medicalConditionOptions = [
    'Hypertension',
    'Diabetes',
    'Asthma',
    'Allergies',
    'Depression',
    'Anxiety',
    'Heart Disease',
    'Thyroid Disorders',
    'Chronic Pain'
  ];

  const communicationPreferences = [
    'Video Call',
    'Phone Call',
    'Chat/Messaging',
    'Email Consultation'
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

    if (!formData.consultationType) {
      newErrors.consultationType = 'Consultation type is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.communicationPreference) {
      newErrors.communicationPreference = 'Communication preference is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'medicalConditions') {
      setFormData(prevState => ({
        ...prevState,
        medicalConditions: checked
          ? [...prevState.medicalConditions, value]
          : prevState.medicalConditions.filter(item => item !== value)
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
        await axios.post('/api/telemedicine-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Telemedicine consultation booking submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', 
          age: '', gender: '', consultationType: '',
          preferredDate: '', preferredTime: '',
          medicalConditions: [], currentMedications: '',
          communicationPreference: '', specialRequirements: ''
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
          <h1 className="text-center mb-4">Telemedicine Healthcare Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Telemedicine Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Convenient Online Consultations',
                    'Quick Medical Advice',
                    'Prescription Management',
                    'Chronic Disease Monitoring',
                    'Mental Health Support',
                    'Specialist Referrals',
                    '24/7 Medical Guidance',
                    'Secure Medical Communication'
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
                Consultation Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Consultation', 
                      price: '$49-$99', 
                      features: ['15-minute Session', 'Basic Health Advice', 'Initial Assessment'] 
                    },
                    { 
                      name: 'Comprehensive Consultation', 
                      price: '$99-$199', 
                      features: ['30-minute Session', 'Detailed Evaluation', 'Prescription Support'] 
                    },
                    { 
                      name: 'Premium Consultation', 
                      price: '$199-$299', 
                      features: ['45-minute Session', 'Specialist Referral', 'Comprehensive Care Plan'] 
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
                Book Your Telemedicine Consultation
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
                      className={`form-select ${errors.consultationType ? 'is-invalid' : ''}`}
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Consultation Type</option>
                      {consultationTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.consultationType && (
                      <div className="invalid-feedback">
                        {errors.consultationType}
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
                    <h6>Medical Conditions</h6>
                    {medicalConditionOptions.map((condition, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="medicalConditions"
                          value={condition}
                          checked={formData.medicalConditions.includes(condition)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{condition}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Current Medications"
                      name="currentMedications"
                      value={formData.currentMedications}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.communicationPreference ? 'is-invalid' : ''}`}
                      name="communicationPreference"
                      value={formData.communicationPreference}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Communication Preference</option>
                      {communicationPreferences.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.communicationPreference && (
                      <div className="invalid-feedback">
                        {errors.communicationPreference}
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

export default TelemedicineServices;