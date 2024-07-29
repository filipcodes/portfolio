<template>
  <component
    :is="tag"
    :to="to"
    :class="[
      'relative flex items-center justify-center font-semibold tracking-wider outline-none cursor-pointer transition duration-300 ease rounded-lg',
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

  props: {
    tag: {
      type: String,
      default: "button",
      validator: (value) => ["button", "a", "RouterLink"].includes(value),
    },

    to: {
      type: [String, Object],
      default: null,
    },

    type: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["primary", "bottomMenu", "tertiary"].includes(value),
    },
  },
  computed: {
    typeClasses() {
      switch (this.type) {
        case "primary":
          return "text-zinc-100 fill-zinc-100 bg-transparent hover:backdrop-blur-sm hover:bg-zinc-700/50 hover:-translate-y-1";
        case "bottomMenu":
          return "text-white bg-[#09090b] z-10 tracking-wide transition border-[1.5px] border-white duration-300 hover:text-[#09090b] hover:border-[#ff4c29] hover:bg-[#ff4c29] active:bg-[#e64425]";
      }
    },

    href() {
      return this.tag === "a" ? this.to : null;
    },
  },
};
</script>
