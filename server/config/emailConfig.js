import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const createOutlookTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    transporter.verify((error) => {
      if (error) {
        console.error('Outlook SMTP Transporter Verification Error:', {
          message: error.message,
          code: error.code
        });
      } else {
        console.log('Outlook SMTP Transporter is ready');
      }
    });

    return transporter;
  } catch (error) {
    console.error('Error creating Outlook email transporter:', error);
    return null;
  }
};

export const outlookTransporter = createOutlookTransporter();