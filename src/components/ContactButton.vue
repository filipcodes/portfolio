<template>
  <button class="contact hidden" @click="$emit('openContact')" href="#">
    Get In Touch
  </button>
</template>
<script>
export default {
  name: "Contact",
  created() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 100) {
        document.querySelector(".contact").classList.remove("hidden");
      } else {
        document.querySelector(".contact").classList.add("hidden");
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.contact {
  background-color: $color-get-in-touch-background;
  border: 1px solid $white;
  color: white;
  position: fixed;
  bottom: 6.4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2rem 2.4rem;
  border-radius: $border-radius-small;
  z-index: 10;

  transition: all $animation--time-medium;

  &:hover {
    background-color: $orange;
    color: $color-get-in-touch-background;
    border-color: $orange;
  }

  &:active {
    background-color: #e64425;
    outline: none;
  }
}

.hidden {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
</style>
