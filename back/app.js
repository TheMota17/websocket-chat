const io = require("socket.io")();

io.on("connection", (socket) => {
  console.log("Conn!");
});

module.exports = io;
