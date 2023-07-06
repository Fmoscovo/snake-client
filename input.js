let connection;
let intervalId;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    stopGameLoop();
    process.exit();
  }
};

const startGameLoop = (conn) => {
  intervalId = setInterval(() => {}, 200);

  console.log("Game loop started");
};

const stopGameLoop = () => {
  clearInterval(intervalId);
  console.log("Game loop stopped");
};

module.exports = {
  setupInput,
  startGameLoop,
  stopGameLoop,
};
