# Node.js

## What is Node.js?

Node.js is a JavaScript runtime that lets you run JavaScript code outside of web browsers. It's built on Chrome's V8 JavaScript engine.

## Simple Explanation

- **Single Language**: You can use JavaScript for both frontend and backend development

## How web servers work?

- [Cpu intensive task: client -> server](https://prnt.sc/wEyHiLd4wkn4)
- [I/O intensive task: client -> server -> db](https://prnt.sc/ToL8-WWChRaQ)
- Node.js handles I/O operations efficiently using an event-driven, [non-blocking I/O model](https://prnt.sc/Bp9USiIB9yTr). This allows it to handle many connections simultaneously without blocking the execution of other code.
- Node.js isn't suitable for CPU-intensive tasks like image processing or video encoding, as it can block the event loop and slow down the server.


## Getting Started

1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Check installation: `node --version`
3. Create a simple app: `console.log('Hello, Node.js!')`
4. Run it: `node app.js`

