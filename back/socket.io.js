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
      id: socket.id,
      name: data.login,
      roomName: data.roomName,
    });

    io.to(data.roomName).emit(
      "updateUsers",
      server.getUsersByRoom(data.roomName)
    );

    cb({
      id: socket.id,
      name: data.login,
      roomName: data.roomName,
    });
  });

  socket.on("newMessage", (data, cb) => {
    const message = data.trim();

    if (message.length <= 0) {
      return cb("Not correct message");
    }

    const user = server.getUserById(socket.id);

    io.to(user.roomName).emit("newMessage", {
      userId: user.id,
      userName: user.name,
      text: message,
      date: Date.now(),
    });

    cb();
  });

  socket.on("disconnect", (reason) => {
    console.log("Disconnect");
  });
});

module.exports = io;
