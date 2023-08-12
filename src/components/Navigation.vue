<template>
  <header>
    <a href="#">
      <img
        src="../assets/styles/media/Logo.png"
        alt="Logo depicting letters F and S in a geometric pattern"
      />
    </a>

    <button @click="$emit('openContact')">Get In Touch</button>
  </header>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/queries" as *;
@use "../assets/styles/abstracts" as *;

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.6rem;
  position: absolute;
  width: 100%;

  @include media("<=570px") {
    padding: 3.6rem 2rem;
  }

  button {
    color: $white;
    outline: none;
    text-decoration: underline;
    background-color: transparent;

    &:hover {
      text-decoration: none;
    }
  }
}
img {
  width: 5.4rem;
  aspect-ratio: 1;
}
</style>
