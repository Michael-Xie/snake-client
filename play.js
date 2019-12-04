/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", function handleUserInput(data) {
    if (data === '\u0003') {
      process.exit();
    }
  })
  return stdin;
}

setupInput();


const connect = require('./client');
console.log('Connecting ...');
connect();
