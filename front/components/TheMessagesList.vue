<template>
  <div class="messages__list">
    <ChatMessage
      v-for="message of messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script>
export default {
  props: {
    messages: Array,
  },
};
</script>

<style lang="scss" scoped>
.messages__list {
  min-height: 400px;
  max-height: 400px;

  overflow-y: scroll;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: $color1;

  margin-top: 1em;

  border-radius: 4px;
}
</style>
