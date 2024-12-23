import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const DiagnosticImagingServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    referringPhysician: '',
    imagingType: '',
    bodyPart: '',
    medicalCondition: '',
    previousImagingHistory: [],
    insuranceInformation: {
      provider: '',
      policyNumber: '',
      groupNumber: ''
    },
    preferredLocation: '',
    appointmentPreference: {
      date: '',
      timeSlot: ''
    },
    specialInstructions: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const imagingTypes = [
    'X-Ray',
    'CT Scan',
    'MRI',
    'Ultrasound',
    'Mammography',
    'Bone Density Scan',
    'PET Scan',
    'Fluoroscopy',
    'Nuclear Medicine Imaging'
  ];

  const bodyParts = [
    'Head/Brain',
    'Neck',
    'Chest',
    'Abdomen',
    'Spine',
    'Pelvis',
    'Extremities (Arms/Legs)',
    'Joints',
    'Cardiovascular System'
  ];

  const medicalConditions = [
    'Trauma/Injury',
    'Cancer Screening',
    'Cardiovascular Evaluation',
    'Neurological Disorder',
    'Musculoskeletal Condition',
    'Reproductive Health',
    'Respiratory Assessment',
    'Digestive System Examination'
  ];

  const previousImagingHistoryOptions = [
    'Prior X-Ray',
    'Previous CT Scan',
    'Earlier MRI',
    'Past Ultrasound',
    'Previous Mammogram',
    'Prior Nuclear Medicine Scan'
  ];

  const genderOptions = [
    'Male', 
    'Female', 
    'Non-Binary', 
    'Prefer Not to Say'
  ];

  const timeSlots = [
    'Morning (6am-12pm)',
    'Afternoon (12pm-5pm)',
    'Evening (5pm-9pm)',
    'Weekend Slot'
  ];

  const preferredLocations = [
    'Main Hospital Campus',
    'Downtown Imaging Center',
    'Suburban Diagnostic Facility',
    'Mobile Imaging Unit'
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

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.imagingType) {
      newErrors.imagingType = 'Imaging type is required';
    }

    if (!formData.bodyPart) {
      newErrors.bodyPart = 'Body part is required';
    }

    if (!formData.medicalCondition) {
      newErrors.medicalCondition = 'Medical condition is required';
    }

    if (!formData.preferredLocation) {
      newErrors.preferredLocation = 'Preferred location is required';
    }

    if (!formData.appointmentPreference.date) {
      newErrors.appointmentDate = 'Appointment date is required';
    }

    if (!formData.appointmentPreference.timeSlot) {
      newErrors.appointmentTimeSlot = 'Appointment time slot is required';
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
      case 'previousImagingHistory':
        setFormData(prevState => ({
          ...prevState,
          previousImagingHistory: checked
            ? [...prevState.previousImagingHistory, value]
            : prevState.previousImagingHistory.filter(item => item !== value)
        }));
        break;
      
      case 'insuranceProvider':
        updateNestedState('insuranceInformation', 'provider');
        break;
      
      case 'insurancePolicyNumber':
        updateNestedState('insuranceInformation', 'policyNumber');
        break;
      
      case 'insuranceGroupNumber':
        updateNestedState('insuranceInformation', 'groupNumber');
        break;
      
      case 'appointmentDate':
        updateNestedState('appointmentPreference', 'date');
        break;
      
      case 'appointmentTimeSlot':
        updateNestedState('appointmentPreference', 'timeSlot');
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
        await axios.post('/api/diagnostic-imaging-booking', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Diagnostic Imaging appointment booked successfully!'
        });

        // Reset form
        setFormData({
          name: '', 
          email: '', 
          phone: '',
          dateOfBirth: '',
          gender: '',
          referringPhysician: '',
          imagingType: '',
          bodyPart: '',
          medicalCondition: '',
          previousImagingHistory: [],
          insuranceInformation: {
            provider: '',
            policyNumber: '',
            groupNumber: ''
          },
          preferredLocation: '',
          appointmentPreference: {
            date: '',
            timeSlot: ''
          },
          specialInstructions: '',
          emergencyContact: {
            name: '',
            relationship: '',
            phone: ''
          }
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
          <h1 className="text-center mb-4">Diagnostic Imaging Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Diagnostic Imaging Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'X-Ray',
                    'CT Scan',
                    'MRI',
                    'Ultrasound',
                    'Mammography',
                    'Bone Density Scan',
                    'PET Scan',
                    'Fluoroscopy',
                    'Nuclear Medicine Imaging'
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
                Diagnostic Imaging Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Imaging', 
                      price: '$99-$199', 
                      features: ['X-Ray or Ultrasound', 'Basic Imaging Report', 'Initial Consultation'] 
                    },
                    { 
                      name: 'Advanced Imaging', 
                      price: '$199-$299', 
                      features: ['CT Scan or MRI', 'Detailed Imaging Report', 'Specialist Consultation'] 
                    },
                    { 
                      name: 'Premium Imaging', 
                      price: '$299-$399', 
                      features: ['PET Scan or Nuclear Medicine Imaging', 'Comprehensive Imaging Report', 'Multi-Disciplinary Team Consultation'] 
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
                Book Your Diagnostic Imaging Appointment
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
                      type="date"
                      className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                      placeholder="Date of Birth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                    {errors.dateOfBirth && (
                      <div className="invalid-feedback">
                        {errors.dateOfBirth}
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
                      className={`form-select ${errors.imagingType ? 'is-invalid' : ''}`}
                      name="imagingType"
                      value={formData.imagingType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Imaging Type</option>
                      {imagingTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.imagingType && (
                      <div className="invalid-feedback">
                        {errors.imagingType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.bodyPart ? 'is-invalid' : ''}`}
                      name="bodyPart"
                      value={formData.bodyPart}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Body Part</option>
                      {bodyParts.map((part, index) => (
                        <option key={index} value={part}>{part}</option>
                      ))}
                    </select>
                    {errors.bodyPart && (
                      <div className="invalid-feedback">
                        {errors.bodyPart}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.medicalCondition ? 'is-invalid' : ''}`}
                      name="medicalCondition"
                      value={formData.medicalCondition}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Medical Condition</option>
                      {medicalConditions.map((condition, index) => (
                        <option key={index} value={condition}>{condition}</option>
                      ))}
                    </select>
                    {errors.medicalCondition && (
                      <div className="invalid-feedback">
                        {errors.medicalCondition}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Previous Imaging History</h6>
                    {previousImagingHistoryOptions.map((history, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="previousImagingHistory"
                          value={history}
                          checked={formData.previousImagingHistory.includes(history)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{history}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Referring Physician"
                      name="referringPhysician"
                      value={formData.referringPhysician}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Insurance Provider"
                      name="insuranceProvider"
                      value={formData.insuranceInformation.provider}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Insurance Policy Number"
                      name="insurancePolicyNumber"
                      value={formData.insuranceInformation.policyNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Insurance Group Number"
                      name="insuranceGroupNumber"
                      value={formData.insuranceInformation.groupNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.preferredLocation ? 'is-invalid' : ''}`}
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Preferred Location</option>
                      {preferredLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.preferredLocation && (
                      <div className="invalid-feedback">
                        {errors.preferredLocation}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="date"
                      className={`form-control ${errors.appointmentDate ? 'is-invalid' : ''}`}
                      placeholder="Appointment Date"
                      name="appointmentDate"
                      value={formData.appointmentPreference.date}
                      onChange={handleInputChange}
                    />
                    {errors.appointmentDate && (
                      <div className="invalid-feedback">
                        {errors.appointmentDate}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.appointmentTimeSlot ? 'is-invalid' : ''}`}
                      name="appointmentTimeSlot"
                      value={formData.appointmentPreference.timeSlot}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Appointment Time Slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.appointmentTimeSlot && (
                      <div className="invalid-feedback">
                        {errors.appointmentTimeSlot}
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

export default DiagnosticImagingServices;