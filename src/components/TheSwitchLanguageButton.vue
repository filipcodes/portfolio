<template>
  <AppButtonLink @click="changeLanguage" class="uppercase p-4 aspect-square">
    <span class="w-10">{{ i18n.global.locale }}</span>
  </AppButtonLink>
</template>

<script>
import i18n from "@/main.js";
import AppButtonLink from "@/components/AppButtonLink.vue";
export default {
  setup() {
    return { i18n };
  },

  components: {
    AppButtonLink,
  },

  methods: {
    changeLanguage() {
      i18n.global.locale === "en"
        ? (i18n.global.locale = "sk")
        : (i18n.global.locale = "en");
    },
  },
};
</script>

<style lang="scss" scoped></style>
