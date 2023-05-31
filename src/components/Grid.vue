<template>
  <section>
    <div class="container">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Grid",
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;

.container {
  @include container(150rem);
  @include grid(3, $gap: 4.8rem);
}
</style>
