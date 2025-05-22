# CSE 341 - Contacts API

This project is a RESTful API for storing and retrieving contact information. It was created as part of the CSE 341 Web Services course at BYU-Idaho.

## Features

- GET, POST, PUT, and DELETE operations for contacts
- MongoDB database integration
- Interactive Swagger API documentation
- Deployed on Render

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and update with your MongoDB connection string
   ```
   cp .env.example .env
   ```
4. Start the server:
   ```
   npm start
   ```
   
## Development Mode

To run the server in development mode with automatic reloading:
```
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /contacts | Get all contacts |
| GET    | /contacts/:id | Get contact by ID |
| POST   | /contacts | Create a new contact |
| PUT    | /contacts/:id | Update a contact |
| DELETE | /contacts/:id | Delete a contact |

## Seed Data

You can seed the database with sample contacts by running:
```
node seed.js
```

## API Documentation

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## Required Fields for Contacts

- firstName (String)
- lastName (String)
- email (String)
- favoriteColor (String)
- birthday (Date)

## Deployment

The API is deployed on Render at:
```
https://contacts-api-xxxx.onrender.com
```

## Testing

You can test the API using the included `requests.rest` file with the REST Client extension in VS Code.