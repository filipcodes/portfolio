<template>
  <AppButtonLink
    href="#"
    @click="$emit('contact-button-clicked')"
    type="bottomMenu"
    class="px-6 h-full"
  >
    {{ $t("navigation.contactMeButton") }}
  </AppButtonLink>
</template>
<script>
import AppButtonLink from "@/components/AppButtonLink.vue";
export default {
  name: "Contact",
  components: {
    AppButtonLink,
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
@use "@/assets/styles/abstracts" as *;
</style>
