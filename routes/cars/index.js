const cars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');


cars.get('/', all);
cars.get('/:carId', single);

// Value refers to the value of the param passed in. 
// In this case, it's the carId
// Note: commented out due to refactor

// cars.param('carId', (req, res, next, value) => {
//   const car = data.cars.find(c => c.id === (value * 1));

//   if (car) {
//     req['car'] = car;
//     next();
//   } else {
//     res.status(404).send('Invalid car ID');
//   }
// });

cars.param('carId', findObject('car'));

module.exports = cars;