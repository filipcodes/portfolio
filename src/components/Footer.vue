<template>
  <footer>
    <p>
      If interested in hiring me, or just want to chat, don't be afraid to get
      in touch.
    </p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
@use "../assets/styles/queries" as *;

footer {
  height: 35rem;
  @include center-content;
  text-align: center;
  @include media("<=1050px") {
    p {
      max-width: 80%;
    }
  }
}
</style>
