<template>
  <section>
    <div class="container">
      <p>
        My name is Filip, and I am a Front-end developer currently living in
        Slovakia. I am passionate about creating smooth, engaging and appealing
        digital experiences.
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

section {
  height: 50rem;
  @include center-content;
  .container {
    @include container(80rem);

    p {
      font-size: 2rem;
      text-align: center;
    }
  }
}
</style>
