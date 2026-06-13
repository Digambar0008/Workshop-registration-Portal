const express = require('express');
const router = express.Router();
const Enquiry = require('../Models/Enquiry');

router.post('/enquiry', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be 10 digits'
      });
    }
    
    const existingEnquiry = await Enquiry.findOne({ email });
    if (existingEnquiry) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered'
      });
    }
    
    const enquiry = new Enquiry({
      name,
      email,
      phone,
      workshop: 'AI & Robotics Summer Workshop'
    });
    
    await enquiry.save();
    
    res.status(201).json({
      success: true,
      message: 'Registration successful! We will contact you soon.',
      data: {
        id: enquiry._id,
        name: enquiry.name,
        email: enquiry.email
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiries'
    });
  }
});

router.get('/enquiry/:id', async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found'
      });
    }
    res.json({
      success: true,
      data: enquiry
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiry'
    });
  }
});

module.exports = router;