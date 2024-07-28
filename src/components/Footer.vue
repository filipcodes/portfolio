<template>
  <footer>
    <div class="getintouch">
      <p class="">
        {{ $t("footer") }}
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;
@use "@/assets/styles/queries" as *;

footer {
  .getintouch {
    height: 32rem;
    @include center-content;
    text-align: center;
  }

  @include media("<=1050px") {
    p {
      max-width: 80%;
    }
  }
}
</style>
