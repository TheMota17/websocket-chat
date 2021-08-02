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
          <h1 class="users__title">Room: Hello World!</h1>
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
    sendMessage(message) {},
  },
  computed: {
    messages() {
      return this.$store.getters.messages;
    },
    users() {
      return this.$store.getters.users;
    },
    usersNum() {
      const users = this.users;

      return users.map((user) => {
        return { name: user, num: users.indexOf(user) + 1 };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 1em;
}

.chat-article {
  width: 100%;

  display: flex;
}

.messages {
  width: 70%;

  background-color: $color2;

  padding: 1em;

  border-radius: 4px;
}

.users {
  width: 30%;
  height: 100%;

  background-color: $color2;

  margin-left: 1em;
  padding: 1em;

  border-radius: 4px;

  &__list {
    margin-top: 1em;
    padding: 0.4em;

    font-size: 15px;

    border-radius: 4px;

    background-color: $color1;
  }

  &__item {
    color: $color4;

    font-weight: bold;

    margin-top: 0.5em;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
}
</style>
