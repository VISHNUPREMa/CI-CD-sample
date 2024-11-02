// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the server will run on
const PORT = 3000;

// Define the homepage route
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

