const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Create transporter for nodemailer
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS || 'your-app-password' // Replace with your app password
  }
});

// API route to send email
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: 'ashron@email.com', // Ronit's email
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFFFFA; color: #000103;">
        <div style="background-color: #000103; color: #FFFFFA; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="margin: 0; text-align: center;">New Contact Form Submission</h2>
        </div>
        
        <div style="background-color: #333138; color: #FFFFFA; padding: 20px; border-radius: 10px; margin-bottom: 15px;">
          <h3 style="margin: 0 0 10px 0; color: #FF312E;">Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #515052; color: #FFFFFA; padding: 20px; border-radius: 10px;">
          <h3 style="margin: 0 0 15px 0; color: #FF312E;">Message</h3>
          <p style="line-height: 1.6; margin: 0;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #FF312E; border-radius: 10px;">
          <p style="margin: 0; color: #FFFFFA; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});