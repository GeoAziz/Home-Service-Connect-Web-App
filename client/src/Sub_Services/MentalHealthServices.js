import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const MentalHealthServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    consultationType: '',
    preferredSessionMode: '',
    mentalHealthConcerns: [],
    previousTherapyHistory: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    insuranceInformation: '',
    preferredTherapistGender: '',
    availabilityPreference: {
      days: [],
      timeSlots: []
    },
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const consultationTypes = [
    'Individual Counseling',
    'Couples Therapy',
    'Family Therapy',
    'Group Therapy',
    'Stress Management',
    'Anxiety Treatment',
    'Depression Support',
    'Trauma Counseling',
    'Addiction Recovery',
    'Life Transition Counseling'
  ];

  const sessionModes = [
    'In-Person',
    'Online Video',
    'Phone Consultation',
    'Hybrid (Flexible)'
  ];

  const mentalHealthConcernOptions = [
    'Anxiety',
    'Depression',
    'Stress',
    'PTSD',
    'Relationship Issues',
    'Grief',
    'Self-Esteem',
    'Addiction',
    'Anger Management',
    'Eating Disorders',
    'Bipolar Disorder',
    'Panic Attacks'
  ];

  const genderOptions = [
    'Male', 
    'Female', 
    'Non-Binary', 
    'Prefer Not to Say'
  ];

  const availabilityDays = [
    'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const availabilityTimeSlots = [
    'Morning (6am-12pm)',
    'Afternoon (12pm-5pm)',
    'Evening (5pm-9pm)',
    'Late Evening (9pm-11pm)'
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
    } else if (formData.age < 12 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Consultation type is required';
    }

    if (!formData.preferredSessionMode) {
      newErrors.preferredSessionMode = 'Preferred session mode is required';
    }

    if (formData.mentalHealthConcerns.length === 0) {
      newErrors.mentalHealthConcerns = 'Please select at least one concern';
    }

    if (!formData.emergencyContact.name.trim()) {
      newErrors.emergencyContactName = 'Emergency contact name is required';
    }

    if (!formData.emergencyContact.relationship.trim()) {
      newErrors.emergencyContactRelationship = 'Relationship is required';
    }

    const emergencyPhoneRegex = /^[0-9]{10}$/;
    if (!formData.emergencyContact.phone.trim()) {
      newErrors.emergencyContactPhone = 'Emergency contact phone is required';
    } else if (!emergencyPhoneRegex.test(formData.emergencyContact.phone.replace(/\D/g, ''))) {
      newErrors.emergencyContactPhone = 'Invalid emergency contact phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updateNestedState = (parentKey, childKey) => {
      setFormData(prevState => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value
        }
      }));
    };

    switch(name) {
      case 'mentalHealthConcerns':
        setFormData(prevState => ({
          ...prevState,
          mentalHealthConcerns: checked
            ? [...prevState.mentalHealthConcerns, value]
            : prevState.mentalHealthConcerns.filter(item => item !== value)
        }));
        break;
      
      case 'availabilityDays':
        setFormData(prevState => ({
          ...prevState,
          availabilityPreference: {
            ...prevState.availabilityPreference,
            days: checked
              ? [...prevState.availabilityPreference.days, value]
              : prevState.availabilityPreference.days.filter(item => item !== value)
          }
        }));
        break;
      
      case 'availabilityTimeSlots':
        setFormData(prevState => ({
          ...prevState,
          availabilityPreference: {
            ...prevState.availabilityPreference,
            timeSlots: checked
              ? [...prevState.availabilityPreference.timeSlots, value]
              : prevState.availabilityPreference.timeSlots.filter(item => item !== value)
          }
        }));
        break;
      
      case 'emergencyContactName':
        updateNestedState('emergencyContact', 'name');
        break;
      
      case 'emergencyContactRelationship':
        updateNestedState('emergencyContact', 'relationship');
        break;
      
      case 'emergencyContactPhone':
        updateNestedState('emergencyContact', 'phone');
        break;
      
      default:
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
        await axios.post('/api/mental-health-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Mental Health consultation booked successfully!'
        });

        // Reset form
        setFormData({ 
          name: '', 
          email: '', 
          phone: '',
          age: '',
          gender: '',
          consultationType: '',
          preferredSessionMode: '',
          mentalHealthConcerns: [],
          previousTherapyHistory: '',
          emergencyContact: {
            name: '',
            relationship: '',
            phone: ''
          },
          insuranceInformation: '',
          preferredTherapistGender: '',
          availabilityPreference: {
            days: [],
            timeSlots: []
          },
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
          <h1 className="text-center mb-4">Mental Health Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Mental Health Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Individual Counseling',
                    'Couples Therapy',
                    'Family Therapy',
                    'Group Therapy',
                    'Stress Management',
                    'Anxiety Treatment',
                    'Depression Support',
                    'Trauma Counseling',
                    'Addiction Recovery',
                    'Life Transition Counseling'
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
                Book Your Mental Health Consultation
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
                    <select 
                      className={`form-select ${errors.preferredSessionMode ? 'is-invalid' : ''}`}
                      name="preferredSessionMode"
                      value={formData.preferredSessionMode}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Preferred Session Mode</option>
                      {sessionModes.map((mode, index) => (
                        <option key={index} value={mode}>{mode}</option>
                      ))}
                    </select>
                    {errors.preferredSessionMode && (
                      <div className="invalid-feedback">
                        {errors.preferredSessionMode}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Mental Health Concerns</h6>
                    {mentalHealthConcernOptions.map((concern, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="mentalHealthConcerns"
                          value={concern}
                          checked={formData.mentalHealthConcerns.includes(concern)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{concern}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Previous Therapy History"
                      name="previousTherapyHistory"
                      value={formData.previousTherapyHistory}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Emergency Contact</h6>
                    <input 
                      type="text"
                      className={`form-control ${errors.emergencyContactName ? 'is-invalid' : ''}`}
                      placeholder="Name"
                      name="emergencyContactName"
                      value={formData.emergencyContact.name}
                      onChange={handleInputChange}
                    />
                    {errors.emergencyContactName && (
                      <div className="invalid-feedback">
                        {errors.emergencyContactName}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.emergencyContactRelationship ? 'is-invalid' : ''}`}
                      placeholder="Relationship"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContact.relationship}
                      onChange={handleInputChange}
                    />
                    {errors.emergencyContactRelationship && (
                      <div className="invalid-feedback">
                        {errors.emergencyContactRelationship}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="tel"
                      className={`form-control ${errors.emergencyContactPhone ? 'is-invalid' : ''}`}
                      placeholder="Phone Number"
                      name="emergencyContactPhone"
                      value={formData.emergencyContact.phone}
                      onChange={handleInputChange}
                    />
                    {errors.emergencyContactPhone && (
                      <div className="invalid-feedback">
                        {errors.emergencyContactPhone}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Insurance Information"
                      name="insuranceInformation"
                      value={formData.insuranceInformation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <select 
                      className="form-select"
                      name="preferredTherapistGender"
                      value={formData.preferredTherapistGender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Preferred Therapist Gender</option>
                      {genderOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <h6>Availability Preference</h6>
                    <h6>Days</h6>
                    {availabilityDays.map((day, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="availabilityDays"
                          value={day}
                          checked={formData.availabilityPreference.days.includes(day)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{day}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <h6>Time Slots</h6>
                    {availabilityTimeSlots.map((slot, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="availabilityTimeSlots"
                          value={slot}
                          checked={formData.availabilityPreference.timeSlots.includes(slot)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{slot}</label>
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

export default MentalHealthServices;