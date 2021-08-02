class Server {
  constructor() {
    this.users = [];
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
