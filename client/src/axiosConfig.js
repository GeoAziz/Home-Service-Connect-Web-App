import axios from 'axios';

const axiosInstance = axios.create({
  // IMPORTANT: Ensure this matches your backend URL
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', 
  withCredentials: true,
  timeout: 10000 // 10 second timeout
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add token to every request
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Log each request for debugging
    console.log('Axios Request:', {
      url: config.url,
      method: config.method,
      headers: config.headers
    });

    return config;
  },
  error => Promise.reject(error)
);

// Add response interceptor for global error handling
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios Interceptor Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;