<template>
  <section>
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        ducimus cupiditate perspiciatis optio officiis dolor modi, nobis
        deleniti quod at natus esse doloribus nesciunt odit quam architecto ut,
        voluptatibus earum!
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
