const mongoose = require('mongoose');

mongoose.set('debug', true);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mukisapius2004:pius2004@cluster0.rzdjdud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ Connected to MongoDB')
  } catch (err) {
    console.error('❌ Connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;