const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('debug', true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;