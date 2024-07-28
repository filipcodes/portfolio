<template>
  <figure class="project">
    <div v-if="loader" class="slice"></div>
    <div class="project__image__wrapper">
      <img
        v-if="!loader"
        class="project__image"
        :src="loader ? '' : projectImage + '?h=350'"
        alt="image of the project"
      />

      <div class="project__links" v-if="!loader">
        <a
          v-if="projectGit"
          class="project__link"
          :href="projectGit"
          target="_blank"
        >
          <svg
            class="project-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </a>

        <!-- ! SECOND LINK -->

        <a :href="projectLink" target="_blank" class="project__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 project-svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="project__info">
      <figcaption class="project__name">{{ projectName }}</figcaption>

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
    loader: Boolean,
    projectImage: String,
    projectName: String,
    projectGit: String,
    projectLink: String,
    projectTechnologies: Array,
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

@keyframes reflect {
  0% {
    left: -60rem;
    // opacity: 0;
  }

  45% {
    left: 110%;
    // opacity: 0;
  }
  100% {
    left: 110%;
  }
}

.slice {
  display: block;
  width: 40px;
  opacity: 70%;
  height: 180%;
  position: absolute;
  top: 20%;

  left: -32rem;
  background-color: #9d9c9c;
  // opacity: 0;
  transform: rotate(45deg) translate(0, -50%);
  animation: reflect 2.5s ease-in-out infinite;
  filter: blur(10px);
}

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
  overflow: hidden;

  &:hover {
    .project__image {
      transform: translateY(-1.8rem);

      box-shadow: 0 1.2rem 3.6rem rgba(0, 0, 0, 0.5);
      will-change: transform;
    }

    .project__links {
      opacity: 1;
    }
  }

  &__image__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-width: 70%;
    aspect-ratio: 16/9;
    border-radius: $border-radius-small;

    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);

    transition: all 0.3s ease-out;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

  &__links {
    opacity: 0;
    width: 100%;

    a:link,
    a:visited {
      color: white;
      fill: white;
      transition: all 0.2s ease;
    }

    a:hover {
      color: $orange;
      fill: $orange;
    }

    padding-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    transition: all 0.3s;

    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
}
</style>
