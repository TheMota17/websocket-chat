<template>
  <main>
    <div class="wrapper">
      <article class="chat-article">
        <section class="messages">
          <h1 class="messages__title">
            Messages
          </h1>
          <TheMessagesList :messages="messages" />
          <TheMessageForm @send-message="sendMessage" />
        </section>
        <aside class="users">
          <h1 class="users__title">Room: {{ user.roomName }}</h1>
          <ul class="users__list">
            <li v-for="user of usersNum" :key="user.num" class="users__item">
              {{ user.num }}. {{ user.name }}
            </li>
          </ul>
        </aside>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  middleware: ["auth"],
  methods: {
    sendMessage(message) {
      this.$socket.emit("newMessage", message, (data) => {
        if (typeof data === "string") {
          console.log(data);
        }
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    messages() {
      return this.$store.getters.messages;
    },
    users() {
      return this.$store.getters.users;
    },
    usersNum() {
      const users = this.users;

      return users.map((user) => {
        return {
          name: user.name,
          roomName: user.roomName,
          num: users.indexOf(user) + 1,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 1em;
}
</style>
