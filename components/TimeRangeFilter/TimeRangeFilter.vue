<template>
  <div class="flex flex-wrap items-center -mx-2 md:mx-0">
    <button
      v-for="range in ranges"
      :key="range.value"
      class="p-2 flex-shrink-0"
      :class="{
        active: range.value === currentRange,
      }"
      @click="$emit('change-range', range.value)"
    >
      <span class="border-b border-transparent hover:border-white">{{
        range.label
      }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    ranges: {
      type: Array,
      default: () => [
        { label: 'All Time', value: 'long_term' },
        { label: 'Last 6 Months', value: 'medium_term' },
        { label: 'Last 4 Weeks', value: 'short_term' },
      ],
    },

    currentRange: {
      type: String,
      default: 'long_term',
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  span {
    @apply border-white;
  }
}
</style>
