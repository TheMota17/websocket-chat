export const state = () => ({
  user: null,
  users: [],
  messages: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUsers(state, users) {
    state.users = users;
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message);
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  },
};
