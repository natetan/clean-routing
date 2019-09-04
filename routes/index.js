/**
 * This Router is the "container" for the middleware on this route.
 * That means the middleware and routes attached to this Router will 
 * be run as long as we are accessing a route that starts at the root path, 
 * which always happens!
 */

const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

routes.get('/', (req, res) =>  {
  res.status(200).json({message: 'Connected!'});
});

routes.use('/models', models);
routes.use('/cars', cars);

module.exports = routes;