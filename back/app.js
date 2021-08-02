const io = require("socket.io")();

io.on("connection", (socket) => {
  socket.on("userJoin", (data, cb) => {
    cb("Hellow");
  });
});

module.exports = io;
