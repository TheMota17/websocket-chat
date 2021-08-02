const io = require("socket.io")();
const Server = require("./server.js");

const server = new Server();

io.on("connection", (socket) => {
  socket.on("joinToRoom", (data, cb) => {
    if (!data.name || !data.roomName) {
      return cb("Not all data filling");
    }

    socket.join(data.roomName);

    server.addUser({
      id: socket.id,
      name: data.name,
      roomName: data.roomName,
    });

    io.to(data.roomName).emit(
      "updateUsers",
      server.getUsersByRoom(data.roomName)
    );

    io.to(data.roomName).emit("newMessage", {
      userId: socket.id,
      userName: data.name,
      userJoin: true,
      date: Date.now(),
    });

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
    const user = server.removeUser(socket.id);

    if (!user) {
      return;
    }

    io.to(user.roomName).emit(
      "updateUsers",
      server.getUsersByRoom(user.roomName)
    );
    io.to(user.roomName).emit("newMessage", {
      userId: user.id,
      userName: user.name,
      userLeft: true,
      date: Date.now(),
    });
  });
});

module.exports = io;
