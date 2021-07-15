<template>
  <button @click="$emit('toggle')" class="absolute top-6 right-6 z-10 h-6 w-6 m-3">
    <SlideXLeftTransition>
      <svg-icon class="absolute top-0 left-0 w-full h-full" v-if="isOpen" key="close" name="menu-close" />
      <svg-icon class="absolute top-0 left-0 w-full h-full" v-else key="open" name="menu-open" />
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