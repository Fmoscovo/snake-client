const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: FIL");
  });

  // event handling for input
  const handleUserInput = function (key) {
    switch (key) {
      case "w":
        conn.write("Move: up");
        break;
      case "s":
        conn.write("Move: down");
        break;
      case "a":
        conn.write("Move: left");
        break;
      case "d":
        conn.write("Move: right");
        break;
      default:
        break;
    }
  };

  // input handling
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return conn;
};

module.exports = { connect };

// Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
