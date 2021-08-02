const io = require("socket.io")();
const Server = require("./server.js");

const server = new Server();

io.on("connection", (socket) => {
  socket.on("joinToRoom", (data, cb) => {
    if (!data.login || !data.roomName) {
      return cb("Not all data filling");
    }

    socket.join(data.roomName);

    server.addUser({
      name: data.login,
      roomName: data.roomName,
    });

    io.to(data.roomName).emit(
      "updateUsers",
      server.getUsersByRoom(data.roomName)
    );

    cb({
      name: data.login,
      roomName: data.roomName,
    });
  });
});

module.exports = io;
