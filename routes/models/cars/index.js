/**
 * The only new thing here is the mergeParams: true option passed when creating the Router. 
 * This tells the Router to merge parameters that are created on this set of routes with the 
 * ones from its parents. Without this, we wouldn't have access to the modelId from any of the 
 * routes connected to this Router.
 */

const cars = require('express').Router({ mergeParams: true });
const all = require('./all');

cars.get('/', all);

module.exports = cars;