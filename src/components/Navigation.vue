<template>
  <header>
    <a href="#">
      <img src="@/assets/media/Logo.png" alt="Filip Sipos Logo" />
    </a>
    <div class="ctas">
      <button @click="$emit('openContact')">Get in touch</button>
    </div>
  </header>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/queries" as *;
@use "@/assets/styles/abstracts" as *;
.ctas {
  display: flex;
  gap: 2.4rem;

  a {
    &:visited,
    &:link {
      color: $white;
      outline: none;
      text-decoration: underline;
      background-color: transparent;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
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
    // text-decoration: underline;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0.8rem 1.8rem;
    border-radius: $border-radius-small;
    font-weight: 600;
    letter-spacing: 0.5px;

    &:hover {
      background-color: rgba(darken($grey, 40%), 0.8);
      backdrop-filter: blur(3px);
      transform: translateY(-0.2rem);
    }
  }
}
img {
  width: 5.4rem;
  aspect-ratio: 1;
}
</style>
