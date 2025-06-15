const { isEmpty } = require('lodash');
const userObj = require('./ppl');

const emptyObj = {};
console.log(isEmpty(emptyObj)); // true

console.log(userObj.people);
