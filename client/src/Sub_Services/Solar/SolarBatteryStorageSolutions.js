import React, { Suspense, lazy } from 'react'; // Import Suspense for React.lazy
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaVideo, 
  FaEnvelope, 
  FaRobot, 
  FaHandshake,
  FaMoneyBillWave,
  FaClipboardCheck
} from 'react-icons/fa';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger">
          Something went wrong. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

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

  // Comprehensive Validation Schema
  const consultationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters')
      .required('Name is required'),
    
    email: Yup.string()
      .trim()
      .email('Please enter a valid email')
      .required('Email is required')
      .lowercase(),
    
    phone: Yup.string()
      .trim()
      .matches(/^(\+\d{1,2}\s?)?(\d{10})$/, 'Invalid phone number')
      .required('Phone number is required'),
    
    propertyType: Yup.string()
      .oneOf(['residential', 'commercial', 'industrial'], 'Invalid property type')
      .required('Property type is required'),
    
    communicationPreference: Yup.string()
      .oneOf(['phone', 'video', 'email'], 'Invalid communication method')
      .required('Communication method is required'),
    
    additionalDetails: Yup.string()
      .max(500, 'Details must be less than 500 characters')
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

  // Enhanced Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      setSubmitting(true);
      
      // Simulate API call with error handling
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Consultation Request:', values);
      
      // Reset form and show success
      resetForm();
      setStatus({ success: 'Request submitted successfully! Our team will contact you soon.' });
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ 
        error: 'Submission failed. Please check your information and try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ErrorBoundary>
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
                {({ 
                  isSubmitting, 
                  errors, 
                  touched, 
                  status 
                }) => (
                  <Form>
                    <h3 className="text-center mb-4">
                      <FaClipboardCheck className="mr-2" />
                      Request Solar Consultation
                    </h3>

                    {/* Status Messages */}
                    {status && status.success && (
                      <div className="alert alert-success">
                        {status.success}
                      </div>
                    )}
                    {status && status.error && (
                      <div className="alert alert-danger">
                        {status.error}
                      </div>
                    )}

                    {/* Name Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="name">Full Name</label>
                      <Field 
                        id="name"
                        name="name" 
                        type="text" 
                        className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your Full Name"
                        aria-describedby="nameHelp"
                      />
                      <ErrorMessage 
                        name="name" 
                        component="div" 
                        className="invalid-feedback" 
                       />
                    </div>

                    {/* Email Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email Address</label>
                      <Field 
                        id="email"
                        name="email" 
                        type="email" 
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        placeholder="Your Email"
                      />
                      <ErrorMessage 
                        name="email" 
                        component="div" 
                        className="invalid-feedback" 
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="phone">Phone Number</label>
                      <Field 
                        id="phone"
                        name="phone" 
                        type="text" 
                        className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                        placeholder="Your Phone Number"
                      />
                      <ErrorMessage 
                        name="phone" 
                        component="div" 
                        className="invalid-feedback" 
                      />
                    </div>

                    {/* Property Type Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="propertyType">Property Type</label>
                      <Field 
                        as="select" 
                        id="propertyType"
                        name="propertyType"
                        className={`form-control ${touched.propertyType && errors.propertyType ? 'is-invalid' : ''}`}
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </Field>
                      <ErrorMessage 
                        name="propertyType" 
                        component="div" 
                        className="invalid-feedback" 
                      />
                    </div>

                    {/* Communication Preference Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="communicationPreference">Preferred Communication Method</label>
                      <Field 
                        as="select" 
                        id="communicationPreference"
                        name="communicationPreference"
                        className={`form-control ${touched.communicationPreference && errors.communicationPreference ? 'is-invalid' : ''}`}
                      >
                        <option value="">Select Preference</option>
                        <option value="phone">Phone Call</option>
                        <option value="video">Video Consultation</option>
                        <option value="email">Email</option>
                      </Field>
                      <ErrorMessage 
                        name="communicationPreference" 
                        component="div" 
                        className="invalid-feedback" 
                      />
                    </div>

                    {/* Additional Details Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="additionalDetails">Additional Information</label>
                      <Field 
                        as="textarea" 
                        id="additionalDetails"
                        name="additionalDetails"
                        className="form-control" 
                        placeholder="Any additional details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
}

// Lazy load component
export default SolarConnectPlatform;
