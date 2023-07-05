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
      case "1":
        conn.write("Say: Chomp! Chomp!");
        break;
      case "2":
        conn.write("Say: I'm a sneaky snake!");
        break;
      case "3":
        conn.write("Say: Hiss! Hiss!");
        break;
      case "4":
        conn.write("Say: Cohort 26 rocks!");
        break;
      case "5":
        conn.write("Say: MOVE! ");
        break;
      case "6":
        conn.write("Say: Hi friend!");
        break;
      // Add more cases for other keys and messages
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
