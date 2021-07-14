<template>
  <section class="container">
    <header>
      <h1>{{ title }}</h1>
      <slot name="action" />
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main {
    @apply mt-16;
  }
}
</style>