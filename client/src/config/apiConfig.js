// src/config/apiConfig.js
export const API_CONFIG = {
    development: 'http://localhost:5000/api',
    production: 'https://your-production-domain.com/api',
    staging: 'https://staging-api.yourdomain.com/api'
  };
  
  // In your api.js
  const BASE_URL = API_CONFIG[process.env.NODE_ENV] || API_CONFIG.development;