<template>
  <section>
    <div class="container">
      <p>
        My name is Filip, and I am a Front-end developer based in Slovakia. I am
        passionate about creating smooth, engaging, and appealing digital
        experiences.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "IntroSection",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
@use "../assets/styles/queries" as *;

section {
  height: 50rem;
  @include center-content;
  .container {
    @include container(80rem);
    @include center-content;

    p {
      font-size: 2rem;
      text-align: center;
    }
    @include media("<=560px") {
      padding: 0 1.2rem;
      p {
        font-size: 1.6rem;
        max-width: 80%;
      }
    }
    @include media("<=515px") {
      padding: 0 1.1rem;

      p {
        max-width: 100%;
      }
    }
  }
}
</style>
