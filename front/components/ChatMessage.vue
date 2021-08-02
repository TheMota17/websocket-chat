<template>
  <component
    :userId="message.userId"
    :userName="message.userName"
    :text="message.text"
    :is="componentName"
  ></component>
</template>

<script>
export default {
  props: {
    message: Object,
  },
  computed: {
    componentName() {
      if (this.message.userLeft) {
        return "LeftMessage";
      } else if (this.message.userJoin) {
        return "JoinMessage";
      } else {
        return "TextMessage";
      }
    },
  },
};
</script>
