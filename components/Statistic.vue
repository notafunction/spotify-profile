<template>
  <div class="inline-flex flex-col items-center">
    <h2 class="text-xl text-center text-gray-400">{{ name }}</h2>
    <slot>
      <span class="text-spotify text-2xl">
        {{ value }}
      </span>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    value: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
