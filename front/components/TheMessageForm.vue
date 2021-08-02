<template>
  <form @submit.prevent="submit">
    <input
      v-model.trim="form.message"
      class="input"
      type="text"
      placeholder="Your message"
    />
    <button class="button" type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      message: "",
    },
  }),
  methods: {
    submit() {
      this.$emit("send-message", this.form.message);

      this.form.message = "";
    },
  },
};
</script>
