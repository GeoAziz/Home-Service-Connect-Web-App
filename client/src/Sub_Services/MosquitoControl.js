import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaMosquito,
  FaShieldAlt,
  FaSprayCan,
  FaLeaf,
  FaHome,
  FaTree,
  FaClipboardList,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

// Mosquito Control Services
const mosquitoServices = [
  {
    icon: <FaSprayCan size={50} className="text-danger" />,
    title: "Barrier Spray Treatment",
    description: "Comprehensive mosquito elimination",
    features: [
      "Immediate mosquito reduction",
      "Long-lasting protection",
      "Safe for pets and children"
    ]
  },
  {
    icon: <FaShieldAlt size={50} className="text-primary" />,
    title: "Preventive Protection",
    description: "Proactive mosquito prevention",
    features: [
      "Breeding site elimination",
      "Landscape modification",
      "Ongoing monitoring"
    ]
  },
  {
    icon: <FaMosquito size={50} className="text-warning" />,
    title: "Natural Repellent Solutions",
    description: "Eco-friendly mosquito control",
    features: [
      "Plant-based repellents",
      "Organic treatment options",
      "Environmentally safe"
    ]
  }
];

// Mosquito Control Packages
const controlPackages = [
  {
    title: "Basic Protection",
    price: 249,
    frequency: "Monthly",
    features: [
      "Single property treatment",
      "Basic barrier spray",
      "Initial assessment"
    ]
  },
  {
    title: "Comprehensive Defense",
    price: 449,
    frequency: "Bi-Monthly",
    features: [
      "Extensive property coverage",
      "Advanced barrier treatment",
      "Breeding site management",
      "Quarterly inspection"
    ]
  },
  {
    title: "Premium Protection",
    price: 649,
    frequency: "Quarterly",
    features: [
      "Full property ecosystem management",
      "Advanced natural repellent system",
      "Comprehensive pest analysis",
      "Seasonal adaptation strategy"
    ]
  }
];

// Validation Schema
const mosquitoControlSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  propertyType: Yup.string().required('Property type is required'),
  propertySize: Yup.number().positive('Property size must be positive').required('Property size is required')
});

// Initial Form Values
const initialValues = {
  name: '',
  email: '',
  phone: '',
  propertyType: '',
  propertySize: '',
  controlPackage: '',
  additionalComments: ''
};

// Form Submit Handler
const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    console.log('Mosquito Control Request:', values);
    alert('Your mosquito control request has been submitted successfully! Our team will contact you soon.');
    resetForm();
  } catch (error) {
    console.error('Submission Error:', error);
    alert('Submission failed. Please try again.');
  } finally {
    setSubmitting(false);
  }
};

const MosquitoControl = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mosquito-control-services container-fluid py-5 bg-light"
  >
    {/* Hero Section */}
    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="display-4 text-danger"
        >
          Professional Mosquito Control
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lead text-muted"
        >
          Comprehensive Protection for Your Property
        </motion.p>
      </div>
      <div className="col-md-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded shadow"
        >
          <FaMosquito size={80} className="text-danger mb-3" />
          <h3>Safe. Effective. Reliable.</h3>
          <p>Eliminating mosquito threats with precision</p>
        </motion.div>
      </div>
    </div>

    {/* Mosquito Control Services */}
    <div className="row mb-5">
      {mosquitoServices.map((service, index) => (
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
                  <FaClipboardList className="mr-2 text-danger" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>

    {/* Control Packages */}
    <div className="row mb-5 justify-content-center">
      <div className="col-12 text-center mb-4">
        <h2 className="text-danger">Mosquito Control Packages</h2>
        <p className="lead text-muted">Tailored Protection for Your Property</p>
      </div>
      {controlPackages.map((pkg, index) => (
        <div key={index} className="col-md-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="package-card text-center bg-white p-4 rounded shadow mb-4"
          >
            <h4 className="text-danger">{pkg.title}</h4>
            <p className="display-4 text-primary">${pkg.price}</p>
            <p className="text-muted">{pkg.frequency}</p>
            <ul className="list-unstyled">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  <FaLeaf className="mr-2 text-danger" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>

    {/* Mosquito Control Request Form */}
    <div className="row justify-content-center">
      <div className="col-md-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mosquito-control-form bg-white p-5 rounded shadow"
        >
          <h2 className="text-center mb-4 text-danger">
            Request Mosquito Control Service
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={mosquitoControlSchema}
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
                    <label>Mosquito Control Package</label>
                    <Field as="select" name="controlPackage" className="form-control">
                      <option value="">Select Control Package</option>
                      {controlPackages.map((pkg, index) => (
                        <option key={index} value={pkg.title}>
                          {pkg.title} - ${pkg.price} ({pkg.frequency})
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
                    placeholder="Describe any specific mosquito concerns or additional information"
                    rows={4}
                  />
                </div>

                <div className="row mt-4">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-danger btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Mosquito Control'}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="row mt-5">
      <div className="col-12 text-center mb-4">
        <h2 className="text-danger">What Our Clients Say</h2>
      </div>
      <div className="col-md-4">
        <div className="testimonial bg-white p-4 rounded shadow">
          <p>"Incredible service! No more mosquito problems in my backyard."</p>
          <h5>- Sarah Johnson</h5>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial bg-white p-4 rounded shadow">
          <p>"The team was professional and the results are amazing!"</p>
          <h5>- Mark Roberts</h5>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial bg-white p-4 rounded shadow">
          <p>"Eco-friendly solutions that actually work. Very satisfied."</p>
          <h5>- Emily Davis</h5>
        </div>
      </div>
    </div>

    {/* Contact Information */}
    <div className="row mt-5 bg-white p-5 rounded shadow">
      <div className="col-12 text-center mb-4">
        <h2 className="text-danger">Contact Our Mosquito Control Experts</h2>
      </div>
      <div className="col-md-4 text-center">
        <FaEnvelope size={50} className="text-primary" />
        <h4>Email</h4>
        <p>info@mosquitocontrol.com</p>
      </div>
      <div className="col-md-4 text-center">
        <FaPhone size={50} className="text-primary" />
        <h4>Phone</h4>
        <p>(123) 456-7890</p>
      </div>
      <div className="col-md-4 text-center">
        <FaMapMarkerAlt size={50} className="text-primary" />
        <h4>Location</h4>
        <p>1234 Mosquito Ave, Cityville</p>
      </div>
    </div>
  </motion.div>
);

export default MosquitoControl;
