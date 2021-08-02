export const state = () => ({
  user: null,
  users: ["JackS", "TheMota", "lalal", "Lol"],
  messages: [
    {
      id: 1,
      userName: "Mota",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto explicabo earum vel quas praesentium incidunt ipsam, dolorum ipsa et dolore tempore est accusamus libero eaque sequi enim veritatis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto explicabo earum vel quas praesentium incidunt ipsam, dolorum ipsa et dolore tempore est accusamus libero eaque sequi enim veritatis suscipit?",
      date: Date.now(),
    },
    {
      id: 2,
      userName: "Mota",
      userLeft: true,
      date: Date.now(),
    },
    {
      id: 3,
      userName: "Mota",
      userJoin: true,
      date: Date.now(),
    },
    {
      id: 4,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
    {
      id: 5,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
    {
      id: 6,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
    {
      id: 7,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
    {
      id: 8,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
    {
      id: 9,
      userName: "Mota",
      text: "Hello guys! how are you ?",
      date: Date.now(),
    },
  ],
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

export const getters = {
  userExist: (state) => Boolean(state.user),
  user: (state) => state.user,
  messages: (state) => state.messages,
  users: (state) => state.users,
};
