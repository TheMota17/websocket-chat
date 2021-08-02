<template>
  <main class="index">
    <section class="login">
      <h1>Login</h1>
      <TheLoginForm @login="login" />
    </section>
  </main>
</template>

<script>
export default {
  layout: "login",
  methods: {
    login(form) {
      this.$socket.emit("joinToRoom", form, (data) => {
        if (typeof data === "string") {
          console.log(data);
        } else {
          this.$store.commit("setUser", data);

          this.$router.push("/chat");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  padding: 1em 2em;

  border-radius: 4px;

  background-color: $color2;
}
</style>
