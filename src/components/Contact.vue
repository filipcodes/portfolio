<template>
  <a class="contact hidden" href="#">Get In Touch</a>
</template>
<script>
export default {
  name: "Contact",
  created() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 800) {
        document.querySelector(".contact").classList.remove("hidden");
      } else {
        document.querySelector(".contact").classList.add("hidden");
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;

.contact {
  &:link,
  &:visited {
    background-color: $color-get-in-touch-background;
    border: 1px solid $white;

    position: fixed;
    bottom: 6.4rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1.2rem 2.4rem;
    border-radius: $border-radius-small;
    z-index: 100;

    transition: all $animation--time-medium;
  }

  &:hover {
    background-color: $orange;
    color: $color-get-in-touch-background;
    border-color: $orange;
  }
}

.hidden {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
</style>
