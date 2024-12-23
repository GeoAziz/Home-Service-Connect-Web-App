import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const PharmacyServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    prescriptionDetails: {
      type: '',
      medications: [],
      newPrescription: '',
      refillRequest: ''
    },
    medicalConditions: [],
    allergies: [],
    insuranceInformation: {
      provider: '',
      policyNumber: '',
      groupNumber: ''
    },
    deliveryPreference: {
      method: '',
      address: '',
      specialInstructions: ''
    },
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    preferredPharmacyLocation: '',
    additionalServices: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const prescriptionTypes = [
    'New Prescription',
    'Prescription Refill',
    'Medication Transfer',
    'Medication Review'
  ];

  const deliveryMethods = [
    'In-Store Pickup',
    'Home Delivery',
    'Curbside Pickup',
    'Mail Delivery'
  ];

  const genderOptions = [
    'Male', 
    'Female', 
    'Non-Binary', 
    'Prefer Not to Say'
  ];

  const medicalConditionOptions = [
    'Diabetes',
    'Hypertension',
    'Heart Disease',
    'Asthma',
    'Thyroid Disorder',
    'Cholesterol',
    'Depression',
    'Arthritis'
  ];

  const allergiesOptions = [
    'Penicillin',
    'Sulfa Drugs',
    'Latex',
    'Aspirin',
    'Ibuprofen',
    'Food Allergies',
    'Other Medication Allergies'
  ];

  const pharmacyLocations = [
    'Main Hospital Pharmacy',
    'Downtown Pharmacy Branch',
    'Suburban Pharmacy Center',
    '24-Hour Pharmacy Location'
  ];

  const additionalServiceOptions = [
    'Medication Counseling',
    'Vaccine Administration',
    'Blood Pressure Screening',
    'Diabetes Management',
    'Medication Synchronization',
    'Medication Therapy Management'
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

    if (!formData.prescriptionDetails.type) {
      newErrors.prescriptionType = 'Prescription type is required';
    }

    if (!formData.preferredPharmacyLocation) {
      newErrors.preferredPharmacyLocation = 'Preferred pharmacy location is required';
    }

    if (!formData.deliveryPreference.method) {
      newErrors.deliveryMethod = 'Delivery method is required';
    }

    if (formData.deliveryPreference.method !== 'In-Store Pickup' && !formData.deliveryPreference.address.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required';
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
      case 'prescriptionMedications':
        setFormData(prevState => ({
          ...prevState,
          prescriptionDetails: {
            ...prevState.prescriptionDetails,
            medications: checked
              ? [...prevState.prescriptionDetails.medications, value]
              : prevState.prescriptionDetails.medications.filter(item => item !== value)
          }
        }));
        break;
      
      case 'medicalConditions':
        setFormData(prevState => ({
          ...prevState,
          medicalConditions: checked
            ? [...prevState.medicalConditions, value]
            : prevState.medicalConditions.filter(item => item !== value)
        }));
        break;
      
      case 'allergies':
        setFormData(prevState => ({
          ...prevState,
          allergies: checked
            ? [...prevState.allergies, value]
            : prevState.allergies.filter(item => item !== value)
        }));
        break;
      
      case 'additionalServices':
        setFormData(prevState => ({
          ...prevState,
          additionalServices: checked
            ? [...prevState.additionalServices, value]
            : prevState.additionalServices.filter(item => item !== value)
        }));
        break;
      
      case 'prescriptionType':
        updateNestedState('prescriptionDetails', 'type');
        break;
      
      case 'newPrescription':
        updateNestedState('prescriptionDetails', 'newPrescription');
        break;
      
      case 'refillRequest':
        updateNestedState('prescriptionDetails', 'refillRequest');
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
      
      case 'deliveryMethod':
        updateNestedState('deliveryPreference', 'method');
        break;
      
      case 'deliveryAddress':
        updateNestedState('deliveryPreference', 'address');
        break;
      
      case 'deliverySpecialInstructions':
        updateNestedState('deliveryPreference', 'specialInstructions');
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
        await axios.post('/api/pharmacy-services', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Pharmacy services request submitted successfully!'
        });

        // Reset form
        setFormData({
          name: '', 
          email: '', 
          phone: '',
          dateOfBirth: '',
          gender: '',
          prescriptionDetails: {
            type: '',
            medications: [],
            newPrescription: '',
            refillRequest: ''
          },
          medicalConditions: [],
          allergies: [],
          insuranceInformation: {
            provider: '',
            policyNumber: '',
            groupNumber: ''
          },
          deliveryPreference: {
            method: '',
            address: '',
            specialInstructions: ''
          },
          emergencyContact: {
            name: '',
            relationship: '',
            phone: ''
          },
          preferredPharmacyLocation: '',
          additionalServices: []
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
          <h1 className="text-center mb-4">Pharmacy Services</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Pharmacy Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Prescription Filling',
                    'Medication Therapy Management',
                    'Vaccine Administration',
                    'Blood Pressure Screening',
                    'Diabetes Management',
                    'Medication Synchronization'
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
                Pharmacy Services Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$9.99', 
                      features: ['Prescription Filling', 'Medication Counseling'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$19.99', 
                      features: ['Prescription Filling', 'Medication Counseling', 'Vaccine Administration'] 
                    },
                    { 
                      name: 'Elite Package', 
                      price: '$29.99', 
                      features: ['Prescription Filling', 'Medication Counseling', 'Vaccine Administration', 'Blood Pressure Screening'] 
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

          {/* Right Side - Request Form */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Request Pharmacy Services
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
                      className={`form-select ${errors.prescriptionType ? 'is-invalid' : ''}`}
                      name="prescriptionType"
                      value={formData.prescriptionDetails.type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Prescription Type</option>
                      {prescriptionTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.prescriptionType && (
                      <div className="invalid-feedback">
                        {errors.prescriptionType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Prescription Medications</h6>
                    {[
                      'Lisinopril',
                      'Amlodipine',
                      'Atorvastatin',
                      'Metformin',
                      'Albuterol',
                      'Other Medications'
                    ].map((medication, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="prescriptionMedications"
                          value={medication}
                          checked={formData.prescriptionDetails.medications.includes(medication)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{medication}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="New Prescription"
                      name="newPrescription"
                      value={formData.prescriptionDetails.newPrescription}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Refill Request"
                      name="refillRequest"
                      value={formData.prescriptionDetails.refillRequest}
                      onChange={handleInputChange}
                    />
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
                    <h6>Allergies</h6>
                    {allergiesOptions.map((allergy, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="allergies"
                          value={allergy}
                          checked={formData.allergies.includes(allergy)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{allergy}</label>
                      </div>
                    ))}
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
                      className={`form-select ${errors.preferredPharmacyLocation ? 'is-invalid' : ''}`}
                      name="preferredPharmacyLocation"
                      value={formData.preferredPharmacyLocation}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Preferred Pharmacy Location</option>
                      {pharmacyLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.preferredPharmacyLocation && (
                      <div className="invalid-feedback">
                        {errors.preferredPharmacyLocation}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.deliveryMethod ? 'is-invalid' : ''}`}
                      name="deliveryMethod"
                      value={formData.deliveryPreference.method}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Delivery Method</option>
                      {deliveryMethods.map((method, index) => (
                        <option key={index} value={method}>{method}</option>
                      ))}
                    </select>
                    {errors.deliveryMethod && (
                      <div className="invalid-feedback">
                        {errors.deliveryMethod}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.deliveryAddress ? 'is-invalid' : ''}`}
                      placeholder="Delivery Address"
                      name="deliveryAddress"
                      value={formData.deliveryPreference.address}
                      onChange={handleInputChange}
                    />
                    {errors.deliveryAddress && (
                      <div className="invalid-feedback">
                        {errors.deliveryAddress}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <textarea 
                      className="form-control"
                      placeholder="Special Instructions"
                      name="deliverySpecialInstructions"
                      value={formData.deliveryPreference.specialInstructions}
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
                    <h6>Additional Services</h6>
                    {additionalServiceOptions.map((service, index) => (
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

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Services'}
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

export default PharmacyServices;