// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config(); // For environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Handle cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Route to handle contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP with Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // type : 'OAuth2',
            user: 'irizajoella2006@gmail.com', // Your email address
            pass: 'ihms@J1976', // Your email password
        },
    });

    // Mail options
    let mailOptions = {
        from: `"${name}" <${email}>`, // The user's email will appear as the sender
        to: 'irizajoella2006@gmail.com', // Your email (where you receive the message)
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message from your contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    // Send mail
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
