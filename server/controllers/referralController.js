const Referral = require('../models/Referral');
const nodemailer = require('nodemailer');

exports.submitReferral = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save referral data to the database
    const referral = new Referral({ name, email, phone, message });
    await referral.save();

    // Send referral email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Referral Received',
      text: `Thank you for your referral, ${name}! We have received your message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending referral email' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Referral submitted successfully' });
    });
  } catch (error) {
    console.error('Error saving referral:', error);
    res.status(500).json({ error: 'Error saving referral' });
  }
};
