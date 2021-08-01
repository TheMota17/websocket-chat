<template>
  <main>
    <div class="wrapper">
      <article class="chat-article">
        <section class="messages">
          <h1 class="messages__title">
            Messages
          </h1>
          <div class="messages__list">
            <div class="messages__message"></div>
            <div class="messages__message"></div>
            <div class="messages__message"></div>
            <div class="messages__message"></div>
          </div>
          <TheMessageForm />
        </section>
        <aside class="users">
          <h1 class="users__title">Room: Hello World!</h1>
          <ul class="users__list">
            <li class="users__item">1. Jack</li>
            <li class="users__item">2. Lena</li>
            <li class="users__item">3. Alex</li>
          </ul>
        </aside>
      </article>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  margin-top: 1em;
}

.chat-article {
  width: 100%;

  display: flex;
}

.messages {
  width: 70%;

  background-color: $color2;

  padding: 1em;

  border-radius: 4px;

  &__list {
    min-height: 400px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: $color1;

    margin-top: 1em;

    border-radius: 4px;
  }

  &__message {
    width: 90%;
    min-height: 50px;

    margin-top: 1em;

    border-radius: 4px;

    background-color: $color2;
  }
}

.users {
  width: 30%;
  height: 100%;

  background-color: $color2;

  margin-left: 1em;
  padding: 1em;

  border-radius: 4px;

  &__list {
    margin-top: 1em;

    font-size: 15px;
  }

  &__item {
    color: $color4;

    font-weight: bold;

    margin-top: 0.5em;
  }
}
</style>
