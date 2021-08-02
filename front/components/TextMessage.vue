<template>
  <div class="text-message" :class="{ 'text-message_you': user.id === userId }">
    <h3 class="text-message__name">{{ userName }}</h3>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    userId: String,
    userName: String,
    text: String,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-message {
  width: 50%;

  margin-top: 1em;
  margin-left: 1em;
  padding: 0.6em;

  font-size: 15px;

  border-radius: 4px;

  background-color: $color2;

  align-self: flex-start;

  &__name {
    color: $color5;
  }

  &_you {
    margin-left: 0;
    margin-right: 1em;

    align-self: flex-end;
  }

  span {
    display: inline-block;

    margin-top: 0.5em;
  }
}

.text-message_you {
  align-self: flex-end;
}
</style>
