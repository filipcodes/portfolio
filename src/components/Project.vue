<template>
  <figure class="project">
    <div class="project__image__wrapper">
      <img
        class="project__image"
        src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?w=2000"
        alt="image of the project"
      />
    </div>
    <div class="project__info">
      <figcaption class="project__name">{{ projectName }}</figcaption>
      <!-- <a class="project__github__link" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #fff"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          ></path>
        </svg>
      </a> -->
      <div class="project__technologies">
        <span
          class="project__technology"
          v-for="technologyName in projectTechnologies"
        >
          {{ technologyName }}
        </span>
      </div>
    </div>
  </figure>
</template>
<script>
export default {
  name: "Project",
  props: {
    projectName: String,
    projectTechnologies: Array,
    projectImageLink: String,
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
.project {
  // background-color: $color-project-background;
  background: rgba(255, 255, 255, 0.15);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  // border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: $border-radius-small;
  aspect-ratio: 1.1;

  &:hover {
    .project__image {
      transform: translateY(-1.5rem);

      box-shadow: 0 1.2rem 3.6rem rgba(0, 0, 0, 0.5);
      will-change: transform;
    }
  }

  &__image__wrapper {
    height: 100%;
    @include center-content;
  }

  &__image {
    max-width: 70%;
    aspect-ratio: 16/9;
    border-radius: $border-radius-small;

    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);

    transition: all $animation--time-short ease-out;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__name {
  }

  &__technology {
    color: rgba($color-text, 0.5);
    text-transform: uppercase;
    font-size: 1.4rem;
    &:not(:last-child) {
      padding-right: 0.6rem;
      border-right: 1px solid rgba($color-text, 0.5);
    }

    &:not(:first-child) {
      padding-left: 0.6rem;
    }
  }

  &__github__link {
    &:link,
    &:visited {
      display: inline-block;
    }
  }
}
</style>
