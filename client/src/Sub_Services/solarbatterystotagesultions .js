import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaVideo, 
  FaEnvelope, 
  FaRobot, 
  FaCalculator,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
  FaClipboardCheck
} from 'react-icons/fa';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function SolarConnectPlatform() {
  // Communication Channels
  const communicationChannels = [
    {
      icon: <FaPhoneAlt size={40} className="text-primary" />,
      title: "Direct Consultation",
      description: "Instant expert solar advice",
      method: "Phone Support"
    },
    {
      icon: <FaVideo size={40} className="text-success" />,
      title: "Virtual Assessment",
      description: "Remote system evaluation",
      method: "Video Consultation"
    },
    {
      icon: <FaRobot size={40} className="text-info" />,
      title: "AI Matching",
      description: "Personalized provider recommendations",
      method: "Smart Matching"
    }
  ];

  // Financing Options
  const financingOptions = [
    {
      icon: <FaMoneyBillWave size={40} className="text-primary" />,
      title: "Flexible Solar Loans",
      description: "Customized financial solutions",
      terms: [
        "Low-interest rates",
        "5-20 year terms",
        "Instant pre-qualification"
      ]
    },
    {
      icon: <FaHandshake size={40} className="text-success" />,
      title: "Leasing Programs",
      description: "Zero upfront investment",
      benefits: [
        "No initial costs",
        "Maintenance included",
        "Easy upgradability"
      ]
    }
  ];

  // Consultation Request Schema
  const consultationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name too short')
      .required('Name is required'),
    
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    
    propertyType: Yup.string()
      .required('Property type is required'),
    
    communicationPreference: Yup.string()
      .required('Communication method is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    communicationPreference: '',
    additionalDetails: ''
  };

  // Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Consultation Request:', values);
      
      // Reset form and show success
      resetForm();
      alert('Request submitted successfully! Our team will contact you soon.');
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="solar-connect-platform container py-5"
    >
      <div className="row">
        {/* Communication Channels Section */}
        <div className="col-md-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="communication-channels bg-light p-4 rounded shadow"
          >
            <h2 className="text-primary mb-4">
              <FaHandshake className="mr-2" />
              Connect with Solar Experts
            </h2>
            {communicationChannels.map((channel, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className="channel-option d-flex align-items-center mb-3"
              >
                {channel.icon}
                <div className="ml-3">
                  <h5>{channel.title}</h5>
                  <p className="text-muted">{channel.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Consultation Request Form */}
        <div className="col-md-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="consultation-form bg-white p-4 rounded shadow"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={consultationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <h3 className="text-center mb-4">
                    <FaClipboardCheck className="mr-2" />
                    Request Solar Consultation
                  </h3>

                  {/* Form Fields */}
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <Field 
                      name="name" 
                      type="text" 
                      className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                      placeholder="Your Name"
                    />
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Email Address</label>
                    <Field 
                      name="email" 
                      type="email" 
                      className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                      placeholder="Your Email"
                    />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Preferred Communication Method</label>
                    <Field 
                      as="select" 
                      name="communicationPreference"
                      className={`form-control ${touched.communicationPreference && errors.communicationPreference ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select Preference</option>
                      <option value="phone">Phone Call</option>
                      <option value="video">Video Consultation</option>
                      <option value="email">Email</option>
                    </Field>
                    <ErrorMessage name="communicationPreference" component="div" className="invalid-feedback" />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SolarConnectPlatform;