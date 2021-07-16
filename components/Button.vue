<template>
  <button
    class="px-6 py-3 text-white rounded-full border-2 border-white"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {}
</script>
