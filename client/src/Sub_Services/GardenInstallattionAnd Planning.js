import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaTree,
  FaLeaf,
  FaWater,
  FaHome,
  FaRulerCombined,
  FaPalette,
  FaClipboardList,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const GardenInstallationAndPlanning = () => {
  // Garden Design Services
  const gardenServices = [
    {
      icon: <FaTree size={50} className="text-success" />,
      title: "Landscape Design",
      description: "Custom garden layouts tailored to your space",
      features: [
        "Personalized design consultation",
        "3D landscape visualization",
        "Plant selection expertise"
      ]
    },
    {
      icon: <FaLeaf size={50} className="text-primary" />,
      title: "Plant Selection",
      description: "Expert plant recommendations",
      features: [
        "Climate-appropriate selections",
        "Low-maintenance options",
        "Aesthetic and functional planning"
      ]
    },
    {
      icon: <FaWater size={50} className="text-info" />,
      title: "Irrigation Systems",
      description: "Efficient water management solutions",
      features: [
        "Smart irrigation design",
        "Water conservation techniques",
        "Automated watering systems"
      ]
    }
  ];

  // Design Packages
  const designPackages = [
    {
      title: "Basic Consultation",
      price: 299,
      features: [
        "1-hour design consultation",
        "Initial landscape assessment",
        "Basic plant recommendations"
      ]
    },
    {
      title: "Comprehensive Design",
      price: 799,
      features: [
        "3D landscape visualization",
        "Detailed planting plan",
        "Irrigation system design",
        "Plant selection report"
      ]
    },
    {
      title: "Full Installation Package",
      price: 1499,
      features: [
        "Complete landscape design",
        "Professional installation",
        "Irrigation system setup",
        "First-year maintenance support"
      ]
    }
  ];

  // Validation Schema
  const gardenRequestSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    
    propertyType: Yup.string()
      .required('Property type is required'),
    
    gardenSize: Yup.number()
      .positive('Garden size must be positive')
      .required('Garden size is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    gardenSize: '',
    designPackage: '',
    additionalDetails: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Garden Design Request:', values);
      
      // Show success message
      alert('Your garden design request has been submitted successfully! Our team will contact you soon.');
      
      // Reset form
      resetForm();
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
      className="garden-installation-planning container-fluid py-5 bg-light"
    >
      {/* Hero Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 text-success"
          >
            Transform Your Outdoor Space
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Professional Garden Design and Installation Services
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaRulerCombined size={80} className="text-success mb-3" />
            <h3>Precision. Creativity. Excellence.</h3>
            <p>Crafting beautiful outdoor environments</p>
          </motion.div>
        </div>
      </div>

      {/* Garden Services */}
      <div className="row mb-5">
        {gardenServices.map((service, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="service-card text-center bg-white p-4 rounded shadow mb-4"
            >
              {service.icon}
              <h4 className="mt-3">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
              <ul className="list-unstyled">
                {service.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaClipboardList className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Design Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Our Design Packages</h2>
          <p className="lead text-muted">Choose the perfect solution for your garden</p>
        </div>
        {designPackages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="package-card text-center bg-white p-4 rounded shadow mb-4"
            >
              <h4 className="text-success">{pkg.title}</h4>
              <p className="display-4 text-primary">${pkg.price}</p>
              <ul className="list-unstyled">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaPalette className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Garden Design Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="garden-design-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-success">
              Request Garden Design Consultation
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={gardenRequestSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Full Name</label>
                      <Field 
                        name="name" 
                        type="text" 
                        className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your Full Name"
                      />
                      <ErrorMessage name="name" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Email Address</label>
                      <Field 
                        name="email" 
                        type="email" 
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        placeholder="Your Email Address"
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Phone Number</label>
                      <Field 
                        name="phone" 
                        type="tel" 
                        className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                        placeholder="10-digit Phone Number"
                      />
                      <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Property Type</label>
                      <Field 
                        as="select"
                        name="propertyType"
                        className={`form-control ${touched.propertyType && errors.propertyType ? 'is-invalid' : ''}`}
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="municipal">Municipal</option>
                      </Field>
                      <ErrorMessage name="propertyType" component="div" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Garden Size (sq ft)</label>
                      <Field 
                        name="gardenSize" 
                        type="number" 
                        className={`form-control ${touched.gardenSize && errors.gardenSize ? 'is-invalid' : ''}`}
                        placeholder="Enter garden size"
                      />
                      <ErrorMessage name="gardenSize" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Design Package</label>
                      <Field 
                        as="select"
                        name="designPackage"
                        className="form-control"
                      >
                        <option value="">Select Design Package</option>
                        {designPackages.map((pkg, index) => (
                          <option key={index} value={pkg.title}>
                            {pkg.title} - ${pkg.price}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Additional Details</label>
                    <Field 
                      name="additionalDetails"
                      as="textarea"
                      className="form-control"
                      placeholder="Tell us about your garden vision, specific requirements, or challenges"
                      rows={4}
                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-success btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Contact Our Garden Design Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-success mb-3" />
          <h4>Email</h4>
          <p>garden.design@company.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-success mb-3" />
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-success mb-3" />
          <h4>Address</h4>
          <p>123 Garden Lane, Green City, ST 12345</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">What Our Clients Say</h2>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Transformed our backyard into a beautiful oasis!"</p>
            <h5>- Sarah Johnson</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Professional, creative, and exceeded our expectations!"</p>
            <h5>- Michael Chen</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Incredible attention to detail and sustainable design."</p>
            <h5>- Emily Rodriguez</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GardenInstallationAndPlanning;