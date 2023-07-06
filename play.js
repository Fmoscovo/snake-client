const { connect } = require("./client");
const { setupInput, startGameLoop, stopGameLoop } = require("./input");

console.log("Connecting...");
const conn = connect();

setupInput(conn);
startGameLoop(conn);
