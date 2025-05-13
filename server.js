const express = require('express');
const connectDB = require('./DB/Connection'); // Import the connectDB function
const app = express();

connectDB(); // Call the function to connect to MongoDB

const PORT = process.env.PORT || 3000; // Changed 'Port' to 'PORT'
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
    res.send('Welcome to The Contact List Database!');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
