// client/src/api/index.js
import axios from 'axios';

// Create an axios instance with enhanced configuration
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request Interceptor
API.interceptors.request.use(
  (config) => {
    // Add authentication token if exists
    const token = localStorage.getItem('token') ?? localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Logging for debugging
    console.log('Request Interceptor:', {
      url: config.url,
      method: config.method,
      headers: config.headers
    });

    return config;
  }, 
  (error) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
API.interceptors.response.use(
  (response) => {
    // Logging successful responses
    console.log('Response Interceptor:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    // Comprehensive error handling
    console.error('Response Interceptor Error:', {
      errorResponse: error.response,
      errorMessage: error.message,
      errorConfig: error.config
    });

    // Handle token expiration
    if (error.response && error.response.status === 401) {
      // Clear tokens and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    // Handle specific error scenarios
    if (error.response) {
      console.error('Server Error Response:', {
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      console.error('No Response Received:', error.request);
    } else {
      console.error('Request Setup Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Backend Verification Endpoint
export const verifyToken = async () => {
  try {
    const response = await API.get('/auth/verify');
    return response.data;
  } catch (error) {
    console.error('Token Verification Error:', error);
    throw error;
  }
};

// Authentication-related methods
export const registerUser = async (userData) => {
  try {
    console.log('Registration Request:', {
      userData: {
        ...userData,
        password: '****' // Mask password for security
      }
    });

    const response = await API.post('/auth/register', userData);

    console.log('Registration Response:', {
      status: response.status,
      data: response.data
    });

    // Store tokens securely
    localStorage.setItem('token', response.data.tokens.accessToken);
    localStorage.setItem('accessToken', response.data.tokens.accessToken);
    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  } catch (error) {
    console.error('Registration Error:', {
      errorResponse: error.response,
      errorRequest: error.request,
      errorMessage: error.message
    });

    // Throw specific error details
    throw error.response?.data || { 
      message: 'Registration failed', 
      error: error.message 
    };
  }
};

// Login Method
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    
    // Store tokens and user data
    localStorage.setItem('token', response.data.tokens.accessToken);
    localStorage.setItem('accessToken', response.data.tokens.accessToken);
    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error.response?.data || { 
      message: 'Login failed', 
      error: error.message 
    };
  }
};

// Logout Method
export const logoutUser = () => {
  try {
    // Clear all stored tokens and user data
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Logout Error:', error);
  }
};

// Refresh Token Method
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await API.post('/auth/refresh-token', { refreshToken });
    
    // Update tokens
    localStorage.setItem('token', response.data.tokens.accessToken);
    localStorage.setItem('accessToken', response.data.tokens.accessToken);

    return response.data;
  } catch (error) {
    console.error('Token Refresh Error:', error);
    
    // If refresh fails, logout user
    logoutUser();
    window.location.href = '/login';
    
    throw error;
  }
};

export default API;