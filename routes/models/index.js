const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const findObject = require('../../utils/findObject');

models.get('/', all);
models.get('/:modelId', single);
models.use('/:modelId/cars', cars);

/**
 * When we try to see data about a model that doesn't exist, 
 * like /models/200, we should get a 404 error.
 * Instead of implementing this in every single route handler we have, 
 * let's create some middleware that will do it for us. We can add some 
 * middleware onto our routers that will only get called when those routes 
 * are hit. Let's add a param middleware to our models Router to make sure 
 * the model exists. If it doesn't, we want to return a 404.
 */

// This middleware will be called whenever modelId is present in the URL.
// Value refers to the value of the param passed in. 
// In this case, it's the modelId.
// Note: Commented out due to the refactor.

// models.param('modelId', (req, res, next, value) => {
//   const model = data.models.find(m => m.id === (value * 1));
//   if (model) {
//     req['model'] = model;
//     next();
//   } else {
//     res.status(404).send('Invalid model ID');
//   }
// });

models.param('modelId', findObject('model'));

module.exports = models;