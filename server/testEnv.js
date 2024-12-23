
import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('.env file loaded successfully');
  console.log('MongoDB URI:', process.env.MONGODB_URI);
  console.log('Email User:', process.env.EMAIL_USER);
}