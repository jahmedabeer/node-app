// This is how Node.js wraps modules
// (function(exports, require, module, __filename, __dirname){

const people = ['Alice', 'Bob', 'Charlie'];
const name = 'John Doe';

// console.log(module);

// module.exports = people;
module.exports = {
    // ppl: people,
    // userName: name,
    people,
    name,
};

// return module.exports;

// })
