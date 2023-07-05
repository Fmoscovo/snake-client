const { connect } = require("./client");

console.log("Connecting ...");
connect();

// //Instruction
// Print a message to the screen when the connection is successfully established.

// To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice.