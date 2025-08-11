// Exmple for Blocking and Async code in JavaScript/

const fs = require('fs');

console.log(" 1.Start ");
console.log(" 2. writting file...");

const data = fs.writeFileSync('example.txt', 'Hello, World! this is a test file.');


console.log("File written successfully!");



