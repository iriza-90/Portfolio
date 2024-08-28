const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 


app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // type : 'OAuth2',
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });




    // Mail options
    let mailOptions = {
        from: `"${name}" <${email}>`, 
        to: process.env.EMAIL_USER, 
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

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
