<template>
  <button v-on="$listeners">
      <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button, a {
  @apply px-6 py-3 text-white rounded-full border-2 border-white;
}
</style>