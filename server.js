// Load environment variables first, before any other code
require('dotenv').config();

const express = require('express');
const connectDB = require('./DB/Connection');
const contactsRoutes = require('./routes/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();

// Log environment variables (for debugging)
console.log('MongoDB URI defined:', process.env.MONGODB_URI ? 'Yes' : 'No');
console.log('PORT defined:', process.env.PORT ? 'Yes' : 'No');

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
    res.send('Hello World');
});

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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

// For production on Render, bind to 0.0.0.0 instead of localhost
app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Server is accepting connections from all network interfaces (0.0.0.0)');
});