<template>
  <form @submit.prevent="submit">
    <input
      v-model.trim="form.name"
      class="input"
      type="text"
      placeholder="Login"
    />
    <input
      v-model.trim="form.roomName"
      class="input"
      type="text"
      placeholder="Room name"
    />
    <button class="button" type="submit">Go</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      roomName: "",
    },
  }),
  methods: {
    submit() {
      this.$emit("login", { ...this.form });

      this.form.name = "";
      this.form.roomName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button {
  align-self: flex-end;
}
</style>
