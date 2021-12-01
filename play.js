const connect = require("./client");
// establishes a connection with the game server

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (input) {
  const stdout = process.stdout;
  if (input === "\u0003") {
    stdout.write("Exited Game. Adios!\n");
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput(connect);
