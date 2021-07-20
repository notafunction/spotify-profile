<template>
  <component
    :is="as"
    class="
      border border-solid border-opacity-50
      rounded-md
      inline-block
      px-2
      py-1
      text-sm
    "
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'li',
    },
  },
}
</script>
