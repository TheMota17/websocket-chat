class Server {
  constructor() {
    this.users = [];
  }

  getUserById(socketId) {
    return this.users.find((user) => user.id === socketId);
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUsersByRoom(room) {
    return this.users.filter((user) => user.roomName === room);
  }
}

module.exports = Server;
