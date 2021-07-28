<template>
  <section class="w-full">
    <header
      class="
        flex flex-wrap
        justify-between
        flex-col
        md:flex-row md:items-center
      "
    >
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
      class="w-full"
      :class="{
        grid,
        'mt-8 md:mt-16': !small,
        'mt-4 md:mt-8': small,
      }"
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

    small: {
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
