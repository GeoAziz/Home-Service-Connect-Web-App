import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
 // Handle token expiration
 if (error.response && error.response.status === 401) {
  // Clear tokens and redirect to login
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  
  // Redirect to login (you might need to use a custom event or history)
  window.location.href = '/login';
}
return Promise.reject(error);
}
);

// Add fetchSolarProviders function
export const fetchSolarProviders = async () => {
  try {
    const response = await api.get('/solar-financing-providers');
    return response.data;
  } catch (error) {
    console.error('Error fetching solar providers:', error);
    throw error;
  }
};

export default api;