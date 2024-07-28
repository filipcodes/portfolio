<script setup>
// import TheSwitchLanguageButton from "@/components/TheSwitchLanguageButton.vue";
</script>
<template>
  <header>
    <a href="#">
      <img src="@/assets/media/Logo.png" alt="Filip Sipos Logo" />
    </a>
    <div class="ctas">
      <AppButtonLink class="px-6" type="primary" @click="$emit('openContact')">
        {{ $t("navigation.contactMeButton") }}
      </AppButtonLink>
      <TheSwitchLanguageButton></TheSwitchLanguageButton>
    </div>
  </header>
</template>
<script>
import AppButtonLink from "@/components/AppButtonLink.vue";
import TheSwitchLanguageButton from "@/components/TheSwitchLanguageButton.vue";

export default {
  name: "Navigation",
  components: {
    TheSwitchLanguageButton,
    AppButtonLink,
  },
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
    // padding: 0.8rem 1.8rem;
    border-radius: $border-radius-small;
    font-weight: 600;
    letter-spacing: 0.5px;

    &:hover {
      // background-color: rgba(darken($grey, 40%), 0.8);
      transform: translateY(-0.2rem);
    }
  }
}
img {
  width: 5.4rem;
  aspect-ratio: 1;
}
</style>
