<script setup>
// Imports
import IntroSection from "./components/Intro.vue";
import Grid from "./components/Grid.vue";
</script>

<template>
  <header></header>
  <main>
    <IntroSection></IntroSection>
    <Grid></Grid>
  </main>
  <footer></footer>
</template>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/abstracts";

// General Styles

body {
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: $white;

  background-color: $color-body;
}

a {
  &:link,
  &:visited {
    color: inherit;

    @include pseudo {
      top: 66%;
      right: -0.1em;
      bottom: 0;
      left: -0.1em;

      z-index: -1;

      background-color: rgba($orange, 0.7);

      transition: top $animation--time-short cubic-bezier(0, 0.8, 0.13, 1);
    }
  }

  &:hover {
    &::before {
      top: 0;
    }
  }
}

button {
  border: none;
}

// Reusable classes
</style>
