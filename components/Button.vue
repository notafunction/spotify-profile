<template>
  <button v-on="$listeners" class="px-6 py-3 text-white rounded-full border-2 border-white">
      <slot />
  </button>
</template>

<script>
export default {

}
</script>