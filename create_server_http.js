const http = require('http');

// const server = http.createServer();

//
const server = http.createServer((req, res) => {
    // res.write('HTTP/1.1 200 OK\n');
    // res.end();
    if (req.url === '/') {
        res.write('Welcome to the home page!');
    } else if (req.url === '/about') {
        res.write('Welcome to the about page!');
    } else {
        res.write('Page not found');
    }
    res.end();
});

server.listen(3000);

console.log('Server is listening on port 3000');
