<script setup>
// Imports
import Navigation from "./components/Navigation.vue";
import IntroSection from "./components/Intro.vue";
import Grid from "./components/Grid.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import GetInTouch from "./components/GetInTouch.vue";

// Mouse follower
import MouseFollower from "mouse-follower";
import gsap from "gsap";

// email sender

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
  speed: 0.4,
});
</script>

<template>
  <Transition>
    <GetInTouch @closeOverlay="overlay--" v-if="overlay"></GetInTouch>
  </Transition>
  <Navigation @openContact="overlay++"></Navigation>
  <main>
    <IntroSection></IntroSection>
    <!-- <MouseFollower></MouseFollower> -->
    <Grid></Grid>
    <Contact @openContact="overlay++"></Contact>
  </main>

  <Footer></Footer>
</template>
<script>
export default {
  data() {
    return {
      overlay: 0,
    };
  },
};
</script>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/abstracts";
@import "mouse-follower/src/scss/index.scss";
// General Styles

.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: $color-text;

  background-color: $color-body;

  ::selection {
    background-color: $orange;
  }
}

button {
  border: none;
}

// Reusable classes

// Mouse Follower
.mf-cursor {
  color: $orange;
  // font-size: 4.8rem;
  z-index: -1;

  &::before {
    top: -5rem;
    left: -5rem;
    height: 10rem;
    width: 10rem;
  }
}

// Hide the cursor if hover is not supported
@media not (hover: hover) {
  .mf-cursor {
    color: transparent;
  }
}
</style>
