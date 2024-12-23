import nodemailer from 'nodemailer';
import logger from './logger.js';

class EmailService {
  constructor() {
    this.transporter = this.createTransporter();
  }

  createTransporter() {
    try {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_APP_PASSWORD
        },
        tls: {
          ciphers: 'TLSv1.2',
          rejectUnauthorized: false
        }
      });
    } catch (error) {
      logger.error('Email Transporter Creation Failed', error);
      return null;
    }
  }

  async sendContactNotification(contactData) {
    try {
      if (!this.transporter) {
        throw new Error('Email transporter not initialized');
      }

      const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.RECEIVING_EMAIL || process.env.GMAIL_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          <p><strong>Message:</strong> ${contactData.message}</p>
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      logger.info('Contact notification email sent', { 
        messageId: info.messageId 
      });

      return info;
    } catch (error) {
      logger.error('Failed to send contact notification email', error);
      throw error;
    }
  }
}

export default new EmailService();