// server/routes/contact.js

const express = require('express');
const router = express.Router();
const transporter = require('../config/nodemailer'); // Adjust the path if necessary

router.post('/connect', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Send email notification
  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'New Message',
    text: `Hello ${name}, thank you for your message. We will get back to you soon.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({ message: 'Email sent successfully' });
    }
  });
});

module.exports = router;