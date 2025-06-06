const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts information',
      contact: {
        name: 'CSE 341 Student',
        url: 'https://github.com/PiusMukisa/cse341-contacts-api',
      },  
    },
    servers: [
      {
        url: 'https://cse341-n8r6.onrender.com',
        description: 'Development server',
      },
      {
        url: 'https://contacts-api-xxxx.onrender.com',
        description: 'Production server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;