<template>
  <section>
    <div class="container">
      <Project
        v-for="x in 6"
        project-name="Zidan"
        :project-technologies="['HTML', 'CSS', 'JS']"
      ></Project>
    </div>
  </section>
</template>
<script>
import Project from "./Project.vue";

export default {
  name: "Grid",
  created() {
    //TODO: STRAPI API CALL
  },
  components: { Project },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
@use "../assets/styles/queries" as *;

.container {
  @include container(100%);
  @include grid(3, $gap: 3.2rem);

  @include media("<=1300px") {
    grid-template-columns: 1fr 1fr;
  }
  @include media("<=768px") {
    grid-template-columns: 1fr;
  }
  @include media("<=560px") {
    grid-template-columns: 1fr;
    padding: 0 1.2rem;
    gap: 1.2rem;
  }
}
</style>
