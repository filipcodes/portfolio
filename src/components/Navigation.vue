<template>
  <header>
    <img
      src="../assets/styles/media/FS Logo.png"
      alt="Logo depicting letters F and S in a geometric pattern"
    />

    <a href="#"> Get In Touch</a>
  </header>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/queries" as *;

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

  a {
    &:link,
    &:visited {
      outline: none;
      text-decoration: underline;
    }
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
