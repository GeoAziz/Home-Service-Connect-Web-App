import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { 
  FaUser , 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash 
} from 'react-icons/fa';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user' // Default role
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await api.post('/auth/register', formData);
      toast.success('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      setServerError(error.response?.data?.message || 'Registration failed');
      toast.error(serverError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container register-container glassmorphism">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="text-center">Register</h2>
      
      {/* Role Selection */}
      <div className="text-center mb-4">
        <button 
          className={`btn ${formData.role === 'user' ? 'btn-primary' : 'btn-outline-primary'}`} 
          onClick={() => setFormData({ ...formData, role: 'user' })}
        >
          Register as User
        </button>
        <button 
          className={`btn ${formData.role === 'provider' ? 'btn-primary' : 'btn-outline-primary'}`} 
          onClick={() => setFormData({ ...formData, role: 'provider' })}
        >
          Register as Service Provider
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username"><FaUser  /> Username</label>
          <input 
            type="text" 
            className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email</label>
          <input 
            type="email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
 />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password"><FaLock /> Password</label>
          <div className="input-group">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
            />
            <div className="input-group-append">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-group">
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} 
              id="confirmPassword" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
            <div className="input-group-append">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>

        {serverError && <div className="alert alert-danger">{serverError}</div>}

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;