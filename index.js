// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set up the server to listen on a specific port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
