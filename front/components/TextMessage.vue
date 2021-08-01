<template>
  <div class="messages__text-message">
    <h3 class="messages__name">{{ userName }}</h3>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.messages__text-message {
  width: 90%;

  margin-top: 1em;
  padding: 0.6em;

  font-size: 15px;

  border-radius: 4px;

  background-color: $color2;

  span {
    display: inline-block;

    margin-top: 0.5em;
  }
}
</style>
