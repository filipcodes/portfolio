<script setup>
// Imports
import Navigation from "./components/Navigation.vue";
import IntroSection from "./components/Intro.vue";
import Grid from "./components/Grid.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (!is_touch_enabled()) {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower({
    speed: 0.4,
  });
}
</script>

<template>
  <Navigation></Navigation>
  <main>
    <IntroSection></IntroSection>
    <!-- <MouseFollower></MouseFollower> -->
    <Grid></Grid>
    <Contact></Contact>
  </main>
  <div class="logo-wrapper1">
    <div class="logo-wrapper2">
      <div class="logo">
        <div class="cutter1">
          <div class="cutter1-1"></div>
          <div class="cutter1-2">
            <div class="cutter1-2-1">
              <div class="cutter1-2-1-1"></div>
              <div class="cutter1-2-1-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/abstracts";
@import "mouse-follower/src/scss/index.scss";
// General Styles

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
</style>
