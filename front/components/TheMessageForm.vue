<template>
  <form>
    <input
      v-model="form.message"
      class="input"
      type="text"
      placeholder="Your message"
    />
    <button class="button">Send</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      message: "",
    },
  }),
};
</script>
