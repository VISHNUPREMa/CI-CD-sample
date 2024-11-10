// Import the Express module
const express = require('express');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define the port the server will run on
const PORT = 3000;

// Set the views folder and view engine (EJS)
app.set('views', path.join(__dirname, 'views')); // Set views folder
app.set('view engine', 'ejs'); // Use EJS as the templating engine

// Define the homepage route
app.get('/', (req, res) => {
  res.render('home'); // Renders home.ejs from the views folder
});



// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
