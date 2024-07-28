<script setup>
// Imports
import Navigation from "@/components/Navigation.vue";
import IntroSection from "@/components/Intro.vue";
import Grid from "@/components/Grid.vue";
import Footer from "@/components/Footer.vue";
import ContactButton from "@/components/ContactButton.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import AppDropdown from "@/components/AppDropdown.vue";

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
  <div class="containerApp">
    <Navigation @openContact="overlay++"></Navigation>
    <main>
      <div class="">
        <div>
          <Transition class="z-index" name="drop">
            <AppDropdown></AppDropdown>
          </Transition>
        </div>
        <div class="">
          <Transition name="fade">
            <GetInTouch @closeOverlay="overlay--" v-if="overlay"></GetInTouch>
          </Transition>
        </div>
      </div>

      <IntroSection></IntroSection>
      <!-- <MouseFollower></MouseFollower> -->
      <Grid></Grid>
      <ContactButton @openContact="overlay++"></ContactButton>
    </main>

    <Footer></Footer>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      overlay: 0,
    };
  },
  components: {
    Navigation,
    IntroSection,
    Grid,
    Footer,
    ContactButton,
    GetInTouch,
    AppDropdown,
  },
};
</script>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/abstracts";
@import "mouse-follower/src/scss/index.scss";
// General Styles

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-enter-active {
  transition: all 0.3s ease-out;
}

.drop-leave-active {
  transition: all 0.65s ease;
}

.drop-enter-from,
.drop-leave-to {
  z-index: 1000;
  transform: translateY(-80px);
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

.containerApp {
  position: relative;
  width: 100%;
  min-height: 13rem;
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
