<template>
  <section class="w-full">
    <header class="flex justify-between flex-col md:flex-row">
      <h1
        class="
          whitespace-nowrap
          overflow-ellipsis
          mr-2
          flex-grow
          text-xl
          font-bold
        "
      >
        {{ title }}
      </h1>
      <slot name="action" />
    </header>
    <transition-group
      name="t-fade-abs"
      tag="ul"
      class="mt-16"
      :class="{ grid }"
    >
      <slot />
    </transition-group>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    grid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
