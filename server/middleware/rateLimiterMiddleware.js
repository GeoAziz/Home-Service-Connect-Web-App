import rateLimit from 'express-rate-limit';

export const rateLimiter = (maxRequests, windowMs) => {
  return rateLimit({
    windowMs: windowMs * 1000, // Convert to milliseconds
    max: maxRequests, // Limit each IP to maxRequests requests per windowMs
    message: {
      status: 'error',
      message: 'Too many requests, please try again later'
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers 
  });
};