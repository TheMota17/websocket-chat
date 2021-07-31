const io = require("socket.io")();

const PORT = process.env.PORT || 3333;

io.on("connection", (socket) => {
  console.log("Conn!");
});

io.listen(PORT);
