// Stores the active TCP connection object.
let connection;

function handleUserInput(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === 'j') {
    connection.write('Say: How ya doing?');
  } else if (data === 'k') {
    connection.write('Say: Cool beans~~');
  } else if (data == 'l') {
    connection.write('Say: Nein nein!');
  }
}
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

module.exports = {setupInput};