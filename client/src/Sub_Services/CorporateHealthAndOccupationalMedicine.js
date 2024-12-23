import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const CorporateHealthAndOccupationalMedicine = () => {
  const [formData, setFormData] = useState({
    companyInformation: {
      name: '',
      industryType: '',
      size: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: ''
    },
    serviceRequirements: {
      serviceTypes: [],
      specificNeeds: '',
      employeeCount: '',
      workEnvironment: ''
    },
    medicalScreeningOptions: {
      basicScreening: [],
      comprehensiveScreening: [],
      specializedScreening: []
    },
    healthAndSafetyPrograms: {
      programs: [],
      customRequirements: ''
    },
    occupationalHealthServices: {
      services: [],
      additionalDetails: ''
    },
    workplaceSafetyAssessment: {
      riskFactors: [],
      ergonomicEvaluation: false,
      mentalHealthSupport: false
    },
    emergencyResponsePlanning: {
      medicalEmergencyProtocol: false,
      firstAidTraining: false,
      emergencyContactInformation: {
        primaryContact: '',
        secondaryContact: '',
        medicalDirector: ''
      }
    },
    complianceAndReporting: {
      regulatoryCompliance: [],
      reportingFrequency: '',
      dataPrivacyConsent: false
    },
    additionalServices: {
      vaccinations: [],
      healthEducation: [],
      wellnessProgramInterest: []
    },
    budget: {
      estimatedBudget: '',
      fundingSource: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Predefined Options
  const industryTypes = [
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Construction',
    'Retail',
    'Finance',
    'Transportation',
    'Hospitality',
    'Other'
  ];

  const companySizes = [
    '1-50 Employees',
    '51-100 Employees',
    '101-250 Employees',
    '251-500 Employees',
    '501-1000 Employees',
    '1000+ Employees'
  ];

  const serviceTypes = [
    'Pre-Employment Medical Screening',
    'Annual Health Check-ups',
    'Periodic Medical Examinations',
    'Workplace Health Risk Assessment',
    'Vaccination Programs',
    'Ergonomic Assessments'
  ];

  const medicalScreeningOptions = {
    basic: [
      'Blood Pressure Check',
      'Body Mass Index (BMI)',
      'Vision Screening',
      'Hearing Test'
    ],
    comprehensive: [
      'Full Blood Panel',
      'Cholesterol Screening',
      'Diabetes Test',
      'Liver Function Test'
    ],
    specialized: [
      'Respiratory Function Test',
      'Cardiovascular Risk Assessment',
      'Cancer Screening',
      'Mental Health Evaluation'
    ]
  };

  const healthAndSafetyPrograms = [
    'Workplace Wellness Program',
    'Stress Management Workshop',
    'Ergonomic Training',
    'Mental Health Support',
    'Substance Abuse Prevention',
    'Nutrition and Fitness Counseling'
  ];

  const occupationalHealthServices = [
    'Injury Prevention',
    'Rehabilitation Support',
    'Work-Related Illness Management',
    'Occupational Exposure Monitoring',
    'Return to Work Programs'
  ];

  const riskFactors = [
    'Physical Hazards',
    'Chemical Exposure',
    'Ergonomic Risks',
    'Psychological Stressors',
    'Repetitive Motion Injuries'
  ];

  const regulatoryComplianceOptions = [
    'OSHA Compliance',
    'HIPAA Regulations',
    'Worker\'s, Compensation Guidelines',
    'ADA Accommodations',
    'State-Specific Health Regulations'
  ];

  const vaccinationOptions = [
    'Flu Shots',
    'COVID-19 Vaccination',
    'Hepatitis Vaccination',
    'Tetanus Booster',
    'Travel Vaccinations'
  ];

  const healthEducationTopics = [
    'Chronic Disease Management',
    'Mental Health Awareness',
    'Nutrition and Lifestyle',
    'Stress Reduction Techniques',
    'Workplace Ergonomics'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Company Information Validation
    if (!formData.companyInformation.name.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.companyInformation.industryType) {
      newErrors.industryType = 'Industry type is required';
    }

    if (!formData.companyInformation.size) {
      newErrors.companySize = 'Company size is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.companyInformation.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!emailRegex.test(formData.companyInformation.contactEmail)) {
      newErrors.contactEmail = 'Invalid email format';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.companyInformation.contactPhone.trim()) {
      newErrors.contactPhone = 'Contact phone is required';
    } else if (!phoneRegex.test(formData.companyInformation.contactPhone.replace(/\D/g, ''))) {
      newErrors.contactPhone = 'Invalid phone number';
    }

    // Service Requirements Validation
    if (formData.serviceRequirements.serviceTypes.length === 0) {
      newErrors.serviceTypes = 'Please select at least one service type';
    }

    if (!formData.serviceRequirements.employeeCount.trim()) {
      newErrors.employeeCount = 'Employee count is required';
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

    const handleNestedArrayState = (parentKey, arrayKey) => {
      setFormData(prevState => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [arrayKey]: checked
            ? [...prevState[parentKey][arrayKey], value]
            : prevState[parentKey][arrayKey].filter(item => item !== value)
        }
      }));
    };

    switch(name) {
      // Company Information
      case 'companyName':
        updateNestedState('companyInformation', 'name');
        break;
      case 'industryType':
        updateNestedState('companyInformation', 'industryType');
        break;
      case 'companySize':
        updateNestedState('companyInformation', 'size');
        break;
      case 'contactPerson':
        updateNestedState('companyInformation', 'contactPerson');
      case 'contactEmail':
        updateNestedState('companyInformation', 'contactEmail');
        break;
      case 'contactPhone':
        updateNestedState('companyInformation', 'contactPhone');
        break;

      // Service Requirements
      case 'serviceTypes':
        handleNestedArrayState('serviceRequirements', 'serviceTypes');
        break;
      case 'specificNeeds':
        updateNestedState('serviceRequirements', 'specificNeeds');
        break;
      case 'employeeCount':
        updateNestedState('serviceRequirements', 'employeeCount');
        break;
      case 'workEnvironment':
        updateNestedState('serviceRequirements', 'workEnvironment');
        break;

      // Medical Screening Options
      case 'basicScreening':
        handleNestedArrayState('medicalScreeningOptions', 'basicScreening');
        break;
      case 'comprehensiveScreening':
        handleNestedArrayState('medicalScreeningOptions', 'comprehensiveScreening');
        break;
      case 'specializedScreening':
        handleNestedArrayState('medicalScreeningOptions', 'specializedScreening');
        break;

      // Health and Safety Programs
      case 'healthAndSafetyPrograms':
        handleNestedArrayState('healthAndSafetyPrograms', 'programs');
        break;
      case 'customRequirements':
        updateNestedState('healthAndSafetyPrograms', 'customRequirements');
        break;

      // Occupational Health Services
      case 'occupationalHealthServices':
        handleNestedArrayState('occupationalHealthServices', 'services');
        break;
      case 'additionalDetails':
        updateNestedState('occupationalHealthServices', 'additionalDetails');
        break;

      // Workplace Safety Assessment
      case 'riskFactors':
        handleNestedArrayState('workplaceSafetyAssessment', 'riskFactors');
        break;
      case 'ergonomicEvaluation':
        updateNestedState('workplaceSafetyAssessment', 'ergonomicEvaluation');
        break;
      case 'mentalHealthSupport':
        updateNestedState('workplaceSafetyAssessment', 'mentalHealthSupport');
        break;

      // Emergency Response Planning
      case 'medicalEmergencyProtocol':
        updateNestedState('emergencyResponsePlanning', 'medicalEmergencyProtocol');
        break;
      case 'firstAidTraining':
        updateNestedState('emergencyResponsePlanning', 'firstAidTraining');
        break;
      case 'emergencyContactInformation':
        updateNestedState('emergencyResponsePlanning', 'emergencyContactInformation');
        break;

      // Compliance and Reporting
      case 'regulatoryCompliance':
        handleNestedArrayState('complianceAndReporting', 'regulatoryCompliance');
        break;
      case 'reportingFrequency':
        updateNestedState('complianceAndReporting', 'reportingFrequency');
        break;
      case 'dataPrivacyConsent':
        updateNestedState('complianceAndReporting', 'dataPrivacyConsent');
        break;

      // Additional Services
      case 'vaccinations':
        handleNestedArrayState('additionalServices', 'vaccinations');
        break;
      case 'healthEducation':
        handleNestedArrayState('additionalServices', 'healthEducation');
        break;
      case 'wellnessProgramInterest':
        handleNestedArrayState('additionalServices', 'wellnessProgramInterest');
        break;

      // Budget
      case 'estimatedBudget':
        updateNestedState('budget', 'estimatedBudget');
        break;
      case 'fundingSource':
        updateNestedState('budget', 'fundingSource');
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
        await axios.post('/api/corporate-health-and-occupational-medicine', {
          ...formData,
          submittedAt: new Date().toISOString()
        });

        setSubmitStatus({
          type: 'success',
          message: 'Corporate health and occupational medicine request submitted successfully!'
        });

        // Reset form
        setFormData({
          companyInformation: {
            name: '',
            industryType: '',
            size: '',
            contactPerson: '',
            contactEmail: '',
            contactPhone: ''
          },
          serviceRequirements: {
            serviceTypes: [],
            specificNeeds: '',
            employeeCount: '',
            workEnvironment: ''
          },
          medicalScreeningOptions: {
            basicScreening: [],
            comprehensiveScreening: [],
            specializedScreening: []
          },
          healthAndSafetyPrograms: {
            programs: [],
            customRequirements: ''
          },
          occupationalHealthServices: {
            services: [],
            additionalDetails: ''
          },
          workplaceSafetyAssessment: {
            riskFactors: [],
            ergonomicEvaluation: false,
            mentalHealthSupport: false
          },
          emergencyResponsePlanning: {
            medicalEmergencyProtocol: false,
            firstAidTraining: false,
            emergencyContactInformation: {
              primaryContact: '',
              secondaryContact: '',
              medicalDirector: ''
            }
          },
          complianceAndReporting: {
            regulatoryCompliance: [],
            reportingFrequency: '',
            dataPrivacyConsent: false
          },
          additionalServices: {
            vaccinations: [],
            healthEducation: [],
            wellnessProgramInterest: []
          },
          budget: {
            estimatedBudget: '',
            fundingSource: ''
          }
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
          <h1 className="text-center mb-4">Corporate Health and Occupational Medicine</h1>
        </motion.div>

        <div className="row">
          {/* Left Side - Service Description */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                Our Corporate Health and Occupational Medicine Services
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {[
                    'Pre-Employment Medical Screening',
                    'Annual Health Check-ups',
                    'Periodic Medical Examinations',
                    'Workplace Health Risk Assessment',
                    'Vaccination Programs',
                    'Ergonomic Assessments'
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
                Corporate Health and Occupational Medicine Packages
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { 
                      name: 'Basic Package', 
                      price: '$9.99', 
                      features: ['Pre-Employment Medical Screening', 'Annual Health Check-ups'] 
                    },
                    { 
                      name: 'Premium Package', 
                      price: '$19.99', 
                      features: ['Pre-Employment Medical Screening', 'Annual Health Check-ups', 'Periodic Medical Examinations'] 
                    },
                    { 
                      name: 'Elite Package', 
                      price: '$29.99', 
                      features: ['Pre-Employment Medical Screening', 'Annual Health Check-ups', 'Periodic Medical Examinations', 'Workplace Health Risk Assessment'] 
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
                Request Corporate Health and Occupational Medicine Services
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Form Fields */}
                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyInformation.name}
                      onChange={handleInputChange}
                    />
                    {errors.companyName && (
                      <div className="invalid-feedback">
                        {errors.companyName}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.industryType ? 'is-invalid' : ''}`}
                      name="industryType"
                      value={formData.companyInformation.industryType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Industry Type</option>
                      {industryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.industryType && (
                      <div className="invalid-feedback">
                        {errors.industryType}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <select 
                      className={`form-select ${errors.companySize ? 'is-invalid' : ''}`}
                      name="companySize"
                      value={formData.companyInformation.size}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Company Size</option>
                      {companySizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                    {errors.companySize && (
                      <div className="invalid-feedback">
                        {errors.companySize}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className={`form-control ${errors.contactPerson ? 'is-invalid' : ''}`}
                      placeholder="Contact Person"
                      name="contactPerson"
                      value={formData.companyInformation.contactPerson}
                      onChange={handleInputChange}
                    />
                    {errors.contactPerson && (
                      <div className="invalid-feedback">
                        {errors.contactPerson}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="email"
                      className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`}
                      placeholder="Contact Email"
                      name="contactEmail"
                      value={formData.companyInformation.contactEmail}
                      onChange={handleInputChange}
                    />
                    {errors.contactEmail && (
                      <div className="invalid-feedback">
                        {errors.contactEmail}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="tel"
                      className={`form-control ${errors.contactPhone ? 'is-invalid' : ''}`}
                      placeholder="Contact Phone"
                      name="contactPhone"
                      value={formData.companyInformation.contactPhone}
                      onChange={handleInputChange}
                    />
                    {errors.contactPhone && (
                      <div className="invalid-feedback">
                        {errors.contactPhone}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h6>Service Types</h6>
                    {serviceTypes.map((type, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="serviceTypes"
                          value={type}
                          checked={formData.serviceRequirements.serviceTypes.includes(type)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{type}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Specific Needs"
                      name="specificNeeds"
                      value={formData.serviceRequirements.specificNeeds}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="number"
                      className={`form-control ${errors.employeeCount ? 'is-invalid' : ''}`}
                      placeholder="Employee Count"
                      name="employeeCount"
                      value={formData.serviceRequirements.employeeCount}
                      onChange={handleInputChange}
                    />
                    {errors.employeeCount && (
                      <div className="invalid-feedback">
                        {errors.employeeCount}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Work Environment"
                      name="workEnvironment"
                      value={formData.serviceRequirements.workEnvironment}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Medical Screening Options</h6>
                    <h6>Basic Screening</h6>
                    {medicalScreeningOptions.basic.map((option, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="basicScreening"
                          value={option}
                          checked={formData.medicalScreeningOptions.basicScreening.includes(option)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{option}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <h6>Comprehensive Screening</h6>
                    {medicalScreeningOptions.comprehensive.map((option, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="comprehensiveScreening"
                          value={option}
                          checked={formData.medicalScreeningOptions.comprehensiveScreening.includes(option)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{option}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <h6>Specialized Screening</h6>
                    {medicalScreeningOptions.specialized.map((option, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="specializedScreening"
                          value={option}
                          checked={formData.medicalScreeningOptions.specializedScreening.includes(option)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{option}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <h6>Health and Safety Programs</h6>
                    {healthAndSafetyPrograms.map((program, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="healthAndSafetyPrograms"
                          value={program}
                          checked={formData.healthAndSafetyPrograms.programs.includes(program)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{program}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Custom Requirements"
                      name="customRequirements"
                      value={formData.healthAndSafetyPrograms.customRequirements}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Occupational Health Services</h6>
                    {occupationalHealthServices.map((service, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="occupationalHealthServices"
                          value={service}
                          checked={formData.occupationalHealthServices.services.includes(service)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{service}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Additional Details"
                      name="additionalDetails"
                      value={formData.occupationalHealthServices.additionalDetails}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Workplace Safety Assessment</h6>
                    <h6>Risk Factors</h6>
                    {riskFactors.map((factor, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="riskFactors"
                          value={factor}
                          checked={formData.workplaceSafetyAssessment.riskFactors.includes(factor)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{factor}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input 
                        type="checkbox"
                        className="form-check-input"
                        name="ergonomicEvaluation"
                        checked={formData.workplaceSafetyAssessment.ergonomicEvaluation}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Ergonomic Evaluation</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input 
                        type="checkbox"
                        className="form-check-input"
                        name="mentalHealthSupport"
                        checked={formData.workplaceSafetyAssessment.mentalHealthSupport}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Mental Health Support</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6>Emergency Response Planning</h6>
                    <div className="form-check">
                      <input 
                        type="checkbox"
                        className="form-check-input"
                        name="medicalEmergencyProtocol"
                        checked={formData.emergencyResponsePlanning.medicalEmergencyProtocol}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Medical Emergency Protocol</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input 
                        type="checkbox"
                        className="form-check-input"
                        name="firstAidTraining"
                        checked={formData.emergencyResponsePlanning.firstAidTraining}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">First Aid Training</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Emergency Contact Information"
                      name="emergencyContactInformation"
                      value={formData.emergencyResponsePlanning.emergencyContactInformation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Compliance and Reporting</h6>
                    {regulatoryComplianceOptions.map((option, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="regulatoryCompliance"
                          value={option}
                          checked={formData.complianceAndReporting.regulatoryCompliance.includes(option)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{option}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Reporting Frequency"
                      name="reportingFrequency"
                      value={formData.complianceAndReporting.reportingFrequency}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input 
                        type="checkbox"
                        className="form-check-input"
                        name="dataPrivacyConsent"
                        checked={formData.complianceAndReporting.dataPrivacyConsent}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Data Privacy Consent</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6>Additional Services</h6>
                    {vaccinationOptions.map((option, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="vaccinations"
                          value={option}
                          checked={formData.additionalServices.vaccinations.includes(option)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{option}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    {healthEducationTopics.map((topic, index) => (
                      <div className="form-check" key={index}>
                        <input 
                          type="checkbox"
                          className="form-check-input"
                          name="healthEducation"
                          value={topic}
                          checked={formData.additionalServices.healthEducation.includes(topic)}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">{topic}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Wellness Program Interest"
                      name="wellnessProgramInterest"
                      value={formData.additionalServices.wellnessProgramInterest}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <h6>Budget</h6>
                    <input 
                      type="number"
                      className={`form-control ${errors.estimatedBudget ? 'is-invalid' : ''}`}
                      placeholder="Estimated Budget"
                      name="estimatedBudget"
                      value={formData.budget.estimatedBudget}
                      onChange={handleInputChange}
                    />
                    {errors.estimatedBudget && (
                      <div className="invalid-feedback">
                        {errors.estimatedBudget}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Funding Source"
                      name="fundingSource"
                      value={formData.budget.fundingSource}
                      onChange={handleInputChange}
                    />
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

export default CorporateHealthAndOccupationalMedicine;