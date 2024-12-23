import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaLeaf,
  FaTree,
  FaWater,
  FaClipboardList,
  FaTools,
  FaSeedling,
  FaRegCalendarCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const GardenMaintenanceServices = () => {
  // Maintenance Services
  const maintenanceServices = [
    {
      icon: <FaLeaf size={50} className="text-success" />,
      title: "Seasonal Plant Care",
      description: "Comprehensive plant health management",
      features: [
        "Seasonal pruning",
        "Fertilization",
        "Disease prevention"
      ]
    },
    {
      icon: <FaTree size={50} className="text-primary" />,
      title: "Tree & Shrub Maintenance",
      description: "Professional tree and shrub care",
      features: [
        "Structural pruning",
        "Root health assessment",
        "Pest control"
      ]
    },
    {
      icon: <FaWater size={50} className="text-info" />,
      title: "Irrigation Management",
      description: "Advanced water management solutions",
      features: [
        "System optimization",
        "Water efficiency audit",
        "Seasonal adjustments"
      ]
    }
  ];

  // Maintenance Packages
  const maintenancePackages = [
    {
      title: "Basic Maintenance",
      price: 199,
      frequency: "Monthly",
      features: [
        "Monthly garden inspection",
        "Basic pruning",
        "Weed control"
      ]
    },
    {
      title: "Comprehensive Care",
      price: 399,
      frequency: "Bi-Monthly",
      features: [
        "Bi-monthly detailed assessment",
        "Advanced pruning",
        "Pest management",
        "Fertilization"
      ]
    },
    {
      title: "Premium Maintenance",
      price: 599,
      frequency: "Quarterly",
      features: [
        "Quarterly landscape review",
        "Comprehensive plant health",
        "Irrigation system optimization",
        "Seasonal design updates"
      ]
    }
  ];

  // Validation Schema
  const maintenanceRequestSchema = Yup.object().shape({
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
    maintenancePackage: '',
    specialRequirements: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Maintenance Request:', values);
      
      // Show success message
      alert('Your garden maintenance request has been submitted successfully! Our team will contact you soon.');
      
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
      className="garden-maintenance-services container-fluid py-5 bg-light"
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
            Professional Garden Maintenance
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Expert Care for Your Outdoor Living Space
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaTools size={80} className="text-success mb-3" />
            <h3>Precision. Care. Expertise.</h3>
            <p>Nurturing your garden to perfection</p>
          </motion.div>
        </div>
      </div>

      {/* Maintenance Services */}
      <div className="row mb-5">
        {maintenanceServices.map((service, index) => (
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

      {/* Maintenance Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Maintenance Packages</h2>
          <p className="lead text-muted">Tailored Care for Your Garden</p>
        </div>
        {maintenancePackages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="package-card text-center bg-white p-4 rounded shadow mb-4"
            >
              <h4 className="text-success">{pkg.title}</h4>
              <p className="display-4 text-primary">${pkg.price}</p>
              <p className="text-muted">{pkg.frequency}</p>
              <ul className="list-unstyled">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaSeedling className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
              {/* Maintenance Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="maintenance-request-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-success">
              Request Garden Maintenance Service
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={maintenanceRequestSchema}
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
                      <label>Maintenance Package</label>
                      <Field 
                        as="select"
                        name="maintenancePackage"
                        className="form-control"
                      >
                        <option value="">Select Maintenance Package</option>
                        {maintenancePackages.map((pkg, index) => (
                          <option key={index} value={pkg.title}>
                            {pkg.title} - ${pkg.price} ({pkg.frequency})
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Special Requirements</label>
                    <Field 
                      name="specialRequirements"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any specific maintenance needs or concerns"
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
                        {isSubmitting ? 'Submitting...' : 'Request Maintenance'}
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
          <h2 className="text-success">Contact Our Maintenance Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-success mb-3" />
          <h4>Email</h4>
          <p>maintenance@gardenpro.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-success mb-3" />
          <h4>Phone</h4>
          <p>(555) 987-6543</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-success mb-3" />
          <h4>Address</h4>
          <p>456 Green Maintenance Lane, Eco City, ST 54321</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">What Our Clients Say</h2>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Incredible maintenance service that keeps my garden looking pristine!"</p>
            <h5>- David Thompson</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Professional, reliable, and truly passionate about garden care."</p>
            <h5>- Laura Martinez</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"They transformed my neglected garden into a beautiful landscape."</p>
            <h5>- Robert Kim</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GardenMaintenanceServices;
      