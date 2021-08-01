const io = require("socket.io")();

const PORT = 443;

io.on("connection", (socket) => {
  console.log("Conn!");
});

io.listen(PORT);
