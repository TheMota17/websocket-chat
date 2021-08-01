<template>
  <div class="messages__left-message">
    <span>
      <span class="messages__name">{{ userName }}</span>
      came out of the chat
    </span>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
  },
};
</script>

<style lang="scss" scoped>
.messages__left-message {
  width: 90%;

  margin-top: 1em;
  padding: 0.6em;

  font-size: 15px;
  text-align: center;

  border-radius: 4px;

  background-color: $color2;
}
</style>
