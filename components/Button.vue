<template>
  <component
    :is="as"
    :to="$attrs.to || null"
    class="px-6 py-3 text-white rounded-full border-2 border-white"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  computed: {
    as() {
      if (this.$attrs.to) return 'nuxt-link'

      return 'button'
    },
  },
}
</script>
