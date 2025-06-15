const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

const indexPath = 'P:/projects/node-app/index.js';
// console.log(path.basename(indexPath)); // Output: index.js

// console.log(os.platform());

// writeFileSync
// fs.writeFileSync('test.txt', 'Hello, World!');
// fs.writeFileSync('test.txt', 'Hello, Programmer!'); // replaces the content
// fs.appendFileSync('test.txt', '\nHello, again!'); // appends to the file

// readFileSync -> synchronous read
// const data = fs.readFileSync('test.txt', 'utf8');
// console.log(data);

// readFile -> asynchronous read
/*
fs.readFile('test.txt', (error, data) => {
    console.log('File read operation completed.');
    console.log(data.toString());
});
console.log('File read operation initiated.');
*/

// EventEmitter example
const emitter = new EventEmitter();
// Register a listener for the 'bellRing' event
emitter.on('bellRing', () => {
    console.log('The bell has rung!');
});
// raise an event
emitter.emit('bellRing', 'Bell has rung!');
