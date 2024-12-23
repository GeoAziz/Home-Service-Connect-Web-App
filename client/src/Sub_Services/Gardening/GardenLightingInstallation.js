import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaLightbulb,
  FaTree,
  FaHome,
  FaPalette,
  FaLeaf,
  FaRegLightbulb,
  FaWrench,
  FaShieldAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const GardenLightingInstallation = () => {
  // Lighting Services
  const lightingServices = [
    {
      icon: <FaLightbulb size={50} className="text-warning" />,
      title: "Landscape Illumination",
      description: "Transform your outdoor spaces with strategic lighting",
      features: [
        "Architectural highlighting",
        "Path and walkway lighting",
        "Decorative garden accents"
      ]
    },
    {
      icon: <FaTree size={50} className="text-success" />,
      title: "Garden Accent Lighting",
      description: "Enhance natural beauty with subtle illumination",
      features: [
        "Tree and plant uplighting",
        "Water feature lighting",
        "Botanical showcase"
      ]
    },
    {
      icon: <FaHome size={50} className="text-primary" />,
      title: "Security Lighting Solutions",
      description: "Illuminate and protect your property",
      features: [
        "Motion-sensor lights",
        "Perimeter coverage",
        "Smart lighting integration"
      ]
    }
  ];

  // Lighting Packages
  const lightingPackages = [
    {
      title: "Basic Garden Glow",
      price: 799,
      features: [
        "Up to 10 landscape lights",
        "Basic installation",
        "Standard LED fixtures",
        "Single color option"
      ]
    },
    {
      title: "Comprehensive Illumination",
      price: 1499,
      features: [
        "Up to 20 landscape lights",
        "Advanced installation",
        "Smart color-changing LEDs",
        "Pathway and accent lighting",
        "Remote control system"
      ]
    },
    {
      title: "Premium Landscape Lighting",
      price: 2499,
      features: [
        "Unlimited landscape lights",
        "Full property coverage",
        "Custom design consultation",
        "High-end smart lighting",
        "Professional zoning",
        "Annual maintenance"
      ]
    }
  ];

  // Validation Schema
  const gardenLightingSchema = Yup.object().shape({
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
    
    propertySize: Yup.number()
      .positive('Property size must be positive')
      .required('Property size is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertySize: '',
    lightingPackage: '',
    additionalComments: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Garden Lighting Request:', values);
      alert('Your garden lighting request has been submitted successfully!');
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
      className="garden-lighting-services container-fluid py-5 bg-light"
    >
      {/* Hero Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 text-primary"
          >
            Professional Garden Lighting
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Illuminate Your Outdoor Spaces
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaRegLightbulb size={80} className="text-warning mb-3" />
            <h3>Creative. Elegant. Functional.</h3>
            <p>Transform your landscape with intelligent lighting</p>
          </motion.div>
        </div>
      </div>

      {/* Lighting Services */}
      <div className="row mb-5">
        {lightingServices.map((service, index) => (
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
                    <FaLeaf className="mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Lighting Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Garden Lighting Packages</h2>
          <p className="lead text-muted">Tailored Illumination Solutions</p>
        </div>
        {lightingPackages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="package-card text-center bg-white p-4 rounded shadow mb-4"
            >
              <h4 className="text-primary">{pkg.title}</h4>
              <p className="display-4 text-success">${pkg.price}</p>
              <ul className="list-unstyled">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaWrench className="mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div> 
      {/* Garden Lighting Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="garden-lighting-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-primary">
              Request Garden Lighting Installation
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={gardenLightingSchema}
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
                        <option value="agricultural">Agricultural</option>
                      </Field>
                      <ErrorMessage name="propertyType" component="div" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Property Size (sq ft)</label>
                      <Field 
                        name="propertySize" 
                        type="number" 
                        className={`form-control ${touched.propertySize && errors.propertySize ? 'is-invalid' : ''}`}
                        placeholder="Enter property size"
                      />
                      <ErrorMessage name="propertySize" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Garden Lighting Package</label>
                      <Field 
                        as="select"
                        name="lightingPackage"
                        className="form-control"
                      >
                        <option value="">Select Lighting Package</option>
                        {lightingPackages.map((pkg, index) => (
                          <option key={index} value={pkg.title}>
                            {pkg.title} - ${pkg.price}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Additional Comments</label>
                    <Field 
                      name="additionalComments"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any specific lighting concerns or additional information"
                      rows={4}
                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Garden Lighting'}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Why Choose Our Garden Lighting</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaPalette size={50} className="text-primary mb-3" />
          <h4>Creative Solutions</h4>
          <p>Customized lighting designs for your unique landscape</p>
        </div>
        <div className="col-md-4 text-center">
          <FaShieldAlt size={50} className="text-primary mb-3" />
          <h4>Professional Installation</h4>
          <p>Expert technicians ensure safe and efficient installation</p>
        </div>
        <div className="col-md-4 text-center">
          <FaWrench size={50} className="text-primary mb-3" />
          <h4>Quality Products</h4>
          <p>High-end lighting fixtures for long-lasting performance</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Contact Our Garden Lighting Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-primary mb-3" />
          <h4>Email</h4>
          <p>gardenlighting@landscapingpro.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-primary mb-3" />
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-primary mb-3" />
          <h4>Address</h4>
          <p>123 Main St, Anytown, ST 12345</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">What Our Clients Say</h2>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"The garden lighting installation exceeded our expectations! Beautiful work."</p>
            <h5>- John and Mary</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Their attention to detail and professionalism are unmatched. Highly recommended."</p>
            <h5>- Jane Doe</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"We're thrilled with the new garden lighting! It's transformed our outdoor space."</p>
            <h5>- Bob Smith</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GardenLightingInstallation;