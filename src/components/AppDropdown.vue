<script setup>
import { dropDown } from "../store/dropDownState.js";
</script>
<template>
  <div class="z-index" v-if="dropDown.isOpen">
    <div class="dropdown">
      <p class="dropdown__text">{{ dropDown.text }}</p>
      <button @click="dropDown.close()" class="dropdown__close-button">
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  mounted() {
    console.log("dropdown");
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
.z-index {
  z-index: 1000;
  position: fixed;
  width: 100%;
  left: 0;
}
.dropdown {
  z-index: 1000;
  position: absolute;
  left: 50%;
  top: 1.4rem;
  border: 1.5px solid lighten($black, 45%);
  width: max-content;
  background-color: $black;
  padding: 0.6rem 0.6rem 0.6rem 1.8rem;
  transform: translateX(-50%);
  color: $white;
  display: flex;
  align-items: center;
  gap: 4rem;
  border-radius: $border-radius-small;
  transition: transform 1s ease;

  &__close-button {
    cursor: pointer;
    padding: 0.6rem 1.6rem;
    margin: 0.2rem 0;
    background-color: transparent;
    color: darken($grey, 20%);
    border-radius: 0.4rem;
    letter-spacing: 0.5px;
    font-weight: 500;

    &:hover {
      background-color: darken($grey, $amount: 72%);
    }
  }
}
</style>
