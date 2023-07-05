const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// handle user input from stdin
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

// Call the setupInput function to start listening for user input
const input = setupInput();
