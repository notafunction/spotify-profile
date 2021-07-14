<template>
  <button @click="$emit('toggle')">
    <SlideXLeftTransition>
      <svg-icon v-if="isOpen" key="close" name="menu-close" />
      <svg-icon v-else key="open" name="menu-open" />
    </SlideXLeftTransition>
  </button>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'

export default {
  components: {
    SlideXLeftTransition,
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  @apply h-6 w-6 m-3;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>