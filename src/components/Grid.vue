<template>
  <section>
    <div class="container">
      <Project
        v-for="x in 3"
        :key="index"
        v-if="!projects[1]"
        :loader="true"
      ></Project>
      <Project
        v-for="project in projects"
        :project-name="project.name"
        :project-technologies="project.technologies"
        :project-link="project.link"
        :project-git="project.github"
        :project-image="project.imageUrl"
      >
      </Project>
    </div>
  </section>
</template>
<script>
import Project from "./Project.vue";
import sanity from "../client";

const query = `
*[_type == 'project']{_id, name, "imageUrl": image.asset->url, github, link, technologies}
`;
export default {
  name: "Grid",
  data() {
    return {
      loading: true,
      projects: [],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query).then(
        (projects) => {
          setTimeout(() => {
            this.loading = false;
            this.projects = projects;
          }, 4000);
        },
        (error) => {
          this.error = error;
        }
      );
    },
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
