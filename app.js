/**
 * This is a Scotch tutorial taken from https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
 */

 // Constants
const PORT = process.env.PORT || 5000;

 // Our dependencies 
const express = require('express');
const routes = require('./routes');

// Our express app
const app = express();

// Connect all of our routes to our application
app.use('/', routes);

// Listen on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});