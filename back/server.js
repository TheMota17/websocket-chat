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

  removeUser(socketId) {
    const user = this.getUserById(socketId);

    if (user) {
      this.users = this.users.filter((user) => user.id !== socketId);
    }

    return user || false;
  }
}

module.exports = Server;
