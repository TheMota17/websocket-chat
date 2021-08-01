<template>
  <div class="join-message">
    <span class="join-message__name">{{ userName }}</span>
    <span>joined the chat</span>
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
.join-message {
  width: 90%;

  margin-top: 1em;
  padding: 0.6em;

  font-size: 15px;
  text-align: center;

  border-radius: 4px;

  box-shadow: inset 0px 0px 4px $color2;

  &__name {
    color: $color5;
  }
}
</style>
