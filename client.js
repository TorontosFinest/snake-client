const net = require("net");
const { IP, port } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("server says", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AA");
  });

  return conn;
};

module.exports = { connect };
