require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Form received:', name, email, subject);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });
    console.log('Email sent successfully!');
    res.json({ success: true });
  } catch (error) {
    console.error('FULL ERROR:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email configured as: ${process.env.EMAIL}`);
});