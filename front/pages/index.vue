<template>
  <main class="index">
    <section class="login">
      <h1>Login</h1>
      <TheLoginForm />
    </section>
  </main>
</template>

<script>
export default {
  layout: "login",
  mounted() {},
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
</style>
