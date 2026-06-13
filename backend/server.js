const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', enquiryRoutes);  

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove_workshop')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });