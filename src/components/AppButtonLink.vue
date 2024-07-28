<template>
  <component
    :is="tag"
    :to="to"
    :class="[
      'relative tracking-wider block outline-none cursor-pointer transition duration-200 ease-out rounded-md',
      typeClasses,
    ]"
    :href="href"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "AppButtonLink",
};
</script>
