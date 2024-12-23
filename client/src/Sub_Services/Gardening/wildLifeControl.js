import React from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  //FaAnimalShelter,
  FaPaw,
  FaTree,
  FaHome,
  FaShieldAlt,
  FaLeaf,
  FaBug,
  FaWrench,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const WildlifeControl = () => {
  // Wildlife Control Services
  const wildlifeServices = [
    {
      icon: <FaPaw size={50} className="text-success" />,
      title: "Humane Animal Removal",
      description: "Safe and ethical wildlife relocation",
      features: [
        "Live trapping techniques",
        "Minimal stress for animals",
        "Professional handling"
      ]
    },
    {
      icon: <FaHome size={50} className="text-primary" />,
      title: "Property Protection",
      description: "Prevent wildlife intrusions",
      features: [
        "Entry point sealing",
        "Structural reinforcement",
        "Preventive barriers"
      ]
    },
    {
      icon: <FaTree size={50} className="text-warning" />,
      title: "Ecosystem Management",
      description: "Balanced wildlife interaction",
      features: [
        "Habitat modification",
        "Ecological assessments",
        "Wildlife deterrent strategies"
      ]
    }
  ];

  // Wildlife Control Packages
  const controlPackages = [
    {
      title: "Basic Wildlife Protection",
      price: 499,
      features: [
        "Single species removal",
        "Initial property inspection",
        "Basic exclusion techniques",
        "One follow-up visit"
      ]
    },
    {
      title: "Comprehensive Wildlife Management",
      price: 999,
      features: [
        "Multiple species control",
        "Detailed property assessment",
        "Advanced exclusion methods",
        "Quarterly monitoring",
        "Preventive recommendations"
      ]
    },
    {
      title: "Premium Ecosystem Solution",
      price: 1999,
      features: [
        "Full property wildlife audit",
        "Complete habitat modification",
        "Advanced deterrent systems",
        "Monthly professional inspections",
        "Emergency response",
        "Ongoing ecological consulting"
      ]
    }
  ];

  // Validation Schema
  const wildlifeControlSchema = Yup.object().shape({
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
    
    wildlifeIssue: Yup.string()
      .required('Wildlife issue description is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    wildlifeIssue: '',
    controlPackage: '',
    additionalComments: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Wildlife Control Request:', values);
      alert('Your wildlife control request has been submitted successfully!');
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
      className="wildlife-control-services container-fluid py-5 bg-light"
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
            Professional Wildlife Control
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Humane Solutions for Wildlife Challenges
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaPaw size={80} className="text-success mb-3" />
            <h3>Safe. Ethical. Professional.</h3>
            <p>Protecting both wildlife and your property</p>
          </motion.div>
        </div>
      </div>

      {/* Wildlife Control Services */}
      <div className="row mb-5">
        {wildlifeServices.map((service, index) => (
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
                    <FaLeaf className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Wildlife Control Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Wildlife Control Packages</h2>
          <p className="lead text-muted">Comprehensive Wildlife Management</p>
        </div>
        {controlPackages.map((pkg, index) => (
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
                    <FaWrench className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Wildlife Control Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}className="wildlife-control-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-success">
              Request Wildlife Control Services
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={wildlifeControlSchema}
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

                  <div className="form-group mb-3">
                    <label>Wildlife Issue Description</label>
                    <Field 
                      name="wildlifeIssue"
                      as="textarea"
                      className={`form-control ${touched.wildlifeIssue && errors.wildlifeIssue ? 'is-invalid' : ''}`}
                      placeholder="Describe the wildlife issue you're experiencing"
                      rows={4}
                    />
                    <ErrorMessage name="wildlifeIssue" component="div" className="invalid-feedback" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Wildlife Control Package</label>
                    <Field 
                      as="select"
                      name="controlPackage"
                      className="form-control"
                    >
                      <option value="">Select Wildlife Control Package</option>
                      {controlPackages.map((pkg, index) => (
                        <option key={index} value={pkg.title}>
                          {pkg.title} - ${pkg.price}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="form-group mb-3">
                    <label>Additional Comments</label>
                    <Field 
                      name="additionalComments"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any specific concerns or additional information"
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
                        {isSubmitting ? 'Submitting...' : 'Request Wildlife Control'}
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
          <h2 className="text-success">Why Choose Our Wildlife Control</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaShieldAlt size={50} className="text-success mb-3" />
          <h4>Professional Expertise</h4>
          <p>Trained and certified wildlife control specialists</p>
        </div>
        <div className="col-md-4 text-center">
          <FaLeaf size={50} className="text-success mb-3" />
          <h4>Humane Solutions</h4>
          <p>Safe and non-toxic methods for wildlife removal</p>
        </div>
        <div className="col-md-4 text-center">
          <FaWrench size={50} className="text-success mb-3" />
          <h4>Effective Results</h4>
          <p>Long-term solutions for wildlife control and prevention</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Contact Our Wildlife Control Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-success mb-3" />
          <h4>Email</h4>
          <p>wildlifecontrol@wildlifeexperts.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-success mb-3" />
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-success mb-3" />
          <h4>Address</h4>
          <p>123 Main St, Anytown, ST 12345</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">What Our Clients Say</h2>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"The wildlife control service was prompt and professional. Highly recommended."</p>
            <h5>- John Doe</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Their humane approach to wildlife removal was impressive. We're very satisfied."</p>
            <h5>- Jane Smith</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"We were amazed by the effectiveness of their wildlife control methods. Great job!"</p>
            <h5>- Bob Johnson</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WildlifeControl;