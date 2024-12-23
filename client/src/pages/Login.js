import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { 
  FaGoogle, 
  FaFacebook, 
  FaApple, 
  FaEnvelope, 
  FaLock,
  FaEye,
  FaEyeSlash 
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import the CSS file for styling

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); // Destructure login method from AuthContext

  // State Management
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear specific field errors
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Social Login Handlers
  const handleSocialLogin = async (platform) => {
    try {
      window.location.href = `${api.defaults.baseURL}/auth/${platform}`;  // Redirect to social login
    } catch (error) {
      toast.error(`${platform} login failed`);
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous errors
    setErrors({});

    // Validate Form
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Make login API call
      const response = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Destructure response
      const { token, user } = response.data;

      // Use login method from AuthContext
      login(user, token);

      // Show success toast
      toast.success('Login Successful!', {
        position: "top-right",
        autoClose: 2000,
      });

      // Determine redirect path
      const from = location.state?.from?.pathname || '/dashboard';
      
      // Navigate to the intended page or dashboard
      navigate(from, { replace: true });

    } catch (error) {
      console.error('Login Error:', error);

      // Handle errors based on response
      if (error.response) {
        const errorMessage = error.response.data.message || 'Login failed';
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000
        });

        // Set specific field errors if provided by backend
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      } else if (error.request) {
        // No response from server
        toast.error('No response from server. Please check your connection.', {
          position: "top-right",
          autoClose: 3000 });
      } else {
 // General error
        toast.error('An unexpected error occurred', {
          position: "top-right",
          autoClose: 3000
        });
      }
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="glass-form">
        <h2 className="text-center text-white mb-4">Welcome Back</h2>
        
        {/* Social Login */}
        <div className="glass-social-login">
          <button 
            type="button"
            className="glass-social-btn"
            onClick={() => handleSocialLogin('google')}
          >
            <FaGoogle />
          </button>
          <button 
            type="button"
            className="glass-social-btn"
            onClick={() => handleSocialLogin('facebook')}
          >
            <FaFacebook />
          </button>
          <button 
            type="button"
            className="glass-social-btn"
            onClick={() => handleSocialLogin('apple')}
          >
            <FaApple />
          </button>
        </div>

        <div className="glass-divider">or</div>

        {/* Email Input */}
        <input
          type="email"
          className={`glass-input ${errors.email ? 'is-invalid' : ''}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        {errors.email && (
          <div className="glass-error">{errors.email}</div>
        )}

        {/* Password Input */}
        <div className="position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className={`glass-input ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button 
            type="button" 
            className="position-absolute end-0 top-50 translate-middle-y bg-transparent border-0 text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <div className="glass-error">{errors.password}</div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          className="glass-btn mt-3" 
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {/* Registration Link */}
        <Link to="/register" className="glass-link">
          Don't have an account? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
