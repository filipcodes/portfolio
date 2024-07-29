<template>
  <transition name="appear">
    <div
      v-if="shown"
      class="fixed flex h-20 items-center gap-6 left-1/2 bottom-24 -translate-x-1/2"
    >
      <ContactButton></ContactButton>
      <AppButtonLink
        tag="a"
        title="Download my CV!"
        to="https://drive.google.com/file/d/1Y-ocbYYtVhBng5nn9PeNKBdm1SJwXffo/view?usp=drive_link"
        class="text-[1.8rem] aspect-square h-full"
        target="_blank"
        type="bottomMenu"
        >CV</AppButtonLink
      >
    </div>
  </transition>
</template>

<script>
import AppButtonLink from "@/components/AppButtonLink.vue";
import ContactButton from "@/components/ContactButton.vue";
export default {
  name: "BottomMenu",
  data() {
    return {
      shown: false,
    };
  },

  components: {
    AppButtonLink,
    ContactButton,
  },

  created() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 200) {
        this.shown = true;
      } else {
        this.shown = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.5s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
