# CSE 341: Contacts API (Week 1)

This project is a RESTful API for storing and retrieving contact information using Node.js, Express, and MongoDB.

## Project Structure

```
contacts-api/
├── DB/
│   └── Connection.js     # MongoDB connection setup
├── models/
│   └── contact.js        # Contact schema and model
├── routes/
│   └── contacts.js       # Contact API routes
├── .env                  # Environment variables (not in Git)
├── package.json          # Project dependencies
├── requests.rest         # REST client requests for testing
├── seed.js               # Script to seed initial data
├── server.js             # Main application file
└── README.md             # Project documentation (this file)
```

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   HOST=localhost
   ```

3. Seed the database with initial contacts:
   ```
   node seed.js
   ```

4. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /contacts` - Get all contacts
- `GET /contacts/:id` - Get a single contact by ID

## Deployment to Render

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Add the environment variables (MONGODB_URI, PORT, HOST) in Render's dashboard
4. Deploy the application

## Testing

Use the `requests.rest` file to test the API endpoints. If you're using VS Code, you can use the REST Client extension to execute these requests directly from the editor.

## Notes

- This is Part 1 of a two-week project.
- Week 1 focuses on setting up the project, connecting to MongoDB, and implementing GET endpoints.
- Week 2 will add POST, PUT, and DELETE endpoints, as well as Swagger documentation.