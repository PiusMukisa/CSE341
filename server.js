const express = require('express');
const connectDB = require('./DB/Connection');
const contactsRoutes = require('./routes/contacts');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Welcome route
app.get('/', (req, res) => {
    console.log('Welcome route accessed');
    res.send('Welcome to The Contact List Database!');
});

// Use the contacts routes
app.use('/contacts', contactsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
    console.log(`You can access the server at http://localhost:${PORT} (if running locally)`);
});
