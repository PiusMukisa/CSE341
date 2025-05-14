const express = require('express');
const connectDB = require('./DB/Connection');
const contactsRoutes = require('./routes/contacts');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to The Contact List Database!');
});

// Use the contacts routes
app.use('/contacts', contactsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});