const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const referralRoutes = require('./routes/referralRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const database = require("./config/database")

database.connect();

// Use referral routes
app.use('/api', referralRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
