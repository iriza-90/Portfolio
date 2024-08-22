require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Ensure the required fields are present
  if (!name || !email || !message) {
    return res.status(400).send('Please fill in all fields');
  }

  // Configure nodemailer to use Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Your Gmail account
      pass: process.env.EMAIL_PASS   // Your App Password
    }
  });

  // Email options
  const mailOptions = {
    from: email,  // The sender's email (the user who filled out the form)
    to: process.env.EMAIL_TO,  // Your email (where you receive the messages)
    subject: `Contact form submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Message sent successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
